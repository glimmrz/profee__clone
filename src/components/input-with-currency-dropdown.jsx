"use client";
import { useEffect, useRef, useState } from "react";
import Input from "./input";
import Image from "next/image";
import flag from "@/assets/flags/ru.svg";
import Icon from "./icon";

export default function InputWithCurrencyDropdown({
  label,
  name,
  type,
  value,
  onChange,
  required,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState({
    flag: flag,
    countryName: "iceland",
    currency: "isk",
  });
  const selectRef = useRef(null);

  const handleClose = (event) => {
    if (isVisible && !selectRef?.current?.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("click", handleClose);
    }

    return () => document.removeEventListener("click", handleClose);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <div className="relative rounded-xl border border-mute">
      <Input
        label={label}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        customStyles="!border-0 focus:!ring-0"
      />

      <div
        className={`rounded-tr-xl rounded-br-xl p-2 absolute top-0 right-0 w-[100px] h-full flex flex-col bg-white transition-[width] ${
          isVisible ? "!w-full z-20 rounded-tl-xl rounded-bl-xl" : ""
        }`}
        onClick={() => setIsVisible(!isVisible)}
      >
        {/* Selected Currency */}
        <div className="flex items-center justify-between h-full">
          <div className="flex gap-2 items-center">
            <figure className="relative h-6 w-6 rounded-full overflow-hidden">
              <Image src={selected.flag} alt="" fill />
            </figure>
            <span
              className={`capitalize text-sm ${isVisible ? "block" : "hidden"}`}
            >
              {selected.countryName}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="uppercase text-sm">{selected.currency}</span>
            <Icon icon={isVisible ? "chevronUp" : "chevronDown"} />
          </div>
        </div>

        {/* All Options */}
        {isVisible && (
          <div
            className="absolute top-14 left-0 rounded-xl bg-white border border-mute w-full p-2 h-[300px] overflow-auto flex flex-col gap-2"
            ref={selectRef}
          >
            {/* Option */}
            <div className="flex items-center justify-between p-2 rounded-md hover:bg-slate-100 transition-colors duration-300 cursor-pointer">
              <div className="flex gap-2 items-center">
                <figure className="relative h-6 w-6 rounded-full overflow-hidden">
                  <Image src={flag} alt="" fill />
                </figure>
                <span
                  className={`capitalize text-sm ${
                    isVisible ? "block" : "hidden"
                  }`}
                >
                  russia
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="uppercase text-sm">ISK</span>
              </div>
            </div>
          </div>
        )}

        {/* Options end */}
      </div>
    </div>
  );
}
