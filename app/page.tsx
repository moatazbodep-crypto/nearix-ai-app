"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NearixApp() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main style={{ backgroundColor: '#050505', minHeight: '100vh', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <AnimatePresence mode="wait">
        {showSplash ? (
          <motion.div
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ textAlign: 'center' }}
          >
            <h1 style={{ fontSize: '3rem', letterSpacing: '5px', color: '#a855f7' }}>NEARIX</h1>
            <p style={{ color: '#666', letterSpacing: '2px' }}>AI SYSTEM STARTING...</p>
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ textAlign: 'center' }}
          >
            <h2 style={{ fontSize: '2rem' }}>Welcome to Nearix</h2>
            <p style={{ color: '#a855f7' }}>The Future of Global Deals</p>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
