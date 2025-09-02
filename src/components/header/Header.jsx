"use client";

import Link from "next/link";
import { NavBar } from "./NavBar";
import { Container } from "../container/Container";
import { useState } from "react";
import './Header.css';
import clsx from "clsx";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={clsx('header', isMenuOpen ? 'open' : "")}>
      <Container>
        <div className="relative z-9 md:flex justify-between py-[20px] md:py-[60px]">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="max-w-[47%] w-[330px] flex items-center">
            <figure className="w-full h-[14px]">
              <img className="w-full h-full" src="https://hw2l96z9d4lmwrzcpyznvzxnw.js.wpenginepowered.com/img/cgh-logo.svg" alt="Chermayeff & Geismar & Haviv Logo" />
            </figure>
          </Link>

          <NavBar handleMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </Container>
    </header>
  );
};
