"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, scaleIn, viewportConfig } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import { Monitor, Smartphone, Building2, Brain, ArrowRight } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    icon: Monitor,
    tag: "Web",
    title: "Web Applications",
    description:
      "Full-stack web platforms built for performance. From internal tools to customer-facing products — we architect and build systems that are fast, reliable, and maintainable.",
    features: ["React / Next.js", "REST & GraphQL APIs", "Admin dashboards", "Real-time features"],
    color: "blue",
    mockup: (
      <div className="bg-[#0a0f1a] rounded-xl p-4 border border-white/[0.06]">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
            <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
            <div className="w-2 h-2 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 h-3 bg-white/[0.05] rounded-md mx-2" />
        </div>
        <div className="space-y-2">
          <div className="h-6 bg-blue-500/20 rounded-lg w-3/4" />
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-white/[0.03] rounded-lg border border-white/[0.05]" />
            ))}
          </div>
          <div className="h-3 bg-white/[0.04] rounded w-full" />
          <div className="h-3 bg-white/[0.04] rounded w-4/5" />
        </div>
      </div>
    ),
  },
  {
    icon: Smartphone,
    tag: "Mobile",
    title: "Mobile Applications",
    description:
      "Cross-platform mobile apps that feel native. We build iOS and Android applications using React Native — with smooth UX, offline support, and clean architecture.",
    features: ["React Native", "iOS & Android", "Push notifications", "Offline-first"],
    color: "violet",
    mockup: (
      <div className="flex justify-center">
        <div className="w-28 bg-[#0a0f1a] rounded-[20px] border border-white/[0.1] p-2 shadow-xl">
          <div className="bg-[#161b22] rounded-[14px] h-48 overflow-hidden p-2">
            <div className="w-8 h-1 bg-white/20 rounded-full mx-auto mb-3" />
            <div className="space-y-1.5">
              <div className="h-2 bg-violet-500/30 rounded w-3/4" />
              <div className="h-2 bg-white/[0.06] rounded w-full" />
              <div className="h-2 bg-white/[0.06] rounded w-5/6" />
            </div>
            <div className="grid grid-cols-2 gap-1.5 mt-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-12 bg-white/[0.04] rounded-xl border border-white/[0.06]" />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Building2,
    tag: "Business",
    title: "Business Systems",
    description:
      "HR, payroll, invoicing, and operational tools built for how your business actually works. We replace spreadsheets and manual processes with purpose-built internal software.",
    features: ["HR & Payroll", "Invoicing systems", "Inventory tools", "Reporting"],
    color: "emerald",
    mockup: (
      <div className="bg-[#0a0f1a] rounded-xl p-4 border border-white/[0.06]">
        <div className="flex items-center justify-between mb-3">
          <div className="h-3 bg-emerald-500/30 rounded w-1/3" />
          <div className="h-3 bg-white/[0.06] rounded w-1/4" />
        </div>
        <div className="space-y-2">
          {[85, 60, 90, 45, 72].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-16 h-2 bg-white/[0.04] rounded" />
              <div className="flex-1 h-2 bg-white/[0.04] rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500/40 rounded-full" style={{ width: `${w}%` }} />
              </div>
              <div className="w-8 h-2 bg-white/[0.04] rounded" />
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: Brain,
    tag: "AI",
    title: "AI-Enhanced Tools",
    description:
      "Add intelligence to your existing workflows. We integrate AI features — smart search, document processing, recommendations, and automation — into your products and platforms.",
    features: ["LLM integrations", "Smart automation", "Document AI", "Predictions"],
    color: "amber",
    mockup: (
      <div className="bg-[#0a0f1a] rounded-xl p-4 border border-white/[0.06]">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center">
            <Brain className="w-3 h-3 text-amber-400" />
          </div>
          <div className="h-2 bg-amber-500/30 rounded w-1/3" />
        </div>
        <div className="space-y-2">
          {["Analyzing document...", "Extracting key data...", "Generating summary..."].map((t, i) => (
            <div key={i} className="flex items-center gap-2 p-2 bg-white/[0.03] rounded-lg border border-white/[0.05]">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <div className="text-[9px] text-gray-500">{t}</div>
            </div>
          ))}
          <div className="h-8 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center px-2">
            <div className="text-[9px] text-amber-400">✓ Analysis complete</div>
          </div>
        </div>
      </div>
    ),
  },
];

const colorMap: Record<string, { border: string; tag: string; feature: string }> = {
  blue: { border: "border-blue-500/20 hover:border-blue-500/40", tag: "bg-blue-500/10 text-blue-400", feature: "text-blue-400" },
  violet: { border: "border-violet-500/20 hover:border-violet-500/40", tag: "bg-violet-500/10 text-violet-400", feature: "text-violet-400" },
  emerald: { border: "border-emerald-500/20 hover:border-emerald-500/40", tag: "bg-emerald-500/10 text-emerald-400", feature: "text-emerald-400" },
  amber: { border: "border-amber-500/20 hover:border-amber-500/40", tag: "bg-amber-500/10 text-amber-400", feature: "text-amber-400" },
};

export default function SolutionsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Solutions"
          title="What We"
          titleGradient="Build"
          description="We don't offer generic services. We build purpose-driven products that solve specific problems — and make them yours."
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 gap-6"
        >
          {solutions.map((s) => {
            const c = colorMap[s.color];
            return (
              <motion.div
                key={s.title}
                variants={fadeInUp}
                className={`group glass-card rounded-2xl p-6 border ${c.border} transition-all duration-300 hover:shadow-xl`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${c.tag}`}>
                      {s.tag}
                    </div>
                    <h3 className="text-base font-semibold text-white">{s.title}</h3>
                  </div>
                  <s.icon className={`w-5 h-5 ${c.feature} flex-shrink-0`} />
                </div>

                {/* Mockup */}
                <div className="mb-5 overflow-hidden">{s.mockup}</div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{s.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {s.features.map((f) => (
                    <span key={f} className={`text-xs ${c.feature} bg-white/[0.04] px-2.5 py-1 rounded-lg border border-white/[0.06]`}>
                      {f}
                    </span>
                  ))}
                </div>

                <Link
                  href="/services"
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold ${c.feature} opacity-0 group-hover:opacity-100 transition-opacity`}
                >
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
