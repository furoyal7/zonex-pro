"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Cloud, 
  ArrowLeft, 
  Cpu, 
  Globe, 
  Lock, 
  Zap, 
  Activity,
  ArrowRight
} from "lucide-react";

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as any },
});

export default function CloudSolutionPage() {
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
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none" />
        <div className="relative z-10 text-center max-w-5xl">
          <motion.div {...fadeUp(0)}>
            <div className="w-20 h-20 rounded-[24px] bg-white/5 flex items-center justify-center mb-6 mx-auto text-white/30">
              <Cloud size={40} strokeWidth={1} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-blue mb-4 block font-mono">
              Enterprise Solutions
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-10 leading-[0.95]">
              Quantum <br />
              <span className="text-white/20">Infrastructure Core.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
              Planetary infrastructure engineered for 99.999% deterministic uptime. Secure, elastic, and neural-ready.
            </p>
            <Link href="/contact">
              <button className="px-10 py-5 bg-white text-black font-black rounded-full text-sm uppercase tracking-tighter shadow-xl">Initiate Deployment</button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Matrix / Features Section - 100vh */}
      <section className="h-screen flex items-center bg-black border-y border-white/5 relative overflow-hidden">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-6 md:px-12 mx-auto">
          <motion.div {...fadeUp(0)}>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">Scale Without <br /> <span className="text-white/20">Friction.</span></h2>
            <p className="text-lg text-white/40 leading-relaxed mb-12 max-w-md font-medium">
              Our proprietary Quantum Core protocol eliminates traditional cloud bottlenecks, providing sub-millisecond routing across our global intelligence mesh.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {[
                { title: "Edge Presence", detail: "200+ Nodes", icon: Globe },
                { title: "Throughput", detail: "100+ TB/s", icon: Zap },
                { title: "Security", detail: "Immune System", icon: Lock },
                { title: "Intelligence", detail: "Predictive", icon: Activity },
              ].map((item, i) => (
                <div key={item.title} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon size={16} className="text-white/20" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/20">{item.title}</span>
                  </div>
                  <div className="text-2xl font-bold tracking-tight">{item.detail}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual representation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="hidden lg:flex flex-col gap-4"
          >
            <div className="grid grid-cols-3 gap-4 h-[400px]">
              {[1,2,3,4,5,6,7,8,9].map(i => (
                <div key={i} className="bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-center group hover:bg-white/[0.05] hover:border-white/20 transition-all">
                  <div className="w-1/2 h-[1px] bg-white/5 group-hover:bg-white/20 transition-all" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical CTA Section */}
      <section className="h-screen flex flex-col items-center justify-center bg-black">
        <div className="text-center">
           <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 leading-tight">Architected for <br /> <span className="text-white/20">Industrial Load.</span></h2>
           <div className="flex flex-col md:flex-row gap-6 p-4 bg-white/[0.02] border border-white/5 rounded-[32px] max-w-2xl mx-auto">
              <div className="flex-1 p-6 text-left">
                 <h3 className="text-xl font-bold mb-2">Hybrid Protocol</h3>
                 <p className="text-xs text-white/30 font-medium leading-relaxed">Seamless bridge between on-premise hardware and Safenetics Mesh nodes.</p>
              </div>
              <div className="w-[1px] bg-white/5 hidden md:block" />
              <div className="flex-1 p-6 text-left">
                 <h3 className="text-xl font-bold mb-2">Auto-Healing</h3>
                 <p className="text-xs text-white/30 font-medium leading-relaxed">Autonomous node restoration via neural prediction models.</p>
              </div>
           </div>
           
           <Link href="/contact" className="mt-16 block">
             <button className="flex items-center gap-3 bg-white text-black px-12 py-5 rounded-full font-black text-sm uppercase tracking-tighter mx-auto shadow-2xl hover:scale-105 active:scale-95 transition-all">
               Request Implementation Plan <ArrowRight size={20} />
             </button>
           </Link>
        </div>
      </section>

    </div>
  );
}
