"use client"

import { useState } from "react"
import { Shield, Bell, TrendingDown, TrendingUp, Plus, MoreHorizontal } from "lucide-react"
import { GlassCard } from "./glass-card"

const vaultCategories = ["All", "Electronics", "Watches", "Cars", "Real Estate"]

const vaultItems = [
  {
    name: "MacBook Pro M3 Max",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    currentPrice: 3499,
    savedPrice: 3899,
    priceChange: -10.3,
    tracking: true,
    alertSet: true,
  },
  {
    name: "Rolex Daytona",
    category: "Watches",
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=400&h=400&fit=crop",
    currentPrice: 42500,
    savedPrice: 39000,
    priceChange: 8.9,
    tracking: true,
    alertSet: false,
  },
  {
    name: "Porsche 911 Turbo S",
    category: "Cars",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=400&fit=crop",
    currentPrice: 245000,
    savedPrice: 260000,
    priceChange: -5.8,
    tracking: true,
    alertSet: true,
  },
  {
    name: "Dubai Marina Penthouse",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=400&fit=crop",
    currentPrice: 2800000,
    savedPrice: 2750000,
    priceChange: 1.8,
    tracking: false,
    alertSet: false,
  },
]

export function VaultPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems = activeCategory === "All" 
    ? vaultItems 
    : vaultItems.filter(item => item.category === activeCategory)

  return (
    <div className="min-h-screen pb-32 pt-6">
      {/* Header */}
      <div className="px-5 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15">
              <Shield className="h-5 w-5 text-violet-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Vault</h1>
              <p className="text-xs text-violet-300/50">Your Digital Safe</p>
            </div>
          </div>
          <button 
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400 transition-colors hover:bg-violet-500/30"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <GlassCard className="text-center py-4">
            <p className="text-2xl font-bold text-white">{vaultItems.length}</p>
            <p className="text-[10px] text-violet-300/50 uppercase tracking-wider mt-1">Items</p>
          </GlassCard>
          <GlassCard className="text-center py-4">
            <p className="text-2xl font-bold text-emerald-400">3</p>
            <p className="text-[10px] text-violet-300/50 uppercase tracking-wider mt-1">Tracking</p>
          </GlassCard>
          <GlassCard className="text-center py-4">
            <p className="text-2xl font-bold text-amber-400">2</p>
            <p className="text-[10px] text-violet-300/50 uppercase tracking-wider mt-1">Alerts</p>
          </GlassCard>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {vaultCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeCategory === category
                  ? "bg-violet-500/25 text-violet-300 border border-violet-500/30"
                  : "bg-white/5 text-violet-300/50 border border-transparent hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Vault Items */}
      <div className="space-y-4 px-5">
        {filteredItems.map((item, index) => (
          <GlassCard key={index} className="relative overflow-hidden">
            <div className="flex gap-4">
              {/* Image */}
              <div className="relative h-24 w-24 shrink-0 rounded-xl overflow-hidden bg-white/5">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
                {item.alertSet && (
                  <div className="absolute top-1.5 right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/90">
                    <Bell className="h-3 w-3 text-white" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs text-violet-300/50 uppercase tracking-wider">{item.category}</p>
                    <h4 className="text-sm font-semibold text-white mt-0.5 line-clamp-1">{item.name}</h4>
                  </div>
                  <button className="shrink-0 text-violet-300/40 hover:text-violet-300/60">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex items-end justify-between mt-3">
                  <div>
                    <p className="text-lg font-bold text-white">
                      ${item.currentPrice.toLocaleString()}
                    </p>
                    <p className="text-[10px] text-violet-300/40">
                      Saved at ${item.savedPrice.toLocaleString()}
                    </p>
                  </div>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${
                    item.priceChange < 0 ? "bg-emerald-500/15" : "bg-rose-500/15"
                  }`}>
                    {item.priceChange < 0 ? (
                      <TrendingDown className="h-3.5 w-3.5 text-emerald-400" />
                    ) : (
                      <TrendingUp className="h-3.5 w-3.5 text-rose-400" />
                    )}
                    <span className={`text-xs font-semibold ${
                      item.priceChange < 0 ? "text-emerald-400" : "text-rose-400"
                    }`}>
                      {item.priceChange > 0 ? "+" : ""}{item.priceChange}%
                    </span>
                  </div>
                </div>

                {/* Tracking status */}
                {item.tracking && (
                  <div className="flex items-center gap-1.5 mt-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-emerald-400/70">Price tracking active</span>
                  </div>
                )}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}
