"use client";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import CookieSettingsButton from "../CookieSettingsButton";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-black text-white py-5 ">
      <div className="max-w-7xl mx-auto px-6 pd:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-lg md:text-xl font-semibold pb-4">Nawigacja</h4>
          <ul className="space-y-2 text-sm md:text-base">
            <li>
              <a href="#about" className="hover:text-cyan-400 scroll-smooth">
                O kursie
              </a>
            </li>
            <li>
              <a href="#program" className="hover:text-cyan-400 scroll-smooth">
                Program
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-cyan-400 scroll-smooth"
              >
                Opinie
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-cyan-400 scroll-smooth">
                Cennik
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-cyan-400 scroll-smooth">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg md:text-xl font-semibold pb-8">
            Social Media
          </h4>
          <div className="flex gap-4 text-2xl">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>

          <CookieSettingsButton />
        </div>

        <div>
          <h4 className="text-lg md:text-xl font-semibold pb-4">Zapisz się</h4>
          <p className="text-sm md:text-base pb-2">
            Zostaw e-mail i otrzymuj nowości oraz zniżki.
          </p>
          <form
            action="https://formspree.io/f/{твій-id}"
            method="POST"
            className="flex gap-3  flex-col  "
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Twój e-mail"
              className="w-full h-10 rounded bg-white text-black px-3 py-2 text-sm md:text-base placeholder:text-gray-500"
            />
            <button
              type="submit"
              className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 text-sm md:text-base h-8 block "
            >
              Wyślij
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-8 text-xs text-gray-400 px-4 space-y-2">
        <p className="text-xs text-gray-400 mt-4">
          &copy; 2025 Fotograf Zera. Wszelkie prawa zastrzeżone.
        </p>

        <p>
          <Link
            href="/polityka-prywatnosci"
            className="text-sm text-gray-500 hover:underline"
          >
            Polityka prywatności
          </Link>
          | Ten serwis wykorzystuje pliki cookies zgodnie z RODO.
        </p>
        <div id="google_translate_element"></div>
      </div>
    </footer>
  );
};

export default Footer;
