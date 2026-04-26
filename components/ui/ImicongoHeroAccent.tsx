"use client";

import { useTheme } from "@/context/ThemeContext";

// --accent-hue is 20deg (defined in globals.css :root) — hardcoded here because
// CSS custom properties inside filter() don't resolve in JS inline styles.
const ACCENT_HUE = "20deg";

export default function ImicongoHeroAccent() {
  const { isDark } = useTheme();

  return (
    <div
      aria-hidden="true"
      className="absolute top-0 right-0 w-[25%] max-w-140 h-full hidden sm:block pointer-events-none"
      style={{
        backgroundImage: "url('/Imigongo_larger.svg')",
        backgroundSize: "cover",
        backgroundPosition: "top right",
        filter: isDark
          ? `invert(1) sepia(1) saturate(8) hue-rotate(${ACCENT_HUE}) opacity(0.13)`
          : `sepia(1) saturate(8) hue-rotate(${ACCENT_HUE}) opacity(0.09)`,
      }}
    />
  );
}
