"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ImicongoHeroAccent() {
  const { isDark } = useTheme();

  return (
    <div
      aria-hidden="true"
      className="absolute top-0 right-0 w-[25%] max-w-[560px] h-full hidden sm:block pointer-events-none"
      style={{
        backgroundImage: "url('/Imigongo_larger.svg')",
        backgroundSize: "cover",
        backgroundPosition: "top right",
        filter: isDark
          ? "invert(1) sepia(1) saturate(8) hue-rotate(228deg) opacity(0.13)"
          : "sepia(1) saturate(8) hue-rotate(228deg) opacity(0.09)",
      }}
    />
  );
}
