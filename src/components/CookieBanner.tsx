"use client";

import { useEffect, useState } from "react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Baner cookies"
      className="fixed z-[9999] bottom-4 left-4 right-4 md:left-6 md:right-auto max-w-md bg-white text-gray-800 shadow-xl rounded-lg p-5 text-sm md:text-base flex flex-col gap-4 md:gap-5 animate-slide-up"
    >
      <p>
        Używamy plików cookies, aby zapewnić Ci najlepsze wrażenia z korzystania
        z naszej strony. Możesz zaakceptować lub odrzucić ich użycie.
      </p>
      <div className="flex flex-col md:flex-row gap-3 md:justify-end">
        <button
          onClick={handleAccept}
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded transition w-full md:w-auto"
        >
          Akceptuję
        </button>
        <button
          onClick={handleDecline}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded transition w-full md:w-auto"
        >
          Odrzucam
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
