"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Users, Megaphone, Heart, Camera, ArrowDown, Briefcase, HomeIcon, CrownIcon } from "lucide-react";
import SplashScreen from "@/components/SplashScreen";
import { Syne } from "next/font/google";

type Member = { name: string };
type Division = { id: string; title: string; icon: React.ElementType; description: string; members: Member[] };

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"]
});

const announcementData: Division[] = [
  {
    id: "bph",
    title: "BPH (Badan Pengurus Harian)",
    icon: CrownIcon,
    description: "Sekretaris 2 & Bendahara 2.",
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
    members: [
      { name: "Dheandra Khairunnisa P." },
      { name: "Sekar Purwita Asri" },
      { name: "Silfina Nur Fadilah" }
    ]
  }
];

const DivisionCard = ({ division }: { division: Division }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/10"
    >
      <div className="p-5 sm:p-6 cursor-pointer relative z-10" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center space-x-4 sm:space-x-5 overflow-hidden">
            <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-inner shrink-0">
              <division.icon size={24} className="text-purple-300 w-5 h-5 sm:w-6 sm:h-6 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
            </div>
            <div className="min-w-0">
              <h3 className={`${syne.className} text-base sm:text-lg md:text-xl font-bold text-white tracking-wide truncate`}>
                {division.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light hidden sm:block truncate">
                {division.description}
              </p>
            </div>
          </div>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0">
            <ChevronDown className="text-slate-400 w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
        </div>
        <p className="text-xs text-slate-300 font-light mt-3 sm:hidden leading-relaxed">
          {division.description}
        </p>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 bg-black/20 border-t border-white/5"
          >
            <div className="p-5 sm:p-6 pt-4">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-3 sm:mb-4 ml-1">
                Anggota Terpilih
              </p>
              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                {division.members.map((member, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-center p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-2.5 sm:mr-3 bg-gradient-to-r from-indigo-400 to-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.6)] shrink-0" />
                    <span className="font-medium text-slate-200 text-xs sm:text-sm tracking-wide break-words">
                      {member.name}
                    </span>
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

const MainContent = () => {
  const scrollToContent = () =>
    document.getElementById("announcement-list")?.scrollIntoView({ behavior: "smooth" });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="min-h-screen bg-black selection:bg-purple-500 selection:text-white overflow-x-hidden text-white relative"
    >
      <div className="fixed inset-0 z-0 bg-linear-to-b from-purple-900 to-black" />

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 sm:w-96 sm:h-96 md:w-125 md:h-125 bg-purple-600/20 rounded-full blur-[80px] sm:blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-48 h-48 sm:w-80 sm:h-80 md:w-100 md:h-100 bg-indigo-600/20 rounded-full blur-[80px] sm:blur-[120px] mix-blend-screen animate-pulse" />
      </div>

      <section className="relative z-10 h-[100svh] flex flex-col justify-center items-center px-4 sm:px-6 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 sm:space-y-8 max-w-5xl mx-auto w-full -mt-20 sm:mt-0"
        >
          <div className="inline-block py-1 px-3 sm:py-1.5 sm:px-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-purple-300 text-[9px] sm:text-xs md:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] shadow-lg shadow-purple-900/20">
            OFFICIAL ANNOUNCEMENT
          </div>

          <h1
            className={`${syne.className} text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-purple-200 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)] sm:drop-shadow-[0_0_25px_rgba(168,85,247,0.4)] leading-tight sm:leading-tight`}
          >
            NEW MEMBER OF <br className="block sm:hidden" />
            <span className="block sm:inline mt-1 sm:mt-0 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              HIMA TRPL
            </span>
          </h1>
          
          <p className="text-sm sm:text-lg md:text-xl text-slate-300 font-light max-w-xs sm:max-w-lg mx-auto leading-relaxed px-2">
            Welcome to our family of HIMATRPL. <br /> Together we learn, Together we grow!
          </p>
        </motion.div>

        <motion.div
          className="absolute bottom-24 sm:bottom-12 cursor-pointer group"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={scrollToContent}
        >
          <div className="flex flex-col items-center gap-2 sm:gap-3 text-purple-300/70 group-hover:text-purple-300 transition-colors">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-semibold">
              Lihat Pengumuman
            </span>
            <div className="p-1.5 sm:p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <ArrowDown size={16} className="sm:w-5 sm:h-5" />
            </div>
          </div>
        </motion.div>
      </section>

      <section id="announcement-list" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 sm:mb-16 text-center">
            <h2 className={`${syne.className} text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 tracking-wide`}>
              DAFTAR DIVISI
            </h2>
            <div className="h-0.5 sm:h-1 w-16 sm:w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto rounded-full opacity-70" />
          </div>

          <div className="grid gap-4 sm:gap-6">
            {announcementData.map((div) => (
              <DivisionCard key={div.id} division={div} />
            ))}
          </div>

          <footer className="mt-20 sm:mt-32 text-center text-slate-500 text-xs sm:text-sm border-t border-white/5 pt-8 sm:pt-10 pb-10">
            <p className="font-semibold text-slate-400 tracking-wider mb-1 px-4">
              HIMPUNAN MAHASISWA <br className="sm:hidden" /> TEKNOLOGI REKAYASA PERANGKAT LUNAK
            </p>
            <p className="font-light">Periode 2026/2027</p>
          </footer>
        </div>
      </section>
    </motion.div>
  );
};

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