/**
 * ─────────────────────────────────────────────────────────────────────────────
 * TECH & US — Design Token System
 * Single source of truth for all colors used across the project.
 *
 * HOW IT WORKS:
 *  1. Values here are mirrored in app/globals.css as CSS custom properties.
 *  2. globals.css maps them into Tailwind v4 via `@theme inline`.
 *  3. Components use the semantic Tailwind classes (e.g. `bg-page`, `text-ink`).
 *
 * TO UPDATE A COLOR:
 *  → Change it here first, then update the matching variable in globals.css.
 *
 * TAILWIND CLASS MAPPING:
 *  bg-page      · bg-panel     · bg-well      · bg-well-deep
 *  text-ink     · text-dim     · text-ghost
 *  bg-surface-1 · bg-surface-2 · bg-surface-3
 *  border-edge  · border-edge-2
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type ThemeName = "dark" | "light";

/** Raw hex / rgba values per theme — update here, then mirror in globals.css */
export const themes = {
  dark: {
    /* ── Page structure ─────────────────────────── */
    page:      "#030712",   // body background           → bg-page
    panel:     "#0a0f1a",   // card / section fills      → bg-panel
    well:      "#0d1117",   // browser chrome, code      → bg-well
    wellDeep:  "#161b22",   // browser top bar           → bg-well-deep

    /* ── Text ───────────────────────────────────── */
    ink:       "#f9fafb",   // primary text / headings   → text-ink
    dim:       "#9ca3af",   // secondary body text       → text-dim
    ghost:     "#4b5563",   // muted / disabled text     → text-ghost

    /* ── Transparent surfaces (opacity baked in) ── */
    surface1:  "rgba(255,255,255,0.03)",  // subtle card fill   → bg-surface-1
    surface2:  "rgba(255,255,255,0.05)",  // hover card fill    → bg-surface-2
    surface3:  "rgba(255,255,255,0.08)",  // active card fill   → bg-surface-3

    /* ── Borders (opacity baked in) ─────────────── */
    edge:      "rgba(255,255,255,0.07)",  // default border     → border-edge
    edge2:     "rgba(255,255,255,0.13)",  // stronger border    → border-edge-2

    /* ── Glass card ─────────────────────────────── */
    glassBg:   "rgba(255,255,255,0.03)",
    glassBgHover: "rgba(255,255,255,0.06)",
    glassHoverBorder: "rgba(99,102,241,0.30)",
  },

  light: {
    /* ── Page structure ─────────────────────────── */
    page:      "#f8fafc",   // slate-50                  → bg-page
    panel:     "#ffffff",   // pure white cards          → bg-panel
    well:      "#f1f5f9",   // slate-100                 → bg-well
    wellDeep:  "#e2e8f0",   // slate-200                 → bg-well-deep

    /* ── Text ───────────────────────────────────── */
    ink:       "#0f172a",   // slate-900                 → text-ink
    dim:       "#475569",   // slate-600                 → text-dim
    ghost:     "#94a3b8",   // slate-400                 → text-ghost

    /* ── Transparent surfaces ─────────────────── */
    surface1:  "rgba(0,0,0,0.02)",
    surface2:  "rgba(0,0,0,0.04)",
    surface3:  "rgba(0,0,0,0.07)",

    /* ── Borders ─────────────────────────────── */
    edge:      "rgba(0,0,0,0.08)",
    edge2:     "rgba(0,0,0,0.14)",

    /* ── Glass card ─────────────────────────── */
    glassBg:   "rgba(255,255,255,0.70)",
    glassBgHover: "rgba(255,255,255,0.95)",
    glassHoverBorder: "rgba(99,102,241,0.20)",
  },
} as const satisfies Record<ThemeName, Record<string, string>>;

/** Accent colors — same in both themes */
export const accents = {
  blue:    { DEFAULT: "#3b82f6", soft: "rgba(59,130,246,0.10)", glow: "rgba(59,130,246,0.15)" },
  violet:  { DEFAULT: "#8b5cf6", soft: "rgba(139,92,246,0.10)", glow: "rgba(139,92,246,0.15)" },
  emerald: { DEFAULT: "#10b981", soft: "rgba(16,185,129,0.10)" },
  amber:   { DEFAULT: "#f59e0b", soft: "rgba(245,158,11,0.10)"  },
  pink:    { DEFAULT: "#ec4899", soft: "rgba(236,72,153,0.10)"  },
} as const;

/** Gradient definitions */
export const gradients = {
  text:     "linear-gradient(135deg, #60a5fa 0%, #a78bfa 60%, #f472b6 100%)",
  textBlue: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
  ctaBg:    "linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(139,92,246,0.05) 100%)",
  button:   "linear-gradient(to right, #3b82f6, #8b5cf6)",
} as const;
