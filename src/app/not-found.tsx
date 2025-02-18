import { PageSection } from "@/components/page-section";
import { Button, buttonVariants } from "@/components/ui/button";
import { ChevronsLeftIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <PageSection>
      <div className="flex flex-col items-center">
        <div className="mb-4 bg-white shadow-sm border flex items-center gap-x-1.5 border-neutral-300 rounded-lg py-1 px-2.5 text-sm font-medium text-neutral-700">
          <div className="size-1.5 rounded-full bg-tangelo-600"></div>
          <span>404 klaida</span>
        </div>
        <div className="text-center mb-4 md:mb-8">
          <h1 className="text-neutral-900 md:mb-6 mb-4 text-4xl md:text-6xl font-semibold">
            Puslapis nerastas
          </h1>
          <p className="text-lg md:text-xl text-neutral-600">
            Apgailestaujame, tačiau puslapis, kurio ieškote neegzistuoja.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Button variant="secondary" size="lg">
            <ChevronsLeftIcon />
            Grįžti atgal
          </Button>
          <Link href="/" className={buttonVariants({ variant: "primary", size: "lg" })}>
            Pradinis puslapis
          </Link>
        </div>
      </div>
    </PageSection>
  );
}
