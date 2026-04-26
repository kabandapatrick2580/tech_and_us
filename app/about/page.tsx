"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from "@/lib/utils";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import CtaSection from "@/components/sections/CtaSection";
import { Target, Cpu, Users, Heart, CheckCircle2, CreditCard, LayoutDashboard, PlugZap, Server } from "lucide-react";
import ImicongoHeroAccent from "@/components/ui/ImicongoHeroAccent";
import TeamSection from "@/components/sections/TeamSection";

const values = [
  { icon: Target, title: "Clarity First",        color: "text-blue-400",   bg: "bg-blue-400/10",   description: "We don't overcomplicate things. Clear requirements, clear architecture, clear communication — all the way to delivery." },
  { icon: Cpu,    title: "System Thinking",       color: "text-violet-400", bg: "bg-violet-400/10", description: "We see the full picture. Every feature we build fits into a larger system — and we design for how things interact, not just how they look alone." },
  { icon: Users,  title: "Real Collaboration",    color: "text-emerald-400",bg: "bg-emerald-400/10",description: "You're not a ticket in our queue. You're a partner. We communicate directly, respond fast, and treat your project like it matters." },
  { icon: Heart,  title: "Genuine Ownership",     color: "text-amber-400",  bg: "bg-amber-400/10",  description: "When something ships under our name, we stand behind it. We take accountability seriously and don't pass problems back to clients." },
];

const stack = [
  { category: "Frontend",        items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Mobile",          items: ["React Native", "Expo", "iOS", "Android"] },
  { category: "Backend",         items: ["Node.js", "Python", "PostgreSQL", "Redis"] },
  { category: "Infrastructure",  items: ["AWS", "Vercel", "Docker", "CI/CD"] },
];

const specialisations = [
  {
    icon: CreditCard,
    title: "Payments & Fintech",
    desc: "Payment gateway integrations, invoice workflows, webhook handling. We've worked with UrubutoPay, IremboPay, QuickBooks, and custom accounting pipelines.",
    iconColor:  "text-blue-400",
    iconBg:     "bg-blue-400/10",
    glowClass:  "from-blue-500/8 to-blue-600/5",
    borderHover:"hover:border-blue-500/30",
  },
  {
    icon: LayoutDashboard,
    title: "Business Operations Tools",
    desc: "Admin dashboards, approval workflows, internal automation. We turn manual, error-prone processes into software that runs itself.",
    iconColor:  "text-violet-400",
    iconBg:     "bg-violet-400/10",
    glowClass:  "from-violet-500/8 to-violet-600/5",
    borderHover:"hover:border-violet-500/30",
  },
  {
    icon: PlugZap,
    title: "API Integrations",
    desc: "Connecting your stack to third-party services — reliably. Data sync, USSD flows, webhook infrastructure, and clean API design.",
    iconColor:  "text-emerald-400",
    iconBg:     "bg-emerald-400/10",
    glowClass:  "from-emerald-500/8 to-emerald-600/5",
    borderHover:"hover:border-emerald-500/30",
  },
  {
    icon: Server,
    title: "Backend & Infrastructure",
    desc: "Production-hardened systems built on PostgreSQL, Docker, and Linux. We care about uptime, not just shipping — 99.9% is the standard we hold ourselves to.",
    iconColor:  "text-amber-400",
    iconBg:     "bg-amber-400/10",
    glowClass:  "from-amber-500/8 to-amber-600/5",
    borderHover:"hover:border-amber-500/30",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-125 h-125 bg-blue-600/6 rounded-full blur-[120px]" />
        </div>
        <ImicongoHeroAccent />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.span variants={fadeInUp} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 tracking-wide uppercase mb-5">
              About Us
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight tracking-tight mb-6">
              A team that builds{" "}
              <span className="gradient-text">things that work</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-dim leading-relaxed mb-8 max-w-2xl">
              Tech & Us is a software and systems company based in Kigali, Rwanda. We build payment integrations, operational tools, and backend infrastructure for fintech, SaaS, and operations-heavy businesses — locally and internationally.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <Button href="/work" icon>See Our Work</Button>
              <Button href="/contact" variant="secondary">Get in Touch</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewportConfig}>
              <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-6 leading-tight">
                Built for businesses with real operational complexity
              </h2>
              <div className="space-y-4 text-dim text-base leading-relaxed">
                <p>Tech & Us specialises in the parts of software most agencies avoid — payment systems, accounting integrations, internal operations tools, and backend infrastructure that has to perform when the business depends on it.</p>
                <p>Our work spans fintech platforms, SaaS products, and operations-heavy businesses across Rwanda and internationally. Delivered projects include payment pipelines processing over 50,000 transactions, integrations with QuickBooks and local payment providers, and internal systems that replaced manual workflows entirely.</p>
                <p>We engage directly with founders, operations leads, and technical teams — without project management layers that slow things down. Every engagement begins with a thorough understanding of how the business actually runs before any architecture is proposed.</p>
                <p>The standard we hold ourselves to: systems that are maintainable, properly documented, and built to scale with the business — not just to clear a deadline.</p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-2 gap-4"
            >
              {specialisations.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className={`group relative glass-card rounded-2xl p-5 flex flex-col gap-3 border border-edge transition-colors duration-300 ${item.borderHover} overflow-hidden`}
                >
                  {/* Per-card background glow on hover */}
                  <div className={`absolute inset-0 bg-linear-to-br ${item.glowClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                  <div className={`relative w-9 h-9 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0`}>
                    <item.icon className={`w-4.5 h-4.5 ${item.iconColor}`} />
                  </div>
                  <h3 className="relative text-sm font-semibold text-ink leading-snug">{item.title}</h3>
                  <p className="relative text-xs text-ghost leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 border-t border-edge">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader eyebrow="How We Operate" title="Our" titleGradient="Values" description="Not posters on a wall. These are the things that shape how we actually work day to day." className="mb-12" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeInUp} className="glass-card-hover rounded-2xl p-6">
                <div className={`w-10 h-10 rounded-xl ${v.bg} flex items-center justify-center mb-4`}>
                  <v.icon className={`w-5 h-5 ${v.color}`} />
                </div>
                <h3 className="text-base font-semibold text-ink mb-2">{v.title}</h3>
                <p className="text-sm text-ghost leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-20 lg:py-28 border-t border-edge">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader eyebrow="What We Use" title="Our Tech" titleGradient="Stack" description="Modern, battle-tested tools. No trendy frameworks for their own sake — just what gets the job done reliably." className="mb-12" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stack.map((group) => (
              <motion.div key={group.category} variants={fadeInUp} className="glass-card rounded-2xl p-5">
                <h3 className="text-xs font-semibold text-ghost uppercase tracking-widest mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="px-2.5 py-1 rounded-lg bg-surface-1 border border-edge text-xs text-dim">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <TeamSection />
      <CtaSection />
    </>
  );
}
