"use client";
import Link from "next/link";
import CustomImage from "./custom-image";
import logo from "@/assets/logo.png";
import logo_d from "@/assets/logo_dark.png";
import { usePathname } from "next/navigation";

export default function Logo() {
  const pathname = usePathname();

  return (
    <Link href="/" className="w-32 h-10">
      <CustomImage
        src={
          !pathname.split("/")[2] || pathname.split("/")[2] === "send-money"
            ? logo
            : logo_d
        }
      />
    </Link>
  );
}
