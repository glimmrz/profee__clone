import Link from "next/link";
import Button from "../button";
import EmailOrPhoneInput from "../email-or-phone";
import Heading from "../heading";
import Input from "../input";

export default function RegisterForm() {
  return (
    <div className="w-full">
      <div className="text-center font-extrabold">
        <Heading title="Create Account" />
        <div className="text-slate-500 font-light">
          <Heading subtitle="Sign up to get started!" />
        </div>
      </div>

      {/* Main form */}
      <form action="" className="flex flex-col gap-4 mt-8 w-full">
        <Input label="name" required />
        <Input label="surname" required />
        <EmailOrPhoneInput />
        <Input label="password" required type="password" />
        <Button label="Sign Up" type="submit" />
      </form>
    </div>
  );
}
