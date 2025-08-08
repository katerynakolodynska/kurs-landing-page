"use client";

import { useState } from "react";
import Image from "next/image";
import ImageModal from "@/components/ImageModal";

const images: string[] = [
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

export default function PortfolioSection() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center pb-6">
        Portfolio instruktora
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => openModal(index)}
            className="relative w-full h-64 cursor-pointer rounded-lg overflow-hidden group"
          >
            <Image
              src={img}
              alt={`Portfolio ${index + 1}`}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:opacity-80 transition"
            />
          </div>
        ))}
      </div>

      {showModal && (
        <ImageModal
          images={images}
          currentIndex={currentIndex}
          onClose={() => setShowModal(false)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
