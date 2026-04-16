"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { ThemeName } from "@/lib/colors";

interface ThemeContextValue {
  theme: ThemeName;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
  isDark: true,
});

const STORAGE_KEY = "techandus-theme";

/** Sets data-theme on <html> and persists to localStorage */
function applyTheme(t: ThemeName) {
  document.documentElement.setAttribute("data-theme", t);
  try {
    localStorage.setItem(STORAGE_KEY, t);
  } catch {}
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>("dark");

  /* Read persisted preference on mount */
  useEffect(() => {
    let saved: ThemeName = "dark";
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ThemeName | null;
      if (stored === "light" || stored === "dark") {
        saved = stored;
      } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        saved = "light";
      }
    } catch {}
    setTheme(saved);
    applyTheme(saved);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: ThemeName = prev === "dark" ? "light" : "dark";
      applyTheme(next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
