"use client";

import VideoModal from "@/components/VideoModal";
import WaveDivider from "@/components/WaveDivider";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-b.jpg"
          alt="Tło fotograficzne"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-cyan-100/60 to-white/60 backdrop-blur-sm" />
        {/* <div className="absolute -bottom-10 left-0 w-full h-32 bg-[url('/images/photo-icons-bg.svg')] bg-repeat opacity-20" /> */}
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-8 animate-fade-in">
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <p className="inline-block bg-yellow-400 text-black font-semibold text-xs px-4 py-1 rounded-full shadow-md tracking-wider animate-bounce">
            🔥 Zniżka -30% tylko do niedzieli!
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-xl text-gray-900">
            <span className="block text-cyan-600 animate-text-pop">
              Fotograf od zera
            </span>
            <span className="text-3xl md:text-4xl text-gray-800">
              w 4 tygodnie — bez teorii!
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-800 drop-shadow-sm max-w-xl mx-auto lg:mx-0">
            Intensywny kurs, który krok po kroku pokaże Ci, jak robić piękne
            zdjęcia i zdobywać zlecenia.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-3">
            <Link
              href="#zapisz"
              className="inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-4 py-3 rounded-full transition text-base shadow-lg hover:scale-105"
            >
              Zapisz się teraz
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
            </Link>
            <p className="text-sm text-gray-600 text-center sm:text-left">
              ⏱ Zajmuje tylko 30 sekund. Bez zobowiązań!
            </p>
          </div>

          <div className="pt-2 text-sm text-gray-700">
            <p>
              ⭐ <span className="font-bold text-cyan-700">4.9/5</span> (112
              opinii)
            </p>
            <p>
              💼 Już{" "}
              <span className="font-bold text-cyan-700">280 uczestników</span>{" "}
              rozpoczęło swoją fotograficzną drogę!
            </p>
          </div>

          <VideoModal />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end">
          <div className="relative w-[250px] h-[280px] md:w-[360px] md:h-[460px] transition-all duration-500 hover:scale-105 rounded-xl overflow-hidden shadow-2xl ring-4 ring-cyan-200/40">
            <Image
              src="/images/owners.png"
              alt="Instruktor kursu"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 300px"
              priority
            />
          </div>
          <Link
            href="/about"
            className="inline-block mt-4 text-base font-medium text-cyan-700 border-2 border-cyan-500 px-8 py-2 lg:mr-20 rounded-full hover:bg-cyan-600 hover:text-white transition-all duration-200 shadow-sm"
          >
            Poznaj instruktora
          </Link>
        </div>
      </div>

      <WaveDivider color="#cffafe" direction="up" className="h-50" />
    </section>
  );
};

export default HeroSection;
