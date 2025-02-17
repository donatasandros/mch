import { cn } from "@/lib/tw-utils";

function PageHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={cn("pt-16 px-4 sm:px-6 md:px-8 lg:pt-24", className)} {...props}>
      <div className="mx-auto max-w-container text-center">{children}</div>
    </section>
  );
}

function PageHeaderHeading({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn("text-4xl font-semibold leading-[1.1] text-neutral-900 sm:text-5xl", className)}
      {...props}
    />
  );
}

function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-lg text-neutral-600 mt-4 md:mt-6", className)} {...props} />;
}

export { PageHeader, PageHeaderHeading, PageHeaderDescription };
