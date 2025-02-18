import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { PageSection } from "@/components/page-section";
import { Suspense } from "react";
import { Gallery, GallerySkeleton } from "./gallery";

export default async function AtliktiDarbaiPage() {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Atlikti darbai</PageHeaderHeading>
        <PageHeaderDescription>
          Pamatykite mūsų atliktų antikorozinių padengimų nuotraukas.
        </PageHeaderDescription>
      </PageHeader>
      <PageSection>
        <Suspense fallback={<GallerySkeleton />}>
          <Gallery />
        </Suspense>
      </PageSection>
    </>
  );
}
