"use client"

import { useState, useEffect } from "react"
import { Crystal } from "./crystal"

interface SplashScreenProps {
  onComplete: () => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
      setTimeout(onComplete, 500)
    }, 3500)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
      style={{ background: "linear-gradient(180deg, #0a0612 0%, #0d0818 50%, #0a0612 100%)" }}
    >
      {/* Cinematic ambient lighting - layered glows */}
      <div 
        className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(109, 40, 217, 0.05) 45%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div 
        className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 animate-glow-pulse"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(167, 139, 250, 0.18) 0%, rgba(139, 92, 246, 0.06) 50%, transparent 75%)",
          filter: "blur(50px)",
        }}
      />

      {/* Subtle orbital ring */}
      <div className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2">
        <div 
          className="h-48 w-48 rounded-full"
          style={{
            border: "1px solid rgba(167, 139, 250, 0.12)",
            boxShadow: "inset 0 0 40px rgba(139, 92, 246, 0.05), 0 0 40px rgba(139, 92, 246, 0.08)",
          }}
        />
      </div>

      {/* Crystal - larger for cinematic presence */}
      <div className="relative" style={{ marginTop: "-100px" }}>
        <Crystal size={160} showGlow={true} animate={true} />
      </div>

      {/* Logo - minimal elegant typography */}
      <div className="relative z-10 mt-16 text-center animate-fade-in-up">
        <h1 className="text-5xl font-light tracking-tight text-white/95 mb-3">
          Near<span className="text-violet-400 font-normal">ix</span>
        </h1>
        <p className="text-violet-300/50 text-xs tracking-[0.25em] italic font-light uppercase">
          your luxury intelligence
        </p>
      </div>

      {/* Tagline - subtle and refined */}
      <p className="relative z-10 mt-14 max-w-[280px] text-center text-sm text-violet-200/35 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        Discover rare deals, vault collectibles, and let an AI concierge hunt the world for you.
      </p>

      {/* Minimal loading indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-1 w-1 rounded-full bg-violet-400/40"
              style={{
                animation: "glow-pulse 2s ease-in-out infinite",
                animationDelay: `${i * 0.25}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
