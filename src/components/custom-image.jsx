import Image from "next/image";
import React from "react";

export default function CustomImage({ src, alt }) {
  return (
    <figure className="relative h-full w-full">
      <Image src={src} alt={alt} className="h-full w-full object-contain" />
    </figure>
  );
}
