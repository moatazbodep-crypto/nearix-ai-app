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

  // Control Splash Screen Duration (4 Seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 4000)
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
    <main className="relative min-h-screen max-w-md mx-auto overflow-hidden bg
