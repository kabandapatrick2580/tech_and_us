"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleGradient?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleGradient,
  description,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={`${centered ? "text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-4 ${centered ? "" : ""}`}>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 tracking-wide uppercase">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
        {title}{" "}
        {titleGradient && (
          <span className="gradient-text">{titleGradient}</span>
        )}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg text-gray-400 leading-relaxed ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
