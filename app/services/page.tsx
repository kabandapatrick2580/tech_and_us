"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { 
  Code, PenTool, TrendingUp, Box, 
  Rocket, CheckCircle2, ArrowRight, Zap, Layers, Star 
} from "lucide-react";
import ImicongoHeroAccent from "@/components/ui/ImicongoHeroAccent";

const phases = [
  {
    id: "build", 
    title: "BUILD", 
    subtitle: "Foundation",
    icon: Code, 
    color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20",
    description: "Robust software and platforms engineered for scale.",
    items: [
      { title: "IT Consultancy", desc: "Strategic technical guidance and system architecture." },
      { title: "Software / Mobile Development", desc: "Custom web applications and cross-platform native apps." }
    ]
  },
  {
    id: "brand", 
    title: "BRAND", 
    subtitle: "Identity",
    icon: PenTool, 
    color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20",
    description: "Memorable identities that capture your vision and stand out.",
    items: [
      { title: "Logo & Identity Design", desc: "Visual systems that communicate your core values." },
      { title: "Marketing Materials", desc: "High-quality assets for digital and physical touchpoints." }
    ]
  },
  {
    id: "grow", 
    title: "GROW", 
    subtitle: "Acquisition",
    icon: TrendingUp, 
    color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20",
    description: "Strategies and tools to reach your audience and drive adoption.",
    items: [
      { title: "Digital Marketing", desc: "Data-driven campaigns across multiple digital platforms." },
      { title: "AI Video Ads & Voice Overs", desc: "Cutting-edge multimedia content for high conversion." }
    ]
  }
];

const solutions = [
  {
    name: "Goalifai",
    category: "Fintech Platform",
    status: "Beta",
    description: "A personal finance app helping individuals set, track, and reach their financial goals with smart analytics and automated nudges.",
  },
  {
    name: "SyncFlow",
    category: "Data Tool",
    status: "Coming Soon",
    description: "Purpose-built middleware for migrating and syncing business data cleanly and reliably across CRMs, ERPs, and accounting tools.",
  },
];

const packages = [
  {
    name: "Startup Package",
    desc: "Everything you need to launch your idea.",
    features: ["Brand Identity & Logo", "Landing Page Development", "Basic SEO & Analytics", "Social Media Assets"],
  },
  {
    name: "Growth Package",
    desc: "Scale your existing product and reach.",
    features: ["Marketing Automation", "Performance Optimisation", "Ad Campaigns & AI Videos", "Conversion Tracking"],
  },
  {
    name: "Enterprise Package",
    desc: "Custom solutions for complex operations.",
    features: ["Custom ERP/CRM Systems", "API Integrations", "Dedicated Technical Support", "Infrastructure Scaling"],
  }
];

const processSteps = [
  { step: "01", title: "Discover", desc: "We analyze your business needs, market landscape, and technical requirements to define a clear roadmap." },
  { step: "02", title: "Design & Build", desc: "Our team crafts the brand architecture, UI/UX, and robust software functionality iteratively." },
  { step: "03", title: "Launch & Grow", desc: "We deploy to production and implement data-driven marketing strategies to scale your user base." }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/3 w-125 h-125 bg-violet-600/6 rounded-full blur-[120px]" />
        </div>
        <ImicongoHeroAccent />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.span variants={fadeInUp} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20 tracking-wide uppercase mb-5">
              Services & Solutions
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight tracking-tight mb-6">
              From Idea to Impact — We <span className="text-blue-500">Build</span>, <span className="text-violet-500">Brand</span>, and <span className="text-emerald-500">Grow</span> Digital Solutions
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-dim leading-relaxed max-w-2xl">
              We help businesses launch and scale while building our own innovative solutions for the market. A true hybrid tech partner.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mt-8">
              <Button href="/contact" icon>Start Your Project</Button>
              <Button href="#solutions" variant="secondary">Explore Our Solutions</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How it Works / Service Flow */}
      <section className="py-12 border-y border-edge bg-surface-1/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid md:grid-cols-3 gap-8 relative">
            {phases.map((phase, i) => (
              <motion.div key={phase.id} variants={fadeInUp} className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${phase.bg} border ${phase.border} flex items-center justify-center shrink-0`}>
                    <phase.icon className={`w-5 h-5 ${phase.color}`} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-ink tracking-widest">{phase.title}</h3>
                    <p className="text-xs text-ghost uppercase tracking-wider">{phase.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-dim leading-relaxed pr-4">{phase.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Services Grouped */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
          
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Our Core Expertise</h2>
            <p className="text-dim max-w-2xl text-lg">We provide end-to-end digital services structured around the three pillars of a successful tech business.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
          {phases.map((phase) => (
            <motion.div
              key={phase.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className={`glass-card rounded-2xl border ${phase.border} p-8 flex flex-col h-full`}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-10 h-10 rounded-xl ${phase.bg} flex items-center justify-center`}>
                  <phase.icon className={`w-5 h-5 ${phase.color}`} />
                </div>
                <h2 className="text-2xl font-bold text-ink">{phase.title}</h2>
              </div>
              
              <div className="space-y-6 flex-1">
                {phase.items.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="text-sm font-bold text-ink mb-1">{item.title}</h3>
                    <p className="text-sm text-dim leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </section>

      {/* Our Solutions Layer */}
      <section id="solutions" className="py-20 lg:py-28 border-t border-edge bg-surface-1/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="mb-12 text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-surface-2 text-ghost border border-edge tracking-wide uppercase mb-4">
              Internal Products
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-ink mb-4">Our Solutions</h2>
            <p className="text-dim max-w-2xl mx-auto text-lg">We don’t just offer services — we build complete digital ecosystems and create platforms for the future.</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {solutions.map((solution, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="group glass-card border border-edge hover:border-ghost transition-all duration-300 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-surface-1/50 to-surface-2/20 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-surface-2 border border-edge flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      <Box className="w-6 h-6 text-ghost" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium border ${solution.status === 'Live' || solution.status === 'Beta' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'}`}>
                      {solution.status}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-ink mb-2">{solution.name}</h3>
                  <p className="text-xs text-ghost font-mono uppercase tracking-wider mb-4">{solution.category}</p>
                  <p className="text-sm text-dim leading-relaxed mb-8 flex-1">{solution.description}</p>
                  
                  <Button variant="secondary" size="sm" className="w-fit" icon>Learn More</Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solution Packages */}
      <section className="py-20 lg:py-28 border-t border-edge">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Solution Packages</h2>
            <p className="text-dim max-w-2xl mx-auto text-lg">Bundle our services to match the exact stage of your business growth.</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid lg:grid-cols-3 gap-6">
            {packages.map((pkg, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="glass-card rounded-2xl p-8 border border-edge hover:border-ghost transition-colors flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-ink mb-2">{pkg.name}</h3>
                  <p className="text-sm text-ghost">{pkg.desc}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-sm text-dim">
                      <CheckCircle2 className="w-4 h-4 text-ghost shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="secondary" className="w-full justify-center">Inquire Now</Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 border-t border-edge bg-surface-1/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Our Process</h2>
            <p className="text-dim max-w-2xl text-lg">A systematic approach to bringing your vision to market.</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-edge border-dashed border-b pointer-events-none" />
            
            {processSteps.map((step, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-surface-1 border border-edge flex items-center justify-center mb-6 shadow-sm mx-auto md:mx-0">
                  <span className="text-sm font-bold text-ghost">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-ink mb-3 text-center md:text-left">{step.title}</h3>
                <p className="text-sm text-dim leading-relaxed text-center md:text-left">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Custom Final CTA */}
      <section className="py-24 lg:py-32 border-t border-edge relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-blue-500/10 rounded-t-full blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-ink mb-6 tracking-tight">
              Ready to <span className="text-blue-500">Build</span>, <span className="text-violet-500">Brand</span>, and <span className="text-emerald-500">Grow</span>?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-dim mb-10 max-w-2xl mx-auto">
              Whether you need an end-to-end service or access to one of our market-ready solutions, we&apos;re ready to help you succeed.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button href="/contact" size="lg" icon>
                Book a Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
