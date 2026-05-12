import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  variant?: "default" | "strong" | "accent"
}

export function GlassCard({
  children,
  className,
  variant = "default",
}: GlassCardProps) {
  const baseStyles = "rounded-2xl p-4 transition-all"

  const variants = {
    default: {
      background: "rgba(20, 10, 35, 0.6)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid rgba(168, 85, 247, 0.15)",
    },
    strong: {
      background: "rgba(15, 8, 28, 0.8)",
      backdropFilter: "blur(30px)",
      WebkitBackdropFilter: "blur(30px)",
      border: "1px solid rgba(168, 85, 247, 0.2)",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
    },
    accent: {
      background: "linear-gradient(135deg, rgba(20, 10, 35, 0.7) 0%, rgba(88, 28, 135, 0.3) 100%)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid rgba(168, 85, 247, 0.25)",
      boxShadow: "0 8px 32px rgba(88, 28, 135, 0.2)",
    },
  }

  return (
    <div className={cn(baseStyles, className)} style={variants[variant]}>
      {children}
    </div>
  )
}
