"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Brain, 
  Activity, 
  Target, 
  Shield, 
  TrendingUp, 
  Zap,
  ArrowRight,
  Eye
} from "lucide-react";

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as any },
});

export default function IntelligencePage() {
  return (
    <div className="flex flex-col bg-black text-white px-6">
      
      {/* ── Hero: Predictive Intelligence ─────────────────────── */}
      <section className="h-[100dvh] flex flex-col items-center justify-center relative overflow-hidden bg-[#0E0E10]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/[0.02] rounded-full blur-[200px] pointer-events-none" />
        <div className="relative z-10 text-center max-w-5xl px-6">
          <motion.span {...fadeUp(0)} className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.5em] text-white/30 mb-6 md:mb-8 block font-mono">
            Intelligence Matrix
          </motion.span>
          <motion.h1 {...fadeUp(0.05)} className="text-4xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 md:mb-10 leading-[0.9]">
            Predictive <br />
            <span className="text-white/20 transition-colors hover:text-white">Operational Logic.</span>
          </motion.h1>
          <motion.p {...fadeUp(0.1)} className="text-base md:text-xl text-white/40 max-w-2xl mx-auto font-medium leading-relaxed">
            Harnessing planetary-scale telemetry to foresee operational challenges before they manifest. Logic that evolves with your enterprise.
          </motion.p>
        </div>
      </section>

      {/* ── Insights: Real-time Telemetry ────────────────────── */}
      <section className="min-h-[100dvh] py-20 flex items-center bg-white border-y border-black/5 relative overflow-hidden relative overflow-hidden">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center px-6 md:px-12 mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="hidden lg:block relative text-center lg:text-left"
          >
             {/* Mock UI/Viz for Intelligence */}
             <div className="p-10 bg-white border border-black/10 rounded-[48px] shadow-2xl relative overflow-hidden">
                <div className="flex justify-between items-center mb-12">
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">Active Telemetry</div>
                   </div>
                   <div className="h-6 w-20 bg-black/5 rounded-full" />
                </div>
                
                <div className="space-y-8">
                  {[1,2,3].map(i => (
                    <div key={i} className="space-y-3">
                       <div className="flex justify-between text-[9px] font-bold text-black/20 uppercase tracking-widest">
                          <span>Layer {i} Analytics</span>
                          <span>{90 + i * 2}% Precise</span>
                       </div>
                       <div className="h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${60 + i * 10}%` }}
                            transition={{ duration: 1.5, delay: i * 0.2 }}
                            className="h-full bg-accent/40"
                          />
                       </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 grid grid-cols-2 gap-4">
                   <div className="p-6 rounded-3xl bg-black/[0.02] border border-black/5 group hover:border-accent/40 transition-colors">
                      <Activity className="text-black/10 transition-colors group-hover:text-accent" size={24} />
                      <div className="text-xl font-bold tracking-tight text-black">Real-time</div>
                   </div>
                   <div className="p-6 rounded-3xl bg-black/[0.02] border border-black/5 group hover:border-accent/40 transition-colors">
                      <TrendingUp className="text-black/10 transition-colors group-hover:text-accent" size={24} />
                      <div className="text-xl font-bold tracking-tight text-black">Predictive</div>
                   </div>
                </div>
             </div>
          </motion.div>

          <motion.div {...fadeUp(0)} className="text-center lg:text-left md:max-w-xl mx-auto lg:mx-0">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-black/[0.03] flex items-center justify-center text-black/40 mb-8 md:mb-10 mx-auto lg:mx-0">
              <Brain size={28} strokeWidth={1} />
            </div>
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-6 md:mb-8 leading-tight text-black">Augmented <br /> <span className="text-black/20">Decision Mesh.</span></h2>
            <p className="text-base md:text-lg text-black/40 leading-relaxed mb-10 md:mb-12 max-w-sm font-medium mx-auto lg:mx-0">
              We eliminate ambiguity. Our intelligence mesh synthesizes millions of data points into actionable, deterministic insights for your executive team.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Anomaly Detection", icon: Target },
                { title: "Strategic Forecast", icon: TrendingUp },
                { title: "Risk Mitigation", icon: Shield },
                { title: "Active Visibility", icon: Eye },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-4 p-4 rounded-2xl bg-black/[0.01] border border-black/5 group hover:border-accent/40 transition-all">
                  <item.icon className="text-black/20 group-hover:text-accent transition-colors" size={18} />
                  <span className="text-[11px] font-black uppercase tracking-widest text-black/40 group-hover:text-black/80 transition-colors">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA: Initiative ─────────────────────────────────── */}
      <section className="min-h-[100dvh] py-20 flex flex-col justify-center items-center text-center px-6">
        <motion.div {...fadeUp(0)} className="max-w-4xl">
          <h2 className="text-3xl md:text-7xl font-black tracking-tighter mb-10 md:mb-12 leading-[0.95]">
            Lead with <br />
            <span className="text-white/20">Absolute Foresight.</span>
          </h2>
          <p className="text-white/30 font-medium text-base md:text-lg leading-relaxed mb-12 md:mb-16 max-w-2xl mx-auto">
            Integrate Safenetics Intelligence into your core infrastructure and experience the power of autonomous enterprise growth.
          </p>
          
          <Link href="/contact">
            <button className="flex items-center gap-3 bg-[#8C6B4F] text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-tighter hover:scale-105 hover:bg-[#5C4033] active:scale-95 transition-all shadow-2xl">
              Initiate Intelligence Audit <ArrowRight size={20} />
            </button>
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
