"use client";

import { motion } from "framer-motion";
import { fadeInUp, scaleIn, viewportConfig } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-violet-600/8 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative glass-card rounded-3xl p-10 lg:p-14 border border-white/[0.08]"
          style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(139,92,246,0.05) 100%)",
          }}
        >
          {/* Top border gradient */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 tracking-wide uppercase mb-6"
          >
            Ready to start?
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-5"
          >
            Let&apos;s Build Something{" "}
            <span className="gradient-text">That Works</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10 max-w-lg mx-auto"
          >
            Tell us what you&apos;re trying to solve. We&apos;ll come back with a clear plan, timeline, and a team that can actually execute it.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="/contact" size="lg" icon>
              Start a Project
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              <MessageSquare className="w-4 h-4" />
              Contact Us
            </Button>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-8 text-xs text-gray-600"
          >
            No commitment. Just a conversation about what you need.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
