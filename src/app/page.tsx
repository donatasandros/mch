import { PageSection, PageSectionHeading } from "@/components/page-section";
import { buttonVariants } from "@/components/ui/button";
import { ChevronsRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
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
            <div className="flex h-[280px] items-center justify-center overflow-visible rounded-2xl bg-neutral-100 sm:h-[540px] md:h-[580px]">
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
      <PageSection>
        <PageSectionHeading className="text-left">
          Kodėl reikalingas antikorozinis padengimas?
        </PageSectionHeading>
        <div className="grid grid-cols-1 mb-12 md:mb-16 md:grid-cols-2 gap-6 text-lg text-neutral-600">
          <p>
            Devynesdešimtieji jau trečias dešimtmetis kaip pasibaigė, o kartu su gūdžiais laikais
            baigėsi ir automobilių gamintojų varžytuvės dėl aukščiausios kokybės. Gamintojai
            suprato, jog automobilis turi ne tik tarnauti žmogui, bet ir nešti pelną, o kaip kitaip
            priversti žmones naujinti savo senąją transporto priemonę? Tai labai paprasta!
          </p>
          <p className="max-md:order-3">
            Tas pats įvyko ir su dugno apsauga nuo korozijos. Gamintojai pradėjo slėpti nudažytą
            dugną po dugno apsaugomis jau 90-ųjų pabaigoje, ko pasekoje po apsaugomis renkasi
            purvas, kuris sulaiko drėgmę. Laikui bėgant dėl vibracijos purvas dažus pratrina ir
            prasideda korozijos procesas, kuris tampa lyg vėžys jūsų automobiliui.
          </p>
          <p>
            Jau seniai nebenaudojama autopramonėje oem guma, kuri saugojo automobilius nuo akmenukų
            ir kitų abrazyvų, kuriuos išmeta padangos juo važiuojant. Nekalbant jau apie automobilių
            lengvinimą važiuoklėje ar variklio skyriuje, kur patikimą plieną pakeitė nesunkiai
            ištampomu, išbaladojamu aliuminiu.
          </p>
          <p className="max-md:order-4">
            Surūdijusį dugną, atsiradusias dėl korozijos skyles pastebi techninės apžiūros
            specialistai, kurie dažnai priverčia žmones keisti mylimą automobilį naujesniu. Taip pat
            nuo to priklauso ir mūsų saugumas kelyje, nes pažeistas kėbulas smūgio metu yra lengviau
            deformuojamas.
          </p>
        </div>
        <Image
          src="/about-image.webp"
          width={1280}
          height={960}
          loading="lazy"
          className="rounded-2xl"
          alt="Mašinos nuotrauka"
        />
      </PageSection>
    </>
  );
}
