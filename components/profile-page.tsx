"use client"

import { User, Key, Star, Bell, Settings, ChevronRight, Shield, Gift, Trophy, Sparkles } from "lucide-react"
import { GlassCard } from "./glass-card"

const interests = ["Luxury Watches", "Electronics", "Real Estate", "Cars", "Photography"]

const recentActivity = [
  { action: "Saved", item: "Rolex Daytona", time: "2h ago" },
  { action: "Alert triggered", item: "MacBook Pro M3", time: "5h ago" },
  { action: "Price dropped", item: "Canon EOS R5", time: "1d ago" },
]

const magicKeys = [
  { name: "Golden Key", description: "Unlock exclusive deals", earned: true, icon: "🔑" },
  { name: "Diamond Key", description: "VIP market access", earned: true, icon: "💎" },
  { name: "Platinum Key", description: "Priority AI assistance", earned: false, icon: "🗝️" },
]

export function ProfilePage() {
  return (
    <div className="min-h-screen pb-32 pt-6">
      {/* Header */}
      <div className="px-5 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">Profile</h1>
          <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300/70 transition-colors hover:bg-violet-500/25">
            <Settings className="h-5 w-5" />
          </button>
        </div>

        {/* Profile Card */}
        <GlassCard className="relative overflow-hidden">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="relative flex items-center gap-4">
            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/30 to-purple-600/30 border border-violet-500/20">
                <User className="h-8 w-8 text-violet-300" />
              </div>
              <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 border-2 border-[#0a0612]">
                <Star className="h-3 w-3 text-white fill-white" />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Hunter Elite</h2>
              <p className="text-xs text-violet-300/50">Member since 2024</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/15">
                  <Trophy className="h-3 w-3 text-amber-400" />
                  <span className="text-[10px] font-semibold text-amber-400">Level 12</span>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      <div className="space-y-6 px-5">
        {/* Hunt Points */}
        <GlassCard variant="accent">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-purple-600/30">
                <Sparkles className="h-6 w-6 text-violet-300" />
              </div>
              <div>
                <p className="text-xs text-violet-300/50 uppercase tracking-wider">Hunt Points</p>
                <p className="text-2xl font-bold text-white">24,580</p>
              </div>
            </div>
            <button className="px-4 py-2 rounded-xl bg-violet-500/25 text-sm font-medium text-violet-300 border border-violet-500/30 hover:bg-violet-500/35 transition-colors">
              Redeem
            </button>
          </div>
        </GlassCard>

        {/* Magic Keys */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Magic Keys</h3>
          <span className="text-xs text-violet-300/50">2/3 collected</span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {magicKeys.map((key, index) => (
            <GlassCard 
              key={index} 
              className={`relative text-center py-4 ${!key.earned ? "opacity-40" : ""}`}
            >
              <div className="text-2xl mb-2">{key.icon}</div>
              <p className="text-xs font-semibold text-white">{key.name}</p>
              <p className="text-[10px] text-violet-300/50 mt-1">{key.description}</p>
              {key.earned && (
                <div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-emerald-400" />
              )}
            </GlassCard>
          ))}
        </div>

        {/* Interests */}
        <div className="flex items-center justify-between mt-4">
          <h3 className="text-lg font-semibold text-white">Your Interests</h3>
          <button className="text-xs text-violet-400/70">Edit</button>
        </div>

        <div className="flex flex-wrap gap-2">
          {interests.map((interest, index) => (
            <span
              key={index}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-violet-500/15 text-violet-300 border border-violet-500/20"
            >
              {interest}
            </span>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="flex items-center justify-between mt-4">
          <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
        </div>

        <div className="space-y-2">
          {recentActivity.map((activity, index) => (
            <GlassCard key={index} className="py-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white">
                    <span className="text-violet-300/60">{activity.action}:</span> {activity.item}
                  </p>
                </div>
                <span className="text-[10px] text-violet-300/40">{activity.time}</span>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Settings Menu */}
        <div className="space-y-2 mt-4">
          {[
            { icon: Bell, label: "Notifications", badge: "3" },
            { icon: Shield, label: "Privacy & Security" },
            { icon: Gift, label: "Refer a Friend" },
          ].map((item, index) => (
            <GlassCard key={index} className="py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-violet-400/60" />
                  <span className="text-sm text-white">{item.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  {item.badge && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-500 text-[10px] font-semibold text-white">
                      {item.badge}
                    </span>
                  )}
                  <ChevronRight className="h-4 w-4 text-violet-300/40" />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}
