"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, 
  ArrowRight, 
  ChevronLeft,
  Zap,
  Cpu,
  Shield,
  Activity,
  ArrowUpRight
} from "lucide-react";

type ProjectType = "neural" | "quantum" | "intelligence" | "infrastructure";

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: "" as ProjectType | "",
    scale: "Enterprise",
    name: "",
    email: "",
    company: "",
    vision: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    
    setStatus("loading");
    // Simulate high-end processing
    setTimeout(() => setStatus("success"), 2000);
  };

  const options = [
    { id: "neural", label: "Neural Defenses", icon: Zap, detail: "AI-driven autonomous security." },
    { id: "quantum", label: "Quantum Scaling", icon: Cpu, detail: "Deep infrastructure modernization." },
    { id: "intelligence", label: "Global Intelligence", icon: Activity, detail: "Real-time threat analytics." },
    { id: "infrastructure", label: "Critical Systems", icon: Shield, detail: "Zero-trust core architecture." },
  ];

  const scales = ["Early Stage", "Growth", "Enterprise", "Public Sector"];

  const containerVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.4, ease: "easeOut" }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-white/20">
      <div className="container-custom pt-32 pb-20 px-6 md:px-12 flex-grow max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Content Left side */}
          <div className="lg:col-span-4 self-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-6 block">Inquiry Protocol</span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                Partner with <br />
                <span className="text-white/20">Safenetics.</span>
              </h1>
              <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-sm">
                Initiate a high-level consultation for your enterprise security and intelligence requirements. Our architecture team will respond through secure channels.
              </p>
              
              <div className="flex flex-col gap-6 mt-12 pt-8 border-t border-white/5">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white transition-all group-hover:text-black">
                    <ArrowUpRight size={18} />
                  </div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-white/60">Technical Docs</span>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white transition-all group-hover:text-black">
                    <ArrowUpRight size={18} />
                  </div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-white/60">Security Audit</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-8">
            <div className="relative bg-white/[0.02] border border-white/5 rounded-[40px] p-8 md:p-16 overflow-hidden min-h-[600px] flex flex-col">
              
              {/* Subtle Progress */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5">
                 <motion.div 
                   className="h-full bg-white"
                   initial={{ width: "33%" }}
                   animate={{ width: `${(step / 3) * 100}%` }}
                   transition={{ duration: 0.8, ease: "easeOut" }}
                 />
              </div>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div key="success" {...containerVariants} className="flex-grow flex flex-col items-center justify-center text-center">
                     <div className="w-24 h-24 rounded-[32px] bg-white/[0.04] border border-white/10 text-white flex items-center justify-center mb-10">
                       <CheckCircle size={40} strokeWidth={1} />
                     </div>
                     <h2 className="text-3xl font-bold mb-6 tracking-tight">Transmission Received</h2>
                     <p className="text-white/40 mb-10 max-w-sm leading-relaxed">
                       Your inquiry has been logged into our secure system. A solutions director will contact you within 24 hours.
                     </p>
                     <Link href="/">
                       <button className="px-10 py-4 bg-white text-black font-bold rounded-full">Return Home</button>
                     </Link>
                  </motion.div>
                ) : (
                  <motion.div key={step} {...containerVariants} className="flex-grow flex flex-col">
                    <div className="flex items-center justify-between mb-12">
                      <h2 className="text-2xl font-bold tracking-tighter">
                        {step === 1 && "Sector Selection"}
                        {step === 2 && "Operational Scale"}
                        {step === 3 && "Identity Verification"}
                      </h2>
                      {step > 1 && (
                        <button onClick={() => setStep(step - 1)} className="text-[11px] font-bold text-white/30 hover:text-white flex items-center gap-1 transition-colors uppercase tracking-widest">
                          <ChevronLeft size={14} /> Back
                        </button>
                      )}
                    </div>

                    <form onSubmit={handleSubmit} className="flex-grow flex flex-col">
                      {step === 1 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                           {options.map((opt) => {
                             const Icon = opt.icon;
                             return (
                               <button
                                 key={opt.id}
                                 type="button"
                                 onClick={() => setFormData({...formData, type: opt.id as ProjectType})}
                                 className={`p-8 rounded-3xl border transition-all text-left flex flex-col gap-6 group relative overflow-hidden ${
                                   formData.type === opt.id 
                                   ? "border-white/40 bg-white/[0.04]" 
                                   : "border-white/5 hover:border-white/10 bg-white/[0.01]"
                                 }`}
                               >
                                 <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform ${formData.type === opt.id ? 'text-white' : 'text-white/20'}`}>
                                   <Icon size={24} />
                                 </div>
                                 <div className="relative z-10">
                                   <div className="font-bold mb-1">{opt.label}</div>
                                   <div className="text-[11px] text-white/30 font-medium">{opt.detail}</div>
                                 </div>
                               </button>
                             );
                           })}
                        </div>
                      )}

                      {step === 2 && (
                        <div className="grid grid-cols-1 gap-4">
                           {scales.map((s) => (
                             <button
                               key={s}
                               type="button"
                               onClick={() => setFormData({...formData, scale: s})}
                               className={`p-8 rounded-3xl border transition-all text-center font-bold tracking-tight ${
                                 formData.scale === s 
                                 ? "border-white/40 bg-white/[0.04] text-white" 
                                 : "border-white/5 hover:border-white/10 bg-white/[0.01] text-white/40"
                               }`}
                             >
                               {s}
                             </button>
                           ))}
                        </div>
                      )}

                      {step === 3 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="flex flex-col gap-3">
                            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Director Name</label>
                            <input 
                              required 
                              className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors" 
                              placeholder="Full Name"
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                          </div>
                          <div className="flex flex-col gap-3">
                            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Secure Email</label>
                            <input 
                              required type="email" 
                              className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors" 
                              placeholder="email@enterprise.com"
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                          </div>
                          <div className="flex flex-col gap-3 md:col-span-2">
                            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Organization</label>
                            <input 
                              required 
                              className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors" 
                              placeholder="Enterprise / Entity Name"
                              value={formData.company}
                              onChange={(e) => setFormData({...formData, company: e.target.value})}
                            />
                          </div>
                          <div className="flex flex-col gap-3 md:col-span-2">
                            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Vision / Requirements</label>
                            <textarea 
                              rows={5} 
                              className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-sm focus:outline-none focus:border-white/40 transition-colors resize-none" 
                              placeholder="Describe your security or intelligence vision..."
                              value={formData.vision}
                              onChange={(e) => setFormData({...formData, vision: e.target.value})}
                            />
                          </div>
                        </div>
                      )}

                      <div className="mt-auto pt-12 flex justify-end">
                         <button 
                           type="submit" 
                           disabled={
                             (step === 1 && !formData.type) || 
                             (step === 2 && !formData.scale) ||
                             status === "loading"
                           }
                           className="flex items-center gap-3 px-10 py-5 bg-white text-black font-black rounded-full shadow-[0_4px_30px_rgba(255,255,255,0.1)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-tighter text-sm"
                         >
                            {status === "loading" ? "Initializing..." : (step === 3 ? "Launch Protocol" : "Continue")}
                            <ArrowRight size={18} />
                         </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
