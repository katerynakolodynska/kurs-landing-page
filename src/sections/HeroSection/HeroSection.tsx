"use client";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden ">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Tło fotograficzne"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="w-full absolute inset-0 bg-gradient-to-r from-white/60 via-pink-80/50 to-white/50"></div>
      </div>

      <div className="relative z-10 container mx-auto p-4  flex flex-col-reverse lg:flex-row items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left drop-shadow-lg ml-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 pb-6 leading-tight drop-shadow-lg">
            Kurs fotograficzny <br />
            <span className="text-cyan-600">“Fotograf od zera”</span>
          </h1>
          <p className="text-base md:text-lg text-gray-900 pb-6 drop-shadow-lg">
            Naucz się fotografii i zacznij zarabiać już po 4 tygodniach!
          </p>
          <Link
            href="/#zapisz"
            className="inline-block bg-cyan-600 text-white px-6 py-3 rounded hover:bg-cyan-700 transition"
          >
            Zapisz się na kurs
          </Link>
        </div>

        <div className="w-full lg:w-1/2 relative flex justify-center  lg:mb-0">
          <div className="relative w-[200px] h-[250px] md:w-[360px] md:h-[480px]">
            <Image
              src="/images/owners.png"
              alt="Instruktor kursu"
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 300px"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
