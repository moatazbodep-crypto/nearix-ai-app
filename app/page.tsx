"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const BottomNavigation = ({ activeTab, setActiveTab }: any) => (
  <div className="fixed bottom-0 left-0 right-0 bg-[#050505] border-t border-gray-800 p-4 flex justify-around z-50">
    {["browse", "radar", "vault", "chart", "profile"].map((tab) => (
      <button 
        key={tab} 
        onClick={() => setActiveTab(tab)} 
        className={`text-[10px] uppercase tracking-widest ${activeTab === tab ? "text-purple-500 font-bold" : "text-gray-600"}`}
      >
        {tab}
      </button>
    ))}
  </div>
)

export default function NearixApp() {
  const [showSplash, setShowSplash] = useState(true)
  const [activeTab, setActiveTab] = useState("browse")

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative min-h-screen max-w-md mx-auto overflow-hidden bg-[#050505] text-white font-sans">
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
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.img
                src="/gem.png"
                alt="Nearix Core"
                className="w-52 h-52 object-contain relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
              />
            </div>
            <div className="mt-12 text-center">
              <h1 className="text-4xl font-light tracking-[0.3em] text-white">
                NEAR<span className="text-purple-500 font-bold">IX</span>
              </h1>
              <p className="mt-4 text-gray-500 text-[9px] tracking-[0.6em] uppercase">
                Luxury Intelligence
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="main" 
            className="flex flex-col items-center justify-center h-screen bg-[#050505]"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
          >
            <h2 className="text-xl tracking-widest text-purple-400 uppercase">Dashboard Ready</h2>
            <p className="text-gray-600 text-xs mt-2 font-mono">System Active: Nearix AI</p>
            <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const BottomNavigation = ({ activeTab, setActiveTab }: any) => (
  <div className="fixed bottom-0 left-0 right-0 bg-[#050505] border-t border-gray-800 p-4 flex justify-around z-50">
    {["browse", "radar", "vault", "chart", "profile"].map((tab) => (
      <button 
        key={tab} 
        onClick={() => setActiveTab(tab)} 
        className={`text-[10px] uppercase tracking-widest ${activeTab === tab ? "text-purple-500 font-bold" : "text-gray-600"}`}
      >
        {tab}
      </button>
    ))}
  </div>
)

export default function NearixApp() {
  const [showSplash, setShowSplash] = useState(true)
  const [activeTab, setActiveTab] = useState("browse")

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative min-h-screen max-w-md mx-auto overflow-hidden bg-[#050505] text-white font-sans">
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
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.img
                src="/gem.png"
                alt="Nearix Core"
                className="w-52 h-52 object-contain relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
              />
            </div>
            <div className="mt-12 text-center">
              <h1 className="text-4xl font-light tracking-[0.3em] text-white">
                NEAR<span className="text-purple-500 font-bold">IX</span>
              </h1>
              <p className="mt-4 text-gray-500 text-[9px] tracking-[0.6em] uppercase">
                Luxury Intelligence
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="main" 
            className="flex flex-col items-center justify-center h-screen bg-[#050505]"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
          >
            <h2 className="text-xl tracking-widest text-purple-400 uppercase">Dashboard Ready</h2>
            <p className="text-gray-600 text-xs mt-2 font-mono">System Active: Nearix AI</p>
            <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
