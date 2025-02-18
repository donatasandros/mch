import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { PageSection, PageSectionHeading } from "@/components/page-section";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { services } from "@/config/services";
import { type Metadata } from "next";

const title = "Paslaugų kainos";

export const metadata: Metadata = {
  title,
  openGraph: {
    title,
  },
};

export default function KainosPage() {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Paslaugų kainos</PageHeaderHeading>
        <PageHeaderDescription>
          Susipažinkite su mūsų teikiamų paslaugų kainomis.
        </PageHeaderDescription>
      </PageHeader>
      <PageSection>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Paslaugos pavadiniamas</TableHead>
              <TableHead className="text-right">Kaina be PVM</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="*:odd:bg-neutral-50">
            {services.map((service) => (
              <TableRow key={service.label}>
                <TableCell className="text-neutral-900 font-medium">{service.label}</TableCell>
                <TableCell className="text-right">
                  <div className="text-xs md:text-sm whitespace-nowrap text-tangelo-700 px-2 md:px-2.5 bg-tangelo-50 py-0.5 border w-fit ml-auto rounded-2xl border-tangelo-200">
                    {service.price}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </PageSection>
      <PageSection className="!pt-0">
        <PageSectionHeading>Daugiau informacijos</PageSectionHeading>
        <div>
          <p className="text-lg text-neutral-600 text-center text-balance">
            Antikorozinės dangos kaina priklauso nuo automobilio dydžio, dugno pažeidimo, pasirinktų
            naudojamų medžiagų. Galutinė kaina nustatoma apžiūrint gyvai automobilį. Jūsų
            automobilio dugno apžiūra ir konsultacija -{" "}
            <span className="font-semibold">nemokamai</span>! Darbo eigoje radus pažeidimus, kurių
            nesimatė pirmos apžiūros metu, tolimesni veiksmai aptariami su klientu. Visi atliekami
            darbai detaliai fiksuojami nuotraukomis. Atlikus antikorozinį padengimą ir klientui
            pageidaujant nuotraukas persiunčiame.
          </p>
        </div>
      </PageSection>
    </>
  );
}
