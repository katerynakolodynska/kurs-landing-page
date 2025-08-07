"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Camera, Clock, Coins, Smile, Award, Rocket } from "lucide-react";
import type { Swiper as SwiperClass } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

type Benefit = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
const benefits: Benefit[] = [
  {
    icon: <Camera className="w-8 h-8 text-cyan-600" />,
    title: "Praktyka od pierwszego dnia",
    description: "Zamiast nudnej teorii - ćwiczenia z aparatem w ręku.",
  },
  {
    icon: <Clock className="w-8 h-8 text-cyan-600" />,
    title: "Szybkie efekty",
    description: "Już po 4 tygodniach możesz robić zdjęcia na zlecenie.",
  },
  {
    icon: <Coins className="w-8 h-8 text-cyan-600" />,
    title: "Możliwość zarobku",
    description: "Zdobądź klientów dzięki prostym technikom sprzedaży.",
  },
  {
    icon: <Smile className="w-8 h-8 text-cyan-600" />,
    title: "Dla początkujących",
    description: "Nawet jeśli nigdy nie trzymałeś aparatu.",
  },
  {
    icon: <Award className="w-8 h-8 text-cyan-600" />,
    title: "Doświadczony instruktor",
    description: "10+ lat w branży, setki zadowolonych klientów.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-cyan-600" />,
    title: "Szybki start",
    description: "Kurs online - ucz się kiedy i gdzie chcesz.",
  },
];

const BenefitsSection = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );

  useEffect(() => {
    if (
      swiperInstance &&
      swiperInstance.params.navigation &&
      typeof swiperInstance.params.navigation !== "boolean"
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current!;
      swiperInstance.params.navigation.nextEl = nextRef.current!;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="bg-cyan-100 py-7 border-b border-cyan-200">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 pb-5">
          Dlaczego warto?
        </h2>

        <div className="hidden md:grid grid-cols-3 gap-6">
          {benefits.map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-xl shadow-md p-6 min-h-[220px] flex flex-col items-center justify-center"
            >
              <div className="text-cyan-600 text-4xl mb-4">{icon}</div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.1}
            modules={[Navigation]}
            onSwiper={setSwiperInstance}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper: SwiperClass) => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current!;
                swiper.params.navigation.nextEl = nextRef.current!;
              }
            }}
          >
            {benefits.map(({ icon, title, description }) => (
              <SwiperSlide key={title}>
                <div className="bg-white rounded-xl shadow-md p-6 min-h-[220px] flex flex-col justify-center items-center  mb-2">
                  <div className="text-cyan-600 text-4xl mb-4">{icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center mt-4 gap-4">
            <button
              ref={prevRef}
              className="w-10 h-10 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white flex items-center justify-center transition duration-300"
              aria-label="Poprzedni"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              ref={nextRef}
              className="w-10 h-10 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white flex items-center justify-center transition duration-300"
              aria-label="Następny"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
