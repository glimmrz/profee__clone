"use client";

import { useState, useEffect } from "react";
import Select from "./select";
import Input from "./input";

const countries = [
  { value: "us", label: "United States", code: "+1" },
  { value: "gb", label: "United Kingdom", code: "+44" },
  { value: "ca", label: "Canada", code: "+1" },
];

export default function EmailOrPhoneInput({ label, required }) {
  const [inputType, setInputType] = useState("email");
  const [value, setValue] = useState("");
  const [country, setCountry] = useState(countries[0]);

  useEffect(() => {
    const phoneRegex = /^[0-9+\-\s()]+$/;
    if (phoneRegex.test(value)) {
      setInputType("tel");
    } else {
      setInputType("email");
    }
  }, [value]);

  return (
    <div className="relative w-full">
      <div className="flex relative overflow-hidden rounded-xl border border-mute">
        {inputType === "tel" && (
          <select className="absolute top-0 left-0 h-full bg-white border-0 outline-0 rounded-tl-xl rounded-bl-xl w-16 text-xs uppercase z-20">
            {countries.map((country, index) => (
              <option value="" key={index}>
                {country.value} {country.code}
              </option>
            ))}
          </select>
        )}
        <Input
          type={inputType}
          required={required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          customStyles={`${inputType === "tel" ? "!pl-[68px]" : ""} border-0`}
          label={inputType === "tel" ? "phone" : "email or phone number"}
          labelStyles={inputType === "tel" ? "left-[68px]" : ""}
        />
      </div>
    </div>
  );
}
