"use client";

interface WaveDividerProps {
  color?: string; // колір заливки хвилі (фон наступної секції)
  direction?: "up" | "down";
  className?: string;
}

const WaveDivider = ({
  color = "#e0f8ff",
  direction = "down",
  className = "",
}: WaveDividerProps) => {
  const transformClass = direction === "up" ? "rotate-180" : "";

  return (
    <div className={`relative ${className}`}>
      <svg
        className={`w-full ${transformClass}`}
        viewBox="0 0 1440 250"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill={color}
          d="M0,64L48,69.3C96,75,192,85,268,85.3C384,85,480,75,576,96C672,117,768,171,864,192C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0Z"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
