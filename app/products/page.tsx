"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/utils";
import CtaSection from "@/components/sections/CtaSection";
import ImicongoHeroAccent from "@/components/ui/ImicongoHeroAccent";
import EcgPulse from "@/components/ui/EcgPulse";
import Button from "@/components/ui/Button";
import { Wallet, RefreshCw, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: "syncflow",
    status: "Beta", dot: "bg-amber-400",
    statusColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    tag: "Data Tool / Middleware", tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    title: "SyncFlow",
    subtitle: "Moving structured business data into CRMs and Accounting platforms reliably",
    description: "SyncFlow is a purpose-built middleware tool for migrating and syncing business data cleanly across platforms like QuickBooks, Xero, and custom ERPs. Migration work is unforgiving: data has to arrive in exactly the right shape, in the right order, with no duplicates and no silent failures. We built SyncFlow to handle all of that systematically, with clear validation steps and a complete audit trail.",
    features: [
      "Data parsing and transformation pipeline", 
      "QuickBooks & Xero API integration (OAuth + REST)", 
      "Pre-migration validation and conflict detection", 
      "Full audit log and rollback support"
    ],
    icon: RefreshCw, iconBg: "bg-amber-500/10", iconColor: "text-amber-400",
    border: "border-amber-500/20", hoverBorder: "hover:border-amber-500/35",
    link: "#",
    mockup: (
      <div className="bg-panel rounded-xl p-5 lg:p-6 border border-edge shadow-lg">
        <div className="flex items-center justify-between mb-5">
          <div className="text-sm font-semibold text-ink">Migration Progress</div>
          <div className="text-xs text-amber-400 flex items-center gap-1.5 font-medium">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />Running
          </div>
        </div>
        <div className="space-y-3">
          {[
            { label: "Parse source data",        pct: 100, color: "bg-emerald-400" },
            { label: "Validate records",          pct: 100, color: "bg-emerald-400" },
            { label: "Transform to target format",pct: 72,  color: "bg-amber-400"  },
            { label: "Push to API",               pct: 0,   color: "bg-surface-2"  },
            { label: "Verify & audit log",        pct: 0,   color: "bg-surface-2"  },
          ].map((step) => (
            <div key={step.label}>
              <div className="flex justify-between mb-1.5">
                <span className="text-xs text-ghost font-medium">{step.label}</span>
                <span className={`text-xs font-semibold ${step.pct === 100 ? "text-emerald-400" : step.pct > 0 ? "text-amber-400" : "text-ghost"}`}>
                  {step.pct === 100 ? "Done" : step.pct > 0 ? `${step.pct}%` : "Waiting"}
                </span>
              </div>
              <div className="h-1.5 bg-surface-1 rounded-full overflow-hidden">
                <div className={`h-full ${step.color} rounded-full transition-all duration-1000`} style={{ width: `${step.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 p-3 bg-amber-500/5 border border-amber-500/15 rounded-lg text-xs font-medium text-amber-400 text-center">
          1,248 / 1,730 records processed · 0 errors
        </div>
      </div>
    ),
  },
  {
    id: "goalifai",
    status: "Private Beta", dot: "bg-violet-400",
    statusColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    tag: "Fintech App", tagColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    title: "Goalifai",
    subtitle: "Helping individuals set, track, and actually reach their financial goals",
    description: "Goalifai is a personal finance app built around one idea: goals should drive your money decisions, not the other way around. The app lets users define financial goals, link them to spending categories, and get a clear picture of whether their habits are moving them forward or backward. Simple, focused, and honest about where your money is going.",
    features: [
      "Goal creation with target amounts and timelines", 
      "Expense tracking linked to each goal", 
      "Progress visualisations and milestone tracking", 
      "Smart nudges when spending drifts off course"
    ],
    icon: Wallet, iconBg: "bg-violet-500/10", iconColor: "text-violet-400",
    border: "border-violet-500/20", hoverBorder: "hover:border-violet-500/35",
    link: "#",
    mockup: (
      <div className="flex justify-center">
        <div className="w-56 bg-panel rounded-[28px] border border-edge p-2.5 shadow-2xl">
          <div className="bg-well rounded-[20px] overflow-hidden">
            <div className="flex justify-between items-center px-4 py-3 border-b border-edge/50">
              <div className="text-[10px] font-semibold text-ghost">9:41</div>
              <div className="w-12 h-1.5 bg-surface-2 rounded-full" />
            </div>
            <div className="px-4 py-4 space-y-3">
              <div className="text-xs font-bold text-ink mb-1">My Goals</div>
              {[
                { name: "Emergency Fund", pct: 68, color: "from-violet-500 to-violet-400" },
                { name: "New Laptop",     pct: 45, color: "from-blue-500 to-blue-400"    },
                { name: "Holiday Trip",   pct: 22, color: "from-emerald-500 to-emerald-400" },
              ].map((goal) => (
                <div key={goal.name} className="bg-surface-1 rounded-xl p-3 border border-edge">
                  <div className="flex justify-between mb-2">
                    <span className="text-[11px] font-semibold text-dim">{goal.name}</span>
                    <span className="text-[11px] text-ink font-bold">{goal.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-surface-2 rounded-full overflow-hidden">
                    <div className={`h-full bg-linear-to-r ${goal.color} rounded-full`} style={{ width: `${goal.pct}%` }} />
                  </div>
                </div>
              ))}
              <div className="h-10 mt-3 bg-linear-to-r from-violet-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20 cursor-pointer hover:opacity-90 transition-opacity">
                <span className="text-xs text-white font-bold tracking-wide">+ Add Goal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-150 h-100 bg-amber-600/5 rounded-full blur-[120px]" />
        </div>
        <ImicongoHeroAccent />
        <EcgPulse />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.span variants={fadeInUp} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 tracking-wide uppercase mb-5">
              Our Products
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight tracking-tight mb-6">
              Software we build to solve <span className="gradient-text">recurring problems</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-dim leading-relaxed max-w-2xl">
              Beyond our client work, we build our own tools and platforms. These products are born out of real operational challenges we&apos;ve seen repeatedly in the market.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products List */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          {products.map((product) => (
            <motion.article key={product.id} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className={`glass-card rounded-3xl border ${product.border} ${product.hoverBorder} transition-all duration-300 overflow-hidden`}>
              <div className="p-8 lg:p-12">
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <div className={`w-10 h-10 rounded-xl ${product.iconBg} flex items-center justify-center shrink-0`}><product.icon className={`w-5 h-5 ${product.iconColor}`} /></div>
                  <span className={`px-3 py-1 rounded-lg text-xs font-semibold border ${product.tagColor}`}>{product.tag}</span>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border ${product.statusColor}`}><span className={`w-1.5 h-1.5 rounded-full ${product.dot} animate-pulse`} />{product.status}</span>
                </div>
                <h2 className="text-3xl font-bold text-ink mb-2">{product.title}</h2>
                <p className={`text-base ${product.iconColor} mb-10 max-w-2xl`}>{product.subtitle}</p>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div><h3 className="text-sm font-bold text-ghost uppercase tracking-widest mb-4">The Solution</h3><p className="text-base text-dim leading-relaxed mb-8">{product.description}</p><h3 className="text-sm font-bold text-ghost uppercase tracking-widest mb-4">Core Features</h3><ul className="space-y-3 mb-8">{product.features.map((item) => (<li key={item} className="flex items-start gap-3 text-sm text-dim leading-relaxed"><ArrowRight className={`w-4 h-4 ${product.iconColor} shrink-0 mt-1`} />{item}</li>))}</ul><Button href={product.link} variant="secondary" icon>Request Access</Button></div>
                  <div className="relative">{product.mockup}</div>
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