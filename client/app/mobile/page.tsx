"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Layers, Zap, Shield, BarChart3, Globe } from "lucide-react";
import { BentoGrid, BentoItem } from "@/components/BentoGrid";
import Button from "@/components/Button";

export default function MobilePage() {
  return (
    <div className="px-6 pt-20 flex flex-col gap-12">
      {/* Minimalist Hero Section */}
      <section className="flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
            Next-Gen Infrastructure
          </span>
          <h1 className="text-5xl font-bold tracking-tight leading-[1.1] text-white">
            Future of <br />
            <span className="text-cyan-400">Tech is Here.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/60 text-lg leading-relaxed max-w-xs"
        >
          Zonex-Pro delivers ultra-modern software solutions for the tech elite.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" className="bg-cyan-500 text-black hover:bg-cyan-400 rounded-full px-8 py-6 text-lg font-bold">
            Get Started
          </Button>
        </motion.div>
      </section>

      {/* Bento Box Grid */}
      <section className="flex flex-col gap-6">
        <div className="flex justify-between items-end">
          <h2 className="text-2xl font-bold text-white">Solutions</h2>
          <span className="text-cyan-400 text-sm font-medium">View all</span>
        </div>

        <BentoGrid>
          <BentoItem colSpan={2} className="h-64" delay={0.1}>
            <div className="flex flex-col h-full justify-between">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-cyan-500/10 rounded-2xl">
                  <Cpu className="text-cyan-400" size={32} />
                </div>
                <ArrowUpRight className="text-white/20" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">High-Velocity Architecture</h3>
                <p className="text-white/50 text-sm">Optimized for millisecond latency.</p>
              </div>
            </div>
          </BentoItem>

          <BentoItem delay={0.2}>
            <div className="p-2 bg-indigo-500/10 rounded-xl mb-4 w-fit">
              <Shield className="text-indigo-400" size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Security</h3>
            <p className="text-white/50 text-xs">Military-grade protection.</p>
          </BentoItem>

          <BentoItem delay={0.3}>
            <div className="p-2 bg-purple-500/10 rounded-xl mb-4 w-fit">
              <Zap className="text-purple-400" size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Scale</h3>
            <p className="text-white/50 text-xs">Elastic infrastructure.</p>
          </BentoItem>

          <BentoItem colSpan={2} className="h-48" delay={0.4}>
             <div className="flex items-center gap-6 h-full">
                <div className="flex-1">
                   <h3 className="text-xl font-bold text-white mb-2">Predictive Analytics</h3>
                   <p className="text-white/50 text-sm">AI-driven dashboards for real-time insights.</p>
                </div>
                <div className="relative w-24 h-24">
                   <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full animate-pulse" />
                   <BarChart3 className="relative z-10 text-cyan-400 w-full h-full p-4" />
                </div>
             </div>
          </BentoItem>

          <BentoItem delay={0.5}>
            <div className="p-2 bg-emerald-500/10 rounded-xl mb-4 w-fit">
              <Globe className="text-emerald-400" size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Network</h3>
            <p className="text-white/50 text-xs">200+ Edge locations.</p>
          </BentoItem>

          <BentoItem delay={0.6}>
            <div className="p-2 bg-amber-500/10 rounded-xl mb-4 w-fit">
              <Layers className="text-amber-400" size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">AI Gen</h3>
            <p className="text-white/50 text-xs">Custom ML models.</p>
          </BentoItem>
        </BentoGrid>
      </section>

      {/* Bottom Padding for Nav */}
      <div className="h-10" />
    </div>
  );
}
