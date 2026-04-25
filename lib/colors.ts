/**
 * ─────────────────────────────────────────────────────────────────────────────
 * TECH & US — Brand Color System
 * Single source of truth for all design tokens.
 *
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │  TO RETHEME THE ENTIRE SITE                                             │
 * │                                                                         │
 * │  1. Pick new brand hex values below                                     │
 * │  2. Update the matching CSS variables in app/globals.css (:root block)  │
 * │     → --brand, --brand-500, --brand-600, --brand-hue                   │
 * │     → --accent, --accent-500, --accent-600, --accent-hue               │
 * │  3. That's it. All 90+ color references update automatically via        │
 * │     Tailwind's @theme inline palette override.                          │
 * └─────────────────────────────────────────────────────────────────────────┘
 *
 * HOW THE SYSTEM WORKS:
 *  1. CSS variables are defined in globals.css (:root / [data-theme="light"])
 *  2. @theme inline remaps Tailwind's blue/violet palette to these variables
 *  3. Components use standard Tailwind classes (text-blue-400, bg-blue-500/10)
 *     which now resolve through the brand variables — no component changes needed
 *  4. Imigongo SVG filters use --brand-hue / --accent-hue CSS variables
 *     (hue-rotate degrees: blue≈190°, teal≈168°, indigo≈240°, green≈145°)
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ─── PRIMARY BRAND ────────────────────────────────────────────────────────────
// Currently: blue. Swap all three values together when rebranding.

export const brand = {
  /** Text, icons, active states  →  --brand  →  text-blue-400  */
  "400":    "#423a2c",   // dark warm brown — colored text accent

  /** Borders, soft backgrounds   →  --brand-500  →  bg-blue-500 / border-blue-500  */
  "500":    "#978565",   // mid tan-brown

  /** Glow effects, deep accents  →  --brand-600  →  bg-blue-600  */
  "600":    "#3f372a",   // deep warm brown

  /**
   * Imigongo SVG filter hue-rotate value.
   * Sepia filter naturally sits at ~35° (warm gold), so 0° keeps it
   * in the earth-tone family. Shift toward orange with positive values.
   * Common values: blue≈190, indigo≈225, teal≈168, purple≈270, rose≈340
   */
  hue:      "0deg",
} as const;

// ─── SECONDARY ACCENT ─────────────────────────────────────────────────────────
// Warmer amber complement to the primary gold.

export const accent = {
  /** Text, icons                 →  --accent  →  text-violet-400  */
  "400":    "#e0c288",   // warm amber-gold

  /** Borders, soft backgrounds   →  --accent-500  →  bg-violet-500 / border-violet-500  */
  "500":    "#7d6549",   // warm medium brown

  /** Glow effects                →  --accent-600  →  bg-violet-600  */
  "600":    "#3f372a",   // same deep brown as brand-600

  /** Imigongo SVG filter hue-rotate. Slight orange-amber shift from sepia. */
  hue:      "20deg",
} as const;

// ─── GRADIENTS ────────────────────────────────────────────────────────────────
// Defined in CSS via var(--brand) / var(--accent) — these are for JS use only.

export const gradients = {
  text:     `linear-gradient(135deg, ${brand[400]} 0%, ${accent[400]} 100%)`,
  textBlue: `linear-gradient(135deg, ${brand[500]} 0%, ${accent[500]} 100%)`,
  button:   `linear-gradient(to right, ${brand[500]}, ${accent[500]})`,
} as const;

// ─── SEMANTIC SURFACE TOKENS ──────────────────────────────────────────────────
// These are the structural (non-brand) colors. They do NOT change per brand.
// Mirrored in globals.css. Update both files together.

export type ThemeName = "dark" | "light";

export const themes = {
  dark: {
    page:      "#030712",
    panel:     "#0a0f1a",
    well:      "#0d1117",
    wellDeep:  "#161b22",

    ink:       "#f9fafb",
    dim:       "#9ca3af",
    ghost:     "#4b5563",

    surface1:  "rgba(255,255,255,0.03)",
    surface2:  "rgba(255,255,255,0.05)",
    surface3:  "rgba(255,255,255,0.08)",

    edge:      "rgba(255,255,255,0.07)",
    edge2:     "rgba(255,255,255,0.13)",

    glassBg:         "rgba(255,255,255,0.03)",
    glassBgHover:    "rgba(255,255,255,0.06)",
    glassHoverRing:  `rgba(139,92,246,0.30)`,   // follows accent-500
  },

  light: {
    page:      "#f8fafc",
    panel:     "#ffffff",
    well:      "#f1f5f9",
    wellDeep:  "#e2e8f0",

    ink:       "#0f172a",
    dim:       "#475569",
    ghost:     "#94a3b8",

    surface1:  "rgba(0,0,0,0.02)",
    surface2:  "rgba(0,0,0,0.04)",
    surface3:  "rgba(0,0,0,0.07)",

    edge:      "rgba(0,0,0,0.08)",
    edge2:     "rgba(0,0,0,0.14)",

    glassBg:         "rgba(255,255,255,0.70)",
    glassBgHover:    "rgba(255,255,255,0.95)",
    glassHoverRing:  `rgba(139,92,246,0.20)`,   // follows accent-500
  },
} as const satisfies Record<ThemeName, Record<string, string>>;

// ─── FIXED SEMANTIC ACCENTS ───────────────────────────────────────────────────
// These are NOT brand colors — they carry specific meaning and stay constant.

export const semantic = {
  success:  { text: "#34d399", bg: "rgba(52,211,153,0.10)"  },   // emerald
  warning:  { text: "#fbbf24", bg: "rgba(251,191,36,0.10)"  },   // amber
  danger:   { text: "#f87171", bg: "rgba(248,113,113,0.10)" },   // red
  ai:       { text: "#f472b6", bg: "rgba(244,114,182,0.10)" },   // pink — AI service
} as const;
