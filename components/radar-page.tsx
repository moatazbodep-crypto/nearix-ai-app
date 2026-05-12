"use client"

import { useState } from "react"
import { AlertTriangle, TrendingUp, TrendingDown, Clock, Target, Zap, ChevronRight, Radio } from "lucide-react"
import { GlassCard } from "./glass-card"

const marketSignals = [
  {
    type: "opportunity",
    title: "Camera Market Dip",
    description: "Professional cameras showing 15% price drop trend",
    urgency: "high",
    timeAgo: "2h ago",
  },
  {
    type: "warning",
    title: "Luxury Watch Surge",
    description: "Rolex prices expected to rise in 48hrs",
    urgency: "medium",
    timeAgo: "5h ago",
  },
  {
    type: "prediction",
    title: "EV Market Shift",
    description: "Tesla Model S optimal buying window in 2 weeks",
    urgency: "low",
    timeAgo: "1d ago",
  },
]

const buyOrWait = [
  { item: "iPhone 16 Pro", recommendation: "wait", reason: "Price drop expected in 3 weeks", confidence: 87 },
  { item: "Sony A7 IV", recommendation: "buy", reason: "Lowest price in 6 months", confidence: 92 },
  { item: "Rolex Datejust", recommendation: "buy", reason: "Below market average", confidence: 78 },
]

const marketShakes = [
  { category: "Electronics", change: -8.5, trend: "down" },
  { category: "Luxury Watches", change: 12.3, trend: "up" },
  { category: "Real Estate", change: -2.1, trend: "down" },
  { category: "Vehicles", change: 5.7, trend: "up" },
]

export function RadarPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  return (
    <div className="min-h-screen pb-32 pt-6">
      {/* Header */}
      <div className="px-5 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15">
            <Radio className="h-5 w-5 text-violet-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Radar</h1>
            <p className="text-xs text-violet-300/50">AI Market Intelligence</p>
          </div>
        </div>
      </div>

      <div className="space-y-6 px-5">
        {/* Live Radar Visualization */}
        <GlassCard className="relative overflow-hidden h-48">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Radar rings */}
            {[1, 2, 3, 4].map((ring) => (
              <div
                key={ring}
                className="absolute rounded-full border border-violet-500/20"
                style={{
                  width: `${ring * 80}px`,
                  height: `${ring * 80}px`,
                }}
              />
            ))}
            {/* Radar sweep */}
            <div 
              className="absolute w-40 h-0.5 origin-left"
              style={{
                background: "linear-gradient(90deg, rgba(139, 92, 246, 0.6) 0%, transparent 100%)",
                animation: "spin 4s linear infinite",
              }}
            />
            {/* Center dot */}
            <div className="h-3 w-3 rounded-full bg-violet-500 animate-pulse" />
            {/* Signal dots */}
            <div className="absolute top-12 right-16 h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <div className="absolute bottom-16 left-20 h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <div className="absolute top-20 left-16 h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
          </div>
          {/* Status */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-violet-300/60">Scanning markets...</span>
            </div>
            <span className="text-xs text-violet-300/40">3 signals detected</span>
          </div>
        </GlassCard>

        {/* Market Signals */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Market Signals</h3>
          <button className="text-xs text-violet-400/70">See all</button>
        </div>

        <div className="space-y-3">
          {marketSignals.map((signal, index) => (
            <GlassCard key={index} className="relative overflow-hidden">
              <div className="flex items-start gap-3">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                  signal.type === "opportunity" ? "bg-emerald-500/15" :
                  signal.type === "warning" ? "bg-amber-500/15" : "bg-violet-500/15"
                }`}>
                  {signal.type === "opportunity" && <Target className="h-5 w-5 text-emerald-400" />}
                  {signal.type === "warning" && <AlertTriangle className="h-5 w-5 text-amber-400" />}
                  {signal.type === "prediction" && <Clock className="h-5 w-5 text-violet-400" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-white">{signal.title}</p>
                    {signal.urgency === "high" && (
                      <span className="px-1.5 py-0.5 text-[10px] font-medium bg-rose-500/20 text-rose-400 rounded">URGENT</span>
                    )}
                  </div>
                  <p className="text-xs text-violet-300/50 mt-0.5">{signal.description}</p>
                </div>
                <span className="text-[10px] text-violet-300/40 shrink-0">{signal.timeAgo}</span>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Buy or Wait Advisor */}
        <div className="flex items-center justify-between mt-4">
          <h3 className="text-lg font-semibold text-white">Buy or Wait</h3>
        </div>

        <div className="space-y-3">
          {buyOrWait.map((item, index) => (
            <GlassCard key={index}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">{item.item}</p>
                  <p className="text-xs text-violet-300/50 mt-0.5">{item.reason}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    item.recommendation === "buy" 
                      ? "bg-emerald-500/20 text-emerald-400" 
                      : "bg-amber-500/20 text-amber-400"
                  }`}>
                    {item.recommendation === "buy" ? "BUY NOW" : "WAIT"}
                  </span>
                  <span className="text-[10px] text-violet-300/40">{item.confidence}% confidence</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Market Shake Predictor */}
        <div className="flex items-center justify-between mt-4">
          <h3 className="text-lg font-semibold text-white">Market Movement</h3>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {marketShakes.map((market, index) => (
            <GlassCard key={index} className="relative">
              <div className="flex flex-col gap-2">
                <p className="text-xs text-violet-300/50">{market.category}</p>
                <div className="flex items-center gap-2">
                  {market.trend === "up" ? (
                    <TrendingUp className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-rose-400" />
                  )}
                  <span className={`text-lg font-bold ${market.trend === "up" ? "text-emerald-400" : "text-rose-400"}`}>
                    {market.trend === "up" ? "+" : ""}{market.change}%
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}
