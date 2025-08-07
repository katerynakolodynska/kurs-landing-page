"use client";

import Image from "next/image";

const images = [
  "/portfolio/1.jpg",
  "/portfolio/2.jpg",
  "/portfolio/3.jpg",
  "/portfolio/4.jpg",
  "/portfolio/5.jpg",
  "/portfolio/6.jpg",
  "/portfolio/7.jpg",
  "/portfolio/8.jpg",
  "/portfolio/9.jpg",
  "/portfolio/10.jpg",
  "/portfolio/11.jpg",
  "/portfolio/12.jpg",
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen py-20 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center pb-7 text-gray-900">
          Portfolio instruktora
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg shadow group"
            >
              <Image
                src={src}
                alt={`Zdjęcie ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
