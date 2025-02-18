import { Toaster } from "@/components/ui/sonner";
import { connection } from "next/server";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { Suspense } from "react";
import { Metadata } from "next";

const title = "Svetainės valdymas";

export const metadata: Metadata = {
  title,
};

async function UTSSR() {
  await connection();
  return <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />;
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen py-12 md:py-24 px-4 md:px-20 bg-neutral-50 flex justify-center">
      {children}
      <Toaster richColors />
      <Suspense>
        <UTSSR />
      </Suspense>
    </main>
  );
}
