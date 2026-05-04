"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import { Monitor, Building2, PlugZap, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    icon: Building2,
    tag: "Digitization",
    title: "Business Process Digitization",
    color: "emerald",
    image: "/business-website.webp",
    imageAlt: "Business dashboard with automated workflows",
    description:
      "Move away from manual spreadsheets and disconnected tools. We architect centralized, automated systems that run your core business operations smoothly.",
    features: ["Internal Dashboards", "Workflow Automation", "ERP/CRM Development", "Data Centralization"],
  },
  {
    icon: Monitor,
    tag: "Web Apps",
    title: "Custom Web Applications",
    color: "blue",
    image: "/website-image.webp",
    imageAlt: "High-performance custom web application",
    description:
      "Scalable, secure, and fast web platforms built for your specific business logic. We focus on reliable architecture that supports your growth.",
    features: ["React / Next.js", "REST & GraphQL APIs", "Scalable Architecture", "High Performance"],
  },
  {
    icon: PlugZap,
    tag: "Integrations",
    title: "Payment & System Integrations",
    color: "violet",
    image: "/mobile-2-image.webp",
    imageAlt: "System integration and payment gateways",
    description:
      "Connect your fragmented tools. We build secure API middleware and payment gateway integrations so your data flows seamlessly across all platforms.",
    features: ["Payment Gateways", "API Middleware", "Accounting Sync", "Webhook Infrastructure"],
  },
  {
    icon: Rocket,
    tag: "Startups",
    title: "Startup MVP Development",
    color: "amber",
    image: "/ai-image.webp",
    imageAlt: "Startup MVP and rapid prototyping",
    description:
      "Turn your validated idea into a market-ready product. We build robust Minimum Viable Products focused on core value, ready to launch and scale.",
    features: ["Rapid Prototyping", "Core Feature Build", "Scalable Tech Stack", "Launch Support"],
  },
];

const colorMap: Record<string, {
  border: string;
  tag: string;
  feature: string;
  gradient: string;
}> = {
  blue:    { border: "border-blue-500/20 hover:border-blue-500/40",     tag: "bg-blue-500/10 text-blue-400",     feature: "text-blue-400",    gradient: "from-blue-500/20"    },
  violet:  { border: "border-violet-500/20 hover:border-violet-500/40", tag: "bg-violet-500/10 text-violet-400", feature: "text-violet-400",  gradient: "from-violet-500/20"  },
  emerald: { border: "border-emerald-500/20 hover:border-emerald-500/40",tag: "bg-emerald-500/10 text-emerald-400",feature: "text-emerald-400",gradient: "from-emerald-500/20" },
  amber:   { border: "border-amber-500/20 hover:border-amber-500/40",   tag: "bg-amber-500/10 text-amber-400",   feature: "text-amber-400",   gradient: "from-amber-500/20"   },
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
                className={`group glass-card rounded-2xl border ${c.border} transition-all duration-300 hover:shadow-xl overflow-hidden`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Bottom gradient fade into card background */}
                  <div className={`absolute inset-x-0 bottom-0 h-20 bg-linear-to-t ${c.gradient} to-transparent`} />
                  {/* Tag pill — sits on the image */}
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold backdrop-blur-sm ${c.tag}`}>
                      <s.icon className="w-3 h-3" />
                      {s.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-base font-semibold text-ink mb-2">{s.title}</h3>
                  <p className="text-sm text-dim leading-relaxed mb-4">{s.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {s.features.map((f) => (
                      <span
                        key={f}
                        className={`text-xs ${c.feature} bg-surface-1 px-2.5 py-1 rounded-lg border border-edge`}
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/services"
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold ${c.feature} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                  >
                    Learn more <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
