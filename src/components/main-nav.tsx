import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { navLinks } from "@/config/nav-links";
import { cn } from "@/lib/tw-utils";

export function MainNav() {
  return (
    <nav className="fixed z-10 w-full bg-white/80 hidden md:block md:py-3 backdrop-blur-lg md:px-8 lg:py-4">
      <div className="mx-auto flex w-full max-w-container items-center justify-between">
        <Link href="/">
          <Image
            priority
            src="/logo.webp"
            width={102}
            height={40}
            alt="Miami Car House logotipas"
          />
        </Link>
        <ul className="hidden gap-6 font-semibold *:hover:text-neutral-700 text-neutral-600 md:flex md:items-center">
          {navLinks.map(({ href, label, isButton }) => (
            <li key={href}>
              <Link href={href} className={cn(isButton && buttonVariants({ variant: "primary" }))}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
