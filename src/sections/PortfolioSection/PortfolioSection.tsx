"use client";
import Image from "next/image";
import Link from "next/link";

const portfolioImages: string[] = [
  "/portfolio/1.jpg",
  "/portfolio/2.jpg",
  "/portfolio/3.jpg",
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="bg-white py-5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 pb-7">
          Portfolio instruktora
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {portfolioImages.map((src: string, i: number) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg shadow-md group aspect-[4/3] relative"
            >
              <Image
                src={src}
                alt={`Portfolio image ${i + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <Link
          href="/portfolio"
          className="inline-block bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-cyan-700 transition"
        >
          Zobacz więcej zdjęć
        </Link>
      </div>
    </section>
  );
};

export default PortfolioSection;
