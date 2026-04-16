"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import { Search, PenTool, Code2, RefreshCw } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    description:
      "We start by understanding your business, users, and goals. No assumptions — just clear alignment on what needs to be built and why.",
    detail: "Discovery call → Requirements doc → Project brief",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    description:
      "Architecture, wireframes, and system design before a single line of code. We map out the full picture so there are no surprises mid-build.",
    detail: "System design → UX wireframes → Tech stack decision",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build",
    description:
      "Iterative development with regular demos. You see progress weekly — not a black box that opens six months later.",
    detail: "Sprint cycles → Weekly demos → Staging environment",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Improve",
    description:
      "Launch is the beginning, not the end. We monitor, gather feedback, and continue improving after go-live.",
    detail: "Launch → Monitoring → Iteration roadmap",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#060c1a] to-[#030712] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Process"
          title="How We"
          titleGradient="Work"
          description="A clear, structured process that keeps you in the loop and delivers results without the usual chaos."
          className="mb-16"
        />

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                className="relative flex flex-col"
              >
                {/* Step number + icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-blue-500/20 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    {/* Number badge */}
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-[9px] font-bold text-blue-400">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white">{step.title}</h3>
                </div>

                {/* Card */}
                <div className="glass-card-hover rounded-2xl p-5 flex-1">
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <div className="border-t border-white/[0.06] pt-3">
                    <p className="text-xs text-gray-600 font-mono">{step.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
