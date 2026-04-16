"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/utils";
import Button from "@/components/ui/Button";
import CtaSection from "@/components/sections/CtaSection";
import { Monitor, Smartphone, Plug, Building2, Brain, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    id: "web", icon: Monitor, title: "Web Development",
    tagline: "Full-stack web applications built to last",
    description: "We build web applications — from internal tools to customer-facing products — using modern, scalable architectures. Whether you need an MVP or a complex platform, we engineer it properly from the start.",
    useCases: ["Customer portals and dashboards", "Internal operations tools", "E-commerce platforms", "Real-time collaboration tools", "API-driven SaaS products"],
    benefits:  ["Fast load times, clean code", "Mobile-first, fully responsive", "SEO-ready from day one", "Built for growth and maintenance"],
    num: "01", iconColor: "text-blue-400", iconBg: "bg-blue-500/10", tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20", border: "border-blue-500/20",
  },
  {
    id: "mobile", icon: Smartphone, title: "Mobile Development",
    tagline: "Cross-platform apps that feel native",
    description: "iOS and Android applications built with React Native. We handle the full lifecycle — from design to store submission — with a focus on smooth performance and real user experience.",
    useCases: ["Consumer mobile applications", "Field operations apps", "Mobile companion to web systems", "Offline-first tools", "Push notification workflows"],
    benefits:  ["Single codebase, two platforms", "Native-quality performance", "Offline capability built-in", "App Store & Play Store submission"],
    num: "02", iconColor: "text-violet-400", iconBg: "bg-violet-500/10", tagColor: "bg-violet-500/10 text-violet-400 border-violet-500/20", border: "border-violet-500/20",
  },
  {
    id: "api", icon: Plug, title: "API & Integrations",
    tagline: "Connect your tools. Eliminate silos.",
    description: "We design and build APIs that power your products, and we integrate third-party services so your systems talk to each other. Payment gateways, ERPs, CRMs, communication tools — we wire it all together.",
    useCases: ["Payment gateway integration (Stripe, MTN, Flutterwave)", "ERP and CRM connectors", "Webhook event systems", "Government and regulatory APIs", "Internal microservice architectures"],
    benefits:  ["Clean, documented REST APIs", "Secure authentication (OAuth, JWT)", "Error handling and retry logic", "Performance and rate limit management"],
    num: "03", iconColor: "text-emerald-400", iconBg: "bg-emerald-500/10", tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", border: "border-emerald-500/20",
  },
  {
    id: "systems", icon: Building2, title: "Business Systems",
    tagline: "Replace spreadsheets with real software",
    description: "HR, payroll, invoicing, inventory, and reporting tools built for how your business actually operates. We don't fit your processes into generic software — we build something that fits you.",
    useCases: ["HR and employee management", "Payroll and leave systems", "Invoicing and billing tools", "Inventory and stock management", "Reports and analytics dashboards"],
    benefits:  ["Reduces manual data entry", "Role-based access control", "Audit trail and history", "Export to PDF, CSV, and more"],
    num: "04", iconColor: "text-amber-400", iconBg: "bg-amber-500/10", tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20", border: "border-amber-500/20",
  },
  {
    id: "ai", icon: Brain, title: "AI Integration",
    tagline: "Add intelligence to your existing products",
    description: "We integrate AI and machine learning capabilities into your applications — without the hype. Practical AI that solves real problems: smarter search, document processing, automated reporting, and intelligent recommendations.",
    useCases: ["Smart document extraction and parsing", "Automated customer support flows", "Intelligent search and recommendations", "Predictive analytics and reporting", "AI-assisted data entry and validation"],
    benefits:  ["Uses proven AI APIs (OpenAI, Anthropic)", "Integrated into your existing stack", "Prompt engineering and optimisation", "Cost-efficient model usage"],
    num: "05", iconColor: "text-pink-400", iconBg: "bg-pink-500/10", tagColor: "bg-pink-500/10 text-pink-400 border-pink-500/20", border: "border-pink-500/20",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/3 w-125 h-125 bg-violet-600/6 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.span variants={fadeInUp} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20 tracking-wide uppercase mb-5">
              What We Do
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight tracking-tight mb-6">
              Services built around{" "}
              <span className="gradient-text">real problems</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-dim leading-relaxed max-w-2xl">
              We don&apos;t sell packages. Every engagement starts with what you actually need — then we figure out the best way to build it.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              id={service.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className={`glass-card rounded-2xl border ${service.border} overflow-hidden`}
            >
              <div className="p-7 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:gap-16">
                  {/* Left */}
                  <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-10 h-10 rounded-xl ${service.iconBg} flex items-center justify-center`}>
                        <service.icon className={`w-5 h-5 ${service.iconColor}`} />
                      </div>
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${service.tagColor}`}>{service.num}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-ink mb-2">{service.title}</h2>
                    <p className={`text-sm font-medium ${service.iconColor} mb-4`}>{service.tagline}</p>
                    <p className="text-sm text-dim leading-relaxed mb-6">{service.description}</p>
                    <Button href="/contact" variant="secondary" size="sm" icon>Discuss this service</Button>
                  </div>

                  {/* Right */}
                  <div className="lg:w-1/2 grid sm:grid-cols-2 gap-5">
                    <div>
                      <h3 className="text-xs font-semibold text-ghost uppercase tracking-widest mb-3">Use Cases</h3>
                      <ul className="space-y-2">
                        {service.useCases.map((uc) => (
                          <li key={uc} className="flex items-start gap-2 text-sm text-dim">
                            <ArrowRight className={`w-3.5 h-3.5 ${service.iconColor} shrink-0 mt-0.5`} />
                            {uc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-ghost uppercase tracking-widest mb-3">What You Get</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-dim">
                            <CheckCircle2 className={`w-3.5 h-3.5 ${service.iconColor} shrink-0 mt-0.5`} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
