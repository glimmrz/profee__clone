"use client";
import Link from "next/link";
import Button from "../button";
import Icon from "../icon";
import { useSidebar } from "@/hooks/modal-controllers";
import { useState } from "react";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebar = useSidebar();

  const handleClose = () => {
    sidebar.onClose();
  };

  if (!sidebar.isOpen) return null;

  return (
    <aside className="w-screen h-screen fixed top-0 left-0 z-50">
      <div className="bg-[rgba(0,0,0,.5)] w-full h-full"></div>
      <div className="bg-white w-full md:w-[300px] h-full fixed top-0 right-0 transition-all duration-300">
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
        <ul className="flex flex-col gap-3">
          <li
            onClick={handleClose}
            className="p-2 first-letter:capitalize hover:text-slate-400 transition-colors duration-300 text-sm"
          >
            <Link className="h-full w-full" href="/send-money">
              send money
            </Link>
          </li>
          <li
            onClick={handleClose}
            className="p-2 first-letter:capitalize hover:text-slate-400 transition-colors duration-300 text-sm"
          >
            <Link className="h-full w-full" href="/media">
              media
            </Link>
          </li>
          <li
            onClick={handleClose}
            className="p-2 first-letter:capitalize hover:text-slate-400 transition-colors duration-300 text-sm"
          >
            <Link className="h-full w-full" href="/blog">
              blog
            </Link>
          </li>
          <li
            onClick={handleClose}
            className="p-2 first-letter:capitalize hover:text-slate-400 transition-colors duration-300 text-sm"
          >
            <Link className="h-full w-full" href="/about-us">
              about us
            </Link>
          </li>
        </ul>

        {/* Language changer */}
      </div>
    </aside>
  );
}
