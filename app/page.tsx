"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import BrowsePage from "@/components/browse-page"
import RadarPage from "@/components/radar-page"
import VaultPage from "@/components/vault-page"
import ChartPage from "@/components/chart-page"
import ProfilePage from "@/components/profile-page"
import BottomNavigation from "@/components/bottom-navigation"

export default function NearixApp() {
  const [showSplash, setShowSplash] = useState(true)
  const [activeTab, setActiveTab] = useState("browse")

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  const renderPage = () => {
    switch (activeTab) {
      case "browse": return <BrowsePage />
      case "radar": return <RadarPage />
      case "vault": return <VaultPage />
      case "chart": return <ChartPage />
      case "profile": return <ProfilePage />
      default: return <BrowsePage />
    }
  }

  return (
    <main className="relative min-h-screen max-w-md mx-auto overflow-hidden bg-[#050505] text-white">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <motion.div 
            key="splash"
            className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center p-6"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative flex items-center justify-center">
              <motion.div 
                className="absolute w-64 h-64 bg-purple-600 rounded-full blur-[90px] opacity-20"
                animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.img 
                src="/gem.png" 
                className="w-52 h-52 object-contain relative z-10"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              />
            </div>
            <motion.div className="mt-10 text-center">
              <h1 className="text-4xl font-bold tracking-[0.2em]">NEAR<span className="text-purple-500">IX</span></h1>
              <p className="mt-3 text-gray-500 text-[10px] tracking-[0.5em] uppercase">Luxury Intelligence</p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div key="main" className="flex flex-col h-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex-1 overflow-y-auto pb-24">{renderPage()}</div>
            <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
