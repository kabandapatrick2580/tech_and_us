"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/utils";
import { Code2, Layers, Cpu, Globe } from "lucide-react";

const stats = [
  { value: "50+", label: "Projects Delivered",    icon: Layers, color: "text-blue-400",   bg: "bg-blue-400/10"   },
  { value: "3+",  label: "Years Experience",      icon: Code2,  color: "text-violet-400", bg: "bg-violet-400/10" },
  { value: "99%", label: "Client Satisfaction",   icon: Globe,  color: "text-emerald-400",bg: "bg-emerald-400/10"},
  { value: "10+", label: "Tech Stacks Mastered",  icon: Cpu,    color: "text-amber-400",  bg: "bg-amber-400/10"  },
];

export default function TrustSection() {
  return (
    <section className="relative py-16 lg:py-20 border-y border-edge">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center text-sm text-ghost mb-10 tracking-wide uppercase"
        >
          Built on real-world experience in business systems, APIs, and operational tools
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="glass-card-hover rounded-2xl p-5 lg:p-6 flex flex-col items-center text-center gap-3"
            >
              <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div>
                <div className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-ghost">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
