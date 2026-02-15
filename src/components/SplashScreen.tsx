"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Hexagon, Loader2 } from "lucide-react";
import { Syne } from "next/font/google";
// 1. IMPORT COMPONENT IMAGE
import Image from "next/image"; 

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"]
});

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      key="splash-screen"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 sm:w-96 sm:h-96 bg-purple-600/20 rounded-full blur-[80px] sm:blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-48 h-48 sm:w-80 sm:h-80 bg-indigo-600/20 rounded-full blur-[80px] sm:blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[60px]" />
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, type: "spring" }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* LOGO AREA */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8 relative"
        >
          {/* Background Hexagon Putih */}
          <Hexagon 
            size={110} 
            fill="white" 
            className="text-white stroke-[1.5] drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]" 
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            {/* 2. GANTI TEXT DENGAN IMAGE */}
            {/* Pastikan file 'logo.png' ada di folder public project kamu */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16"> 
              <Image 
                src="/icon.png"  // <-- Ganti dengan nama file logo kamu
                alt="Logo HIMA TRPL"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </motion.div>

        <div className="text-center space-y-2">
          <h1 className={`${syne.className} text-4xl sm:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400 drop-shadow-lg`}>
            HIMA TRPL
          </h1>
          
          <p className="text-sm sm:text-base text-slate-400 font-medium tracking-[0.3em] uppercase">
            Official Announcement
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-3 text-slate-500 text-xs tracking-widest uppercase"
        >
          <Loader2 className="animate-spin text-purple-400" size={24}/>
          <span>Wait a moment...</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}