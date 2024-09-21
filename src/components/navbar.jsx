"use client";
import Link from "next/link";
import Container from "./container";
import Logo from "./logo";
import Button from "./button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="bg-transparent absolute w-full z-50">
      <Container>
        <div className="flex justify-between">
          <div className="flex items-center gap-8">
            <div>
              {/* Logo */}
              <Logo />
            </div>
            <div className="hidden md:block">
              {/* Links */}
              <ul className="flex items-center gap-4">
                <li
                  className={`cursor-pointer ${
                    pathname === "/" || pathname.split("/")[1] === "send-money"
                      ? "text-white"
                      : "text-black"
                  } text-sm first-letter:capitalize hover:text-primary transition-colors duration-300 ${
                    pathname.split("/")[1].replace(/-/, " ") === "send money"
                      ? "bg-mute rounded-md p-2 !text-black hover:!text-primary"
                      : ""
                  }`}
                >
                  <Link href="/send-money">send money</Link>
                </li>
                <li
                  className={`cursor-pointer ${
                    pathname === "/" || pathname.split("/")[1] === "send-money"
                      ? "text-white"
                      : "text-black"
                  } text-sm first-letter:capitalize hover:text-primary transition-colors duration-300 ${
                    pathname.split("/")[1].replace(/-/, " ") === "media"
                      ? "bg-mute rounded-md p-2 !text-black hover:!text-primary"
                      : ""
                  }`}
                >
                  <Link href="/media">media</Link>
                </li>
                <li
                  className={`cursor-pointer ${
                    pathname === "/" || pathname.split("/")[1] === "send-money"
                      ? "text-white"
                      : "text-black"
                  } text-sm first-letter:capitalize hover:text-primary transition-colors duration-300 ${
                    pathname.split("/")[1].replace(/-/, " ") === "blog"
                      ? "bg-mute rounded-md p-2 !text-black hover:!text-primary"
                      : ""
                  }`}
                >
                  <Link href="/blog">blog</Link>
                </li>
                <li
                  className={`cursor-pointer ${
                    pathname === "/" || pathname.split("/")[1] === "send-money"
                      ? "text-white"
                      : "text-black"
                  } text-sm first-letter:capitalize hover:text-primary transition-colors duration-300 ${
                    pathname.split("/")[1].replace(/-/, " ") === "about us"
                      ? "bg-mute rounded-md p-2 !text-black hover:!text-primary"
                      : ""
                  }`}
                >
                  <Link href="#">about us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            {/* Buttons and language changer */}
            <Button variant="outline" label="log in" />
            <Button label="sign up" />
          </div>
        </div>
      </Container>
    </nav>
  );
}
