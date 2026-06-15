import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Branded social-share card, generated at build time and cached.
// Renders for any route that doesn't define its own opengraph-image.
export const alt =
  "Tech & Us — Technology That Moves Your Business Forward";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoData = await readFile(
    join(process.cwd(), "public", "logo_dark_mode.png"),
    "base64",
  );
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(120% 120% at 0% 0%, #2d2318 0%, #1a150f 45%, #120f0b 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src={logoSrc} height={84} width={102} alt="" />
          <div
            style={{
              display: "flex",
              fontSize: 44,
              fontWeight: 700,
              color: "#fbf6ec",
              letterSpacing: "-0.02em",
            }}
          >
            Tech&nbsp;<span style={{ color: "#e0c288" }}>&</span>&nbsp;Us
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#fbf6ec",
              maxWidth: 980,
            }}
          >
            Technology That Moves Your Business Forward
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#d1c0a2",
              maxWidth: 900,
            }}
          >
            Scalable web &amp; mobile apps · business systems · AI integration
          </div>
        </div>

        {/* Footer accent */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", width: 64, height: 6, background: "#d2691e" }} />
          <div style={{ display: "flex", fontSize: 26, color: "#8d7a5c" }}>
            Kigali, Rwanda — built local, ready for the world
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
