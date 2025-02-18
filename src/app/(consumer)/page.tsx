import { PageSection, PageSectionDescription, PageSectionHeading } from "@/components/page-section";
import { buttonVariants } from "@/components/ui/button";
import { contactOptions } from "@/config/contact-options";
import { workExamples } from "@/config/work-examples";
import { ChevronsRightIcon } from "lucide-react";
import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const title = "Antikorozinis padengimas jūsų automobiliui";

export const metadata: Metadata = {
  title,
  openGraph: {
    title,
  },
};

export default async function IndexPage() {
  return (
    <>
      <section className="px-4 pt-16 sm:px-6 md:px-8 md:pb-4">
        <div className="mx-auto max-w-container">
          <div className="grid grid-cols-1 items-center gap-y-16 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-0">
            <div>
              <h1 className="mb-4 text-4xl font-semibold text-neutral-900 md:mb-6 md:text-6xl">
                Antikorozinis padengimas jūsų automobiliui
              </h1>
              <p className="mb-4 max-w-lg text-lg text-neutral-600 md:mb-8">
                Sutvarkysime visą dugną, pašalinsime korozijos židinius, o tada apdirbę metalą
                padengsime jūsų pasirinkta antikorozine danga.
              </p>
              <div className="flex flex-col-reverse gap-4 xs:flex-row">
                <Link
                  href="/atlikti-darbai"
                  className={buttonVariants({ variant: "secondary", size: "lg" })}
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
      <PageSection className="bg-neutral-100">
        <PageSectionHeading>Atlikti darbai</PageSectionHeading>
        <PageSectionDescription>
          Pamatykite mūsų atliktų antikorozinių padengimų nuotraukas.
        </PageSectionDescription>
        <div className="relative mb-4 md:mb-8  ">
          <div className="grid grid-cols-1 max-sm:*:nth-last-3:hidden max-lg:*:nth-last-1:hidden max-lg:*:nth-last-2:hidden gap-4 sm:grid-cols-2 lg:grid-cols-3 *:h-full *:w-full *:rounded-2xl *:object-cover">
            {workExamples.map(({ src }) => (
              <Image
                key={src}
                src={src}
                width={416}
                height={312}
                loading="lazy"
                alt="Atlikto darbo nuotrauka"
              />
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-neutral-100 pb-8 pt-48">
            <Link href="/atlikti-darbai" className={buttonVariants({ size: "lg" })}>
              Pamatyti daugiau
              <ChevronsRightIcon />
            </Link>
          </div>
        </div>
      </PageSection>
      <PageSection id="kontaktai">
        <PageSectionHeading>Susisiekite su mumis</PageSectionHeading>
        <PageSectionDescription>
          Jei norėtumėte susitarti dėl jūsų automobilio antikorozinio padengimo ar turite kokių nors
          klausimų, būtinai susiekite su mumis.
        </PageSectionDescription>
        <div className="mb-12 flex justify-between gap-8 md:mb-16 max-sm:flex-col sm:flex-wrap">
          {contactOptions.map(({ type, icon: Icon, label, description }) => (
            <div
              key={label}
              className="py-5 flex-col gap-4 md:flex-row flex px-4 md:px-5 border border-neutral-200 rounded-lg shadow-sm flex-1"
            >
              <div className="size-10 border border-neutral-200 shadow-sm rounded-lg flex items-center justify-center">
                <Icon className="size-5 text-neutral-700" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm text-neutral-600 font-semibold">{label}</h3>
                {type ? (
                  <a
                    href={`${type === "phone" ? "tel" : "mailto"}:${description}`}
                    className="font-semibold truncate block text-neutral-900 text-xl whitespace-nowrap"
                  >
                    {description}
                  </a>
                ) : (
                  <p className="font-semibold truncate text-neutral-900 text-xl whitespace-nowrap">
                    {description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <Image
          src="/map.webp"
          width={1216}
          height={684}
          loading="lazy"
          className="h-full w-full rounded-2xl"
          alt="Žemėlapio nuotrauka"
        />
      </PageSection>
    </>
  );
}
