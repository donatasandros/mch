import { UploadDropzone } from "@/app/(admin)/admin/valdymas/upload-dropzone";

export default async function ValdymasPage() {
  return (
    <div className="bg-white flex-col w-full max-w-[600px] flex h-fit px-10 py-8 shadow-sm rounded-xl">
      <div className="flex w-full flex-col pb-6 mb-6 border-b border-neutral-200">
        <div className="text-left">
          <h1 className="text-xl md:text-2xl mb-0.5 md:mb-1 text-neutral-900 font-semibold">
            Svetainės valdymas
          </h1>
          <p className="text-neutral-600">Šiame puslapyje galite valdyti svetainės turinį.</p>
        </div>
      </div>
      <div>
        <div className="space-y-0.5 mb-5">
          <h2 className="text-neutral-900 text-lg font-semibold">Darbo nuotraukos(-ų) įkelimas</h2>
          <p className="text-neutral-600 text-sm">
            Šiame skyriuje galite įkelti darbo nuotraukas(-ų).
          </p>
        </div>
        <UploadDropzone />
      </div>
    </div>
  );
}
