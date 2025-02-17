import { LucideIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

interface ContactOption {
  type?: "phone" | "mail";
  icon: LucideIcon;
  label: string;
  description: string;
}

export const contactOptions: ContactOption[] = [
  {
    icon: MapPinIcon,
    label: "Mūsų adresas",
    description: "Eglės g. 7, Marijampolė",
  },
  {
    type: "phone",
    icon: PhoneIcon,
    label: "Tel. numeris",
    description: "+37061300889",
  },
  {
    type: "mail",
    icon: MailIcon,
    label: "El. paštas",
    description: "mcarhouse@gmail.com",
  },
];
