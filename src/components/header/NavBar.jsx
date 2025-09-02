"use client";

import { navItems } from "@/data/navItems";
import clsx from "clsx";
import Link from "next/link";

export const NavBar = ({ handleMenuToggle, isMenuOpen, setIsMenuOpen }) => {

  const setMenuToggle = () => {
    handleMenuToggle();
  };

  return (
    <nav>
      <button
        className="block md:hidden cursor-pointer absolute p-2 top-5 right-5 w-[25px] z-2"
        aria-controls="primary-menu"
        aria-label={isMenuOpen ? "Open" : "Close"}
        onClick={setMenuToggle}
      >
        <span
          className={clsx(
            "block absolute bg-black h-0.5 w-full",
            "transition-all duration-300 ease-in-out",
            isMenuOpen ? "top-2 rotate-45" : "top-0 rotate-0"
          )}
        ></span>
        <span
          className={clsx(
            "block absolute bg-black h-0.5 w-full top-2",
            "transition-all duration-300 ease-in-out",
            isMenuOpen ? "opacity-0 translate-x-3" : "opacity-100 translate-x-0"
          )}
        ></span>
        <span
          className={clsx(
            "block absolute bg-black h-0.5 w-full",
            "transition-all duration-300 ease-in-out",
            isMenuOpen ? "top-2 -rotate-45" : "top-4 rotate-0"
          )}
        ></span>
      </button>
      <ul id="primary-menu" className={clsx("absolute md:static z-2 flex flex-col md:flex-row gap-[30px] mt-8 md:mt-0 transition-opacity delay-[0.3s] duration-[0.6s] md:opacity-100", isMenuOpen ? 'opacity-100' : 'opacity-0')}>
        {navItems?.map((navItem) => (
          <li key={navItem.id}>
            <Link href={navItem.slug} onClick={() => setIsMenuOpen(false)} className={clsx("md:pointer-events-auto", isMenuOpen ? "pointer-events-auto" : "pointer-events-none")}>{navItem.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
