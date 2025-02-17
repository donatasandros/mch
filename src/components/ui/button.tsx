import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/tw-utils";
import { Loader2Icon } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold disabled:pointer-events-none disabled:opacity-60 focus-visible:outline-none focus-visible:ring-offset-white focus-visible:ring-offset-2 focus-visible:ring-tangelo-500 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 [&_svg]:shrink-0 focus-visible:ring-2",
  {
    variants: {
      variant: {
        primary: "bg-tangelo-600 hover:bg-tangelo-700 text-white",
        tertiary: "bg-transparent hover:bg-neutral-50 text-neutral-600 hover:text-neutral-700",
      },
      size: {
        sm: "py-1.5 px-4 gap-1.5 h-9",
        md: "py-2.5 px-4 gap-1.5 h-10",
        lg: "py-3 px-4 gap-2 h-11",
        icon_md: "size-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, isLoading, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {isLoading ? <Loader2Icon className="animate-spin" /> : null}
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
