"use client";
import { useState } from "react";
import br from "@/assets/flags/br.svg";
import cz from "@/assets/flags/cz.svg";
import de from "@/assets/flags/de.svg";
import es from "@/assets/flags/es.svg";
import fr from "@/assets/flags/fr.svg";
import gb from "@/assets/flags/gb.svg";
import it from "@/assets/flags/it.svg";
import pl from "@/assets/flags/pl.svg";
import ro from "@/assets/flags/ro.svg";
import ua from "@/assets/flags/ua.svg";
import uz from "@/assets/flags/uz.svg";
import vn from "@/assets/flags/vn.svg";
import ru from "@/assets/flags/ru.svg";
import Image from "next/image";
import Icon from "../icon";
import { useRouter } from "next/navigation";

const lans = [
  {
    text: "Русский",
    icon: ru,
    value: "ru",
  },
  {
    icon: cz,
    text: "Český",
    value: "cz",
  },
  {
    icon: de,
    text: "Deutsch",
    value: "",
  },
  {
    icon: gb,
    text: "English",
    value: "",
  },
  {
    icon: es,
    text: "Español",
    value: "",
  },
  {
    icon: fr,
    text: "Français",
    value: "",
  },
  {
    icon: it,
    text: "Italiano",
    value: "",
  },
  {
    icon: pl,
    text: "Polska",
    value: "",
  },
  {
    icon: br,
    text: "Português",
    value: "",
  },
  {
    icon: ro,
    text: "Română",
    value: "",
  },
  {
    icon: ua,
    text: "Українська",
    value: "",
  },
  {
    icon: uz,
    text: "O'zbek",
    value: "",
  },
  {
    icon: vn,
    text: "Tiếng việt",
    value: "",
  },
];

export default function LocaleSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLocale = (language) => {
    router.replace(`/${language}`);
  };

  const currentLocale = lans.filter((l) => l.value === "ru");

  return (
    <div className="relative w-fit">
      <div
        className="flex items-center gap-2 text-white"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
      >
        <figure className="h-6 w-6 rounded-full overflow-hidden relative">
          <Image src={currentLocale[0].icon} alt="" fill />
        </figure>
        <Icon icon="chevronDown" />
      </div>

      {isOpen && (
        <div className="absolute mt-6 right-0 min-w-[200px] rounded-bl-md rounded-br-md flex flex-col bg-white">
          {lans.map((lan, i) => (
            <div
              className="flex items-center gap-2 p-2 md:p-4 cursor-pointer hover:bg-slate-200 transition-colors duration-300"
              key={i}
              onClick={() => handleLocale(lan.value)}
            >
              <figure className="relative h-6 w-6 rounded-full overflow-hidden">
                <Image src={lan.icon} alt="" fill />
              </figure>
              <span className="text-sm">{lan.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
