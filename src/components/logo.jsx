"use client";
import Link from "next/link";
import CustomImage from "./custom-image";
import logo from "@/assets/logo.svg";
import logo_d from "@/assets/logo-dark.svg";
import { usePathname } from "next/navigation";

export default function Logo() {
  const pathname = usePathname();

  return (
    <Link href="/" className="w-32 h-10">
      <CustomImage
        src={
          pathname === "/" || pathname.split("/")[1] === "send-money"
            ? logo
            : logo_d
        }
      />
    </Link>
  );
}
