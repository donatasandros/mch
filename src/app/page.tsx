import { buttonVariants } from "@/components/ui/button";
import { ChevronsRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function IndexPage() {
  return (
    <section className="px-4 pt-16 sm:px-6 md:px-8 md:pb-4">
      <div className="mx-auto max-w-container">
        <div className="grid grid-cols-1 items-center gap-y-16 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-0">
          <div>
            <h1 className="mb-4 text-4xl font-semibold leading-[1.1] text-neutral-900 sm:text-5xl md:mb-6 lg:text-6xl">
              Antikorozinis padengimas jūsų automobiliui
            </h1>
            <p className="mb-4 max-w-lg text-lg text-neutral-600 md:mb-8">
              Sutvarkysime visą dugną, pašalinsime korozijos židinius, o tada apdirbę metalą
              padengsime jūsų pasirinkta antikorozine danga.
            </p>
            <div className="flex flex-col-reverse gap-4 xs:flex-row">
              <Link
                href="/atlikti-darbai"
                className={buttonVariants({ variant: "tertiary", size: "lg" })}
              >
                Atlikti darbai
                <ChevronsRightIcon />
              </Link>
              <Link href="/#kontaktai" className={buttonVariants({ size: "lg" })}>
                Susiekti su mumis
              </Link>
            </div>
          </div>
          <div className="flex h-[280px] items-center justify-center overflow-visible rounded-lg bg-gray-100 shadow-sm sm:h-[540px] md:h-[580px]">
            <Image
              src="/hero-image.webp"
              width={805}
              height={462}
              priority
              className="absolute max-w-[80%] lg:w-[620px] min-[1280px]:w-[720px]"
              alt="Mašinos nuotrauka"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
