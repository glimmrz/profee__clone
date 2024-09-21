import Link from "next/link";
import CustomImage from "../custom-image";
import am from "@/assets/am.svg";

export default function CountryCard() {
  return (
    <Link href="#" className="bg-white rounded-2xl p-4 flex gap-4 items-center">
      <div className="h-8 w-8 rounded-full overflow-hidden">
        <CustomImage src={am} alt="armenia" />
      </div>
      <span className="capitalize line-clamp-1">armenia</span>
    </Link>
  );
}
