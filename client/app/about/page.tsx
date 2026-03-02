"use client";

import React from "react";
import Link from "next/link";
import { Shield, Target, Cpu, Globe, ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Shield,
    title: "Uncompromising Security",
    description: "Absolute protection is not a feature, it's our foundational requirement for every architecture.",
  },
  {
    icon: Target,
    title: "Mathematical Precision",
    description: "Every line of code and every infrastructure node is engineered for deterministic reliability.",
  },
  {
    icon: Cpu,
    title: "Neural Integration",
    description: "Bridging the gap between legacy systems and the future of intelligent automation.",
  },
];

const milestones = [
  { year: "2021", title: "Foundation", description: "Safenetics was established to redefine enterprise security standards." },
  { year: "2022", title: "Quantum Core Alpha", description: "Launched our first proprietary neural-encryption protocol for financial institutions." },
  { year: "2023", title: "Global Intelligence Mesh", description: "Deployed 200+ edge nodes across 4 continents for real-time threat detection." },
  { year: "2025", title: "Neural-Ready Expansion", description: "Scaling infrastructure to support the next generation of industrial AI." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-black text-white px-6">
      
      {/* Hero Section - 100dvh */}
      <section className="h-[100dvh] flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        <div className="relative z-10 text-center max-w-4xl">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[11px] font-bold tracking-[0.4em] uppercase text-white/40 mb-8 block font-mono"
          >
            The Safenetics Vision
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.95]"
          >
            Engineering <br />
            <span className="text-white/20">Absolute Certainty.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Safenetics was founded on a single principle: that security and intelligence should be indistinguishable from the infrastructure itself.
          </motion.p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="min-h-[100dvh] py-20 flex items-center bg-black border-t border-white/5 overflow-hidden">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="hidden lg:flex items-center justify-center aspect-square relative bg-white/[0.02] rounded-3xl border border-white/5"
          >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,white_1px,transparent_1px)] bg-[size:20px_20px]" />
            <Globe size={240} strokeWidth={0.5} className="text-white/5 animate-pulse" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">Structural Integrity.</h2>
            <p className="text-lg text-white/40 leading-relaxed mb-12">
              We approach technology through the lens of industrial design. Everything we build is rigorously tested, mathematically verified, and designed to perform under extreme load.
            </p>
            <div className="space-y-12">
              {values.map((v, i) => (
                <div key={v.title} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40 shrink-0">
                    <v.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                    <p className="text-sm text-white/30 leading-relaxed max-w-sm">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="min-h-[100dvh] py-20 flex flex-col justify-center bg-black border-t border-white/5 overflow-hidden">
        <div className="container-custom mx-auto px-6 md:px-12 mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Our Trajectory.</h2>
          <p className="text-white/40 font-medium">From localized security to global intelligence architecture.</p>
        </div>

        <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-4 px-6 md:px-12">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white/[0.03] border border-white/5 rounded-2xl group hover:bg-white/[0.05] transition-all"
            >
              <div className="text-3xl font-black mb-4 text-white/10 group-hover:text-white transition-colors">
                {m.year}
              </div>
              <h3 className="text-lg font-bold mb-2">{m.title}</h3>
              <p className="text-xs text-white/30 leading-relaxed font-medium">
                {m.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="h-[60dvh] flex flex-col items-center justify-center relative bg-black border-t border-white/5 overflow-hidden">
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-10">
            Join the <span className="text-white/20">Elite.</span>
          </h2>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#8C6B4F", color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-black font-black rounded-full shadow-[0_0_40px_rgba(140,107,79,0.2)] transition-all"
            >
              Contact Intelligence Team
            </motion.button>
          </Link>
        </div>
      </section>

    </div>
  );
}
