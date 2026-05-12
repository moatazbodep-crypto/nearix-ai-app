"use client"

import { useState, useEffect } from "react"
import { Clock, ChevronRight } from "lucide-react"
import { Crystal } from "./crystal"

interface FlashHuntProps {
  initialTime?: number
}

export function FlashHunt({ initialTime = 91580 }: FlashHuntProps) {
  const [timeLeft, setTimeLeft] = useState(initialTime)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div 
      className="relative overflow-hidden rounded-2xl p-5"
      style={{
        background: "linear-gradient(180deg, rgba(20, 10, 35, 0.7) 0%, rgba(15, 8, 28, 0.8) 100%)",
        border: "1px solid rgba(168, 85, 247, 0.2)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* Ambient glow effects */}
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl" />
      
      {/* Decorative line */}
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="relative">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <span className="text-base font-medium text-purple-300/60">View More</span>
          <span className="text-lg font-semibold text-white">Flash Hunt</span>
        </div>

        {/* Crystal display */}
        <div className="flex items-center justify-center py-6">
          <Crystal size={100} showGlow={true} animate={true} />
        </div>

        {/* Timer bar */}
        <div 
          className="flex items-center gap-3 rounded-xl px-4 py-3"
          style={{
            background: "rgba(10, 5, 20, 0.6)",
            border: "1px solid rgba(168, 85, 247, 0.15)",
          }}
        >
          <Clock className="h-5 w-5 text-purple-400" />
          <span className="text-sm text-purple-300/70">Timer is:</span>
          <span className="font-mono text-base font-bold text-white">
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>
    </div>
  )
}
