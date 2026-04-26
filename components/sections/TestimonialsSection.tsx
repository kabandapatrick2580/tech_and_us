"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { viewportConfig } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "They didn't just build what we asked for — they pointed out a flaw in our original plan that would have cost us months later. That kind of honesty is rare.",
    name: "David Mugabo",
    role: "CEO",
    company: "CSCA Ltd",
    initials: "DM",
    accentClass: "from-blue-500 to-violet-600",
  },
  {
    quote:
      "The migration tool handled every edge case before we even knew it existed. Data arrived clean, in order, with a full audit trail. Exactly what we needed.",
    name: "Sarah Chen",
    role: "Operations Director",
    company: "Clearwater Finance",
    initials: "SC",
    accentClass: "from-emerald-500 to-teal-600",
  },
  {
    quote:
      "We've worked with three dev agencies before. Tech & Us is the first one that actually reads their own documentation. Communication was excellent throughout.",
    name: "Olivier Habimana",
    role: "Founder",
    company: "Inzozi Ventures",
    initials: "OH",
    accentClass: "from-amber-500 to-orange-600",
  },
  {
    quote:
      "Shipped our MVP in six weeks, no drama. They were transparent about scope, gave us options when requirements changed, and didn't vanish after handoff.",
    name: "Nia Okafor",
    role: "Co-Founder & CTO",
    company: "Stackr",
    initials: "NO",
    accentClass: "from-pink-500 to-rose-600",
  },
  {
    quote:
      "They built us an internal dashboard that replaced three separate spreadsheets. The team genuinely cared that non-technical staff could use it without training.",
    name: "James Nkurunziza",
    role: "Operations Manager",
    company: "Kigali Logistics Group",
    initials: "JN",
    accentClass: "from-violet-500 to-purple-600",
  },
  {
    quote:
      "Fast, reliable, and honest about what's actually possible. I've already referred two other founders to them — and I don't do that lightly.",
    name: "Priya Sharma",
    role: "Founder",
    company: "PaysSync",
    initials: "PS",
    accentClass: "from-cyan-500 to-blue-600",
  },
];

const row1 = testimonials.slice(0, 3);
const row2 = testimonials.slice(3, 6);

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="w-80 shrink-0 mx-3 glass-card-hover rounded-2xl p-6 border border-edge flex flex-col gap-4">
      <Quote className="w-5 h-5 text-blue-400/40 shrink-0" />
      <p className="text-sm text-dim leading-relaxed flex-1">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-3 border-t border-edge">
        <div
          className={`w-9 h-9 rounded-full bg-linear-to-br ${t.accentClass} flex items-center justify-center shrink-0`}
        >
          <span className="text-[11px] font-bold text-white">{t.initials}</span>
        </div>
        <div>
          <p className="text-xs font-semibold text-ink leading-tight">{t.name}</p>
          <p className="text-xs text-ghost">
            {t.role}, {t.company}
          </p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: (typeof testimonials)[0][];
  direction: "left" | "right";
}) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden">
      <div className={direction === "left" ? "marquee-left flex" : "marquee-right flex"}>
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.initials}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 border-t border-edge overflow-hidden">
      {/* Section header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-7xl mx-auto px-6 lg:px-8 mb-14"
      >
        <SectionHeader
          eyebrow="Client Feedback"
          title="What Clients"
          titleGradient="Say"
          description="Honest feedback from people we've worked with. No cherry-picked marketing quotes — just what happens when you build things right."
        />
      </motion.div>

      {/* Marquee wrapper — hover on this div pauses both rows */}
      <div className="marquee-wrapper relative">
        {/* Left fade edge */}
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-linear-to-r from-page to-transparent z-10 pointer-events-none" />
        {/* Right fade edge */}
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-linear-to-l from-page to-transparent z-10 pointer-events-none" />

        <div className="flex flex-col gap-4">
          <MarqueeRow items={row1} direction="left" />
          <MarqueeRow items={row2} direction="right" />
        </div>
      </div>

      {/* Bottom note */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-xs text-ghost mt-10"
      >
        Hover to pause · Scroll to read
      </motion.p>
    </section>
  );
}
