"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/utils";
import CtaSection from "@/components/sections/CtaSection";
import ImicongoHeroAccent from "@/components/ui/ImicongoHeroAccent";
import EcgPulse from "@/components/ui/EcgPulse";
import {
  Users, Plug, LayoutDashboard, TrendingUp, CheckCircle2,
  Clock, Shield, Sparkles, Globe, RefreshCw, Wallet, ArrowRight,
} from "lucide-react";

/* ── Current projects ─────────────────────────────────────────── */
const currentProjects = [
  {
    id: "csca",
    status: "In Progress", dot: "bg-blue-400",
    statusColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    tag: "Business Website", tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    title: "CSCA Ltd — Business Website",
    subtitle: "A professional web presence for a corporate services company",
    description: "We're building the public-facing website for CSCA Ltd — a company offering corporate and administrative services. The focus is clarity: a site that communicates what they do, who they serve, and how to engage, without fluff. Clean design, fast load times, and a structure that makes it easy to update as the business grows.",
    scope: ["Brand-aligned design system", "Service pages with clear information architecture", "Contact and inquiry flows", "SEO foundation and metadata", "Mobile-first, fully responsive"],
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    icon: Globe, iconBg: "bg-blue-500/10", iconColor: "text-blue-400",
    border: "border-blue-500/20", hoverBorder: "hover:border-blue-500/35",
    mockup: (
      <div className="bg-panel rounded-xl p-5 border border-edge">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-[#ff5f57]" /><div className="w-2 h-2 rounded-full bg-[#febc2e]" /><div className="w-2 h-2 rounded-full bg-[#28c840]" /></div>
          <div className="flex-1 h-3 bg-surface-1 rounded-md mx-2" />
        </div>
        <div className="bg-linear-to-br from-blue-500/10 to-surface-1 rounded-lg p-4 mb-3 border border-edge">
          <div className="h-2 bg-ink/20 rounded w-1/2 mb-2" />
          <div className="h-1.5 bg-surface-2 rounded w-3/4 mb-1" /><div className="h-1.5 bg-surface-2 rounded w-2/3 mb-3" />
          <div className="flex gap-2">
            <div className="h-6 w-20 bg-blue-500/40 rounded-lg" />
            <div className="h-6 w-20 bg-surface-2 rounded-lg border border-edge" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["Services","About","Contact"].map((s) => (
            <div key={s} className="bg-surface-1 rounded-lg p-2 border border-edge">
              <div className="w-4 h-4 bg-blue-500/20 rounded mb-1.5" />
              <div className="h-1.5 bg-surface-2 rounded w-full mb-1" /><div className="h-1.5 bg-surface-1 rounded w-2/3" />
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "qb-migration",
    status: "In Progress", dot: "bg-amber-400",
    statusColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    tag: "Data Tool", tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    title: "QuickBooks Data Migration Tool",
    subtitle: "Moving structured business data into QuickBooks cleanly and reliably",
    description: "A purpose-built tool for migrating business data — customers, invoices, transactions, balances — into QuickBooks. Migration work is unforgiving: data has to arrive in exactly the right shape, in the right order, with no duplicates and no silent failures. We're building something that handles all of that systematically, with clear validation steps and a complete audit trail.",
    scope: ["Data parsing and transformation pipeline", "QuickBooks API integration (OAuth + REST)", "Pre-migration validation and conflict detection", "Step-by-step migration UI with progress tracking", "Full audit log and rollback support"],
    stack: ["Node.js", "QuickBooks API", "PostgreSQL", "React", "Bull Queue"],
    icon: RefreshCw, iconBg: "bg-amber-500/10", iconColor: "text-amber-400",
    border: "border-amber-500/20", hoverBorder: "hover:border-amber-500/35",
    mockup: (
      <div className="bg-panel rounded-xl p-5 border border-edge">
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs font-semibold text-ink">Migration Progress</div>
          <div className="text-[10px] text-amber-400 flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />Running
          </div>
        </div>
        <div className="space-y-2.5">
          {[
            { label: "Parse source data",        pct: 100, color: "bg-emerald-400" },
            { label: "Validate records",          pct: 100, color: "bg-emerald-400" },
            { label: "Transform to QB format",    pct: 72,  color: "bg-amber-400"  },
            { label: "Push to QuickBooks",        pct: 0,   color: "bg-surface-2"  },
            { label: "Verify & audit log",        pct: 0,   color: "bg-surface-2"  },
          ].map((step) => (
            <div key={step.label}>
              <div className="flex justify-between mb-1">
                <span className="text-[10px] text-ghost">{step.label}</span>
                <span className={`text-[10px] ${step.pct === 100 ? "text-emerald-400" : step.pct > 0 ? "text-amber-400" : "text-ghost"}`}>
                  {step.pct === 100 ? "Done" : step.pct > 0 ? `${step.pct}%` : "Waiting"}
                </span>
              </div>
              <div className="h-1 bg-surface-1 rounded-full overflow-hidden">
                <div className={`h-full ${step.color} rounded-full`} style={{ width: `${step.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 p-2 bg-amber-500/5 border border-amber-500/15 rounded-lg text-[10px] text-amber-400">
          1,248 / 1,730 records processed · 0 errors
        </div>
      </div>
    ),
  },
  {
    id: "goalifai",
    status: "In Progress", dot: "bg-violet-400",
    statusColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    tag: "Fintech App", tagColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    title: "Goalifai — Personal Finance App",
    subtitle: "Helping individuals set, track, and actually reach their financial goals",
    description: "Goalifai is a personal finance app built around one idea: goals should drive your money decisions, not the other way around. The app lets users define financial goals, link them to spending categories, and get a clear picture of whether their habits are moving them forward or backward. Simple, focused, and honest about where your money is going.",
    scope: ["Goal creation with target amounts and timelines", "Expense tracking linked to each goal", "Progress visualisations and milestone tracking", "Smart nudges when spending drifts off course", "Clean mobile UI (iOS & Android)"],
    stack: ["React Native", "Expo", "Node.js", "PostgreSQL", "Plaid API"],
    icon: Wallet, iconBg: "bg-violet-500/10", iconColor: "text-violet-400",
    border: "border-violet-500/20", hoverBorder: "hover:border-violet-500/35",
    mockup: (
      <div className="flex justify-center">
        <div className="w-36 bg-panel rounded-[22px] border border-edge p-2 shadow-2xl">
          <div className="bg-well rounded-2xl overflow-hidden">
            <div className="flex justify-between items-center px-3 py-2">
              <div className="text-[8px] text-ghost">9:41</div>
              <div className="w-8 h-1 bg-surface-2 rounded-full" />
            </div>
            <div className="px-3 pb-3 space-y-2">
              <div className="text-[9px] font-semibold text-ink">My Goals</div>
              {[
                { name: "Emergency Fund", pct: 68, color: "from-violet-500 to-violet-400" },
                { name: "New Laptop",     pct: 45, color: "from-blue-500 to-blue-400"    },
                { name: "Holiday Trip",   pct: 22, color: "from-emerald-500 to-emerald-400" },
              ].map((goal) => (
                <div key={goal.name} className="bg-surface-1 rounded-xl p-2 border border-edge">
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[8px] text-dim">{goal.name}</span>
                    <span className="text-[8px] text-ink font-medium">{goal.pct}%</span>
                  </div>
                  <div className="h-1 bg-surface-2 rounded-full overflow-hidden">
                    <div className={`h-full bg-linear-to-r ${goal.color} rounded-full`} style={{ width: `${goal.pct}%` }} />
                  </div>
                </div>
              ))}
              <div className="h-7 bg-linear-to-r from-violet-500/80 to-violet-600/80 rounded-xl flex items-center justify-center">
                <span className="text-[8px] text-white font-medium">+ Add Goal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

/* ── Team background ──────────────────────────────────────────── */
const teamExperience = [
  { id: "hr",   tag: "Business Systems",  title: "HR & Workforce Management",        icon: Users,         iconBg: "bg-blue-500/10",   iconColor: "text-blue-400",   tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",   summary: "Our team has built HR platforms covering employee records, leave management, payroll calculation engines, attendance tracking, and management reporting — for organisations dealing with the real complexity of local tax rules, approval hierarchies, and org structure changes." },
  { id: "api",  tag: "API & Integrations", title: "System Integrations",              icon: Plug,          iconBg: "bg-emerald-500/10", iconColor: "text-emerald-400",tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", summary: "We've designed and built integration layers connecting CRMs, payment processors, logistics APIs, accounting platforms, and legacy databases — with proper retry logic, event queues, error handling, and observability dashboards." },
  { id: "ops",  tag: "Internal Tools",    title: "Operations & Reporting Dashboards", icon: LayoutDashboard,iconBg: "bg-violet-500/10", iconColor: "text-violet-400", tagColor: "bg-violet-500/10 text-violet-400 border-violet-500/20", summary: "We've built internal tools for operations, finance, and management teams — replacing manual Excel workflows with live dashboards, configurable KPI widgets, automated reports, and role-based access." },
  { id: "ai",   tag: "AI Integration",    title: "AI-Enhanced Features",             icon: Sparkles,      iconBg: "bg-amber-500/10",  iconColor: "text-amber-400",  tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",   summary: "Our team has worked on practical AI integrations — document extraction, smart search, automated data pipelines, and workflow automation. We treat AI as an engineering discipline: prompt design, output validation, fallback logic, and cost management all matter." },
];

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-150 h-100 bg-violet-600/5 rounded-full blur-[120px]" />
        </div>
        <ImicongoHeroAccent />
        <EcgPulse />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.span variants={fadeInUp} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20 tracking-wide uppercase mb-5">
              Our Work
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight tracking-tight mb-6">
              Digital systems we&apos;ve built —{" "}
              <span className="gradient-text">and automated</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-dim leading-relaxed max-w-2xl">
              A look at the custom software, business process automations, and integration solutions our team has delivered.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Current projects */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="flex items-center gap-4 mb-10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <h2 className="text-lg font-semibold text-ink">Currently Building</h2>
            </div>
            <div className="flex-1 h-px bg-edge" />
            <span className="text-xs text-ghost">{currentProjects.length} active projects</span>
          </motion.div>

          <div className="space-y-8">
            {currentProjects.map((project, i) => (
              <motion.article
                key={project.id}
                id={project.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className={`glass-card rounded-2xl border ${project.border} ${project.hoverBorder} transition-all duration-300 overflow-hidden`}
              >
                <div className="p-7 lg:p-10">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <div className={`w-9 h-9 rounded-xl ${project.iconBg} flex items-center justify-center`}>
                      <project.icon className={`w-4 h-4 ${project.iconColor}`} />
                    </div>
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${project.tagColor}`}>{project.tag}</span>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border ${project.statusColor}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${project.dot} animate-pulse`} />{project.status}
                    </span>
                    <span className="text-xs text-ghost font-mono ml-auto">{`0${i + 1} / 03`}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-ink mb-1">{project.title}</h2>
                  <p className={`text-sm ${project.iconColor} mb-8`}>{project.subtitle}</p>

                  <div className="grid lg:grid-cols-2 gap-10 mb-8">
                    <div>
                      <h3 className="text-xs font-semibold text-ghost uppercase tracking-widest mb-3">What We&apos;re Building</h3>
                      <p className="text-sm text-dim leading-relaxed mb-6">{project.description}</p>
                      <h3 className="text-xs font-semibold text-ghost uppercase tracking-widest mb-3">Scope</h3>
                      <ul className="space-y-2">
                        {project.scope.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-dim">
                            <ArrowRight className={`w-3.5 h-3.5 ${project.iconColor} shrink-0 mt-0.5`} />{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>{project.mockup}</div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-edge">
                    <span className="text-xs text-ghost">Stack:</span>
                    {project.stack.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-lg bg-surface-1 border border-edge text-xs text-dim">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Team background */}
      <section className="py-16 lg:py-20 border-t border-edge">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="flex items-center gap-4 mb-4">
            <h2 className="text-lg font-semibold text-ink">Team Background</h2>
            <div className="flex-1 h-px bg-edge" />
          </motion.div>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-sm text-ghost max-w-2xl mb-10">
            Before Tech & Us, our team built production systems across several domains. This is the hands-on experience we bring to every project.
          </motion.p>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid sm:grid-cols-2 gap-5">
            {teamExperience.map((exp) => (
              <motion.div key={exp.id} variants={fadeInUp} className="glass-card-hover rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-xl ${exp.iconBg} flex items-center justify-center shrink-0`}>
                    <exp.icon className={`w-4 h-4 ${exp.iconColor}`} />
                  </div>
                  <div>
                    <span className={`inline-block px-2 py-0.5 rounded-md text-xs font-semibold border ${exp.tagColor} mb-0.5`}>{exp.tag}</span>
                    <h3 className="text-sm font-semibold text-ink leading-tight">{exp.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-ghost leading-relaxed">{exp.summary}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
