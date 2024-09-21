"use client";
import Link from "next/link";
import Button from "../button";
import Icon from "../icon";
import { useSidebar } from "@/hooks/modal-controllers";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const sidebar = useSidebar();
  const [isSidebarOpen, setIsSidebarOpen] = useState(sidebar.isOpen);

  useEffect(() => {
    setIsSidebarOpen(sidebar.isOpen);
  }, [sidebar.isOpen]);

  const handleClose = () => {
    setIsSidebarOpen(false);

    setTimeout(() => {
      sidebar.onClose();
    }, 300);
  };

  if (!sidebar.isOpen) return null;

  return (
    <aside className="w-screen h-screen fixed top-0 left-0 z-50">
      <div
        className="bg-[rgba(0,0,0,.5)] w-full h-full"
        onClick={handleClose}
      ></div>
      <div
        className={`bg-white w-full md:w-[300px] h-full fixed top-0 right-0 transition-all duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-[500px]"
        }`}
      >
        <div
          className="w-full flex justify-end border-b border-slate-100 p-2"
          role="button"
          onClick={handleClose}
        >
          <Icon icon="close" size={24} />
        </div>
        {/* Account Buttons */}
        <div className="flex items-center gap-4 p-4 border-b border-slate-200">
          <Button variant="outline" label="log in" />
          <Button label="sign up" />
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-3 mt-3 p-4">
          <li
            onClick={handleClose}
            className="first-letter:capitalize hover:text-slate-400 transition-colors duration-300 text-sm"
          >
            <Link className="pt-3 pb-3 h-full w-full block" href="/send-money">
              send money
            </Link>
          </li>
          <li
            onClick={handleClose}
            className="first-letter:capitalize hover:text-slate-400 transition-colors duration-300 text-sm"
          >
            <Link className="pt-3 pb-3 h-full w-full block" href="/media">
              media
            </Link>
          </li>
          <li
            onClick={handleClose}
            className="first-letter:capitalize hover:text-slate-400 transition-colors duration-300 text-sm"
          >
            <Link className="pt-3 pb-3 h-full w-full block" href="/blog">
              blog
            </Link>
          </li>
          <li
            onClick={handleClose}
            className="first-letter:capitalize hover:text-slate-400 transition-colors duration-300 text-sm"
          >
            <Link className="pt-3 pb-3 h-full w-full block" href="/about-us">
              about us
            </Link>
          </li>
        </ul>

        {/* Language changer */}
      </div>
    </aside>
  );
}
