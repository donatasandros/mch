import { cn } from "@/lib/tw-utils";

function PageSection({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={cn("px-4 py-16 sm:px-6 md:px-8 md:py-20", className)} {...props}>
      <div className="mx-auto max-w-container">{children}</div>
    </section>
  );
}

function PageSectionHeading({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "mb-4 text-3xl font-semibold text-neutral-900 text-center md:text-4xl md:mb-5",
        className
      )}
      {...props}
    />
  );
}

function PageSectionDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "mx-auto mb-12 max-w-2xl text-center text-lg text-neutral-600 md:mb-16",
        className
      )}
      {...props}
    />
  );
}

export { PageSection, PageSectionHeading, PageSectionDescription };
