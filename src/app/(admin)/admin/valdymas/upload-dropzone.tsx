"use client";

import { UploadDropzone as UTUploadDropzone } from "@/lib/uploadthing";
import { BanIcon, CloudUploadIcon } from "lucide-react";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export function UploadDropzone() {
  return (
    <UTUploadDropzone
      endpoint="imageUploader"
      onClientUploadComplete={() => {
        toast.success("Nuotraukos sėkmingai įkeltos");
      }}
      onUploadError={(error) => {
        if (error.message.includes("FileCountMismatch")) {
          toast.error("Bandoma įkelti daugiau nei 10 nuotraukų.");
        } else if (error.message.includes("FileSizeMismatch")) {
          toast.error("Nuotraukos dydis viršija 8MB.");
        } else {
          toast.error("Įvyko klaida, bandant įkelti nuotraukas.");
        }
      }}
      config={{
        cn: twMerge,
      }}
      appearance={{
        container:
          "focus-visible:ring-tangelo-500 focus-visible:border-tangelo-300 focus-visible:ring-2 outline-0 data-[state=uploading]:bg-neutral-50 bg-white border rounded-xl border-neutral-200 border-solid py-4 px-6",
        button:
          "py-1.5 group min-w-[210px] outline-0 focus-visible:ring-tangelo-500 focus-within:ring-tangelo-500 focus-visible:ring-2 focus-visible:ring-offset-2  focus-visible:ring-tangelo-500 after:bg-tangelo-700 px-4 w-fit gap-1.5 h-9 text-sm !bg-tangelo-600 !text-white border-transparent",
        label: "text-neutral-600 w-fit text-sm font-normal hover:text-neutral-600 mb-1",
        allowedContent: "text-xs text-neutral-600",
        uploadIcon: "size-10",
      }}
      content={{
        button({ files, isUploading, uploadProgress }) {
          if (!isUploading) {
            if (files.length <= 0) {
              return `Pasirinkite nuotrauką (-as)`;
            }
            if (files.length === 1) {
              return `Įkelti ${files.length} nuotrauką`;
            }
            if (files.length > 1 && files.length < 10) {
              return `Įkelti ${files.length} nuotraukas`;
            }
            return `Įkelti ${files.length} nuotraukų`;
          }

          return (
            <div className="relative z-50">
              <BanIcon className="group-hover:block hidden size-5" />
              <span className="group-hover:hidden">{uploadProgress}%</span>
            </div>
          );
        },
        label() {
          return (
            <p>
              <span className="font-semibold text-tangelo-700">Spustelėkite</span>, kad įkeltumėte
              arba vilkite ir numeskite
            </p>
          );
        },
        allowedContent() {
          return `Nuotraukos iki 8MB, vienu metu iki 10 nuotraukų`;
        },
        uploadIcon() {
          return (
            <div className="size-10 shadow-sm border border-neutral-200 bg-white rounded-lg flex items-center justify-center">
              <CloudUploadIcon className="size-5 text-neutral-600" />
            </div>
          );
        },
      }}
    />
  );
}
