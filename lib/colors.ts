/**
 * ─────────────────────────────────────────────────────────────────────────────
 * TECH & US — Brand Color System
 * Single source of truth for all design tokens.
 *
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │  TO RETHEME THE ENTIRE SITE                                             │
 * │                                                                         │
 * │  1. Pick new palette hex values below                                   │
 * │  2. Update the matching CSS variables in app/globals.css (:root block)  │
 * │     → --primary, --secondary, --highlight                              │
 * │     → --brand / --accent aliases and Imigongo hue tokens                │
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

// ─── CORE PALETTE ─────────────────────────────────────────────────────────────
// Raw brand values from the design brief.

export const palette = {
  primary:   "#3f372a",
  secondary: "#e0c288",
  highlight: "#d2691e",
} as const;

// ─── PRIMARY BRAND ALIASES ────────────────────────────────────────────────────
// Secondary gold is used for readable dark-mode accents. Primary brown anchors
// deeper fills and glow layers.

export const brand = {
  /** Text, icons, active states  →  --brand  →  text-blue-400  */
  "400":    palette.secondary,

  /** Borders, soft backgrounds   →  --brand-500  →  bg-blue-500 / border-blue-500  */
  "500":    palette.highlight,

  /** Glow effects, deep accents  →  --brand-600  →  bg-blue-600  */
  "600":    palette.primary,

  /**
   * Imigongo SVG filter hue-rotate value.
   * Sepia filter naturally sits at ~35° (warm gold), so 0° keeps it
   * in the earth-tone family. Shift toward orange with positive values.
   * Common values: blue≈190, indigo≈225, teal≈168, purple≈270, rose≈340
   */
  hue:      "0deg",
} as const;

// ─── SECONDARY ACCENT ─────────────────────────────────────────────────────────
// Copper highlights lead callouts while the gold creates lighter aura layers.

export const accent = {
  /** Text, icons                 →  --accent  →  text-violet-400  */
  "400":    palette.highlight,

  /** Borders, soft backgrounds   →  --accent-500  →  bg-violet-500 / border-violet-500  */
  "500":    palette.secondary,

  /** Glow effects                →  --accent-600  →  bg-violet-600  */
  "600":    palette.primary,

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
    page:      "#120f0b",
    panel:     "#1a150f",
    well:      "#211a12",
    wellDeep:  "#2d2318",

    ink:       "#fbf6ec",
    dim:       "#d1c0a2",
    ghost:     "#8d7a5c",

    surface1:  "rgba(224,194,136,0.05)",
    surface2:  "rgba(224,194,136,0.09)",
    surface3:  "rgba(210,105,30,0.13)",

    edge:      "rgba(224,194,136,0.12)",
    edge2:     "rgba(224,194,136,0.22)",

    glassBg:         "rgba(224,194,136,0.045)",
    glassBgHover:    "rgba(224,194,136,0.09)",
    glassHoverRing:  "rgba(210,105,30,0.36)",
  },

  light: {
    page:      "#f6efe2",
    panel:     "#fff9ef",
    well:      "#ede0c9",
    wellDeep:  "#dfc28a",

    ink:       "#3f372a",
    dim:       "#665640",
    ghost:     "#9a825e",

    surface1:  "rgba(63,55,42,0.035)",
    surface2:  "rgba(63,55,42,0.065)",
    surface3:  "rgba(210,105,30,0.11)",

    edge:      "rgba(63,55,42,0.12)",
    edge2:     "rgba(63,55,42,0.22)",

    glassBg:         "rgba(255,249,239,0.78)",
    glassBgHover:    "rgba(255,249,239,0.98)",
    glassHoverRing:  "rgba(210,105,30,0.24)",
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
