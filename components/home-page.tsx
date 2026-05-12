"use client"

import { useState, useEffect } from "react"
import { Bell, Settings, ChevronRight, Clock } from "lucide-react"
import { GlassCard } from "./glass-card"
import { ProductCard } from "./product-card"
import { FlashHunt } from "./flash-hunt"
import { CategoryGrid } from "./category-grid"
import { AIAssistant } from "./ai-assistant"

const featuredProducts = [
  {
    name: "EOS R5",
    description: "Professional Mirrorless Camera",
    currentPrice: 1400,
    wasPrice: 3899,
    savings: 64,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
    aiRecommendation: "High Potential Deal!",
  },
  {
    name: "Rolex Submariner",
    description: "Green Bezel Edition",
    currentPrice: 12500,
    wasPrice: 18000,
    savings: 31,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop",
    aiRecommendation: "Rare Find - Act Fast!",
  },
  {
    name: "DJI Mavic 3",
    description: "Professional Drone",
    currentPrice: 1800,
    wasPrice: 2999,
    savings: 40,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=400&fit=crop",
    aiRecommendation: "Best Value Pick",
  },
]

interface HomePageProps {
  activeTab: string
}

export function HomePage({ activeTab }: HomePageProps) {
  const [countdown, setCountdown] = useState(4520)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatCountdown = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  if (activeTab === "ai") {
    return (
      <div className="min-h-screen pb-28 pt-6">
        <div className="px-4">
          <AIAssistant />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pb-28">
      {/* Header */}
      <header 
        className="sticky top-0 z-30 px-5 py-4"
        style={{
          background: "rgba(10, 6, 18, 0.8)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Near<span className="text-purple-400">ix</span>
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15 text-purple-300/70 transition-colors hover:bg-purple-500/25">
              <Bell className="h-5 w-5" />
              <div className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-purple-500 border-2 border-[#0a0612]" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15 text-purple-300/70 transition-colors hover:bg-purple-500/25">
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="space-y-6 px-5 pt-4">
        {/* Page Title */}
        <h2 className="text-3xl font-bold text-white">Home</h2>

        {/* Timer Pill */}
        <div 
          className="inline-flex items-center gap-2 rounded-full px-4 py-2"
          style={{
            background: "rgba(20, 10, 35, 0.7)",
            border: "1px solid rgba(168, 85, 247, 0.25)",
          }}
        >
          <Clock className="h-4 w-4 text-purple-400" />
          <span className="font-mono text-sm font-semibold text-white">
            {formatCountdown(countdown)}
          </span>
        </div>

        {/* Flash Hunt Section Label */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Flash Hunt</h3>
          <button className="flex items-center gap-1 text-sm text-purple-400/70 hover:text-purple-400">
            View All <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Featured Products Carousel */}
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-5 px-5 scrollbar-hide">
          {featuredProducts.map((product, index) => (
            <div key={index} className="w-72 shrink-0">
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Flash Hunt Crystal Section */}
        <FlashHunt />

        {/* Categories */}
        <CategoryGrid />

        {/* AI Message Banner */}
        <GlassCard className="relative overflow-hidden" variant="accent">
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-purple-500/20 blur-2xl" />
          <div className="relative flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-violet-600">
              <span className="text-lg">✨</span>
            </div>
            <div>
              <p className="text-sm font-medium text-purple-200">
                Neari says: <span className="text-white">Top Deal on property in Dubai!</span>
              </p>
              <p className="mt-1 text-xs text-purple-300/50">
                Based on your preferences and market analysis
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
