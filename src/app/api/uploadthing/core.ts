import { verifySession } from "@/actions/auth";
import { db } from "@vercel/postgres";
import { revalidateTag } from "next/cache";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileCount: 10,
      maxFileSize: "8MB",
    },
  })
    .middleware(async ({}) => {
      const session = await verifySession();

      if (!session.userId) throw new UploadThingError("Unauthorized");

      return { userId: session.userId };
    })
    .onUploadComplete(async ({ file }) => {
      try {
        await db.query(`INSERT INTO images (url) VALUES ($1)`, [file.ufsUrl]);

        revalidateTag("gallery");
      } catch (error) {
        console.error(
          `Failed to insert image(s) into the database: ${
            error instanceof Error ? error.message : String(error)
          }`,
          { stack: error instanceof Error ? error.stack : "No stack trace available" }
        );

        throw new UploadThingError("Failed to insert image(s) into the database");
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
