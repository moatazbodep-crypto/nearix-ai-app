"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function NearixSplash() {
  return (
    <main style={{
      backgroundColor: '#050505',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'sans-serif',
      overflow: 'hidden'
    }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)',
        filter: 'blur(40px)',
        zIndex: 0
      }} />

      {/* Main Content Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ zIndex: 1, textAlign: 'center' }}
      >
        {/* Animated Robot / Logo Icon Area */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{
            fontSize: '4rem',
            marginBottom: '20px',
            textShadow: '0 0 20px rgba(168, 85, 247, 0.5)'
          }}
        >
          ✧
        </motion.div>

        {/* Brand Name */}
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          letterSpacing: '4px',
          margin: '0',
          background: 'linear-gradient(to right, #fff, #a855f7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          NEARIX
        </h1>

        {/* Tagline */}
        <p style={{
          fontSize: '0.9rem',
          color: '#888',
          marginTop: '10px',
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}>
          Luxury Intelligence • Global Hunter
        </p>
      </motion.div>

      {/* Loading Bar */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        width: '150px',
        height: '2px',
        backgroundColor: '#1a1a1a',
        borderRadius: '10px',
        overflow: 'hidden'
      }}>
        <motion.div 
          animate={{ x: [-150, 150] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, #a855f7, transparent)',
          }}
        />
      </div>
    </main>
  );
}
