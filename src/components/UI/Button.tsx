import React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
}: Props) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-6 py-3 rounded-2xl font-semibold bg-pink-600 text-white hover:bg-pink-700 transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
