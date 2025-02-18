import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { Footer } from "@/components/footer";

export default function ConsumerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <MainNav />
        <MobileNav />
      </header>
      <main className="flex-1 pt-[65px] lg:pt-[73px]">{children}</main>
      <Footer />
    </>
  );
}
