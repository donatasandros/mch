import * as React from "react";

import { cn } from "@/lib/tw-utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "aria-[invalid=true]:border-red-300 aria-[invalid=true]:focus-visible:border-red-300 aria-[invalid=true]:focus-visible:ring-red-500 flex h-10 w-full rounded-lg border border-neutral-300 text-neutral-900 focus-visible:border-tangelo-300 bg-white px-3.5 py-2.5 text-base shadow-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tangelo-500",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
