import Button from "../button";
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
        <Input label="email or phone number" required type="email" />
        <Input label="name" required />
        <Input label="surname" required />
        <Input label="password" required type="password" />
        <Button label="Sign Up" />
      </form>
    </div>
  );
}
