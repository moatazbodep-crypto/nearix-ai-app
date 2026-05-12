"use client"

import { useState, useCallback } from "react"
import { SplashScreen } from "@/components/splash-screen"
import { BrowsePage } from "@/components/browse-page"
import { RadarPage } from "@/components/radar-page"
import { VaultPage } from "@/components/vault-page"
import { ChartPage } from "@/components/chart-page"
import { ProfilePage } from "@/components/profile-page"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function NearixApp() {
  const [showSplash, setShowSplash] = useState(true)
  const [activeTab, setActiveTab] = useState("browse")

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false)
  }, [])

  const renderPage = () => {
    switch (activeTab) {
      case "browse":
        return <BrowsePage />
      case "radar":
        return <RadarPage />
      case "vault":
        return <VaultPage />
      case "chart":
        return <ChartPage />
      case "profile":
        return <ProfilePage />
      default:
        return <BrowsePage />
    }
  }

  return (
    <main 
      className="relative min-h-screen max-w-md mx-auto overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080510 0%, #0a0614 50%, #080510 100%)" }}
    >
      {/* Cinematic ambient background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Top center violet glow */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 -top-20 h-96 w-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />
        {/* Left side subtle glow */}
        <div 
          className="absolute -left-40 top-1/4 h-80 w-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(109, 40, 217, 0.05) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Right side subtle glow */}
        <div 
          className="absolute -right-40 top-1/2 h-96 w-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.04) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        {/* Bottom ambient glow */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-48 w-full"
          style={{
            background: "radial-gradient(ellipse, rgba(139, 92, 246, 0.03) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Splash Screen */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      {/* Main Content */}
      {!showSplash && (
        <>
          {renderPage()}
          <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        </>
      )}
    </main>
  )
}
