import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { navLinks } from "../constants/navLinks";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/50 backdrop-blur-md z-30">
      <div className="relative container py-6 flex justify-between transition-all">
        <Logo />
        {/* desktop nav */}
        <nav className="hidden md:flex gap-8 capitalize">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={`#${link}`}
              className="text-sm font-semibold tracking-wide text-slate-200  hover:text-sky-500/50 "
            >
              {link}
            </Link>
          ))}
        </nav>
        {/* phone nav */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
