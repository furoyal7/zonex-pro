"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Brain, 
  ArrowLeft, 
  Cpu, 
  Zap, 
  Activity,
  Box,
  Database,
  ArrowRight
} from "lucide-react";

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as any },
});

export default function AISolutionPage() {
  return (
    <div className="flex flex-col bg-black text-white px-6">
      
      {/* Minimal Nav */}
      <nav className="fixed top-24 left-1/2 -translate-x-1/2 z-40">
        <Link href="/solutions" className="flex items-center gap-3 px-6 py-2 bg-white/[0.05] border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white/60 hover:text-white hover:bg-white/10 transition-all backdrop-blur-md">
          <ArrowLeft size={14} /> Back to Solutions
        </Link>
      </nav>

      {/* Hero Section - 100vh */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
        <div className="relative z-10 text-center max-w-5xl">
          <motion.div {...fadeUp(0)}>
            <div className="w-20 h-20 rounded-[24px] bg-white/5 flex items-center justify-center mb-6 mx-auto text-white/30">
              <Brain size={40} strokeWidth={1} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-blue mb-4 block font-mono">
              Enterprise Solutions
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-10 leading-[0.95]">
              Intelligence <br />
              <span className="text-white/20">Mesh Architecture.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
              Deep-integrated neural models for autonomous enterprise decision workflows. Scalable, secure, and private.
            </p>
            <Link href="/contact">
              <button className="px-10 py-5 bg-white text-black font-black rounded-full text-sm uppercase tracking-tighter shadow-xl">Deploy Intelligence</button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Technical Grid - 100vh */}
      <section className="h-screen flex items-center bg-black border-y border-white/5 relative overflow-hidden">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-6 md:px-12 mx-auto">
          {/* Visual UI/Skeleton representation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="hidden lg:flex flex-col gap-6"
          >
            <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[40px] flex flex-col gap-8 shadow-2xl">
              <div className="flex justify-between items-center mb-4">
                 <div className="h-4 w-1/3 bg-white/10 rounded-full animate-pulse" />
                 <div className="h-4 w-12 bg-white/5 rounded-full" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="h-24 bg-white/[0.03] border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
                   <Activity size={16} className="text-white/20" />
                   <div className="h-1.5 w-full bg-white/5 rounded" />
                </div>
                <div className="h-24 bg-white/[0.03] border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
                   <Zap size={16} className="text-white/20" />
                   <div className="h-1.5 w-2/3 bg-white/5 rounded" />
                </div>
              </div>
              <div className="h-32 bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
                  <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-white/40" />
                    <div className="h-2 w-1/2 bg-white/5 rounded" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="h-2 w-3/4 bg-white/5 rounded" />
                  </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div {...fadeUp(0)}>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">Deterministic <br /> <span className="text-white/20">Decision Logic.</span></h2>
            <p className="text-lg text-white/40 leading-relaxed mb-12 max-w-md font-medium">
              We eliminate the hallucinations of traditional LLMs by implementing deterministic constraints and private data silos, ensuring your AI acts with the precision of an engineer.
            </p>
            <div className="space-y-8">
              {[
                { title: "Predictive Analytics", icon: Database, desc: "Forecast demand with 98% accuracy." },
                { title: "LLM Orchestration", icon: Brain, desc: "Secure, private execution of complex logic." },
                { title: "Autonomous Ops", icon: Cpu, desc: "Self-healing system monitoring." },
                { title: "Neural Vision", icon: Box, desc: "High-speed industrial visual recognition." },
              ].map((item, i) => (
                <div key={item.title} className="flex gap-6 items-center group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/20 group-hover:bg-white group-hover:text-black transition-all">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-black uppercase tracking-widest mb-1">{item.title}</h3>
                    <p className="text-xs text-white/30 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden">
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 leading-tight">Elite Efficiency. <br /> <span className="text-white/20">Autonomous Growth.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
               { val: "220%", label: "Throughput Increase" },
               { val: "4-6wk", label: "Implementation Hub" },
               { val: "98.4%", label: "Decision Accuracy" },
            ].map(stat => (
              <div key={stat.label} className="p-10 bg-white/[0.02] border border-white/5 rounded-[32px] hover:bg-white/[0.04] transition-all">
                <div className="text-4xl font-black mb-2 tracking-tighter">{stat.val}</div>
                <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <Link href="/contact" className="mt-20 block">
            <button className="flex items-center gap-3 bg-white text-black px-12 py-5 rounded-full font-black text-sm uppercase tracking-tighter mx-auto shadow-2xl">
              Initiate Project Hub <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}
