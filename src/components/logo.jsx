import Link from "next/link";
import CustomImage from "./custom-image";
import logo from "@/assets/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="w-32 h-10">
      <CustomImage src={logo} />
    </Link>
  );
}
