"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Shield, 
  Lock, 
  Key, 
  Eye, 
  ArrowLeft, 
  ShieldCheck, 
  Search, 
  FileCheck
} from "lucide-react";
import Button from "@/components/Button";

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as any },
});

export default function SecuritySolutionPage() {
  return (
    <div className="flex flex-col">
      <nav className="pt-24 pb-6 border-b border-border bg-background/50 backdrop-blur-md sticky top-0 z-20">
        <div className="container-custom flex items-center justify-between">
          <Link href="/solutions" className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors">
            <ArrowLeft size={16} />
            Back to Solutions
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="#framework" className="text-sm font-medium hover:text-primary">Framework</Link>
            <Link href="#compliance" className="text-sm font-medium hover:text-primary">Compliance</Link>
            <Link href="#get-started" className="text-sm font-medium hover:text-primary">Contact</Link>
          </div>
        </div>
      </nav>

      <section className="py-20 md:py-28 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0)}>
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-8">
                <Shield size={32} />
              </div>
              <h1 className="heading-hero mb-6 text-text-primary">
                Zero-Trust <br />
                <span className="text-emerald-500">Cybersecurity</span>
              </h1>
              <p className="body-lg mb-10 max-w-xl">
                In a world of perimeter-less networks, trust is a vulnerability. We build immutable 
                security architectures that verify every request and monitor every packet in real-time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg">Get a Security Audit</Button>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              {...fadeUp(0.2)}
              className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden border border-border bg-surface-elevated flex items-center justify-center"
            >
               <div className="relative w-48 h-48 border-4 border-emerald-500/20 rounded-full flex items-center justify-center animate-[pulse_4s_infinite]">
                  <Lock className="text-emerald-500" size={64} />
                  <div className="absolute inset-0 border-t-4 border-emerald-500 rounded-full animate-spin" />
               </div>
               <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                  <div className="h-2 bg-emerald-500/20 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-3/4 animate-[shimmer_2s_infinite]" />
                  </div>
                  <div className="h-2 bg-emerald-500/20 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-1/2 animate-[shimmer_3s_infinite]" />
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="framework" className="py-20 md:py-32 bg-surface-elevated">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Immutable Identity", icon: Key, desc: "Cryptographically verified identity for all users and machines." },
              { title: "Continuous Monitoring", icon: Eye, desc: "Real-time visibility into all network traffic and system changes." },
              { title: "Threat Hunting", icon: Search, desc: "Proactive AI agents that identify vulnerabilities before they are exploited." },
              { title: "Compliance Ready", icon: FileCheck, desc: "Automated logging and auditing for SOC2, HIPAA, and GDPR." },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i * 0.1)} className="bg-surface p-8 rounded-2xl border border-border">
                <item.icon className="text-emerald-500 mb-5" size={28} />
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
