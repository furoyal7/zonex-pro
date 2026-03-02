"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Shield, 
  ArrowLeft, 
  Lock, 
  Key, 
  Eye, 
  Search, 
  Activity,
  ArrowRight,
  ShieldAlert
} from "lucide-react";

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as any },
});

export default function SecuritySolutionPage() {
  return (
    <div className="flex flex-col bg-black text-white px-6">
      
      {/* Minimal Nav */}
      <nav className="fixed top-24 left-1/2 -translate-x-1/2 z-40">
        <Link href="/solutions" className="flex items-center gap-3 px-6 py-2 bg-white/[0.05] border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white/60 hover:text-white hover:bg-white/10 transition-all backdrop-blur-md">
          <ArrowLeft size={14} /> Back to Solutions
        </Link>
      </nav>

      {/* Hero Section - 100vh */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none" />
        <div className="relative z-10 text-center max-w-5xl">
          <motion.div {...fadeUp(0)}>
            <div className="w-20 h-20 rounded-[24px] bg-white/5 flex items-center justify-center mb-10 mx-auto text-white/30">
              <Shield size={40} strokeWidth={1} />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-10 leading-[0.95]">
              Zero-Trust <br />
              <span className="text-white/20">Security Protocol.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
              Immutable security frameworks engineered into the DNA of every infrastructure layer. Beyond trust.
            </p>
            <Link href="/contact">
              <button className="px-10 py-5 bg-white text-black font-black rounded-full text-sm uppercase tracking-tighter shadow-xl">Initiate Security Audit</button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Core Defense - 100vh */}
      <section className="h-screen flex items-center bg-black border-y border-white/5 relative overflow-hidden">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-6 md:px-12 mx-auto">
          <motion.div {...fadeUp(0)}>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">Invisibility by <br /> <span className="text-white/20">Design.</span></h2>
            <p className="text-lg text-white/40 leading-relaxed mb-12 max-w-md font-medium">
              We treat every request as a potential threat. Our Zero-Trust Mesh implements dynamic identity verification and planetary-scale monitoring to ensure total isolation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Immutable Identity", icon: Key, desc: "Geometric verification for all entities." },
                { title: "Continuous Monitoring", icon: Eye, desc: "Planetary-scale visibility." },
                { title: "Threat Mitigation", icon: ShieldAlert, desc: "Autonomous active defense agents." },
                { title: "Compliance Ready", icon: Search, desc: "Automated real-time auditing." },
              ].map((item, i) => (
                <div key={item.title} className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.04] transition-all">
                   <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/20 mb-6 uppercase tracking-widest text-[9px] font-bold">
                     <item.icon size={18} />
                   </div>
                   <h3 className="text-sm font-bold mb-2 tracking-tight">{item.title}</h3>
                   <p className="text-[10px] text-white/30 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="hidden lg:flex items-center justify-center"
          >
             <div className="relative w-80 h-80 flex items-center justify-center">
                <div className="absolute inset-0 border border-white/5 rounded-full animate-pulse" />
                <div className="absolute inset-4 border border-white/5 rounded-full animate-pulse delay-75" />
                <div className="absolute inset-8 border border-white/5 rounded-full animate-pulse delay-150" />
                <Lock className="text-white/10" size={120} strokeWidth={0.5} />
             </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="h-[60vh] flex flex-col items-center justify-center bg-black">
        <div className="text-center">
           <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-10">Absolute <br /> <span className="text-white/20">Compliance.</span></h2>
           <div className="flex gap-12 opacity-20 mb-16">
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">SOC2 II</span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">ISO-27001</span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">HIPAA</span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">GDPR</span>
           </div>
           
           <Link href="/contact">
             <button className="flex items-center gap-3 bg-white text-black px-12 py-5 rounded-full font-black text-sm uppercase tracking-tighter mx-auto shadow-2xl">
               Consult Security Architect <ArrowRight size={20} />
             </button>
           </Link>
        </div>
      </section>

    </div>
  );
}
