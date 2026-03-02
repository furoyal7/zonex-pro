"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Network, 
  Database, 
  Zap, 
  ShieldCheck, 
  Layers,
  ArrowRight
} from "lucide-react";

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as any },
});

export default function TechnologyPage() {
  return (
    <div className="flex flex-col bg-black text-white px-6">
      
      {/* ── Hero: Quantum Core ────────────────────────────────── */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10 text-center max-w-5xl">
          <motion.span {...fadeUp(0)} className="text-[11px] font-black uppercase tracking-[0.5em] text-white/30 mb-8 block font-mono">
            Stack Architecture
          </motion.span>
          <motion.h1 {...fadeUp(0.05)} className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-10 leading-[0.9]">
            Quantum <br />
            <span className="text-white/20">Core Protocol.</span>
          </motion.h1>
          <motion.p {...fadeUp(0.1)} className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto font-medium leading-relaxed">
            Engineered for deterministic execution and infinite scalability. Our proprietary stack eliminates latency at the structural layer.
          </motion.p>
        </div>
        
        {/* Animated Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* ── Layer 01: Neural Mesh ────────────────────────────── */}
      <section className="h-screen flex items-center border-y border-white/5 relative overflow-hidden">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-6 md:px-12 mx-auto">
          <motion.div {...fadeUp(0)}>
            <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center text-white/40 mb-10">
              <Network size={32} strokeWidth={1} />
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">Neural Mesh <br /> <span className="text-white/20">Fabric.</span></h2>
            <p className="text-lg text-white/40 leading-relaxed mb-12 max-w-md font-medium">
              A decentralized infrastructure layer that prioritizes logic over location. Every packet is verified, every node is autonomous.
            </p>
            <div className="space-y-6">
              {[
                { title: "Zero-Latency Routing", detail: "Sub-millisecond packet traversal across global mesh nodes." },
                { title: "Atomic Verification", detail: "Cryptographic proof of integrity for every transaction layer." },
              ].map((item) => (
                <div key={item.title} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-2">{item.title}</div>
                  <div className="text-sm font-medium text-white/60">{item.detail}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="hidden lg:grid grid-cols-2 gap-6"
          >
             <div className="aspect-square bg-white/[0.02] border border-white/5 rounded-[40px] flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/[0.02] translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                <Cpu size={60} strokeWidth={0.5} className="text-white/10" />
             </div>
             <div className="aspect-square bg-white border border-white rounded-[40px] flex items-center justify-center shadow-2xl">
                <Zap size={60} strokeWidth={1} className="text-black" />
             </div>
             <div className="aspect-square bg-white/[0.02] border border-white/5 rounded-[40px] flex items-center justify-center">
                <Database size={60} strokeWidth={0.5} className="text-white/10" />
             </div>
             <div className="aspect-square bg-white/[0.02] border border-white/5 rounded-[40px] flex items-center justify-center">
                <Layers size={60} strokeWidth={0.5} className="text-white/10" />
             </div>
          </motion.div>
        </div>
      </section>

      {/* ── Reliability: Constant Verification ─────────────── */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.div {...fadeUp(0)} className="max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 leading-[0.95]">
            Uncompromising <br />
            <span className="text-white/20">Operational Integrity.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
             {[
               { label: "Uptime Protocol", val: "99.9999%", icon: ShieldCheck },
               { label: "Global Nodes", val: "400+", icon: Network },
               { label: "Throughput", val: "1.2 PB/s", icon: Zap },
             ].map((stat) => (
               <div key={stat.label} className="p-10 bg-white/[0.01] border border-white/5 rounded-[32px] hover:bg-white/[0.03] transition-all">
                  <stat.icon className="mx-auto mb-6 text-white/20" size={32} strokeWidth={1} />
                  <div className="text-3xl font-bold tracking-tighter mb-2">{stat.val}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">{stat.label}</div>
               </div>
             ))}
          </div>

          <Link href="/contact">
            <button className="flex items-center gap-3 bg-white text-black px-12 py-5 rounded-full font-black text-sm uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-2xl">
              Request Full Technical Specs <ArrowRight size={20} />
            </button>
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
