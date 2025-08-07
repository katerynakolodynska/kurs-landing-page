"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "O autorze", href: "/about" },
  { label: "O kursie", href: "/course" },
  { label: "Program", href: "/#program" },
  { label: "Cennik", href: "/#cennik" },
  { label: "FAQ", href: "/#faq" },
  { label: "Zapisz się", href: "/#zapisz" },
  { label: "Portfolio", href: "/#portfolio" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-[1000] h-16 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900 tracking-tight"
        >
          Fotograf
          <span className="text-cyan-500 font-light pl-1">Zera</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-gray-800 hover:text-cyan-500 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden relative z-[1100] flex items-center justify-center w-10 h-10"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5 flex flex-col justify-between">
            <span
              className={`h-[2px] w-full bg-gray-900 rounded transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full bg-gray-900 rounded transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full bg-gray-900 rounded transition-transform duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-0 right-0 w-56 h-screen bg-gradient-to-br from-white via-cyan-50 to-cyan-100 shadow-lg z-[900] px-8 pt-24 flex flex-col items-center justify-start gap-1"
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-800 hover:text-cyan-500 transition-colors duration-200 py-2"
              >
                {label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
