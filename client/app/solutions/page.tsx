"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  ArrowRight, 
  BarChart3, 
  Lock, 
  Cpu, 
  Network 
} from "lucide-react";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";

const solutions = [
  {
    title: "AI & Cognitive Automation",
    slug: "ai-automation",
    description: "Enterprise-grade machine learning models designed to automate complex decision-making and scale operational intelligence.",
    icon: Brain,
    color: "#6366f1", // indigo
    features: ["Custom LLM Integration", "Predictive Logistics", "Automated Quality Control"],
  },
  {
    title: "Global Cloud Infrastructure",
    slug: "cloud-infrastructure",
    description: "Planetary-scale cloud architecture that ensures 99.999% availability with automated edge deployment and healing.",
    icon: Cloud,
    color: "#06b6d4", // cyan
    features: ["Multi-Cloud Strategy", "Serverless Optimization", "Edge Content Delivery"],
  },
  {
    title: "Cybersecurity Architecture",
    slug: "cybersecurity",
    description: "Zero-trust security frameworks built into the DNA of your infrastructure, protecting against advanced persistent threats.",
    icon: Shield,
    color: "#10b981", // green
    features: ["Zero-Trust Identity", "Real-time Threat Hunting", "Compliance Automation"],
  },
];

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay, ease: "easeOut" as any },
});

export default function SolutionsPage() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ────────────────────────────────── */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.span {...fadeUp(0)} className="badge mb-5 inline-flex">Enterprise Solutions</motion.span>
            <motion.h1 {...fadeUp(0.1)} className="heading-hero mb-6">
              Engineered for <br />
              <span className="text-primary">Infinite Scalability</span>.
            </motion.h1>
            <motion.p {...fadeUp(0.2)} className="body-lg max-w-xl mb-10">
              We don't just build software; we architect the digital backbone of modern enterprises. 
              Deploy robust, secure, and AI-driven solutions that grow with your vision.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Solutions Grid ──────────────────────── */}
      <section className="py-20 md:py-32 bg-surface-elevated">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((sol, i) => {
              const Icon = sol.icon;
              return (
                <motion.div
                  key={sol.slug}
                  {...fadeUp(i * 0.1)}
                  className="glass-card group p-8 md:p-10 flex flex-col h-full"
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:rotate-12"
                    style={{ backgroundColor: `${sol.color}15`, color: sol.color }}
                  >
                    <Icon size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 tracking-tight" style={{ color: "var(--color-text-primary)" }}>
                    {sol.title}
                  </h3>
                  
                  <p className="body-md mb-8 flex-grow">
                    {sol.description}
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {sol.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3 text-sm font-medium" style={{ color: "var(--color-text-secondary)" }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  
                  <Link href={`/solutions/${sol.slug}`}>
                    <Button variant="outline" className="w-full justify-between group/btn">
                      Explore Solution
                      <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Trust Section ───────────────────────── */}
      <section className="py-20 md:py-32">
        <div className="container-custom text-center">
          <motion.div {...fadeUp(0)} className="mb-16">
            <h2 className="heading-section mb-6">Built for Global Standards</h2>
            <p className="body-lg max-w-2xl mx-auto">
              Our solutions comply with rigorous enterprise security standards, including SOC2, GDPR, and ISO 27001, 
              ensuring your data is always protected.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50">
            {/* Placeholder for Trust Logos */}
            {["Security First", "Global Scale", "High Uptime", "24/7 Support"].map((text) => (
              <div key={text} className="p-8 border border-border rounded-xl font-bold uppercase tracking-widest text-xs">
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer CTA ──────────────────────────── */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="heading-section text-white mb-8">Ready to Transform Your Infrastructure?</h2>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Schedule an Architect Call
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
