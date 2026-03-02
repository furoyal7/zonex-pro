"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  FileText, 
  ArrowRight, 
  Search,
  Calendar,
  User,
  Shield,
  Activity
} from "lucide-react";

const resources = [
  {
    type: "Guide",
    title: "Zero-Trust Mesh Architecture",
    description: "Architecting decentralized security nodes for the global enterprise footprint.",
    author: "Safenetics Architecture",
    date: "March 02, 2026",
    icon: Shield,
  },
  {
    type: "Intelligence",
    title: "Neural Threat Mitigation",
    description: "Implementing autonomous reactive defenses in critical industrial infrastructure.",
    author: "Intelligence Dept",
    date: "Feb 24, 2026",
    icon: Activity,
  },
  {
    type: "Whitepaper",
    title: "The Quantum Security Core",
    description: "Deterministic encryption standards for the next generation of financial networks.",
    author: "Safenetics Research",
    date: "Feb 15, 2026",
    icon: FileText,
  },
];

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as any },
});

export default function ResourceHubPage() {
  return (
    <div className="flex flex-col bg-black text-white px-6">
      {/* Hero Section */}
      <section className="h-[70vh] flex flex-col justify-center border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
        <div className="container-custom mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-3xl">
              <motion.span {...fadeUp(0)} className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-8 block">Intelligence Hub</motion.span>
              <motion.h1 {...fadeUp(0.05)} className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.95]">
                Engineering <br />
                <span className="text-white/20">Resources.</span>
              </motion.h1>
              <motion.p {...fadeUp(0.1)} className="text-lg text-white/40 max-w-xl font-medium leading-relaxed">
                Technical briefings, architectural whitepapers, and operational guides from the Safenetics Intelligence Mesh.
              </motion.p>
            </div>
            
            <motion.div {...fadeUp(0.15)} className="w-full md:w-auto">
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-white transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="Query resources..." 
                  className="w-full md:w-[350px] pl-16 pr-6 py-5 bg-white/[0.02] border border-white/10 rounded-2xl focus:outline-none focus:border-white/30 transition-all font-medium text-sm placeholder:text-white/20" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-32 bg-black overflow-hidden">
        <div className="container-custom mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {resources.map((res, i) => {
              const Icon = res.icon;
              return (
                <motion.div
                  key={res.title}
                  {...fadeUp(i * 0.1)}
                  className="bg-white/[0.02] rounded-[32px] border border-white/5 overflow-hidden group hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 flex flex-col h-full"
                >
                  <div className="p-10 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 mb-10">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/30 group-hover:text-white group-hover:bg-white/10 transition-all duration-500">
                        <Icon size={28} strokeWidth={1.5} />
                      </div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">{res.type}</div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-6 tracking-tight leading-tight group-hover:text-white transition-colors">
                      {res.title}
                    </h3>
                    
                    <p className="text-[15px] text-white/40 font-medium leading-[1.6] mb-12 flex-grow">
                      {res.description}
                    </p>
                    
                    <div className="pt-8 border-t border-white/5 flex items-center justify-between group/footer">
                       <div className="flex flex-col">
                         <span className="text-[10px] uppercase font-bold tracking-widest text-white/20 mb-1">Author</span>
                         <span className="text-[11px] font-bold text-white/60">{res.author}</span>
                       </div>
                       <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-white/20 group-hover/footer:bg-white group-hover/footer:text-black transition-all">
                         <ArrowRight size={18} />
                       </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="h-[50vh] flex flex-col items-center justify-center border-t border-white/5 bg-black">
        <motion.div 
           {...fadeUp(0)}
           className="text-center max-w-2xl"
        >
           <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8">Intelligence Briefing.</h2>
           <p className="text-white/30 font-medium mb-12">Architectural insights and operational security updates. Precise and essential. Delivered monthly.</p>
           
           <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <input 
                type="email" 
                placeholder="Secure Email Address" 
                className="px-8 py-5 bg-white/[0.02] border border-white/10 rounded-full focus:outline-none focus:border-white/30 transition-all w-full sm:w-[320px] text-sm font-medium" 
              />
              <button className="px-10 py-5 bg-white text-black font-black rounded-full text-sm uppercase tracking-tighter whitespace-nowrap hover:scale-105 active:scale-95 transition-all">Submit Access</button>
           </div>
        </motion.div>
      </section>
    </div>
  );
}
