import { navLinks } from "@/config/nav-links";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 w-full px-4 py-8 sm:px-6 md:mt-20 md:px-8">
      <div className="mx-auto flex max-w-container flex-col-reverse justify-between md:flex-row">
        <p className="text-neutral-500">© 2025 Miami Car House</p>
        <ul className="mb-4 flex space-x-4 md:mb-0 *:text-neutral-600 *:font-semibold *:hover:text-neutral-700">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
