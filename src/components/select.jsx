import React from "react";
import { ChevronDown } from "lucide-react";

export default function Select({ value, onChange, options }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="appearance-none bg-white border border-mute rounded-xl p-2 pr-8 focus:outline-none focus:ring-2 focus:ring-variant transition-all duration-300"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.code} {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
        size={16}
      />
    </div>
  );
}
