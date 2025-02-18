import { Toaster } from "@/components/ui/sonner";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <main className="min-h-screen py-12 md:py-24 px-4 md:px-20 bg-neutral-50 flex justify-center">
          {children}
          <Toaster richColors />
        </main>
      </body>
    </html>
  );
}
