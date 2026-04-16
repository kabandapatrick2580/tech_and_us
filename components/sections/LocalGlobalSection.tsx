"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from "@/lib/utils";
import { MapPin, Globe2, CheckCircle2 } from "lucide-react";

const localPoints = [
  "Deep understanding of East African business context",
  "Swahili and Kinyarwanda-ready interfaces when needed",
  "Familiar with local compliance and systems",
  "On-the-ground support and direct communication",
];

const globalPoints = [
  "International code standards and practices",
  "English-first documentation and support",
  "Built for multi-region deployment",
  "Ready to integrate with global platforms",
];

export default function LocalGlobalSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-225 h-125 bg-blue-600/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-wide uppercase mb-4">
            Where We Operate
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight tracking-tight">
            Built in Rwanda.{" "}
            <span className="gradient-text">Ready for the World.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-dim max-w-2xl mx-auto leading-relaxed">
            We understand local business challenges and regulatory realities — while delivering
            software that meets international engineering standards. That combination is rare,
            and it&apos;s what we do.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-6"
        >
          <motion.div
            variants={fadeInLeft}
            className="glass-card rounded-2xl p-8 border border-emerald-500/15 hover:border-emerald-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-ink">Local Understanding</h3>
                <p className="text-xs text-ghost">Rooted in Rwanda</p>
              </div>
            </div>
            <ul className="space-y-3">
              {localPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-dim">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            className="glass-card rounded-2xl p-8 border border-blue-500/15 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Globe2 className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-ink">Global Standards</h3>
                <p className="text-xs text-ghost">Ready for anywhere</p>
              </div>
            </div>
            <ul className="space-y-3">
              {globalPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-dim">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-10 text-center"
        >
          <p className="text-sm text-ghost">
            Serving clients in Rwanda, Kenya, Uganda, and beyond
          </p>
        </motion.div>
      </div>
    </section>
  );
}
