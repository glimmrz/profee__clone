"use client";
import Link from "next/link";
import Container from "./container";
import Logo from "./logo";
import Button from "./button";
import { usePathname } from "next/navigation";
import Icon from "./icon";
import { useSidebar } from "@/hooks/modal-controllers";

export default function Navbar() {
  const pathname = usePathname();
  const sidebar = useSidebar();

  return (
    <nav className="bg-transparent absolute w-full z-50">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Logo />

            <div className="hidden lg:block">
              {/* Links */}
              <ul className="flex items-center gap-4">
                <li
                  className={`cursor-pointer ${
                    pathname === "/" || pathname.split("/")[1] === "send-money"
                      ? "text-white"
                      : "text-black"
                  } text-sm first-letter:capitalize hover:text-primary transition-colors duration-300 ${
                    pathname.split("/")[1].replace(/-/, " ") === "send money"
                      ? "bg-slate-200 rounded-md !text-black hover:!text-primary"
                      : ""
                  }`}
                >
                  <Link className="p-2 block" href="/send-money">
                    send money
                  </Link>
                </li>
                <li
                  className={`cursor-pointer ${
                    pathname === "/" || pathname.split("/")[1] === "send-money"
                      ? "text-white"
                      : "text-black"
                  } text-sm first-letter:capitalize hover:text-primary transition-colors duration-300 ${
                    pathname.split("/")[1].replace(/-/, " ") === "media"
                      ? "bg-slate-200 rounded-md !text-black hover:!text-primary"
                      : ""
                  }`}
                >
                  <Link className="p-2 block" href="/media">
                    media
                  </Link>
                </li>
                <li
                  className={`cursor-pointer ${
                    pathname === "/" || pathname.split("/")[1] === "send-money"
                      ? "text-white"
                      : "text-black"
                  } text-sm first-letter:capitalize hover:text-primary transition-colors duration-300 ${
                    pathname.split("/")[1].replace(/-/, " ") === "blog"
                      ? "bg-slate-200 rounded-md !text-black hover:!text-primary"
                      : ""
                  }`}
                >
                  <Link className="p-2 block" href="/blog">
                    blog
                  </Link>
                </li>
                <li
                  className={`cursor-pointer ${
                    pathname === "/" || pathname.split("/")[1] === "send-money"
                      ? "text-white"
                      : "text-black"
                  } text-sm first-letter:capitalize hover:text-primary transition-colors duration-300 ${
                    pathname.split("/")[1].replace(/-/, " ") === "about us"
                      ? "bg-slate-200 rounded-md !text-black hover:!text-primary"
                      : ""
                  }`}
                >
                  <Link className="p-2 block" href="#">
                    about us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            {/* Buttons and language changer */}
            <Button variant="outline" label="log in" />
            <Button label="sign up" />
          </div>

          <div
            className={`lg:hidden ${
              pathname === "/" || pathname.split("/")[1] === "send-money"
                ? "text-white"
                : "text-black"
            }`}
            role="button"
            onClick={sidebar.onOpen}
          >
            <Icon icon="menu" size={28} />
          </div>
        </div>
      </Container>
    </nav>
  );
}
