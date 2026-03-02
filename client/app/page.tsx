"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Cpu, Activity, ArrowRight, Zap, Database, Brain, Globe, Smartphone, Lock } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col bg-black text-white selection:bg-white/20">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        {/* Subtle Background Animation */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px]" />
          
          {/* Extremely Subtle Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-white/40 mb-8 block font-mono">
              Secure. Intelligent. Precise.
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-10 leading-[0.95] text-white">
              Safenetics <br />
              <span className="text-white/20">Intelligence.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
              The next generation of enterprise cybersecurity and neural-ready infrastructure. Built for scale, engineered for absolute precision.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white text-black font-black rounded-full text-[10px] uppercase tracking-[0.2em] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                >
                  Enterprise Inquiry
                </motion.button>
              </Link>
              <Link href="/technology">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-transparent border border-white/10 text-white font-black rounded-full text-[10px] uppercase tracking-[0.2em] transition-all duration-500"
                >
                  Our Technology
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/20"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* 2. VISION SECTION */}
      <section className="relative h-screen flex items-center bg-black border-y border-white/5 overflow-hidden">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
              A commitment to <br />
              <span className="text-white/30">unwavering security.</span>
            </h2>
            <p className="text-lg text-white/40 leading-relaxed mb-10 max-w-lg">
              In an era of sophisticated threats, we provide the architectural foundation for absolute digital safety. Our approach combines neural intelligence with cryptographic excellence to safeguard your most critical assets.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-xs uppercase tracking-widest text-white/20 font-bold">Uptime Reliability</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">256-bit</div>
                <div className="text-xs uppercase tracking-widest text-white/20 font-bold">Base Encryption</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="hidden lg:block aspect-square relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl border border-white/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 flex items-center justify-center">
              <Shield size={200} strokeWidth={0.5} className="text-white/5" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE SOLUTIONS */}
      <section className="relative min-h-screen py-32 flex flex-col justify-center bg-black overflow-hidden px-6">
        <div className="container-custom mx-auto px-6 md:px-12 text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Core Infrastructure.</h2>
          <p className="text-white/40 font-medium lowercase tracking-widest text-[10px]">Enterprise solutions for a neural-first world.</p>
        </div>

        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 mx-auto">
          {[
            {
              title: "Neural Defenses",
              desc: "AI-driven threat detection that evolves in real-time.",
              icon: <Brain size={24} />,
            },
            {
              title: "Quantum Core",
              desc: "Future-proof encryption and high-performance computing.",
              icon: <Cpu size={24} />,
            },
            {
              title: "Data Intelligence",
              desc: "Advanced analytics providing predictive security insights.",
              icon: <Activity size={24} />,
            },
            {
              title: "Web Development",
              desc: "High-performance enterprise web platforms with structural integrity.",
              icon: <Globe size={24} />,
            },
            {
              title: "App Development",
              desc: "Native operational applications for critical mobile interfaces.",
              icon: <Smartphone size={24} />,
            },
            {
              title: "Cyber Security",
              desc: "Zero-trust protocol implementation and defensive mesh architecture.",
              icon: <Lock size={24} />,
            },
          ].map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group p-10 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white/40 mb-8 group-hover:text-white group-hover:bg-white/10 transition-all">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">{solution.title}</h3>
              <p className="text-white/30 text-sm leading-relaxed mb-8">
                {solution.desc}
              </p>
              <div className="h-[1px] w-0 group-hover:w-full bg-white/20 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. ENTERPRISE CTA */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[120px]" />
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12">
              Ready for the <br />
              <span className="text-white/20 transition-colors hover:text-white duration-1000 cursor-default">future?</span>
            </h2>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-white text-black font-black rounded-full text-lg shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all"
              >
                Request Access
              </motion.button>
            </Link>
            
            <div className="mt-20 flex justify-center gap-12 opacity-20">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Precise.</span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Secure.</span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Neural.</span>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
