"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Brain, 
  Cpu, 
  Database, 
  Zap, 
  ArrowLeft, 
  CheckCircle2, 
  BarChart, 
  Box
} from "lucide-react";
import Button from "@/components/Button";

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as any },
});

export default function AISolutionPage() {
  return (
    <div className="flex flex-col">
      {/* ── Navigation ────────────────────────── */}
      <nav className="pt-24 pb-6 border-b border-border bg-background/50 backdrop-blur-md sticky top-0 z-20">
        <div className="container-custom flex items-center justify-between">
          <Link href="/solutions" className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors">
            <ArrowLeft size={16} />
            Back to Solutions
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">Features</Link>
            <Link href="#metrics" className="text-sm font-medium hover:text-primary">Metrics</Link>
            <Link href="#get-started" className="text-sm font-medium hover:text-primary">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* ── Hero section ──────────────────────── */}
      <section className="py-20 md:py-28 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0)}>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8">
                <Brain size={32} />
              </div>
              <h1 className="heading-hero mb-6 text-text-primary">
                AI & Cognitive <br />
                <span className="text-primary">Automation</span>
              </h1>
              <p className="body-lg mb-10 max-w-xl">
                Replace manual bottlenecks with autonomous intelligence. Our AI solutions integrate 
                directly into your existing workflows to optimize resource allocation, predict maintenance, 
                and enhance customer experiences at scale.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg">Consult an AI Expert</Button>
                </Link>
                <Link href="#features">
                  <Button variant="outline" size="lg">See Capabilities</Button>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              {...fadeUp(0.2)}
              className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden border border-border bg-surface-elevated group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full p-8 md:p-12 flex flex-col gap-6">
                   {/* Abstract Dashboard UI Skeleton */}
                   <div className="h-8 w-1/3 bg-primary/20 rounded-lg animate-pulse" />
                   <div className="flex gap-4 h-32">
                      <div className="flex-1 bg-surface rounded-2xl border border-border p-4 shadow-sm">
                         <BarChart className="text-primary mb-2" size={24} />
                         <div className="h-2 w-full bg-border rounded mt-2" />
                         <div className="h-2 w-2/3 bg-border rounded mt-1" />
                      </div>
                      <div className="flex-1 bg-surface rounded-2xl border border-border p-4 shadow-sm">
                         <Zap className="text-accent mb-2" size={24} />
                         <div className="h-2 w-full bg-border rounded mt-2" />
                         <div className="h-2 w-1/2 bg-border rounded mt-1" />
                      </div>
                   </div>
                   <div className="flex-grow bg-surface rounded-2xl border border-border p-6 shadow-sm overflow-hidden">
                      <div className="flex justify-between mb-4">
                        <div className="h-4 w-1/4 bg-border rounded" />
                        <div className="h-4 w-1/6 bg-primary/10 rounded" />
                      </div>
                      <div className="space-y-3">
                         {[1,2,3].map(i => (
                           <div key={i} className="flex gap-3 items-center">
                              <div className="w-8 h-8 rounded bg-primary/5 flex items-center justify-center"><Box size={14} className="text-primary/50" /></div>
                              <div className="flex-grow h-2 bg-border/50 rounded" />
                              <div className="w-12 h-2 bg-green-500/20 rounded" />
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Capabilities ──────────────────────── */}
      <section id="features" className="py-20 md:py-32 bg-surface-elevated">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-6">Built for High-Level Ops</h2>
            <p className="body-lg max-w-2xl mx-auto">
              Our cognitive frameworks go beyond simple chatbots, offering deep integration into core enterprise logic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Predictive Analytics", icon: Database, desc: "Forecast demand with 98% accuracy using historical data patterns." },
              { title: "LLM Orchestration", icon: Zap, desc: "Private, secure language models trained on your specific documentation." },
              { title: "Autonomous Ops", icon: Cpu, desc: "Self-healing infrastructure that predicts and prevents downtime." },
              { title: "Computer Vision", icon: Box, desc: "High-speed visual recognition for industrial quality control." },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i * 0.1)} className="bg-surface p-8 rounded-2xl border border-border shadow-sm">
                <item.icon className="text-primary mb-5" size={28} />
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────── */}
      <section id="get-started" className="py-20 md:py-32 bg-background border-t border-border">
        <div className="container-custom text-center">
          <h2 className="heading-section mb-8">Deploy Your Competitive Advantage Today</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <Link href="/contact">
                <Button variant="primary" size="lg">Talk to an Architect</Button>
             </Link>
             <p className="text-sm font-medium text-text-secondary">Average implementation time: 4-6 weeks</p>
          </div>
        </div>
      </section>
    </div>
  );
}
