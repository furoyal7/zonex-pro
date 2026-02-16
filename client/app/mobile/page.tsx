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
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 text-[11px] font-bold tracking-wider uppercase mb-5 shadow-sm">
            Infrastructure as Code
          </span>
          <h1 className="text-5xl font-extrabold tracking-tight leading-[1.1] text-text-primary" style={{ fontFamily: "var(--font-outfit)" }}>
            The Future of <br />
            <span className="text-primary">Enterprise Tech</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-text-secondary text-lg leading-relaxed max-w-xs"
        >
          Zonex-Pro delivers ultra-modern software solutions for the tech elite.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" variant="primary">
            Get Started Free
          </Button>
          <Button size="lg" variant="secondary">
            View Documentation
          </Button>
        </motion.div>
      </section>

      {/* Bento Box Grid */}
      <section className="flex flex-col gap-6">
        <div className="flex justify-between items-end border-b border-border pb-4">
          <h2 className="text-2xl font-bold text-text-primary" style={{ fontFamily: "var(--font-outfit)" }}>Enterprise Solutions</h2>
          <span className="text-primary font-semibold text-sm cursor-pointer hover:underline">Explore all</span>
        </div>

        <BentoGrid>
          <BentoItem colSpan={2} className="h-64" delay={0.1}>
            <div className="flex flex-col h-full justify-between">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-primary/5 rounded-2xl border border-primary/10">
                  <Cpu className="text-primary" size={32} />
                </div>
                <ArrowUpRight className="text-text-muted/20" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">High-Velocity Architecture</h3>
                <p className="text-text-muted text-sm">Optimized for millisecond latency.</p>
              </div>
            </div>
          </BentoItem>

          <BentoItem delay={0.2}>
            <div className="p-2 bg-primary/5 rounded-xl mb-4 w-fit border border-primary/10">
              <Shield className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-1">Security</h3>
            <p className="text-text-muted text-xs">Military-grade protection.</p>
          </BentoItem>

          <BentoItem delay={0.3}>
            <div className="p-2 bg-cyan-600/5 rounded-xl mb-4 w-fit border border-cyan-600/10">
              <Zap className="text-cyan-600 dark:text-cyan-400" size={24} />
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-1">Scale</h3>
            <p className="text-text-muted text-xs">Elastic infrastructure.</p>
          </BentoItem>

          <BentoItem colSpan={2} className="h-48" delay={0.4}>
             <div className="flex items-center gap-6 h-full">
                <div className="flex-1">
                   <h3 className="text-xl font-bold text-text-primary mb-2">Predictive Analytics</h3>
                   <p className="text-text-muted text-sm">AI-driven dashboards for real-time insights.</p>
                </div>
                <div className="relative w-24 h-24">
                   <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full" />
                   <BarChart3 className="relative z-10 text-primary w-full h-full p-4" />
                </div>
             </div>
          </BentoItem>

          <BentoItem delay={0.5}>
            <div className="p-2 bg-cyan-600/5 rounded-xl mb-4 w-fit border border-cyan-600/10">
              <Globe className="text-cyan-600 dark:text-cyan-400" size={24} />
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-1">Network</h3>
            <p className="text-text-muted text-xs">200+ Edge locations.</p>
          </BentoItem>

          <BentoItem delay={0.6}>
            <div className="p-2 bg-primary/5 rounded-xl mb-4 w-fit border border-primary/10">
              <Layers className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-1">AI Gen</h3>
            <p className="text-text-muted text-xs">Proprietary ML stack.</p>
          </BentoItem>
        </BentoGrid>
      </section>

      {/* Bottom Padding for Nav */}
      <div className="h-10" />
    </div>
  );
}
