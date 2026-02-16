"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ExternalLink, 
  TrendingUp, 
  Users, 
  Clock, 
  Globe 
} from "lucide-react";
import Button from "@/components/Button";

const caseStudies = [
  {
    title: "Global FinTech Optimization",
    category: "AI & Automation",
    stats: "45% Reduction in Latency",
    description: "How we implemented a custom LLM orchestration layer to handle 10M+ daily financial transactions with zero downtime.",
    image: "bg-indigo-500/10",
    size: "lg", // span 2 cols
  },
  {
    title: "EcoScale Cloud Migration",
    category: "Cloud Infrastructure",
    stats: "30% Energy Savings",
    description: "Transitioning a legacy retail chain to a serverless edge architecture.",
    image: "bg-cyan-500/10",
    size: "sm",
  },
  {
    title: "SecureBank Zero-Trust",
    category: "Cybersecurity",
    stats: "Zero Attacks in 12 Months",
    description: "Deploying an immutable security framework for a leading European bank.",
    image: "bg-emerald-500/10",
    size: "sm",
  },
  {
    title: "HealthData Insight Engine",
    category: "AI & Big Data",
    stats: "2x Faster Diagnoses",
    description: "Empowering medical researchers with real-time predictive analytics on petabytes of clinical data.",
    image: "bg-purple-500/10",
    size: "md",
  },
];

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay, ease: "easeOut" as any },
});

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ────────────────────────────────── */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <motion.span {...fadeUp(0)} className="badge mb-5 inline-flex">Proven Results</motion.span>
            <motion.h1 {...fadeUp(0.1)} className="heading-hero mb-6">
              Empowering Global <br />
              <span className="text-primary">Enterprise Success</span>.
            </motion.h1>
            <motion.p {...fadeUp(0.2)} className="body-lg max-w-xl">
              We translate technical complexity into business value. Explore how our engineering 
              excellence has transformed the world's most ambitious organizations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Bento Grid ──────────────────────────── */}
      <section className="py-20 md:py-32 bg-surface-elevated">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.title}
                {...fadeUp(i * 0.1)}
                className={`glass-card p-8 group flex flex-col relative overflow-hidden ${
                  study.size === "lg" ? "lg:col-span-2" : ""
                } ${study.size === "md" ? "md:col-span-1" : ""}`}
              >
                <div className={`absolute inset-0 ${study.image} opacity-30 group-hover:scale-110 transition-transform duration-700`} />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-primary px-2 py-1 bg-primary/10 rounded-md">
                      {study.category}
                    </span>
                    <ExternalLink size={16} className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-sm text-text-secondary line-clamp-2 mb-auto">
                    {study.description}
                  </p>
                  
                  <div className="mt-6 flex items-center gap-2 text-primary">
                    <TrendingUp size={18} />
                    <span className="text-sm font-bold">{study.stats}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Metrics Summary ─────────────────────── */}
      <section className="py-20 md:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Global Deployments", value: "500+", icon: Globe },
              { label: "Active Users Impacted", value: "100M+", icon: Users },
              { label: "Avg. ROI Realized", value: "140%", icon: TrendingUp },
              { label: "Support Uptime", value: "99.99%", icon: Clock },
            ].map((stat, i) => (
              <motion.div key={stat.label} {...fadeUp(i * 0.1)} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/5 text-primary flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-text-muted uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* ── Final CTA ──────────────────────────── */}
       <section className="py-16 md:py-24">
          <div className="container-custom text-center">
             <h2 className="heading-section mb-8">Want to become our next success story?</h2>
             <Link href="/contact">
                <Button variant="primary" size="lg">Start Your Project</Button>
             </Link>
          </div>
       </section>
    </div>
  );
}
