import CustomImage from "../custom-image";
import demo from "@/assets/media.webp";
import Heading from "../heading";
import Image from "next/image";
import Icon from "../icon";
import Link from "next/link";

export default function MediaCard() {
  return (
    <article className="rounded-2xl overflow-hidden shadow-md">
      <Link href="#">
        <figure className="h-60 w-full relative">
          <Image src={demo} alt="" fill className="object-cover" />
        </figure>
        {/* Text content */}
        <div className="p-4 flex flex-col gap-4">
          {/* date/time views */}
          <div className="flex items-center justify-between text-shade">
            <p>Sep 11, 2024</p>
            <div className="flex items-center gap-6">
              <p>4 minutues</p>
              <div className="flex gap-2 items-center">
                <Icon icon="eye" />
                <span>808</span>
              </div>
            </div>
          </div>

          <Heading subtitle="Profee supports the Filipino female volleyball team from Denmark" />
          <p className="text-shade">
            Profee supports the Filipino female volleyball team from Denmark
          </p>
        </div>
      </Link>
    </article>
  );
}
