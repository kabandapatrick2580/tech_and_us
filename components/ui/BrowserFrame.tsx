"use client";

import { motion } from "framer-motion";

interface BrowserFrameProps {
  children:   React.ReactNode;
  className?: string;
  url?:       string;
}

export default function BrowserFrame({
  children,
  className = "",
  url       = "app.techandus.rw/dashboard",
}: BrowserFrameProps) {
  return (
    <motion.div
      className={`rounded-2xl overflow-hidden border border-edge bg-well shadow-2xl ${className}`}
      style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.35), 0 0 0 1px var(--edge), inset 0 1px 0 var(--surface-2)" }}
    >
      {/* Chrome bar */}
      <div className="bg-well-deep border-b border-edge px-4 py-3 flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 mx-3">
          <div className="bg-well border border-edge rounded-lg px-3 py-1.5 flex items-center gap-2 max-w-xs mx-auto">
            <div className="w-3 h-3 rounded-full bg-emerald-500/60 shrink-0" />
            <span className="text-ghost text-xs font-mono truncate">{url}</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          {[1, 2, 3].map((i) => <div key={i} className="w-4 h-4 rounded bg-surface-1" />)}
        </div>
      </div>
      <div className="relative overflow-hidden">{children}</div>
    </motion.div>
  );
}
