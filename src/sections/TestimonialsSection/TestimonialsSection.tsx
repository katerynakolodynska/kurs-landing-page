"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Anna Kowalska",
    text: "Dzięki temu kursowi zaczęłam zarabiać na fotografii już po miesiącu!",
    image: "/images/women.jpg",
  },
  {
    name: "Tomasz Zieliński",
    text: "Świetnie wytłumaczone podstawy i dużo praktyki - polecam każdemu.",
    image: "/images/men.jpg",
  },
  {
    name: "Karolina Nowak",
    text: "Bałam się aparatu, a teraz robię zdjęcia zawodowo. Najlepszy kurs online!",
    image: "/images/women-1.jpg",
  },
];

const TestimonialsSection = () => {
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
    <section id="opinie" className="bg-cyan-50 pb-7">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Opinie uczestników
        </h2>

        <div className="hidden md:grid grid-cols-3 gap-8">
          {testimonials.map(({ name, text, image }) => (
            <div
              key={name}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                <Image
                  src={image}
                  alt={name}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-gray-700 text-sm mb-3">"{text}"</p>
              <span className="text-cyan-600 font-semibold">{name}</span>
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
                (swiper.params.navigation as any).prevEl = prevRef.current;
                (swiper.params.navigation as any).nextEl = nextRef.current;
              }
            }}
          >
            {testimonials.map(({ name, text, image }) => (
              <SwiperSlide key={name}>
                <div className="bg-white rounded-xl shadow-md p-6 min-h-[220px] flex flex-col justify-center items-center  mb-2">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src={image}
                      alt={name}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-gray-700 text-sm mb-3">"{text}"</p>
                  <span className="text-cyan-600 font-semibold">{name}</span>
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

export default TestimonialsSection;
