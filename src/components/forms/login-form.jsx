"use client";
import { useState } from "react";
import Button from "../button";
import Heading from "../heading";
import Input from "../input";

export default function LoginForm() {
  const [loginStep, setLoginStep] = useState(1);

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
        {loginStep === 1 && (
          <Input label="email or phone" required type="email" />
        )}
        {loginStep === 2 && <Input label="password" required type="password" />}
        <Button
          label={loginStep === 1 ? "continue" : "login"}
          onClick={
            loginStep === 1 ? () => setLoginStep(2) : () => setLoginStep(1)
          }
        />
      </form>
    </div>
  );
}
