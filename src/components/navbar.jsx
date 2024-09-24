"use client";
import Link from "next/link";
import Container from "./container";
import Logo from "./logo";
import Button from "./button";
import { usePathname, useRouter } from "next/navigation";
import Icon from "./icon";
import { useSidebar } from "@/hooks/modal-controllers";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./locale-switcher";
import { navbarLinks } from "@/lib/static";
import { useMemo } from "react";

export default function Navbar({ locale }) {
  const pathname = usePathname();
  const router = useRouter();
  const sidebar = useSidebar();
  const t = useTranslations("NavbarLinks");

  const isFontBlack = useMemo(
    () => !pathname.split("/")[2] || pathname.split("/")[2] === "send-money",
    [pathname]
  );

  return (
    <nav
      className={`bg-transparent w-full z-50 ${
        isFontBlack ? "text-white absolute" : "text-black"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Logo />

            <div className="hidden lg:block">
              {/* Links */}
              <ul className="flex items-center gap-4">
                {navbarLinks.map((link, index) => (
                  <li
                    key={index}
                    className={`cursor-pointer text-inherit text-sm first-letter:capitalize hover:text-primary transition-colors duration-300 ${
                      pathname.split("/")[2] === link.href
                        ? "bg-slate-200 rounded-md !text-black hover:!text-primary"
                        : ""
                    }`}
                  >
                    <Link
                      className="p-2 block"
                      href={`/${locale}/${link.href}`}
                    >
                      {t(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            {/* Buttons and language changer */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                variant="outline"
                label="log in"
                onClick={() => router.push(`/${locale}/auth/login`)}
              />
              <Button
                label="sign up"
                onClick={() => router.push(`/${locale}/auth/register`)}
              />
            </div>
            <LocaleSwitcher locale={locale} />

            <div
              className={`lg:hidden text-inherit`}
              role="button"
              onClick={sidebar.onOpen}
            >
              <Icon icon="menu" size={28} />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
