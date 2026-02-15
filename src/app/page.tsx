"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Users, Megaphone, Heart, Camera, ArrowDown, Briefcase, HomeIcon } from "lucide-react";

import SplashScreen from "@/components/SplashScreen"; 
import { Syne } from "next/font/google";

type Member = { name: string; };
type Division = { id: string; title: string; icon: React.ElementType; description: string; color: string; members: Member[]; };

// Data disesuaikan dengan warna NEON/TERANG untuk background gelap
const announcementData: Division[] = [
  { 
    id: "bph", 
    title: "BPH (Badan Pengurus Harian)", 
    icon: HomeIcon, 
    description: "Sekretaris 2 & Bendahara 2.", 
    // Menggunakan warna 400 + drop-shadow untuk efek neon
    color: "text-rose-400 drop-shadow-[0_0_10px_rgba(251,113,133,0.5)]", 
    members: [
      { name: "Naila Zahra Yasmine (Sekretaris 2)" }, 
      { name: "Dhea Novika (Bendahara 2)" }
    ] 
  },
  { 
    id: "dagri", 
    title: "DAGRI", 
    icon: HomeIcon, 
    description: "Divisi Dalam Negeri.", 
    color: "text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]", 
    members: [
      { name: "Nadia Tifara Sidiq" }, 
      { name: "Firdaus Ilham F." }, 
      { name: "Azza Maulidya Wardani" },
      { name: "Bangkit Cahya Linuwih" }
    ] 
  },
  { 
    id: "humas", 
    title: "HUMAS", 
    icon: Megaphone, 
    description: "Divisi Hubungan Mahasiswa.", 
    color: "text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.5)]", 
    members: [
      { name: "Alvina Nur Laila Anggraini" }, 
      { name: "Cristian Reynaldi" },
      { name: "Atha Aryasatya" }
    ] 
  },
  { 
    id: "psdm", 
    title: "PSDM", 
    icon: Users, 
    description: "Divisi Pengembangan Sumber Daya Mahasiswa.", 
    color: "text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]", 
    members: [
      { name: "Rindy Cantika Agustina P." }, 
      { name: "Azza Auliyaul Fitri" }, 
      { name: "Abdul Aziz Mushthofa" },
      { name: "Tiara Maya Lestari" }
    ] 
  },
  { 
    id: "sosma", 
    title: "SOSMA", 
    icon: Heart, 
    description: "Divisi Sosial, Agama & Masyarakat.", 
    color: "text-pink-400 drop-shadow-[0_0_10px_rgba(244,114,182,0.5)]", 
    members: [
      { name: "Edwin Nur Cahyo" }, 
      { name: "Muhsyam Fahriel S." },
      { name: "Lutfilah Ahmad" }
    ] 
  },
  { 
    id: "pdd", 
    title: "PDD", 
    icon: Camera, 
    description: "Divisi Publikasi, Dokumentasi, dan Desain.", 
    color: "text-purple-400 drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]", 
    members: [
      { name: "Raihan Firdaus Alfaritsi" }, 
      { name: "Achmad Alvin Al Falah" }, 
      { name: "Daffa Hafist Atha Kuncoro" },
      { name: "Dinda Rahmawati" }
    ] 
  },
  { 
    id: "danus", 
    title: "DKM", 
    icon: Briefcase, 
    description: "Divisi Dana Kewirausahaan Mahasiswa.", 
    color: "text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]", 
    members: [
      { name: "Dheandra Khairunnisa P." }, 
      { name: "Sekar Purwita Asri" },
      { name: "Silfina Nur Fadilah" }
    ] 
  },
];

// --- Component Kartu Glassmorphism ---
const DivisionCard = ({ division }: { division: Division }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      // Styling Glassmorphism: bg-white/5, backdrop-blur, border-white/10
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/10"
    >
      <div 
        className="p-6 cursor-pointer relative z-10" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-5">
            {/* Icon Container Glassy */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-inner">
                <division.icon size={26} className={division.color} />
            </div>
            <div>
              <h3 className={`text-xl font-bold ${division.color} tracking-wide`}>{division.title}</h3>
              <p className="text-sm text-slate-300 font-light hidden sm:block">{division.description}</p>
            </div>
          </div>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="text-slate-400" />
          </motion.div>
        </div>
        <p className="text-sm text-slate-300 font-light mt-3 sm:hidden">{division.description}</p>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: "auto", opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            transition={{ duration: 0.4, ease: "easeInOut" }} 
            className="relative z-10 bg-black/20 border-t border-white/5"
          >
            <div className="p-6 pt-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 ml-1">Anggota Terpilih</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {division.members.map((member, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ x: -20, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ delay: idx * 0.1 }} 
                    className="flex items-center p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                  >
                    {/* Bullet point glowing */}
                    <div className="w-2 h-2 rounded-full mr-3 bg-gradient-to-r from-indigo-400 to-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                    <span className="font-medium text-slate-200 text-sm tracking-wide">{member.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const syne = Syne({ 
  subsets: ['latin'],
  weight: ['400', '700', '800'] // Pastikan memuat weight yang dibutuhkan (font-black biasanya 800/900)
});

// --- Main Content ---
const MainContent = () => {
    const scrollToContent = () => document.getElementById('announcement-list')?.scrollIntoView({ behavior: 'smooth' });

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="min-h-screen font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden text-white relative"
        >
            {/* --- BACKGROUND DEEP PURPLE --- */}
            <div className="fixed inset-0 z-0 bg-gradient-to-b from-purple-700 via-purple-900 to-black" />
            
            {/* Animated Orbs */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{animationDuration: '6s'}} />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{animationDuration: '8s'}} />
            </div>

            {/* --- HERO SECTION --- */}
            <section className="relative z-10 h-screen flex flex-col justify-center items-center px-4 text-center">
                <motion.div initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 0.8 }} className="space-y-8 max-w-5xl mx-auto">
                    
                    <div className="inline-block py-1.5 px-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-purple-300 text-sm font-bold tracking-[0.2em] shadow-lg shadow-purple-900/20">
                        OFFICIAL ANNOUNCEMENT
                    </div>
                    
                    <p className={`${syne.className} text-4xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-purple-200 drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]`}>
                        NEW MEMBER OF <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">HIMA TRPL</span>
                    </p>
                    
                </motion.div>
                
                <motion.div className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer group" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} onClick={scrollToContent}>
                    <div className="flex flex-col items-center gap-3 text-purple-300/70 group-hover:text-purple-300 transition-colors">

                        <span className="text-[10px] mt-4 uppercase tracking-[0.3em] font-semibold">Lihat Pengumuman</span>
                        <div className="p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                            <ArrowDown size={20} />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* --- LIST SECTION --- */}
            <section id="announcement-list" className="relative z-10 min-h-screen py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4 tracking-wide">Daftar Divisi</h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto rounded-full opacity-70"/>
                    </div>
                    
                    <div className="grid gap-6">
                        {announcementData.map((div) => (<DivisionCard key={div.id} division={div} />))}
                    </div>
                    
                    <footer className="mt-32 text-center text-slate-500 text-sm border-t border-white/5 pt-10 pb-10">
                        <p className="font-semibold text-slate-400 tracking-wider mb-1">HIMPUNAN MAHASISWA <br /> TEKNOLOGI REKAYASA PERANGKAT LUNAK</p>
                        <p className="font-light">Periode 2026/2027</p>
                    </footer>
                </div>
            </section>
        </motion.div>
    )
}

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <SplashScreen key="splash" onFinish={() => setShowSplash(false)} />
      ) : (
        <MainContent key="main" />
      )}
    </AnimatePresence>
  );
}