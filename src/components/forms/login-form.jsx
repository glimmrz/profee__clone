import Button from "../button";
import Heading from "../heading";
import Input from "../input";

export default function LoginForm() {
  return (
    <div className="w-full">
      <div className="text-center font-extrabold">
        <Heading title="Welcome" />
        <div className="text-slate-500 font-light">
          <Heading subtitle="Sign in to continue!" />
        </div>
      </div>

      {/* Main form */}
      <form action="" className="flex flex-col gap-4 mt-8 w-full">
        <Input label="email or phone" required type="email" />
        <Input label="password" required type="password" />
        <Button label="Sign Up" />
      </form>
    </div>
  );
}
