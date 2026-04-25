"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from "@/lib/utils";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import CtaSection from "@/components/sections/CtaSection";
import { Target, Cpu, Users, Heart, CheckCircle2 } from "lucide-react";
import ImicongoHeroAccent from "@/components/ui/ImicongoHeroAccent";

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

const timeline = [
  { year: "2021", title: "Founded in Kigali",       desc: "Started as a small team solving real problems for local businesses — HR systems, payment tools, internal dashboards." },
  { year: "2022", title: "First International Work", desc: "Expanded beyond Rwanda. Took on API integration and SaaS projects for clients in Europe and the US." },
  { year: "2023", title: "AI & Automation Work",     desc: "Started integrating AI into client products — smart search, document automation, intelligent reporting." },
  { year: "2024+", title: "Full Product Teams",      desc: "Now operating as full embedded product teams — design, development, and strategy under one roof." },
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
              Tech & Us started with a simple frustration: too many businesses running on broken, disconnected, or nonexistent software. We set out to fix that — one well-built system at a time.
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
                We build systems, not just software
              </h2>
              <div className="space-y-4 text-dim text-base leading-relaxed">
                <p>Most development teams write code. We engineer systems. The difference matters when you&apos;re three years in and trying to scale — or when something breaks on a Friday evening.</p>
                <p>We started Tech & Us because we kept seeing the same patterns: businesses paying for tools that didn&apos;t fit, systems that couldn&apos;t grow, and developers who were good at writing code but not at understanding business operations.</p>
                <p>Our background spans real business problems — HR software, payroll systems, API integrations, government tools, and operational dashboards. We&apos;ve seen what breaks and why. We build to avoid those failure points.</p>
                <p>That&apos;s not a sales pitch. It&apos;s the reason every project we take on starts with a deep conversation about how your business actually works — before we touch a keyboard.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={viewportConfig} className="space-y-4">
              {timeline.map((item, i) => (
                <div key={item.year} className="relative pl-14">
                  {i < timeline.length - 1 && (
                    <div className="absolute left-5 top-10 bottom-0 w-px bg-linear-to-b from-blue-500/20 to-transparent" />
                  )}
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400">
                    {item.year.slice(2)}
                  </div>
                  <div className="glass-card rounded-xl p-4">
                    <div className="text-xs text-blue-400 font-semibold mb-1">{item.year}</div>
                    <h3 className="text-sm font-semibold text-ink mb-1">{item.title}</h3>
                    <p className="text-xs text-ghost leading-relaxed">{item.desc}</p>
                  </div>
                </div>
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

      <CtaSection />
    </>
  );
}
