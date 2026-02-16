"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  FileText, 
  Video, 
  ArrowRight, 
  Search,
  Calendar,
  Clock,
  User
} from "lucide-react";
import Button from "@/components/Button";

const resources = [
  {
    type: "Guide",
    title: "The Zero-Trust Blueprint",
    description: "A comprehensive guide to architecting identity-first security in cloud-native environments.",
    author: "Zonex-Pro Engineering",
    date: "Feb 14, 2026",
    image: "bg-emerald-500/5",
    icon: FileText,
  },
  {
    type: "Whitepaper",
    title: "AI Optimization for Logistics",
    description: "How deterministic AI models are reducing supply chain costs by up to 22%.",
    author: "Research Team",
    date: "Feb 10, 2026",
    image: "bg-indigo-500/5",
    icon: BookOpen,
  },
  {
    type: "Engineering",
    title: "Scaling to 100M+ Users",
    description: "Lessons learned from building the EcoScale serverless edge architecture.",
    author: "SRE Dept",
    date: "Feb 05, 2026",
    image: "bg-cyan-500/5",
    icon: Video,
  },
];

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay, ease: "easeOut" as any },
});

export default function ResourceHubPage() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ────────────────────────────────── */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <motion.span {...fadeUp(0)} className="badge mb-5 inline-flex">Engineering Library</motion.span>
              <motion.h1 {...fadeUp(0.05)} className="heading-hero mb-6">
                Technical <br />
                <span className="text-primary">Resource Hub</span>
              </motion.h1>
              <motion.p {...fadeUp(0.1)} className="body-lg">
                Stay ahead of the curve with engineering-first insights, architectural whitepapers, 
                and implementation guides from the team at Zonex-Pro.
              </motion.p>
            </div>
            
            <motion.div {...fadeUp(0.15)} className="w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                <input 
                  type="text" 
                  placeholder="Search resources..." 
                  className="w-full md:w-[300px] pl-12 pr-4 py-3 bg-surface border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </motion.div>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
             {["All Resources", "Engineering", "Whitepapers", "Guides", "Case Studies"].map((cat, i) => (
               <motion.button 
                 key={cat} 
                 {...fadeUp(0.1 + i * 0.05)}
                 className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                   i === 0 ? "bg-primary text-white" : "bg-surface border border-border text-text-primary hover:border-primary/50"
                 }`}
               >
                 {cat}
               </motion.button>
             ))}
          </div>
        </div>
      </section>

      {/* ── Featured Posts ─────────────────────── */}
      <section className="py-16 md:py-24 bg-surface-elevated">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((res, i) => {
              const Icon = res.icon;
              return (
                <motion.div
                  key={res.title}
                  {...fadeUp(i * 0.1)}
                  className="bg-surface rounded-3xl border border-border overflow-hidden group hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl"
                >
                  <div className={`aspect-video ${res.image} flex items-center justify-center relative overflow-hidden`}>
                    <Icon size={48} className="text-primary opacity-50 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 left-4">
                       <span className="px-3 py-1 bg-surface-elevated border border-border/50 rounded-full text-[10px] font-bold text-text-primary uppercase tracking-wider shadow-sm">
                         {res.type}
                       </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex gap-4 text-[10px] text-text-muted font-medium mb-4 uppercase tracking-widest">
                       <div className="flex items-center gap-1"><Calendar size={12} /> {res.date}</div>
                       <div className="flex items-center gap-1"><User size={12} /> {res.author}</div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
                      {res.title}
                    </h3>
                    
                    <p className="text-sm text-text-secondary line-clamp-2 mb-6 leading-relaxed">
                      {res.description}
                    </p>
                    
                    <Button variant="outline" className="w-full justify-between items-center group/btn">
                      Read More
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Newsletter ─────────────────────────── */}
      <section className="py-20 md:py-32">
        <div className="container-custom">
          <motion.div 
             {...fadeUp(0)}
             className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12"
          >
             <div className="flex-grow text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Zonex Briefings</h2>
                <p className="body-md">Get technical deep-dives and enterprise infrastructure updates delivered directly to your inbox. Once a month. Zero spam.</p>
             </div>
             
             <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-6 py-3 bg-surface border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all w-full sm:w-[300px]"
                />
                <Button variant="primary">Subscribe</Button>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
