"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Brain, 
  Cloud, 
  Shield, 
  ArrowRight, 
  Zap, 
  Cpu, 
  Activity 
} from "lucide-react";

const solutions = [
  {
    title: "Intelligence Mesh",
    slug: "ai-automation",
    description: "Enterprise-grade neural frameworks designed for autonomous decision-making and predictive operations.",
    icon: Brain,
    features: ["Neural Core Alpha", "Predictive Analytics", "High-Velocity ML"],
  },
  {
    title: "Quantum Core",
    slug: "cloud-infrastructure",
    description: "Planetary-scale infrastructure optimized for deterministic reliability and extreme computational load.",
    icon: Cloud,
    features: ["Global Edge Mesh", "Zero-Latency Routing", "Auto-Healing Nodes"],
  },
  {
    title: "Zero-Trust Protocol",
    slug: "cybersecurity",
    description: "Immutable security frameworks engineered into the DNA of every infrastructure layer.",
    icon: Shield,
    features: ["Neural Cryptography", "Active Threat Mitigation", "Geometric Verification"],
  },
];

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as any },
});

export default function SolutionsPage() {
  return (
    <div className="flex flex-col bg-black text-white px-6">
      
      {/* Hero Section - 100vh */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
        <div className="relative z-10 text-center max-w-5xl">
          <motion.span {...fadeUp(0)} className="text-[11px] font-bold tracking-[0.4em] uppercase text-white/40 mb-8 block font-mono">
            Enterprise Solutions
          </motion.span>
          <motion.h1 {...fadeUp(0.05)} className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-10 leading-[0.95]">
            Engineered for <br />
            <span className="text-white/20">The Infinite Enterprise.</span>
          </motion.h1>
          <motion.p {...fadeUp(0.1)} className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
            We architect the digital backbone of industrial leaders. Robust, secure, and neural-ready.
          </motion.p>
          
          <motion.div {...fadeUp(0.15)} className="flex justify-center">
            <Link href="/contact">
              <button className="px-10 py-5 bg-white text-black font-black rounded-full text-sm uppercase tracking-tighter shadow-lg hover:scale-105 active:scale-95 transition-all">
                Request Architecture Consultation
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Grid Section - 100vh compatible */}
      <section className="min-h-screen py-32 flex flex-col justify-center border-y border-white/5">
        <div className="container-custom mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((sol, i) => (
              <motion.div
                key={sol.slug}
                {...fadeUp(i * 0.1)}
                className="bg-white/[0.02] border border-white/5 rounded-[40px] p-10 group hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 flex flex-col h-full"
              >
                <div className="w-16 h-16 rounded-[20px] bg-white/5 flex items-center justify-center text-white/30 mb-10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <sol.icon size={32} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-black mb-6 tracking-tight">{sol.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-8 flex-grow">
                  {sol.description}
                </p>
                
                <ul className="space-y-4 mb-12">
                  {sol.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-[11px] font-bold text-white/20 uppercase tracking-widest">
                      <div className="w-1 h-1 rounded-full bg-white/20" />
                      {feat}
                    </li>
                  ))}
                </ul>
                
                <Link href={`/solutions/${sol.slug}`} className="mt-auto">
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-colors">
                    Access Solution Protocol <ArrowRight size={14} />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust/Capabilities */}
      <section className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none" />
        
        <motion.div {...fadeUp(0)} className="max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">Global Compliance. <br /> <span className="text-white/20">Industrial Standards.</span></h2>
          <p className="text-white/40 font-medium text-lg leading-relaxed mb-16">
            Our architecture adheres to the world's most rigorous verification standards, including SOC2 Type II, ISO 27001, and NIST Cybersecurity Framework.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {["Security Core", "Planetary Scale", "Neural Ready", "Absolute Uptime"].map((text) => (
              <div key={text} className="px-6 py-6 border border-white/10 rounded-2xl bg-white/[0.01] flex flex-col items-center justify-center gap-2 group hover:border-white/30 transition-all">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 group-hover:text-white/60 transition-colors">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  );
}
