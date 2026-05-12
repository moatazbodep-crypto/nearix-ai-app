"use client"

import { Radar, LineChart, Shield, User } from "lucide-react"
import { CrystalIcon } from "./crystal"

const navItems = [
  { id: "radar", icon: Radar, label: "Radar" },
  { id: "chart", icon: LineChart, label: "Chart" },
  { id: "browse", icon: null, label: "", isCenter: true },
  { id: "vault", icon: Shield, label: "Vault" },
  { id: "profile", icon: User, label: "Profile" },
]

interface BottomNavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-6 pt-2">
      <div 
        className="mx-auto flex max-w-md items-center justify-around rounded-2xl px-2 py-3"
        style={{
          background: "rgba(10, 6, 18, 0.92)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(139, 92, 246, 0.12)",
          boxShadow: "0 -8px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.03)",
        }}
      >
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id

          if (item.isCenter) {
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className="relative -mt-10 flex flex-col items-center"
              >
                {/* Glow effect behind crystal */}
                <div 
                  className="absolute top-3 h-12 w-12 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
                    filter: "blur(12px)",
                    animation: "glow-pulse 3s ease-in-out infinite",
                  }}
                />
                <div
                  className={`relative flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 ${
                    isActive ? "shadow-lg shadow-violet-500/30" : ""
                  }`}
                  style={{
                    background: "linear-gradient(145deg, rgba(139, 92, 246, 0.2) 0%, rgba(109, 40, 217, 0.3) 100%)",
                    border: "1px solid rgba(167, 139, 250, 0.25)",
                    boxShadow: isActive 
                      ? "0 8px 32px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)" 
                      : "inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
                  <CrystalIcon size={36} className="animate-float" />
                </div>
              </button>
            )
          }

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className="flex flex-col items-center gap-1 px-3 py-1"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-violet-500/15 text-violet-400"
                    : "text-violet-300/35 hover:text-violet-300/55"
                }`}
              >
                {Icon && <Icon className="h-5 w-5" strokeWidth={1.5} />}
              </div>
              <span
                className={`text-[10px] font-medium transition-colors ${
                  isActive ? "text-violet-400" : "text-violet-300/35"
                }`}
              >
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
