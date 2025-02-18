import { getImages } from "@/actions/get-images";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

async function Gallery() {
  const images = await getImages();

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-x-4 space-y-4">
      {images.map(({ id, url }, index) => (
        <div key={id} className="relative w-full overflow-hidden rounded-2xl">
          <Image
            src={url}
            alt={`Atlikto darbo nuotrauka - ${index + 1}`}
            width={500}
            height={500}
            className="w-full h-auto rounded-2xl object-cover"
            priority={index < 3}
          />
        </div>
      ))}
    </div>
  );
}

function GallerySkeleton() {
  return (
    <div className="*:aspect-[4/3] *:w-full *:h-full *:rounded-2xl  columns-1 sm:columns-2 lg:columns-3 gap-x-4 space-y-4 break-inside-avoid">
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton key={index} />
      ))}
    </div>
  );
}

export { Gallery, GallerySkeleton };
