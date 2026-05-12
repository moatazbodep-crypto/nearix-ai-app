"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Clock, TrendingUp, Zap, Star } from "lucide-react"
import { Crystal } from "./crystal"
import { GlassCard } from "./glass-card"

const flashDeals = [
  {
    name: "EOS R5",
    category: "Camera",
    currentPrice: 1400,
    wasPrice: 3899,
    savings: 64,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
    aiScore: 94,
  },
  {
    name: "Submariner",
    category: "Rolex",
    currentPrice: 12500,
    wasPrice: 18000,
    savings: 31,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop",
    aiScore: 89,
  },
  {
    name: "Mavic 3 Pro",
    category: "Drone",
    currentPrice: 1800,
    wasPrice: 2999,
    savings: 40,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=400&fit=crop",
    aiScore: 87,
  },
]

const trendingItems = [
  { name: "MacBook Pro M3", trend: "+12%", category: "Electronics" },
  { name: "Porsche 911", trend: "-8%", category: "Cars" },
  { name: "Dubai Marina Apt", trend: "+5%", category: "Real Estate" },
]

export function BrowsePage() {
  const [countdown, setCountdown] = useState(4520)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 4520))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatCountdown = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="min-h-screen pb-32 pt-8">
      {/* Crystal Hero Section */}
      <div className="relative flex flex-col items-center justify-center py-8">
        <Crystal size={130} showGlow={true} animate={true} />
      </div>

      {/* Content */}
      <div className="space-y-6 px-5">
        {/* Flash Hunt Timer */}
        <GlassCard className="relative overflow-hidden">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 border border-violet-500/20">
                <Zap className="h-5 w-5 text-violet-400" />
              </div>
              <div>
                <p className="text-xs text-violet-300/50 uppercase tracking-wider">Flash Hunt</p>
                <p className="text-lg font-semibold text-white font-mono">{formatCountdown(countdown)}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-violet-400/60" />
              <span className="text-xs text-violet-300/40">Ends soon</span>
            </div>
          </div>
        </GlassCard>

        {/* Smart Deals Section */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Smart Deals</h3>
          <button className="flex items-center gap-1 text-xs text-violet-400/70 hover:text-violet-400 transition-colors">
            View All <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Deal Cards Carousel */}
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
          {flashDeals.map((deal, index) => (
            <div 
              key={index} 
              className="w-56 shrink-0 rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(245,243,255,0.9) 100%)",
              }}
            >
              {/* Image */}
              <div className="relative h-36 w-full bg-gradient-to-br from-gray-100 to-gray-50">
                <img 
                  src={deal.image} 
                  alt={deal.name}
                  className="h-full w-full object-cover"
                />
                {/* AI Score Badge */}
                <div 
                  className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-full"
                  style={{
                    background: "rgba(0,0,0,0.7)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <Star className="h-3 w-3 text-violet-400 fill-violet-400" />
                  <span className="text-xs font-semibold text-white">{deal.aiScore}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider">{deal.category}</p>
                <h4 className="text-base font-semibold text-gray-900 mt-0.5">{deal.name}</h4>
                
                <div className="flex items-end justify-between mt-3">
                  <div>
                    <p className="text-lg font-bold text-gray-900">${deal.currentPrice.toLocaleString()}</p>
                    <p className="text-xs text-gray-400 line-through">${deal.wasPrice.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-50">
                    <TrendingUp className="h-3 w-3 text-emerald-600" />
                    <span className="text-xs font-semibold text-emerald-600">-{deal.savings}%</span>
                  </div>
                </div>

                {/* AI Recommendation */}
                <div 
                  className="mt-3 flex items-center gap-2 px-3 py-2 rounded-lg"
                  style={{ background: "rgba(139, 92, 246, 0.08)" }}
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-500 animate-pulse" />
                  <span className="text-xs text-violet-700 font-medium">High Potential Deal</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trending Section */}
        <div className="flex items-center justify-between mt-4">
          <h3 className="text-lg font-semibold text-white">Trending Now</h3>
        </div>

        <div className="space-y-3">
          {trendingItems.map((item, index) => (
            <GlassCard key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
                  <TrendingUp className={`h-5 w-5 ${item.trend.startsWith("+") ? "text-emerald-400" : "text-rose-400"}`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{item.name}</p>
                  <p className="text-xs text-violet-300/50">{item.category}</p>
                </div>
              </div>
              <span className={`text-sm font-semibold ${item.trend.startsWith("+") ? "text-emerald-400" : "text-rose-400"}`}>
                {item.trend}
              </span>
            </GlassCard>
          ))}
        </div>

        {/* AI Insight Banner */}
        <GlassCard variant="accent" className="relative overflow-hidden">
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet-500/20 blur-2xl" />
          <div className="relative flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-purple-600/30 border border-violet-500/20">
              <Zap className="h-5 w-5 text-violet-300" />
            </div>
            <div>
              <p className="text-sm font-medium text-violet-200">
                AI detected a <span className="text-white font-semibold">rare opportunity</span>
              </p>
              <p className="mt-1 text-xs text-violet-300/50">
                Rolex GMT Master II - 23% below market average
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
