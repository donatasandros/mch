"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-neutral-900 group-[.toaster]:border group-[.toaster]:border-neutral-300 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-neutral-600",
          actionButton: "group-[.toast]:bg-tangelo-600 group-[.toast]:text-white",
          cancelButton: "group-[.toast]:bg-neutral-50 group-[.toast]:text-neutral-700",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
