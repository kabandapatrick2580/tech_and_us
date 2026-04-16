"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from "@/lib/utils";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import CtaSection from "@/components/sections/CtaSection";
import {
  Users, Plug, LayoutDashboard, TrendingUp, CheckCircle2, ArrowUpRight, Clock, Shield
} from "lucide-react";

const caseStudies = [
  {
    id: "hr-system",
    tag: "Business System",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    title: "HR Management Platform",
    subtitle: "End-to-end workforce management for a mid-size company",
    problem:
      "A growing company was managing 200+ employees across spreadsheets, email threads, and manual processes. Leave requests were tracked in WhatsApp groups. Payroll calculations took three days per cycle. HR had no visibility into who was where, what was approved, or what was pending.",
    solution:
      "We built a full HR management platform: employee profiles and org chart, leave management with approval flows, payroll calculation engine with tax rules, attendance tracking, and a management dashboard with real-time reporting.",
    outcome:
      "Payroll processing dropped from 3 days to 4 hours. Leave approval time went from days to minutes. HR team reduced manual admin by 70%. The platform now handles 200+ employees with room to scale.",
    metrics: [
      { label: "Payroll time", before: "3 days", after: "4 hours", icon: Clock },
      { label: "Leave approval", before: "2–3 days", after: "< 10 min", icon: CheckCircle2 },
      { label: "Admin reduction", before: "High", after: "–70%", icon: TrendingUp },
      { label: "Data security", before: "Scattered", after: "Centralized", icon: Shield },
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
    color: "blue",
    iconBg: "bg-blue-500/10",
    icon: Users,
    iconColor: "text-blue-400",
    border: "border-blue-500/15",
    hoverBorder: "hover:border-blue-500/35",
    mockup: (
      <div className="bg-[#0a0f1a] rounded-xl p-5 border border-white/[0.06]">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-xs font-semibold text-white mb-0.5">HR Dashboard</div>
            <div className="text-[10px] text-gray-500">203 employees · April 2024</div>
          </div>
          <div className="px-2 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400">Live</div>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            { l: "On Leave", v: "12", c: "text-amber-400" },
            { l: "Pending", v: "4", c: "text-blue-400" },
            { l: "Active", v: "187", c: "text-emerald-400" },
          ].map((s) => (
            <div key={s.l} className="bg-white/[0.03] rounded-lg p-2.5 text-center border border-white/[0.05]">
              <div className={`text-lg font-bold ${s.c} mb-0.5`}>{s.v}</div>
              <div className="text-[9px] text-gray-600">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {["Alice M. — Leave Approved", "Bob K. — Payroll Processed", "Carol J. — Onboarding"].map((r) => (
            <div key={r} className="flex items-center gap-2 p-2 bg-white/[0.02] rounded-lg border border-white/[0.04]">
              <div className="w-5 h-5 rounded-full bg-blue-500/20 flex-shrink-0" />
              <div className="text-[10px] text-gray-500">{r}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "api-integrations",
    tag: "API Integration",
    tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    title: "Multi-Platform API Integration Layer",
    subtitle: "Unified data layer connecting 6 external services",
    problem:
      "A SaaS company had 6 different tools running in parallel — a CRM, payment processor, logistics API, notification service, accounting software, and a legacy database. None of them talked to each other. Data had to be manually copied between systems daily.",
    solution:
      "We designed and built a central integration layer: a Node.js service that handled authentication, data transformation, and event routing between all 6 platforms. Webhooks, retry queues, error logging, and a monitoring dashboard included.",
    outcome:
      "Eliminated all manual data syncing. Errors across integrations dropped to near zero. The team recovered 10+ hours per week previously spent on data reconciliation.",
    metrics: [
      { label: "Manual sync", before: "Daily manual", after: "Fully automated", icon: CheckCircle2 },
      { label: "Data errors", before: "Frequent", after: "~0/week", icon: Shield },
      { label: "Time saved", before: "—", after: "10+ hrs/week", icon: Clock },
      { label: "Integrations", before: "Isolated", after: "6 connected", icon: Plug },
    ],
    stack: ["Node.js", "Express", "PostgreSQL", "Bull Queue", "Stripe", "Slack API"],
    color: "emerald",
    iconBg: "bg-emerald-500/10",
    icon: Plug,
    iconColor: "text-emerald-400",
    border: "border-emerald-500/15",
    hoverBorder: "hover:border-emerald-500/35",
    mockup: (
      <div className="bg-[#0a0f1a] rounded-xl p-5 border border-white/[0.06]">
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs font-semibold text-white">Integration Hub</div>
          <div className="text-[10px] text-emerald-400 flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            All systems active
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["CRM", "Payments", "Logistics", "Notifications", "Accounting", "Legacy DB"].map((s, i) => (
            <div key={s} className="bg-white/[0.03] rounded-lg p-2 text-center border border-white/[0.05]">
              <div className={`w-2 h-2 rounded-full mx-auto mb-1.5 ${i % 3 === 0 ? "bg-blue-400" : i % 3 === 1 ? "bg-emerald-400" : "bg-violet-400"}`} />
              <div className="text-[9px] text-gray-500">{s}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 p-2 bg-emerald-500/5 border border-emerald-500/15 rounded-lg text-[10px] text-emerald-400 flex items-center gap-1.5">
          <CheckCircle2 className="w-3 h-3" />
          847 events synced today · 0 errors
        </div>
      </div>
    ),
  },
  {
    id: "ops-dashboard",
    tag: "Internal Tool",
    tagColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    title: "Operations Intelligence Dashboard",
    subtitle: "Real-time visibility across all business operations",
    problem:
      "A logistics and operations company had data in 4 different systems — no single view of what was happening. Managers had to pull reports manually from each system, compile in Excel, and share via email. By the time reports landed, the data was already stale.",
    solution:
      "We built a unified operations dashboard that pulled live data from all 4 sources. Role-based views, custom KPI widgets, automated daily reports, and an alerting system when key metrics went out of range.",
    outcome:
      "Management now had real-time visibility for the first time. Report generation went from 2 hours to instant. Decisions that used to wait for Monday's meeting could be made same-day.",
    metrics: [
      { label: "Report time", before: "2+ hours", after: "Instant", icon: Clock },
      { label: "Data freshness", before: "24–48h old", after: "Real-time", icon: TrendingUp },
      { label: "Decision speed", before: "Weekly", after: "Same-day", icon: CheckCircle2 },
      { label: "Data sources", before: "Fragmented", after: "4 unified", icon: LayoutDashboard },
    ],
    stack: ["React", "Next.js", "Node.js", "PostgreSQL", "Chart.js", "Cron jobs"],
    color: "violet",
    iconBg: "bg-violet-500/10",
    icon: LayoutDashboard,
    iconColor: "text-violet-400",
    border: "border-violet-500/15",
    hoverBorder: "hover:border-violet-500/35",
    mockup: (
      <div className="bg-[#0a0f1a] rounded-xl p-5 border border-white/[0.06]">
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs font-semibold text-white">Operations View</div>
          <div className="text-[10px] text-blue-400">Live · Updated 2s ago</div>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          {[
            { l: "Orders Today", v: "148", c: "text-blue-400" },
            { l: "Fulfillment", v: "94%", c: "text-emerald-400" },
            { l: "Delays", v: "3", c: "text-amber-400" },
            { l: "Revenue", v: "$12.4k", c: "text-violet-400" },
          ].map((s) => (
            <div key={s.l} className="bg-white/[0.03] rounded-lg p-2.5 border border-white/[0.05]">
              <div className={`text-base font-bold ${s.c} mb-0.5`}>{s.v}</div>
              <div className="text-[9px] text-gray-600">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="flex items-end gap-1 h-12">
          {[60, 45, 80, 55, 90, 70, 85].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: "rgba(139,92,246,0.3)" }} />
          ))}
        </div>
      </div>
    ),
  },
];

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-600/5 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.span variants={fadeInUp} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-wide uppercase mb-5">
              Case Studies
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              Work that{" "}
              <span className="gradient-text">solves real problems</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Not mockups. Not concept projects. These are real systems we built for real businesses — with real outcomes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
          {caseStudies.map((cs, i) => (
            <motion.article
              key={cs.id}
              id={cs.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className={`glass-card rounded-2xl border ${cs.border} ${cs.hoverBorder} transition-all duration-300 overflow-hidden`}
            >
              <div className="p-7 lg:p-10">
                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div className={`w-9 h-9 rounded-xl ${cs.iconBg} flex items-center justify-center`}>
                    <cs.icon className={`w-4 h-4 ${cs.iconColor}`} />
                  </div>
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${cs.tagColor}`}>
                    {cs.tag}
                  </span>
                  <span className="text-xs text-gray-600 font-mono">{`0${i + 1} / 03`}</span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-1">{cs.title}</h2>
                <p className={`text-sm ${cs.iconColor} mb-8`}>{cs.subtitle}</p>

                {/* Two-column layout */}
                <div className="grid lg:grid-cols-2 gap-10 mb-8">
                  {/* Left: narrative */}
                  <div className="space-y-6">
                    {[
                      { heading: "The Problem", text: cs.problem },
                      { heading: "Our Solution", text: cs.solution },
                      { heading: "The Outcome", text: cs.outcome },
                    ].map((block) => (
                      <div key={block.heading}>
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">{block.heading}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{block.text}</p>
                      </div>
                    ))}
                  </div>

                  {/* Right: mockup + metrics */}
                  <div className="space-y-5">
                    {cs.mockup}

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-3">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.06]">
                          <div className="text-[10px] text-gray-500 mb-2">{m.label}</div>
                          <div className="flex items-center gap-2 text-xs">
                            <span className="text-gray-600 line-through">{m.before}</span>
                            <ArrowUpRight className={`w-3 h-3 ${cs.iconColor}`} />
                            <span className={`font-semibold ${cs.iconColor}`}>{m.after}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stack */}
                <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-white/[0.06]">
                  <span className="text-xs text-gray-600">Stack used:</span>
                  {cs.stack.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-gray-400">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
