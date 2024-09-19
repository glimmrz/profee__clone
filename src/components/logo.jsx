import CustomImage from "./custom-image";
import logo from "@/assets/logo.svg";

export default function Logo() {
  return (
    <div className="w-32 h-10">
      <CustomImage src={logo} />
    </div>
  );
}
