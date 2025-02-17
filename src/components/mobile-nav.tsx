"use client";

import * as React from "react";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Button, buttonVariants } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { navLinks } from "@/config/nav-links";
import { cn } from "@/lib/tw-utils";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  const onOpenChange = React.useCallback((open: boolean) => {
    setOpen(open);
  }, []);

  return (
    <nav className="fixed z-10 w-full border-b border-b-neutral-200 bg-white/80 md:hidden px-4 py-3 backdrop-blur-lg">
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
        <Drawer open={open} onOpenChange={onOpenChange}>
          <DrawerTrigger asChild>
            <Button variant="tertiary" size="icon_md">
              <MenuIcon />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerTitle className="sr-only">Navigacijos meniu</DrawerTitle>
            <div className="flex flex-col gap-4 p-6">
              <ul className="space-y-0.5 *:text-neutral-900 *:font-semibold *:py-3">
                {navLinks.map(({ href, label, isButton }) => (
                  <li key={href}>
                    <MobileLink
                      href={href}
                      onOpenChange={onOpenChange}
                      className={cn(
                        isButton &&
                          buttonVariants({
                            variant: "primary",
                            class: "w-full",
                          })
                      )}
                    >
                      {label}
                    </MobileLink>
                  </li>
                ))}
              </ul>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({ href, onOpenChange, children, ...props }: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => {
        onOpenChange(false);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
