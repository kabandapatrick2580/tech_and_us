"use client";

import { motion } from "framer-motion";

interface BrowserFrameProps {
  children: React.ReactNode;
  className?: string;
  url?: string;
}

export default function BrowserFrame({
  children,
  className = "",
  url = "app.techandus.rw/dashboard",
}: BrowserFrameProps) {
  return (
    <motion.div
      className={`rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0d1117] shadow-2xl shadow-black/60 ${className}`}
      style={{
        boxShadow:
          "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.08)",
      }}
    >
      {/* Browser chrome */}
      <div className="bg-[#161b22] border-b border-white/[0.07] px-4 py-3 flex items-center gap-3">
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        {/* Address bar */}
        <div className="flex-1 mx-3">
          <div className="bg-[#0d1117] border border-white/[0.08] rounded-lg px-3 py-1.5 flex items-center gap-2 max-w-xs mx-auto">
            <div className="w-3 h-3 rounded-full bg-green-500/60 flex-shrink-0" />
            <span className="text-gray-500 text-xs font-mono truncate">{url}</span>
          </div>
        </div>
        {/* Action icons placeholder */}
        <div className="flex items-center gap-1.5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-4 h-4 rounded bg-white/[0.04]" />
          ))}
        </div>
      </div>
      {/* Content */}
      <div className="relative overflow-hidden">{children}</div>
    </motion.div>
  );
}
