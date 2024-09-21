"use client";
import Link from "next/link";
import CustomImage from "./custom-image";
import logo from "@/assets/logo.svg";
import { usePathname } from "next/navigation";

export default function Logo() {
  const pathname = usePathname();

  return (
    <Link href="/" className="w-32 h-10">
      <CustomImage src={logo} />
    </Link>
  );
}
