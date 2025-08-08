"use client";

import { useEffect } from "react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const ImageModal = ({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: ImageModalProps) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
        aria-label="Close modal"
      >
        <X size={32} />
      </button>

      <button
        onClick={onClose}
        className="absolute top-4 left-4 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 mt-20 rounded-full text-sm md:text-base font-medium transition-all z-50 shadow-md"
      >
        ← Powrót
      </button>

      <button
        onClick={onPrev}
        className="absolute left-4 text-white hover:text-cyan-400 transition-all z-40"
        aria-label="Previous image"
      >
        <ArrowLeft size={48} />
      </button>

      <div className="text-center space-y-4">
        <div className="relative w-[90vw] max-w-4xl aspect-[4/3] mx-auto rounded-xl overflow-hidden border-4 border-blue-300 shadow-2xl">
          <Image
            src={images[currentIndex]}
            alt={`Zdjęcie ${currentIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1024px"
            className="object-cover"
            priority
          />
        </div>

        <div className="text-white text-sm md:text-base bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full inline-block">
          Zdjęcie {currentIndex + 1} z {images.length}
        </div>
      </div>

      <button
        onClick={onNext}
        className="absolute right-4 text-white hover:text-cyan-400 transition-all z-40"
        aria-label="Next image"
      >
        <ArrowRight size={48} />
      </button>
    </div>
  );
};

export default ImageModal;
