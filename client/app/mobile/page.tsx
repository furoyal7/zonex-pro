"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Shield, Activity, Globe, ArrowRight } from "lucide-react";
import { BentoGrid, BentoItem } from "@/components/BentoGrid";
import Link from "next/link";

export default function MobilePage() {
  return (
    <div className="bg-black text-white px-6 pb-24 overflow-x-hidden pt-20">
      
      {/* Identity Hero */}
      <section className="py-12 flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 mb-8 block font-mono">
            Safenetics Mobile Node
          </span>
          <h1 className="text-6xl font-bold tracking-tighter leading-[0.95] text-white mb-8" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            The Elite <br />
            <span className="text-white/20">Security Hub.</span>
          </h1>
          <p className="text-white/40 text-lg leading-relaxed max-w-xs font-medium mb-10">
            Architecting deterministic infrastructure for industry leaders.
          </p>
          <div className="flex flex-col gap-4">
             <Link href="/contact">
                <button className="w-full py-5 bg-white text-black font-black rounded-2xl text-sm uppercase tracking-tighter shadow-lg">Request Access</button>
             </Link>
             <button className="w-full py-5 bg-transparent border border-white/10 text-white/60 font-bold rounded-2xl text-sm">Technical Spec</button>
          </div>
        </motion.div>
      </section>

      {/* Solutions Grid */}
      <section className="flex flex-col gap-6 pt-10 border-t border-white/5">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-xl font-bold tracking-tight">Enterprise Infrastructure</h2>
          <span className="text-white/30 font-bold text-[10px] uppercase tracking-widest border-b border-white/10 pb-1">View All</span>
        </div>

        <BentoGrid>
          <BentoItem colSpan={2} className="h-[250px] bg-white/[0.02] border border-white/5 rounded-[32px] p-8" delay={0.1}>
            <div className="flex flex-col h-full justify-between">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white/40">
                <Cpu size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tighter mb-2 leading-none">High-Velocity Neural Core</h3>
                <p className="text-white/20 text-xs font-medium">Deterministic latency under 1ms.</p>
              </div>
            </div>
          </BentoItem>

          <BentoItem className="bg-white/[0.02] border border-white/5 rounded-[24px] p-6" delay={0.2}>
            <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/40 mb-6">
              <Shield size={20} />
            </div>
            <h3 className="text-sm font-bold mb-1">Security</h3>
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Quantum Core</p>
          </BentoItem>

          <BentoItem className="bg-white/[0.02] border border-white/5 rounded-[24px] p-6" delay={0.3}>
            <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/40 mb-6">
              <Zap size={20} />
            </div>
            <h3 className="text-sm font-bold mb-1">Scale</h3>
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Elastic Node</p>
          </BentoItem>

          <BentoItem colSpan={2} className="h-[180px] bg-white/[0.02] border border-white/5 rounded-[32px] p-8" delay={0.4}>
             <div className="flex items-center gap-8 h-full">
                <div className="flex-1">
                   <h3 className="text-xl font-bold tracking-tight mb-2">Intelligence Mesh</h3>
                   <p className="text-white/20 text-xs font-medium">Real-time predictive telemetry via Safenetics AI.</p>
                </div>
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                   <Activity className="text-white/20 w-10 h-10" strokeWidth={1} />
                </div>
             </div>
          </BentoItem>
        </BentoGrid>
      </section>

      {/* Future Section */}
      <section className="py-24 text-center">
         <h2 className="text-4xl font-bold tracking-tighter mb-8 leading-tight">Ready for <br /> <span className="text-white/20">The Future?</span></h2>
         <Link href="/contact">
           <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-black text-sm uppercase tracking-tighter mx-auto shadow-xl">
             Launch Inquiry <ArrowRight size={18} />
           </button>
         </Link>
      </section>

    </div>
  );
}
