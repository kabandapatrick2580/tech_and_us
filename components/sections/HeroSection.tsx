"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInRight, staggerContainer, viewportConfig } from "@/lib/utils";
import Button from "@/components/ui/Button";
import BrowserFrame from "@/components/ui/BrowserFrame";
import DashboardMockup from "@/components/ui/DashboardMockup";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ImicongoHeroAccent from "@/components/ui/ImicongoHeroAccent";
import { PiChartLineUp } from "react-icons/pi";

const trust = ["No lock-in contracts", "Rwanda-based team", "Global delivery"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden grid-bg">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-150 h-150 bg-blue-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-125 h-125 bg-violet-600/8 rounded-full blur-[120px]" />
      </div>

      <ImicongoHeroAccent />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Now accepting projects
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-[1.1] tracking-tight mb-6"
            >
              Driving Digital{" "}
              <span className="gradient-text">Growth</span>
              <PiChartLineUp className="inline align-[-0.1em] ml-2 w-[0.85em] h-[0.85em] text-blue-400 opacity-80" />
              <br />
              For Your Business
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-dim leading-relaxed mb-8 max-w-lg"
            >
              Tech & Us builds scalable web and mobile applications, business
              systems, and smart solutions that help companies operate better —
              locally and globally.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-8">
              {trust.map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-sm text-dim">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  {t}
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <Button href="/contact" size="lg" icon>Start a Project</Button>
              <Button href="/work" variant="secondary" size="lg">View Our Work</Button>
            </motion.div>
          </motion.div>

          {/* Right — mockup */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-violet-600/20 rounded-3xl blur-3xl scale-90" />

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero.png"
                alt="Tech & Us — scalable web and mobile solutions"
                className="relative w-full h-auto rounded-xl shadow-2xl"
              />

            {/* Floating badge — bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-ink">System live</p>
                <p className="text-xs text-ghost">99.97% uptime</p>
              </div>
            </motion.div>

            {/* Floating badge — top right */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl"
            >
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-ink">Deployed</p>
                <p className="text-xs text-ghost">Just now</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-ghost tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-linear-to-b from-ghost to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
