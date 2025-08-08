"use client";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import CookieSettingsButton from "../CookieSettingsButton";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-black text-white py-5 ">
      <div className="max-w-7xl mx-auto px-6 pd:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg md:text-xl font-semibold pb-4">Nawigacja</h4>
          <ul className="space-y-2 text-sm md:text-base grid gap-2.5">
            <li>
              <Link
                href="/#program"
                className="hover:text-cyan-400 scroll-smooth"
              >
                Program
              </Link>
            </li>

            <li>
              <Link
                href="/#cennik"
                className="hover:text-cyan-400 scroll-smooth"
              >
                Cennik
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-cyan-400 scroll-smooth">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg md:text-xl font-semibold pb-6">
            Social Media
          </h4>
          <div className="flex gap-6 text-2xl">
            <Link
              href="https://www.facebook.com/share/1C71eTVL8r/ "
              aria-label="Facebook"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.instagram.com/kate_ms0"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=etC5TVVsAA4"
              aria-label="YouTube"
            >
              <FaYoutube />
            </Link>
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
