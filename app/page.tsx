"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function NearixLanding() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-[#050505] overflow-hidden">
      {/* تأثير توهج خلفي خفيف */}
      <div className="absolute w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        {/* الجوهرة مع حركة التنفس الضوئي */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-48 h-48 mb-8"
        >
          <img 
            src="/gem.png" 
            alt="Nearix Core" 
            className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]"
          />
        </motion.div>

        {/* اسم التطبيق والشعار */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-2">
            Near<span className="text-purple-500">ix</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base tracking-[0.3em] uppercase font-light">
            Your Luxury Intelligence
          </p>
        </motion.div>
      </div>

      {/* مؤشر بسيط في الأسفل */}
      <div className="absolute bottom-10 flex gap-2">
        <div className="w-1 h-1 rounded-full bg-purple-500/50" />
        <div className="w-1 h-1 rounded-full bg-purple-500" />
        <div className="w-1 h-1 rounded-full bg-purple-500/50" />
      </div>
    </main>
  );
}
