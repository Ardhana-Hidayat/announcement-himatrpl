"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Hexagon, Loader2 } from "lucide-react";

// --- BAGIAN INI YANG PENTING (DITAMBAHKAN) ---
// Kita harus memberi tahu TypeScript bahwa komponen ini menerima prop 'onFinish'
interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  useEffect(() => {
    // Timer 3.5 detik sebelum splash screen hilang
    const timer = setTimeout(() => {
      onFinish();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      key="splash-screen"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" 
          style={{ animationDuration: '4s' }}
        />
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, type: "spring" }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* LOGO AREA */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="mb-6 relative"
        >
          <Hexagon size={100} className="text-indigo-400 fill-indigo-900/20 stroke-[1.5]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-bold text-2xl text-indigo-200">TRPL</span>
          </div>
        </motion.div>

        {/* TEXT AREA */}
        <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          HIMA TRPL
        </h1>
        <p className="text-lg text-slate-300 font-medium tracking-widest uppercase">
          Kabinet HIMA TRPL
        </p>
        
        {/* LOADING SPINNER */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex flex-col items-center gap-2 text-slate-400 text-sm"
        >
          <Loader2 className="animate-spin" size={20}/>
          <span>Memuat Pengumuman...</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}