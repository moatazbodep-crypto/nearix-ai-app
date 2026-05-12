"use client"

interface CrystalProps {
  size?: number
  className?: string
  showGlow?: boolean
  animate?: boolean
}

export function Crystal({ size = 140, className = "", showGlow = true, animate = true }: CrystalProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Cinematic ambient lighting layers */}
      {showGlow && (
        <>
          {/* Outermost diffuse glow */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: size * 3,
              height: size * 3,
              background: "radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(109, 40, 217, 0.06) 40%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          {/* Mid glow ring */}
          <div 
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${animate ? "animate-glow-pulse" : ""}`}
            style={{
              width: size * 2,
              height: size * 2,
              background: "radial-gradient(circle, rgba(167, 139, 250, 0.2) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 75%)",
              filter: "blur(25px)",
            }}
          />
          {/* Inner core glow */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: size * 1.2,
              height: size * 1.2,
              background: "radial-gradient(circle, rgba(196, 181, 253, 0.25) 0%, rgba(167, 139, 250, 0.1) 60%, transparent 100%)",
              filter: "blur(15px)",
            }}
          />
        </>
      )}

      {/* The Crystal - Futuristic AI Energy Core */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`relative z-10 ${animate ? "animate-float" : ""}`}
        style={{ 
          filter: showGlow 
            ? "drop-shadow(0 0 20px rgba(167, 139, 250, 0.35)) drop-shadow(0 0 40px rgba(139, 92, 246, 0.15))" 
            : undefined 
        }}
      >
        <defs>
          {/* Premium glass gradients - muted, sophisticated purples */}
          <linearGradient id="glassTop" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#ddd6fe" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.4" />
          </linearGradient>
          
          <linearGradient id="glassLeft" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.3" />
          </linearGradient>
          
          <linearGradient id="glassRight" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.35" />
          </linearGradient>
          
          <linearGradient id="glassBottom" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#6d28d9" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#4c1d95" stopOpacity="0.25" />
          </linearGradient>

          <linearGradient id="glassCore" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#ede9fe" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="innerLight" x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#f5f3ff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ddd6fe" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.15" />
          </linearGradient>

          <linearGradient id="edgeHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.2" />
          </linearGradient>

          <radialGradient id="energyCore" cx="50%" cy="45%" r="40%">
            <stop offset="0%" stopColor="#f5f3ff" stopOpacity="0.5" />
            <stop offset="40%" stopColor="#ddd6fe" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.05" />
          </radialGradient>

          {/* Subtle blur for glass effect */}
          <filter id="glassBlur" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.3" />
          </filter>
        </defs>

        {/* Outer icosahedron shell - transparent glass prism */}
        <g opacity="0.95">
          {/* Top pyramid section */}
          <polygon 
            points="70,12 100,45 70,55" 
            fill="url(#glassTop)" 
            stroke="url(#edgeHighlight)" 
            strokeWidth="0.5"
          />
          <polygon 
            points="70,12 40,45 70,55" 
            fill="url(#glassLeft)" 
            stroke="url(#edgeHighlight)" 
            strokeWidth="0.5"
          />
          <polygon 
            points="70,12 100,45 115,58" 
            fill="url(#glassRight)" 
            stroke="url(#edgeHighlight)" 
            strokeWidth="0.3"
          />
          <polygon 
            points="70,12 40,45 25,58" 
            fill="url(#glassLeft)" 
            stroke="url(#edgeHighlight)" 
            strokeWidth="0.3"
          />

          {/* Mid section - hexagonal belt */}
          <polygon 
            points="100,45 115,58 110,85 70,55" 
            fill="url(#glassRight)" 
            stroke="url(#edgeHighlight)" 
            strokeWidth="0.4"
          />
          <polygon 
            points="40,45 25,58 30,85 70,55" 
            fill="url(#glassBottom)" 
            stroke="url(#edgeHighlight)" 
            strokeWidth="0.4"
          />
          <polygon 
            points="70,55 110,85 70,95" 
            fill="url(#glassCore)" 
            stroke="url(#edgeHighlight)" 
            strokeWidth="0.3"
          />
          <polygon 
            points="70,55 30,85 70,95" 
            fill="url(#glassBottom)" 
            stroke="url(#edgeHighlight)" 
            strokeWidth="0.3"
          />

          {/* Bottom pyramid section */}
          <polygon 
            points="110,85 70,95 95,115" 
            fill="url(#glassBottom)" 
            stroke="url(#edgeHighlight)" 
            strokeWidth="0.3"
          />
          <polygon 
            points="30,85 70,95 45,115" 
            fill="url(#glassBottom)" 
            stroke="url(#edgeHighlight)" 
            strokeWidth="0.3"
          />
          <polygon 
            points="70,95 95,115 70,128" 
            fill="url(#glassBottom)" 
            stroke="url(#edgeHighlight)" 
            strokeWidth="0.4"
          />
          <polygon 
            points="70,95 45,115 70,128" 
            fill="url(#glassBottom)" 
            stroke="url(#edgeHighlight)" 
            strokeWidth="0.4"
          />
        </g>

        {/* Inner energy core - the AI heart */}
        <g opacity="0.9">
          <polygon 
            points="70,32 88,52 70,68 52,52" 
            fill="url(#innerLight)"
          />
          <ellipse 
            cx="70" 
            cy="50" 
            rx="14" 
            ry="10" 
            fill="url(#energyCore)"
          >
            {animate && (
              <animate 
                attributeName="opacity" 
                values="0.6;0.9;0.6" 
                dur="3s" 
                repeatCount="indefinite" 
              />
            )}
          </ellipse>
        </g>

        {/* Glass edge reflections - subtle white lines */}
        <g opacity="0.5">
          <line x1="70" y1="12" x2="100" y2="45" stroke="white" strokeWidth="0.8" opacity="0.4" />
          <line x1="70" y1="12" x2="40" y2="45" stroke="white" strokeWidth="0.5" opacity="0.25" />
          <line x1="100" y1="45" x2="70" y2="55" stroke="white" strokeWidth="0.4" opacity="0.2" />
        </g>

        {/* Subtle light refractions */}
        <g opacity="0.6">
          <circle cx="58" cy="35" r="3" fill="white" opacity="0.7">
            {animate && (
              <animate 
                attributeName="opacity" 
                values="0.7;0.3;0.7" 
                dur="4s" 
                repeatCount="indefinite" 
              />
            )}
          </circle>
          <circle cx="82" cy="48" r="2" fill="white" opacity="0.5">
            {animate && (
              <animate 
                attributeName="opacity" 
                values="0.5;0.15;0.5" 
                dur="3.5s" 
                repeatCount="indefinite" 
              />
            )}
          </circle>
          <circle cx="65" cy="60" r="1.5" fill="white" opacity="0.35">
            {animate && (
              <animate 
                attributeName="opacity" 
                values="0.35;0.1;0.35" 
                dur="5s" 
                repeatCount="indefinite" 
              />
            )}
          </circle>
        </g>
      </svg>
    </div>
  )
}

// Compact icon variant for navigation
export function CrystalIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ filter: "drop-shadow(0 0 6px rgba(167, 139, 250, 0.4))" }}
    >
      <defs>
        <linearGradient id="iconTop" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#ddd6fe" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="iconSide" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="iconBottom" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4c1d95" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {/* Minimal prism shape */}
      <polygon points="14,2 22,9 14,12 6,9" fill="url(#iconTop)" />
      <polygon points="22,9 22,18 14,24 14,12" fill="url(#iconSide)" />
      <polygon points="6,9 6,18 14,24 14,12" fill="url(#iconBottom)" />
      {/* Highlight */}
      <polygon points="10,6 14,9 10,11 8,8" fill="white" opacity="0.45" />
    </svg>
  )
}
