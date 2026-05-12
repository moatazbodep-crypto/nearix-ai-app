"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NearixApp() {
  const [loading, setLoading] = useState(true);

  // هذا الجزء هو المسؤول عن "الثانيتين" ثم الدخول
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2500 مللي ثانية تعني ثانيتين ونصف
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-hidden font-sans">
      <AnimatePresence mode="wait">
        {loading ? (
          /* --- شاشة البداية (Splash Screen) --- */
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.7, 1, 0.7] 
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative w-40 h-40 mb-6"
            >
              <img src="/gem.png" alt="Gem" className="w-full h-full object-contain" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold tracking-tighter"
            >
              NEAR<span className="text-purple-600">IX</span>
            </motion.h1>
          </motion.div>
        ) : (
          /* --- واجهة التطبيق الأساسية (Home UI) --- */
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-6 pt-12"
          >
            {/* هنا يبدأ شكل التطبيق الحقيقي بعد الدخول */}
            <nav className="flex justify-between items-center mb-10">
              <span className="text-xl font-black italic tracking-tighter">NEARIX</span>
              <div className="w-10 h-10 rounded-full bg-purple-600/20 border border-purple-500/30" />
            </nav>

            <div className="space-y-6">
              <h2 className="text-5xl font-bold leading-none tracking-tighter">
                SMART <br /> <span className="text-purple-600">RADAR</span>
              </h2>
              <p className="text-gray-500 text-sm max-w-[200px]">
                Global market hunter & price predictor.
              </p>
              
              <div className="h-40 w-full bg-gradient-to-br from-purple-900/20 to-transparent border border-white/5 rounded-3xl p-5">
                <span className="text-xs text-purple-400 uppercase tracking-widest">Active Scan</span>
                <div className="mt-4 h-1
