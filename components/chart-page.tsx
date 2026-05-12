"use client"

import { useState } from "react"
import { LineChart, TrendingUp, TrendingDown, Globe, MapPin, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { GlassCard } from "./glass-card"

const timeRanges = ["1D", "1W", "1M", "3M", "1Y", "ALL"]

const priceHistory = [
  { time: "Jan", local: 1200, global: 1350 },
  { time: "Feb", local: 1180, global: 1320 },
  { time: "Mar", local: 1250, global: 1380 },
  { time: "Apr", local: 1150, global: 1290 },
  { time: "May", local: 1100, global: 1250 },
  { time: "Jun", local: 1080, global: 1220 },
]

const comparisonItems = [
  { 
    name: "Canon EOS R5",
    localPrice: 1100,
    globalPrice: 1250,
    difference: -12,
    bestRegion: "USA",
  },
  { 
    name: "Rolex Submariner",
    localPrice: 14500,
    globalPrice: 12800,
    difference: 13,
    bestRegion: "Dubai",
  },
  { 
    name: "Tesla Model S",
    localPrice: 89000,
    globalPrice: 94500,
    difference: -5.8,
    bestRegion: "China",
  },
]

const predictions = [
  { item: "iPhone 16", direction: "down", percentage: 8, timeframe: "2 weeks" },
  { item: "Gold Price", direction: "up", percentage: 3, timeframe: "1 month" },
  { item: "BTC/USD", direction: "up", percentage: 12, timeframe: "3 months" },
]

export function ChartPage() {
  const [activeRange, setActiveRange] = useState("1M")

  // Calculate chart path
  const maxValue = Math.max(...priceHistory.map(d => Math.max(d.local, d.global)))
  const minValue = Math.min(...priceHistory.map(d => Math.min(d.local, d.global)))
  const range = maxValue - minValue
  
  const createPath = (key: "local" | "global") => {
    return priceHistory.map((d, i) => {
      const x = (i / (priceHistory.length - 1)) * 100
      const y = 100 - ((d[key] - minValue) / range) * 80 - 10
      return `${i === 0 ? "M" : "L"} ${x} ${y}`
    }).join(" ")
  }

  return (
    <div className="min-h-screen pb-32 pt-6">
      {/* Header */}
      <div className="px-5 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15">
            <LineChart className="h-5 w-5 text-violet-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Charts</h1>
            <p className="text-xs text-violet-300/50">Price Intelligence</p>
          </div>
        </div>
      </div>

      <div className="space-y-6 px-5">
        {/* Main Chart */}
        <GlassCard className="relative overflow-hidden">
          {/* Time Range Selector */}
          <div className="flex gap-1 mb-4">
            {timeRanges.map((range) => (
              <button
                key={range}
                onClick={() => setActiveRange(range)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeRange === range
                    ? "bg-violet-500/25 text-violet-300"
                    : "text-violet-300/40 hover:text-violet-300/60"
                }`}
              >
                {range}
              </button>
            ))}
          </div>

          {/* Chart */}
          <div className="relative h-48 w-full">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Grid lines */}
              {[0, 25, 50, 75, 100].map((y) => (
                <line
                  key={y}
                  x1="0" y1={y} x2="100" y2={y}
                  stroke="rgba(139, 92, 246, 0.1)"
                  strokeDasharray="2 2"
                />
              ))}
              
              {/* Global price line */}
              <path
                d={createPath("global")}
                fill="none"
                stroke="rgba(139, 92, 246, 0.5)"
                strokeWidth="0.8"
                strokeDasharray="3 3"
              />
              
              {/* Local price line */}
              <path
                d={createPath("local")}
                fill="none"
                stroke="url(#chartGradient)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              
              {/* Gradient definition */}
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#c4b5fd" />
                </linearGradient>
              </defs>
            </svg>

            {/* Legend */}
            <div className="absolute top-0 right-0 flex gap-4">
              <div className="flex items-center gap-1.5">
                <div className="h-0.5 w-4 bg-violet-400 rounded" />
                <span className="text-[10px] text-violet-300/60">Local</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-0.5 w-4 bg-violet-400/50 rounded" style={{ borderStyle: "dashed" }} />
                <span className="text-[10px] text-violet-300/60">Global</span>
              </div>
            </div>
          </div>

          {/* X-axis labels */}
          <div className="flex justify-between mt-2">
            {priceHistory.map((d, i) => (
              <span key={i} className="text-[10px] text-violet-300/40">{d.time}</span>
            ))}
          </div>
        </GlassCard>

        {/* Global vs Local Comparison */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Global vs Local</h3>
        </div>

        <div className="space-y-3">
          {comparisonItems.map((item, index) => (
            <GlassCard key={index}>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-white">{item.name}</h4>
                <div className="flex items-center gap-1 text-xs text-violet-300/50">
                  <MapPin className="h-3 w-3" />
                  <span>Best in {item.bestRegion}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex gap-6">
                  <div>
                    <p className="text-[10px] text-violet-300/40 uppercase tracking-wider mb-1">Local</p>
                    <p className="text-base font-semibold text-white">${item.localPrice.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-violet-300/40 uppercase tracking-wider mb-1">Global Avg</p>
                    <p className="text-base font-semibold text-violet-300/70">${item.globalPrice.toLocaleString()}</p>
                  </div>
                </div>
                
                <div className={`flex items-center gap-1 px-3 py-1.5 rounded-lg ${
                  item.difference < 0 ? "bg-emerald-500/15" : "bg-rose-500/15"
                }`}>
                  {item.difference < 0 ? (
                    <ArrowDownRight className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <ArrowUpRight className="h-4 w-4 text-rose-400" />
                  )}
                  <span className={`text-sm font-semibold ${
                    item.difference < 0 ? "text-emerald-400" : "text-rose-400"
                  }`}>
                    {Math.abs(item.difference)}%
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Price Predictions */}
        <div className="flex items-center justify-between mt-4">
          <h3 className="text-lg font-semibold text-white">AI Predictions</h3>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {predictions.map((pred, index) => (
            <GlassCard key={index} className="text-center">
              <p className="text-xs text-violet-300/50 mb-2 truncate">{pred.item}</p>
              <div className={`flex items-center justify-center gap-1 ${
                pred.direction === "up" ? "text-emerald-400" : "text-rose-400"
              }`}>
                {pred.direction === "up" ? (
                  <TrendingUp className="h-5 w-5" />
                ) : (
                  <TrendingDown className="h-5 w-5" />
                )}
                <span className="text-lg font-bold">{pred.percentage}%</span>
              </div>
              <p className="text-[10px] text-violet-300/40 mt-1">{pred.timeframe}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}
