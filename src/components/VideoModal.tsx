"use client";

import { useState } from "react";
import { X } from "lucide-react";

const VideoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="inline-block text-base font-medium text-cyan-700 border-2 border-cyan-500 px-8 py-2 lg:mr-20 rounded-full hover:bg-cyan-600 hover:text-white transition-all duration-200 shadow-sm"
      >
        🎥 Zobacz intro kursu
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative w-[90%] max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Close button inside relative container */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-10 text-gray-600 hover:text-black bg-white/80 rounded-full p-1"
            >
              <X size={24} />
            </button>

            <div className="aspect-video w-full relative z-0">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/etC5TVVsAA4"
                title="Intro Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoModal;
