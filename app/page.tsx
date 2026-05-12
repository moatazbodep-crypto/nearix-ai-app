"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Zap, TrendingDown, Target } from 'lucide-react';

export default function NearixApp() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#050505] text-white font-sans overflow-hidden">
      <AnimatePresence>
        {showSplash ? (
          <motion.div
            key="splash"
            className="fixed inset-0 z-50 bg-[#050505] flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative flex items-center justify-center">
              <motion.div
                className="absolute w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.img
                src="/gem.png"
                alt="Nearix Core"
                className="w-32 h-32 relative z-10 object-contain"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 pt-12"
          >
            <nav className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-2">
                <img src="/gem.png" className="w-8 h-8" alt="logo" />
                <span className="text-xl font-bold tracking-tighter">NEARIX</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-purple-400" />
              </div>
            </nav>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight">
                Smart Deals <br />
                <span className="text-purple-500 underline decoration-purple-500/30">Radar</span>
              </h1>
              <p className="text-gray-400 text-sm max-w-[280px]">
                AI-powered price predictor and global market hunter.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
