"use server";

import { db } from "@vercel/postgres";

interface Image {
  id: string;
  url: string;
  created_at: string;
}

export async function getImages() {
  try {
    const { rows } = await db.query<Image>("SELECT * FROM images");

    return rows;
  } catch (error) {
    console.error(
      `Failed to fetch images from the database: ${
        error instanceof Error ? error.message : String(error)
      }`,
      { stack: error instanceof Error ? error.stack : "No stack trace available" }
    );

    return [];
  }
}
