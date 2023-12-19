"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "../constants/navLinks";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMune = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className="flex md:hidden cursor-pointer md:cursor-none"
        onClick={toggleMune}
      >
        {isOpen ? <X /> : <Menu />}
      </div>
      <figure
        className={`absolute rounded-md right-2 origin-top ${
          isOpen
            ? "top-20 scale-y-100 opacity-100 visible "
            : "scale-y-50 opacity-50 hidden"
        } 
       w-auto bg-slate-800 p-2 transition-all z-50`}
      >
        <nav
          className="w-full h-full flex flex-col space-y-2 capitalize
         font-normal tracking-wides"
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={`#${link}`}
              className="py-1 px-2 transition-all rounded-md hover:bg-slate-700 hover:text-sky-400"
              onClick={toggleMune}
            >
              {link}
            </Link>
          ))}
        </nav>
      </figure>
    </>
  );
};

export default MobileNav;
