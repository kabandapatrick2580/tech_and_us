"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import { Shield, Zap, TrendingUp, Sparkles } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Reliable Systems",
    description: "Built to handle real usage, not just demos. We engineer for stability, edge cases, and scale from day one.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    glow: "hover:shadow-blue-500/10",
  },
  {
    icon: Zap,
    title: "Better Efficiency",
    description: "Reduce manual work through automation. We identify bottlenecks and replace them with systems that run themselves.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
    glow: "hover:shadow-amber-500/10",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Grow without rebuilding everything. Our architecture evolves with your business — from startup to enterprise.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    glow: "hover:shadow-emerald-500/10",
  },
  {
    icon: Sparkles,
    title: "Clean User Experience",
    description: "Simple, fast, and intuitive interfaces. We believe great UX isn't just aesthetic — it drives real adoption.",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
    glow: "hover:shadow-violet-500/10",
  },
];

export default function ValueSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/4 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Tech & Us"
          title="What You"
          titleGradient="Get"
          description="Every engagement is built around delivering real value — not just code. Here's what that means in practice."
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={fadeInUp}
              className={`group relative glass-card rounded-2xl p-6 border ${v.border} hover:shadow-xl ${v.glow} transition-all duration-300 cursor-default`}
            >
              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl ${v.bg} flex items-center justify-center mb-5`}>
                <v.icon className={`w-5 h-5 ${v.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-base font-semibold text-white mb-2">{v.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>

              {/* Hover gradient bottom line */}
              <div className={`absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent ${v.color.replace("text-", "via-")} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
