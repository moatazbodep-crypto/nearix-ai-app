"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NearixApp() {
  const [loading, setLoading] = useState(true);

  // Auto-transition from Splash to Main UI after 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-hidden font-sans">
      <AnimatePresence mode="wait">
        {loading ? (
          /* --- LUXURY SPLASH SCREEN --- */
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]"
          >
            {/* The Gem with Breathing Animation */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8] 
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-44 h-44 mb-8"
            >
              <img 
                src="/gem.png" 
                alt="Nearix Core" 
                className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(147,51,234,0.3)]" 
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold tracking-[0.2em] uppercase italic">
                NEAR<span className="text-purple-600">IX</span>
              </h1>
              <p className="text-[10px] text-gray-500 tracking-[0.5em] uppercase mt-2">
                Luxury Intelligence
              </p>
            </motion.div>
          </motion.div>
        ) : (
          /* --- MAIN APPLICATION UI --- */
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-6 pt-12 max-w-md mx-auto"
          >
            {/* Minimalist Navigation */}
            <nav className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-600 rounded-md rotate-45" />
                <span className="text-lg font-black tracking-tighter italic">NEARIX</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping" />
              </div>
            </nav>

            {/* Hero Section */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-6xl font-bold leading-[0.8] tracking-tighter uppercase">
                  SMART <br /> 
                  <span className="text-purple-600 italic">RADAR</span>
                </h2>
                <p className="text-gray-500 text-xs tracking-widest uppercase mt-4">
                  Global market hunter & price predictor.
                </p>
              </div>

              {/* Decorative Scanning Element */}
              <div className="relative h-48 w-full bg-gradient-to-b from-purple-900/10 to-transparent border border-white/5 rounded-[2rem] overflow-hidden p-6">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-purple-500/50 blur-[2px] animate-scan" />
                <div className="flex flex-col justify-between h
