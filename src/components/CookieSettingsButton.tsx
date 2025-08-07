"use client";

import { useEffect, useState } from "react";
import { FaCookieBite } from "react-icons/fa";

const CookieSettingsButton = () => {
  const [show, setShow] = useState(false);

  const resetConsent = () => {
    localStorage.removeItem("cookiesAccepted");
    window.location.reload();
  };

  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={resetConsent}
      title="Zmień ustawienia cookies"
      aria-label="Zmień ustawienia cookies"
      className="fixed bottom-4 left-4 z-[1000] p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 shadow-md transition duration-300"
    >
      <FaCookieBite className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
};

export default CookieSettingsButton;
