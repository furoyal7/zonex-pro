"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Cloud, 
  Server, 
  Layers, 
  Globe, 
  ArrowLeft, 
  Cpu, 
  Activity, 
  HardDrive
} from "lucide-react";
import Button from "@/components/Button";

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as any },
});

export default function CloudSolutionPage() {
  return (
    <div className="flex flex-col">
      <nav className="pt-24 pb-6 bg-background/50 backdrop-blur-md sticky top-0 z-20">
        <div className="container-custom flex items-center justify-between">
          <Link href="/solutions" className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors">
            <ArrowLeft size={16} />
            Back to Solutions
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="#infra" className="text-sm font-medium hover:text-primary">Infrastructure</Link>
            <Link href="#scale" className="text-sm font-medium hover:text-primary">Scalability</Link>
            <Link href="#get-started" className="text-sm font-medium hover:text-primary">Contact</Link>
          </div>
        </div>
      </nav>

      <section className="py-20 md:py-28 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0)}>
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-8">
                <Cloud size={32} />
              </div>
              <h1 className="heading-hero mb-6 text-text-primary">
                Planetary-Scale <br />
                <span className="text-accent">Cloud Infrastructure</span>
              </h1>
              <p className="body-lg mb-10 max-w-xl">
                Reliability isn't a feature; it's the foundation. We architect multi-cloud and hybrid environments 
                that eliminate single points of failure while optimizing for extreme performance and cost-efficiency.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg">Review Your Architecture</Button>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              {...fadeUp(0.2)}
              className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden border border-border bg-surface-elevated"
            >
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary-100)_0%,transparent_70%)] opacity-20" />
               <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="grid grid-cols-3 gap-4 w-full h-full">
                     {[1,2,3,4,5,6].map(i => (
                       <div key={i} className="bg-surface rounded-xl border border-border p-4 flex flex-col justify-between hover:border-accent transition-colors">
                          <Server className="text-accent/40" size={20} />
                          <div className="space-y-2">
                             <div className="h-1.5 w-full bg-border rounded" />
                             <div className="h-1.5 w-2/3 bg-border rounded" />
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="infra" className="py-20 md:py-32 bg-surface-elevated">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Hybrid-Cloud Harmony", icon: Layers, desc: "Seamlessly connect on-premise hardware with public cloud resources." },
              { title: "Edge Deployment", icon: Globe, desc: "Reduce latency by deploying logic closer to your users globally." },
              { title: "Auto-Healing", icon: Activity, desc: "Infrastructure that detects failures and re-provisions itself in seconds." },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i * 0.1)} className="glass-card p-8">
                <item.icon className="text-accent mb-5" size={28} />
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
