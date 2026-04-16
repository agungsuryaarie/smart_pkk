"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Database, 
  FileText, 
  Users 
} from "lucide-react"; 
import LogoPKK from "../../public/logo_pkk.png"; 
import KetuaPKK from "../../public/ketua_pkk.png"; 
import StafAhliPKK from "../../public/staff_ahli_pkk.png"; 

const bgHeroImage = "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070&auto=format&fit=crop";

const cardsOverlay = [
  { 
    icon: <Database size={20} />, 
    title: "SIM PKK", 
    desc: "Manajemen Data", 
    color: "bg-blue-600", 
    cardBg: "bg-white", 
    borderColor: "border-white" 
  },
  { 
    icon: <FileText size={20} />, 
    title: "E-Reporting", 
    desc: "Laporan Digital", 
    color: "bg-amber-500", 
    cardBg: "bg-white", 
    borderColor: "border-white" 
  },
  { 
    icon: <Users size={20} />, 
    title: "Dasawisma", 
    desc: "Data Kelompok", 
    color: "bg-emerald-600", 
    cardBg: "bg-white", 
    borderColor: "border-white" 
  },
];

export default function LandingPage() {
  return (
    // overflow-x-hidden tetap ada biar gak goyang kiri-kanan
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden">
      <section className="relative min-h-screen w-full flex items-center bg-black py-20 lg:py-0">
         
         <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgHeroImage})` }} />
         
         {/* OVERLAY */}
         <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#002d5a] via-[#002d5a]/95 via-60% to-[#001e3c]/40" />
         
         <div className="absolute inset-0 z-10 backdrop-blur-[1px]" />

         <div className="container mx-auto px-6 md:px-16 relative z-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               
               {/* KIRI: TEKS & CARDS */}
               <motion.div 
                 initial={{ opacity: 0, x: -100 }} 
                 animate={{ opacity: 1, x: 0 }} 
                 transition={{ duration: 0.5, ease: "backOut" }} 
                 className="flex flex-col space-y-6"
               >
                  <div className="w-20 h-20 md:w-24 md:h-24 relative mb-2">
                    <img src={LogoPKK.src} alt="Logo PKK" className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]" />
                  </div>
                  <div className="space-y-6">
                    <h1 className="text-5xl md:text-7xl font-black text-blue-400 leading-[1.1] tracking-tight drop-shadow-lg uppercase">
                      Smart PKK <br/>
                      <span className="text-white tracking-tighter">Kab. Batu Bara</span>
                    </h1>
                    <p className="text-slate-200 text-lg md:text-xl font-light max-w-lg italic border-l-4 border-emerald-400 pl-4 bg-white/5 backdrop-blur-sm py-3 rounded-r-xl">
                      "Mewujudkan keluarga sejahtera melalui pemberdayaan ekonomi dan digitalisasi informasi yang transparan dan modern."
                    </p>
                  </div>

                  {/* Cards Area */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
                     {cardsOverlay.map((card, idx) => (
                       <motion.div 
                         key={idx} 
                         initial={{ opacity: 0, scale: 0.5, y: 30 }} 
                         animate={{ opacity: 1, scale: 1, y: 0 }} 
                         transition={{ duration: 0.4, delay: 0.3 + idx * 0.1, ease: [0.34, 1.56, 0.64, 1] }} 
                         whileHover={{ scale: 1.05 }} 
                         className={`w-full ${card.cardBg} p-5 rounded-[1.3rem] flex items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer group`}
                       >
                         <div className={`${card.color} p-2.5 rounded-xl text-white shrink-0 flex items-center justify-center transition-transform group-hover:rotate-12 shadow-md`}>
                           {card.icon}
                         </div>
                         <div className="flex flex-col">
                           <h4 className="text-slate-900 font-bold text-[11px] md:text-[12px] uppercase tracking-wider leading-tight">
                             {card.title}
                           </h4>
                           <p className="text-slate-500 text-[10px] font-medium italic mt-0.5">
                             {card.desc}
                           </p>
                         </div>
                       </motion.div>
                     ))}
                  </div>
               </motion.div>

               {/* KANAN: FOTO PIMPINAN */}
               <div className="hidden lg:flex justify-end items-end relative h-[500px] overflow-hidden translate-y-5">
                  <motion.div 
                    initial={{ opacity: 0, y: 150 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8, ease: "backOut", delay: 0.3 }}
                    className="relative w-80 h-auto z-10 -mr-16"
                  >
                    <img src={StafAhliPKK.src} className="w-full h-full object-contain filter drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)]" alt="Staff Ahli" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap bg-blue-900/60 backdrop-blur-md px-4 py-1 rounded-full border border-white/20">
                       <p className="text-white font-bold text-[10px] uppercase tracking-widest">Staff Ahli PKK Kab. Batu Bara</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 150 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8, ease: "backOut", delay: 0.5 }}
                    className="relative w-[340px] h-auto z-20"
                  >
                    <img src={KetuaPKK.src} className="w-full h-full object-contain filter " alt="Ketua" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap bg-blue-900/60 backdrop-blur-md px-5 py-1.5 rounded-full shadow-xl">
                       <p className="text-white font-black text-xs uppercase tracking-widest">Ketua PKK Kab. Batu Bara</p>
                    </div>
                  </motion.div>
               </div>

            </div>
         </div>
      </section>
    </div>
  );
}