"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  ArrowRight, 
  ChevronLeft,
  Zap,
  Cloud,
  Shield,
  Briefcase,
  DollarSign
} from "lucide-react";
import Button from "@/components/Button";

type ProjectType = "ai" | "cloud" | "security" | "custom";

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: "" as ProjectType | "",
    budget: "",
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    
    setStatus("loading");
    // Simulate API call
    setTimeout(() => setStatus("success"), 1500);
  };

  const projectTypes = [
    { id: "ai", label: "AI & Automation", icon: Zap, color: "text-indigo-500", bg: "bg-indigo-500/10" },
    { id: "cloud", label: "Cloud Infrastructure", icon: Cloud, color: "text-cyan-500", bg: "bg-cyan-500/10" },
    { id: "security", label: "Cybersecurity", icon: Shield, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { id: "custom", label: "Custom Solution", icon: Briefcase, color: "text-orange-500", bg: "bg-orange-500/10" },
  ];

  const budgets = [
    "$10k - $25k",
    "$25k - $50k",
    "$50k - $100k",
    "$100k+",
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3, ease: "easeOut" as any }
  };

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <div className="container-custom py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="mb-12 text-center md:text-left">
             <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="badge mb-4">Partner with us</motion.span>
             <motion.h1 
               initial={{ opacity: 0, x: -20 }} 
               animate={{ opacity: 1, x: 0 }}
               className="heading-hero text-4xl md:text-5xl mb-6"
             >
               Let's build your <span className="text-primary">next milestone</span>.
             </motion.h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Funnel */}
            <div className="lg:col-span-8">
              <div className="glass-card p-8 md:p-12 relative overflow-hidden min-h-[500px] flex flex-col">
                
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-border/30">
                   <motion.div 
                     className="h-full bg-primary"
                     initial={{ width: "33%" }}
                     animate={{ width: `${(step / 3) * 100}%` }}
                   />
                </div>

                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div key="success" {...fadeUp} className="flex-grow flex flex-col items-center justify-center text-center">
                       <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6">
                         <CheckCircle size={40} />
                       </div>
                       <h2 className="text-3xl font-bold mb-4">Application Received</h2>
                       <p className="text-text-secondary mb-8 max-w-sm">
                         Our solutions architecture team will review your requirements and reach out within 24 hours.
                       </p>
                       <Button variant="primary" onClick={() => { setStep(1); setStatus("idle"); }}>Done</Button>
                    </motion.div>
                  ) : (
                    <motion.div key={step} {...fadeUp} className="flex-grow flex flex-col">
                      <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold tracking-tight">
                          {step === 1 && "What's the focus of your project?"}
                          {step === 2 && "What's your target budget?"}
                          {step === 3 && "Tell us about yourself"}
                        </h2>
                        {step > 1 && (
                          <button onClick={() => setStep(step - 1)} className="text-xs font-bold text-text-muted hover:text-primary flex items-center gap-1 transition-colors">
                            <ChevronLeft size={14} /> Back
                          </button>
                        )}
                      </div>

                      <form onSubmit={handleSubmit} className="flex-grow flex flex-col">
                        {step === 1 && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                             {projectTypes.map((type) => {
                               const Icon = type.icon;
                               return (
                                 <button
                                   key={type.id}
                                   type="button"
                                   onClick={() => setFormData({...formData, type: type.id as ProjectType})}
                                   className={`p-6 rounded-2xl border transition-all text-left flex flex-col gap-4 group ${
                                     formData.type === type.id 
                                     ? "border-primary bg-primary/5 shadow-neon-sm" 
                                     : "border-border hover:border-primary/50 bg-surface"
                                   }`}
                                 >
                                   <div className={`w-12 h-12 rounded-xl ${type.bg} ${type.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                     <Icon size={24} />
                                   </div>
                                   <div>
                                     <div className="font-bold">{type.label}</div>
                                     <div className="text-xs text-text-muted">Enterprise scalable excellence.</div>
                                   </div>
                                 </button>
                               );
                             })}
                          </div>
                        )}

                        {step === 2 && (
                          <div className="flex flex-col gap-4">
                             {budgets.map((b) => (
                               <button
                                 key={b}
                                 type="button"
                                 onClick={() => setFormData({...formData, budget: b})}
                                 className={`p-6 rounded-2xl border transition-all text-center font-bold ${
                                   formData.budget === b 
                                   ? "border-primary bg-primary/5 text-primary" 
                                   : "border-border hover:border-primary/50 bg-surface"
                                 }`}
                               >
                                 {b}
                               </button>
                             ))}
                          </div>
                        )}

                        {step === 3 && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                              <label className="text-xs font-bold uppercase tracking-wider text-text-muted">Full Name</label>
                              <input 
                                required 
                                className="input-field" 
                                placeholder="Alexander Hamilton"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                              />
                            </div>
                            <div className="flex flex-col gap-2">
                              <label className="text-xs font-bold uppercase tracking-wider text-text-muted">Business Email</label>
                              <input 
                                required type="email" 
                                className="input-field" 
                                placeholder="alex@company.com"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                              />
                            </div>
                            <div className="flex flex-col gap-2 md:col-span-2">
                              <label className="text-xs font-bold uppercase tracking-wider text-text-muted">Company Name</label>
                              <input 
                                required 
                                className="input-field" 
                                placeholder="Sovereign AI Corp"
                                value={formData.company}
                                onChange={(e) => setFormData({...formData, company: e.target.value})}
                              />
                            </div>
                            <div className="flex flex-col gap-2 md:col-span-2">
                              <label className="text-xs font-bold uppercase tracking-wider text-text-muted">Message (Optional)</label>
                              <textarea 
                                rows={4} 
                                className="input-field resize-none py-4" 
                                placeholder="Tell us more about your vision..."
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                              />
                            </div>
                          </div>
                        )}

                        <div className="mt-12 flex justify-end">
                           <Button 
                             type="submit" 
                             variant="primary" 
                             size="lg"
                             disabled={
                               (step === 1 && !formData.type) || 
                               (step === 2 && !formData.budget)
                             }
                             isLoading={status === "loading"}
                           >
                              {step === 3 ? "Launch Project" : "Continue"}
                              <ArrowRight size={18} className="ml-2" />
                           </Button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Sidebar info */}
            <div className="lg:col-span-4 flex flex-col gap-8">
               <div className="glass-card p-8">
                  <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                    <Mail size={18} className="text-primary" /> Reach Direct
                  </h3>
                  <div className="flex flex-col gap-4">
                     <div>
                        <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">Global HQ</div>
                        <div className="text-sm font-medium">123 Silicon Valley Way, CA</div>
                     </div>
                     <div>
                        <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">Partnerships</div>
                        <a href="mailto:partners@zonex-pro.com" className="text-sm font-bold text-primary hover:underline">partners@zonex-pro.com</a>
                     </div>
                  </div>
               </div>

               <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
                  <DollarSign className="text-primary mb-4" size={24} />
                  <h4 className="font-bold mb-2">Dedicated Support</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    All enterprise partners receive a dedicated success manager and 24/7 technical support access.
                  </p>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
