"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ImicongoEdge() {
  const { isDark } = useTheme();

  return (
    <div
      aria-hidden="true"
      role="presentation"
      className="fixed left-0 top-0 h-screen w-14 z-30 hidden lg:block pointer-events-none"
      style={{
        backgroundImage: "url('/Imigongo_vertical.svg')",
        backgroundSize: "100% auto",
        backgroundRepeat: "repeat-y",
        backgroundPosition: "top left",
        filter: isDark
          ? "invert(1) sepia(1) saturate(10) hue-rotate(190deg) opacity(0.55)"
          : "sepia(1) saturate(10) hue-rotate(190deg) opacity(0.50)",
      }}
    />
  );
}
