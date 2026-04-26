"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { viewportConfig } from "@/lib/utils";

const team = [
  {
    name: "Patrick Kabanda",
    role: "Founder & CTO",
    bio: "Backend-focused systems architect and former CTO at Netpipo Ltd. Specialises in fintech, SaaS, and operations-heavy systems — payments, accounting integrations, and production infrastructure.",
    initials: "PK",
    accentClass: "from-blue-500 to-violet-600",
    ringClass: "ring-blue-500/30",
    glowClass: "from-blue-500/8 to-violet-600/8",
    labelClass: "text-blue-400",
    skills: ["React", "Python", "FastAPI", "PostgreSQL", "Docker", "QuickBooks API", "UrubutoPay API", "IremboPay API"],
    achievements: [
      { value: "9+",    label: "Production systems" },
      { value: "99.9%", label: "Uptime delivered" },
      { value: "50K+",  label: "Transactions processed" },
    ],
    links: { linkedin: "https://linkedin.com/in/patrick-kabanda", github: "https://github.com/kabandapatrick2580" },
  },
  {
    name: "Amina Uwase",
    role: "UI/UX & Frontend Engineer",
    bio: "Designs interfaces people actually enjoy using. Believes great software starts with empathy — understanding the user before picking a color.",
    initials: "AU",
    accentClass: "from-emerald-500 to-teal-600",
    ringClass: "ring-emerald-500/30",
    glowClass: "from-emerald-500/8 to-teal-600/8",
    labelClass: "text-emerald-400",
    skills: ["React", "Figma", "Tailwind CSS", "Accessibility"],
    achievements: [] as { value: string; label: string }[],
    links: { linkedin: "#" },
  },
  {
    name: "Jean de Dieu Niyonkuru",
    role: "Backend & Systems Engineer",
    bio: "Builds the invisible infrastructure that keeps everything running. Obsessed with data integrity, clean APIs, and systems that hold up under real pressure.",
    initials: "JN",
    accentClass: "from-amber-500 to-orange-600",
    ringClass: "ring-amber-500/30",
    glowClass: "from-amber-500/8 to-orange-600/8",
    labelClass: "text-amber-400",
    skills: ["Python", "PostgreSQL", "AWS", "API Design"],
    achievements: [] as { value: string; label: string }[],
    links: { linkedin: "#", github: "#" },
  },
  {
    name: "Grace Mutesi",
    role: "Mobile & DevOps Engineer",
    bio: "Ships cross-platform apps and keeps deployments clean. Makes sure what works in staging also works at 2am in production — without exception.",
    initials: "GM",
    accentClass: "from-pink-500 to-rose-600",
    ringClass: "ring-pink-500/30",
    glowClass: "from-pink-500/8 to-rose-600/8",
    labelClass: "text-pink-400",
    skills: ["React Native", "Docker", "CI/CD", "Expo"],
    achievements: [] as { value: string; label: string }[],
    links: { linkedin: "#" },
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 52, rotateX: 10, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.11,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

function TeamCard({ member, index }: { member: (typeof team)[0]; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
      className={`group relative glass-card rounded-2xl border border-edge overflow-hidden`}
    >
      {/* Hover glow */}
      <div
        className={`absolute inset-0 bg-linear-to-br ${member.glowClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
      />

      {/* Top accent line that grows left→right on hover */}
      <div
        className={`absolute top-0 left-0 h-0.5 bg-linear-to-r ${member.accentClass} w-0 group-hover:w-full transition-all duration-500 ease-out`}
      />

      <div className="relative p-6">
        {/* Avatar row */}
        <div className="flex items-start justify-between mb-5">
          <div className="relative">
            <div
              className={`w-14 h-14 rounded-2xl bg-linear-to-br ${member.accentClass} flex items-center justify-center shadow-lg`}
            >
              <span className="text-base font-bold text-white tracking-wide">
                {member.initials}
              </span>
            </div>
            {/* Glow ring that pulses in on hover */}
            <div
              className={`absolute inset-0 rounded-2xl ring-2 ${member.ringClass} opacity-0 group-hover:opacity-100 scale-110 transition-all duration-300`}
            />
          </div>

          {/* Social links — fade in on hover */}
          <div className="flex gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pt-1">
            {member.links.linkedin && (
              <a
                href={member.links.linkedin} target="_blank"
                aria-label={`${member.name} on LinkedIn`}
                className="text-ghost hover:text-blue-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            )}
            {member.links.github && (
              <a
                href={member.links.github} target="_blank"
                aria-label={`${member.name} on GitHub`}
                className="text-ghost hover:text-ink transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Name + role */}
        <h3 className="text-base font-semibold text-ink mb-0.5 leading-snug">
          {member.name}
        </h3>
        <p className={`text-xs font-medium ${member.labelClass} mb-3`}>
          {member.role}
        </p>

        {/* Bio */}
        <p className="text-xs text-ghost leading-relaxed mb-4">{member.bio}</p>

        {/* Achievement stats — only rendered when the member has them */}
        {member.achievements.length > 0 && (
          <div className="grid grid-cols-3 gap-2 mb-4 p-3 rounded-xl bg-surface-1 border border-edge">
            {member.achievements.map((a) => (
              <div key={a.label} className="text-center">
                <div className={`text-sm font-bold ${member.labelClass}`}>{a.value}</div>
                <div className="text-[10px] text-ghost leading-tight mt-0.5">{a.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-edge">
          {member.skills.map((s) => (
            <span
              key={s}
              className="px-2 py-0.5 rounded-md bg-surface-1 border border-edge text-xs text-dim"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function TeamSection() {
  return (
    <section className="py-20 lg:py-28 border-t border-edge">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="The People"
          title="Who"
          titleGradient="We Are"
          description="A small team with deep roots in real business problems. We don't outsource, we don't disappear after handoff, and we're reachable when things break."
          className="mb-14"
        />

        {/* perspective wrapper gives the rotateX entry animation depth */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          style={{ perspective: "900px" }}
        >
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
