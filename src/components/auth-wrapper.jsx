"use client";
import Button from "./button";
import CustomImage from "./custom-image";
import logo from "@/assets/logo_dark.png";
import Icon from "./icon";
import { useRouter } from "next/navigation";

export default function AuthWrapper({ params, children }) {
  const router = useRouter();

  return (
    <div className="w-96 mt-16 mb-16 bg-white shadow-lg rounded-2xl flex flex-col items-center justify-center pt-8 pb-8 pr-4 pl-4">
      <div className="h-20 w-52">
        <CustomImage src={logo} alt="waltonpay" />
      </div>
      {/* Toggle buttons */}
      <div className="flex justify-between gap-4 w-full p-4 bg-slate-100 rounded-2xl mt-8">
        <Button
          label="login"
          variant={params.mode === "login" ? "primary" : "ghost"}
          onClick={() => router.push(`/${params.locale}/auth/login`)}
        />
        <Button
          label="sign up"
          variant={params.mode === "register" ? "primary" : "ghost"}
          onClick={() => router.push(`/${params.locale}/auth/register`)}
        />
      </div>

      {/* Main form */}
      <div className="mt-8 w-full">{children}</div>

      {/* Social login */}
      <div className="w-full mt-8 flex flex-col gap-4">
        <p className="uppercase text-center text-slate-400">or</p>
        <div className="w-full grid gap-4">
          {/* Apple */}
          <div
            role="button"
            className="w-full flex items-center justify-center capitalize gap-4 pt-2 pb-2 pl-6 pr-6 border border-slate-100 hover:bg-slate-100 text-base first-letter:capitalize rounded-md transition-colors duration-300 cursor-pointer"
          >
            <Icon icon="google" />
            <span>sign in with apple</span>
          </div>
          {/* Google */}
          <div
            role="button"
            className="w-full flex items-center justify-center capitalize gap-4 pt-2 pb-2 pl-6 pr-6 border border-slate-100 hover:bg-slate-100 text-base first-letter:capitalize rounded-md transition-colors duration-300 cursor-pointer"
          >
            <Icon icon="google" />
            <span>continue with google</span>
          </div>
        </div>
      </div>
    </div>
  );
}
