"use client";

import { TrendingUp, Users, DollarSign, Activity, BarChart2 } from "lucide-react";

const stats = [
  { label: "Total Revenue", value: "$124,590", change: "+18.2%", icon: DollarSign, color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { label: "Active Users",  value: "8,342",    change: "+5.4%",  icon: Users,      color: "text-blue-400",   bg: "bg-blue-400/10"   },
  { label: "Growth Rate",   value: "32.8%",    change: "+2.1%",  icon: TrendingUp, color: "text-violet-400", bg: "bg-violet-400/10" },
  { label: "Uptime",        value: "99.97%",   change: "Stable", icon: Activity,   color: "text-amber-400",  bg: "bg-amber-400/10"  },
];

const bars = [40, 65, 48, 80, 55, 92, 70, 85, 60, 95, 72, 88];

export default function DashboardMockup() {
  return (
    <div className="bg-panel p-5 min-h-105">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-xs text-ghost mb-0.5">Good morning</p>
          <h3 className="text-sm font-semibold text-ink">Dashboard Overview</h3>
        </div>
        <div className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400">
          Last 30 days
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-surface-1 border border-edge rounded-xl p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-ghost">{stat.label}</span>
              <div className={`w-6 h-6 rounded-lg ${stat.bg} flex items-center justify-center`}>
                <stat.icon className={`w-3 h-3 ${stat.color}`} />
              </div>
            </div>
            <div className="text-base font-bold text-ink mb-0.5">{stat.value}</div>
            <div className="text-xs text-emerald-400">{stat.change}</div>
          </div>
        ))}
      </div>

      {/* Mini chart */}
      <div className="bg-surface-1 border border-edge rounded-xl p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-medium text-dim">Revenue Trend</span>
          </div>
          <span className="text-xs text-ghost">2024</span>
        </div>
        <div className="flex items-end gap-1.5 h-16">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end">
              <div
                className="rounded-sm"
                style={{
                  height: `${h}%`,
                  background: i === bars.length - 1
                    ? "linear-gradient(to top, var(--brand-500), var(--accent-500))"
                    : "color-mix(in srgb, var(--brand-500) 20%, transparent)",
                }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2">
          {["Jan","Mar","May","Jul","Sep","Nov","Dec"].map((m) => (
            <span key={m} className="text-[9px] text-ghost">{m}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
