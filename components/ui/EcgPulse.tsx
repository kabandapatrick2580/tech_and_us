"use client";

import { useEffect, useRef } from "react";

const BEAT_W   = 260;
const CANVAS_H = 90;
const BASELINE = 52;
const HALF_SEG = 140;   // half-width of the visible segment
const FADE_W   = 55;    // edge fade zone per side
const SPEED    = 80;    // px/s phase advance
const LERP_K   = 7;     // cursor follow smoothness (higher = snappier)

const MAIN_RGB = "224,194,136";  // #e0c288  amber-gold
const ECHO_RGB = "151,133,101";  // #978565  tan-brown

const WAYPOINTS = [
  { p: 0.00, y:   0 },
  { p: 0.17, y:   0 },
  { p: 0.20, y:  -7 },
  { p: 0.24, y:   0 },
  { p: 0.32, y:   0 },
  { p: 0.36, y: -42 },
  { p: 0.39, y:  19 },
  { p: 0.43, y:   0 },
  { p: 0.53, y: -13 },
  { p: 0.64, y:   0 },
  { p: 1.00, y:   0 },
];

function ecgY(phasePixels: number, yShift = 0): number {
  const p = ((phasePixels % BEAT_W) + BEAT_W) % BEAT_W / BEAT_W;
  for (let i = 0; i < WAYPOINTS.length - 1; i++) {
    const a = WAYPOINTS[i], b = WAYPOINTS[i + 1];
    if (p >= a.p && p <= b.p) {
      const t = (p - a.p) / (b.p - a.p);
      return BASELINE + yShift + a.y + (b.y - a.y) * t;
    }
  }
  return BASELINE + yShift;
}

export default function EcgPulse() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const rafRef       = useRef(0);
  const visibleRef   = useRef(false);
  const lastTsRef    = useRef(0);
  const phaseRef     = useRef(0);
  const cursorXRef   = useRef(-1);    // canvas-relative X, -1 = outside
  const displayXRef  = useRef(-1);    // lerp-smoothed position

  useEffect(() => {
    const container = containerRef.current;
    const canvas    = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Persistent offscreen canvas for the segment + edge-fade mask
    const segW = HALF_SEG * 2;
    const off  = document.createElement("canvas");
    off.width  = segW;
    off.height = CANVAS_H;
    const offCtx = off.getContext("2d")!;

    const resize = () => {
      canvas.width  = container.offsetWidth;
      canvas.height = CANVAS_H;
      // Initialise display position to centre on first resize
      if (displayXRef.current < 0) displayXRef.current = canvas.width / 2;
    };
    resize();
    window.addEventListener("resize", resize);

    // Cursor tracking — bounds-checked against the closest <section>
    const section: Element | null = container.closest("section");
    const onMouseMove = (e: MouseEvent) => {
      const bounds = (section ?? container).getBoundingClientRect();
      if (
        e.clientX >= bounds.left && e.clientX <= bounds.right &&
        e.clientY >= bounds.top  && e.clientY <= bounds.bottom
      ) {
        const cr = canvas.getBoundingClientRect();
        cursorXRef.current = e.clientX - cr.left;
      } else {
        cursorXRef.current = -1;
      }
    };
    window.addEventListener("mousemove", onMouseMove);

    // ── Draw loop ─────────────────────────────────────────────────────────
    const draw = (ts: number) => {
      rafRef.current = requestAnimationFrame(draw);

      if (!visibleRef.current) {
        lastTsRef.current = 0;
        return;
      }

      const dt = lastTsRef.current
        ? Math.min((ts - lastTsRef.current) / 1000, 0.05)
        : 0;
      lastTsRef.current = ts;
      if (dt === 0) return;

      const w = canvas.width;

      // Advance phase (drives the scrolling waveform)
      phaseRef.current += SPEED * dt;

      // Lerp display position toward cursor (or canvas centre)
      const target = cursorXRef.current >= 0 ? cursorXRef.current : w / 2;
      displayXRef.current += (target - displayXRef.current) * Math.min(LERP_K * dt, 1);
      const cx = displayXRef.current;

      ctx.clearRect(0, 0, w, CANVAS_H);

      // ── Offscreen: draw echo + main line, then apply edge-fade mask ───
      offCtx.clearRect(0, 0, segW, CANVAS_H);

      // Echo line — phase-shifted behind, shifted down, dimmer
      offCtx.save();
      offCtx.globalAlpha  = 0.22;
      offCtx.strokeStyle  = `rgb(${ECHO_RGB})`;
      offCtx.lineWidth    = 1.0;
      offCtx.lineCap      = "round";
      offCtx.lineJoin     = "round";
      offCtx.shadowColor  = `rgba(${ECHO_RGB},0.25)`;
      offCtx.shadowBlur   = 4;
      offCtx.beginPath();
      for (let px = 0; px <= segW; px++) {
        const y = ecgY(phaseRef.current + (px - HALF_SEG) - 32, 14);
        px === 0 ? offCtx.moveTo(px, y) : offCtx.lineTo(px, y);
      }
      offCtx.stroke();
      offCtx.restore();

      // Main amber-gold line
      offCtx.save();
      offCtx.globalAlpha  = 0.92;
      offCtx.strokeStyle  = `rgb(${MAIN_RGB})`;
      offCtx.lineWidth    = 1.6;
      offCtx.lineCap      = "round";
      offCtx.lineJoin     = "round";
      offCtx.shadowColor  = `rgba(${MAIN_RGB},0.75)`;
      offCtx.shadowBlur   = 14;
      offCtx.beginPath();
      for (let px = 0; px <= segW; px++) {
        const y = ecgY(phaseRef.current + (px - HALF_SEG));
        px === 0 ? offCtx.moveTo(px, y) : offCtx.lineTo(px, y);
      }
      offCtx.stroke();
      offCtx.restore();

      // Gradient edge-fade mask (destination-in keeps where gradient is opaque)
      const grad = offCtx.createLinearGradient(0, 0, segW, 0);
      grad.addColorStop(0,              "rgba(0,0,0,0)");
      grad.addColorStop(FADE_W / segW,  "rgba(0,0,0,1)");
      grad.addColorStop(1 - FADE_W / segW, "rgba(0,0,0,1)");
      grad.addColorStop(1,              "rgba(0,0,0,0)");
      offCtx.globalCompositeOperation = "destination-in";
      offCtx.fillStyle = grad;
      offCtx.fillRect(0, 0, segW, CANVAS_H);
      offCtx.globalCompositeOperation = "source-over";

      // Blit the masked segment onto main canvas, centred at cx
      ctx.drawImage(off, cx - HALF_SEG, 0);

      // ── Leading dot at cx ─────────────────────────────────────────────
      const dotY = ecgY(phaseRef.current);

      // Warm amber halo
      ctx.save();
      ctx.globalAlpha = 0.28;
      ctx.fillStyle   = `rgb(${MAIN_RGB})`;
      ctx.shadowColor = `rgba(${MAIN_RGB},1)`;
      ctx.shadowBlur  = 22;
      ctx.beginPath();
      ctx.arc(cx, dotY, 5, 0, Math.PI * 2);
      ctx.fill();

      // Bright cream core
      ctx.globalAlpha = 1;
      ctx.fillStyle   = "rgba(255,248,228,0.95)";
      ctx.shadowBlur  = 10;
      ctx.beginPath();
      ctx.arc(cx, dotY, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    rafRef.current = requestAnimationFrame(draw);

    // ── Pause when hero is not in viewport ────────────────────────────────
    const observer = new IntersectionObserver(
      ([entry]) => { visibleRef.current = entry.isIntersecting; },
      { threshold: 0.05 }
    );
    observer.observe(container);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute bottom-0 left-0 right-0 pointer-events-none"
      style={{ height: CANVAS_H }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}
