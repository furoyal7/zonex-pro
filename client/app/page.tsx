"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Shield,
  Layers,
  Globe,
  BarChart3,
  Cpu,
  CheckCircle2,
  Code2,
  Cloud,
  Brain,
  Users,
} from "lucide-react";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceCard from "@/components/ServiceCard";
import { Logo } from "@/components/Logo";

const solutions = [
  {
    icon: Zap,
    title: "High-Velocity Architecture",
    description:
      "Optimized systems designed for millisecond latency and global scale.",
  },
  {
    icon: Shield,
    title: "Military-Grade Security",
    description:
      "Zero-trust architecture with advanced encryption to protect your core assets.",
  },
  {
    icon: Layers,
    title: "Hyper-Scalable Systems",
    description:
      "Infrastructure that expands elastically to handle millions of concurrent users.",
  },
  {
    icon: Globe,
    title: "Global Edge Network",
    description:
      "Deployment across 200+ edge locations for instant content delivery worldwide.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description:
      "AI-driven dashboards that forecast trends and actionable business intelligence.",
  },
  {
    icon: Cpu,
    title: "Generative AI Integration",
    description:
      "Custom LLM and ML model deployment to automate complex workflows.",
  },
];

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Tailored software solutions built with scalability and performance at the core of every decision.",
    features: [
      "Full-stack Web Development",
      "API Design & Integration",
      "Microservices Architecture",
      "Legacy Modernization",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Enterprise-grade cloud solutions ensuring high availability, security, and cost-efficiency.",
    features: [
      "AWS / Azure / GCP",
      "DevOps Automation",
      "Docker & Kubernetes",
      "Serverless Computing",
    ],
  },
  {
    icon: Brain,
    title: "AI & Data Science",
    description:
      "Unlock the power of your data with advanced machine learning and intelligent automation.",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Data Engineering",
    ],
  },
];

const testimonials = [
  {
    quote:
      "ZONEX-PRO transformed our entire digital infrastructure. The team's expertise and attention to detail exceeded all expectations. Our platform performance improved by 300%.",
    name: "Sarah Chen",
    role: "CTO, FinFlow Technologies",
    avatarFallback: "SC",
    rating: 5,
  },
  {
    quote:
      "Working with ZONEX-PRO felt like having an extension of our own team. They understood our vision from day one and delivered a product that our users absolutely love.",
    name: "Michael Rodriguez",
    role: "CEO, NovaBrand",
    avatarFallback: "MR",
    rating: 5,
  },
  {
    quote:
      "The AI solution they built for us reduced our customer support costs by 60% while actually improving satisfaction scores. Remarkable engineering.",
    name: "Emily Watson",
    role: "VP of Operations, MediCore",
    avatarFallback: "EW",
    rating: 5,
  },
];

const stats = [
  { value: "99+", label: "Projects Delivered" },
  { value: "20+", label: "Active Partners" },
  { value: "12", label: "Countries Reached" },
  { value: "99.9%", label: "Uptime Guaranteed" },
];

const whyUsPoints = [
  "Dedicated team of senior engineers and designers",
  "Agile development with transparent communication",
  "Proven track record across diverse industries",
  "Post-launch support and continuous optimization",
];

const teamMembers = [
  {
    name: "Alex V.",
    role: "Lead Architect",
    specialty: "Distributed Systems",
  },
  {
    name: "Elena R.",
    role: "Head of AI",
    specialty: "Machine Learning",
  },
  {
    name: "David K.",
    role: "Security Principal",
    specialty: "Cybersecurity",
  },
  {
    name: "Sarah M.",
    role: "Product Director",
    specialty: "UX Strategy",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* ═══════════════════════════════════════════
          1. HERO SECTION (FUTURISTIC)
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Abstract Grid Background */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border-light)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border-light)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />
        </div>

        {/* Glow Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[140px] mix-blend-multiply dark:mix-blend-screen opacity-60 dark:opacity-100 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent/10 blur-[140px] mix-blend-multiply dark:mix-blend-screen opacity-60 dark:opacity-100 animate-pulse" style={{ animationDelay: "2s" }} />

        <div className="container-custom relative z-10 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-md mb-8 mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="text-xs font-medium text-accent tracking-widest uppercase">
                  Future-Ready Technology
                </span>
              </div>

              <h1 className="heading-hero mb-6 text-text-primary">
                <span className="inline-block whitespace-nowrap">Tech Solutions,</span> <br />
                <span className="inline-block whitespace-nowrap">Real Business</span> <br />
                <span className="text-primary dark:text-accent-light drop-shadow-[0_0_15px_rgba(99,102,241,0.2)] inline-block whitespace-nowrap">
                  Impact
                </span>
              </h1>

              <p className="body-lg max-w-lg mb-10 text-text-secondary mx-auto lg:mx-0">
                ZONEX-PRO delivers high-performance software solutions and AI-driven
                innovations. We build the systems that power tomorrow&apos;s enterprises.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" variant="primary" className="w-full sm:w-auto shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] transition-shadow duration-300">
                    START PROJECT
                    <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link href="/projects" className="w-full sm:w-auto">
                  <Button size="lg" variant="ghost" className="w-full sm:w-auto border border-border hover:bg-surface-elevated text-text-primary">
                    VIEW WORK
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right — Tech Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="hidden lg:block relative"
            >
               {/* Abstract 3D-like HUD Element */}
               <div className="relative w-full aspect-square max-w-lg mx-auto">
                  <div className="absolute inset-0 border border-primary/30 rounded-full animate-[spin_10s_linear_infinite]" />
                  <div className="absolute inset-[10%] border border-accent/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                  <div className="absolute inset-[20%] border-2 border-dashed border-secondary/40 rounded-full animate-[spin_20s_linear_infinite]" />
                  
                  {/* Central Core */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-40 animate-pulse" />
                     <div className="relative z-10 p-8 backdrop-blur-xl bg-surface/50 border border-border-light rounded-2xl shadow-2xl">
                        <Logo className="w-20 h-20" textClassName="hidden" />
                     </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-[10%] right-[20%] p-3 bg-surface/80 border border-accent/30 rounded-lg backdrop-blur-md shadow-lg animate-float">
                      <Code2 className="text-accent" size={20} />
                  </div>
                   <div className="absolute bottom-[20%] left-[10%] p-3 bg-surface/80 border border-secondary/30 rounded-lg backdrop-blur-md shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                      <Brain className="text-secondary" size={20} />
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. TRUSTED BY — Logo Strip (Neon Style)
          ═══════════════════════════════════════════ */}
      <section className="py-12 bg-background/50 backdrop-blur-sm">
        <div className="container-custom">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] mb-8 text-text-muted">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-60">
            {["NEXT.JS", "VERCEL", "STRIPE", "NOTION", "LINEAR", "FIGMA"].map((brand) => (
              <span
                key={brand}
                className="text-lg font-bold tracking-[0.2em] hover:text-text-primary hover:opacity-100 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all duration-300 cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. SOLUTIONS (Formerly Features)
          ═══════════════════════════════════════════ */}
      <section className="section-padding relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <SectionHeading
              badge="Solutions"
              title="Engineering the Impossible"
              subtitle="We deploy next-generation technology to build systems that are faster, smarter, and more secure."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((feature, i) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. WHY ZONEX-PRO (Tech Focus)
          ═══════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-secondary rounded-3xl opacity-30 blur-lg group-hover:opacity-60 transition duration-500" />
                <div className="relative aspect-square bg-background rounded-3xl border border-border p-8 flex items-center justify-center overflow-hidden">
                    {/* Grid Pattern */}
                     <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
                    
                    {/* Center Logo */}
                    <div className="relative z-10 scale-150">
                        <Logo />
                    </div>

                    {/* Orbiting Elements */}
                    <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                        <div className="absolute top-10 left-1/2 w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_#22d3ee]" />
                        <div className="absolute bottom-10 left-1/2 w-2 h-2 bg-secondary rounded-full shadow-[0_0_10px_#a855f7]" />
                    </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                Why ZONEX-PRO
              </span>
              <h2 className="heading-section mb-6">
                Innovation Without <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-400">Compromise</span>
              </h2>
              <p className="body-lg mb-8 text-text-secondary">
                We bridge the gap between visionary concepts and production-ready code. 
                Our team operates at the bleeding edge of technology to give you an unfair advantage.
              </p>
              <ul className="space-y-4 mb-8">
                {whyUsPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 group">
                    <div className="mt-1 p-1 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                        <CheckCircle2 size={16} className="text-green-500" />
                    </div>
                    <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <Button variant="outline" className="border-border text-text-secondary hover:border-primary hover:text-primary">
                  Discover Our Ethos
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. SERVICES
          ═══════════════════════════════════════════ */}
      <section className="section-padding bg-surface/30">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeading
              badge="Our Expertise"
              title="Precision Engineering"
              subtitle="From core infrastructure to AI models, we build the full stack of the future."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                delay={i * 0.1}
              />
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" className="border-border text-text-secondary hover:bg-surface-elevated">
                Explore Full Capabilities
                <ArrowRight size={16} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5.5 TEAM PREVIEW (New)
          ═══════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <SectionHeading
              badge="Our Team"
              title="Meet the Experts"
              subtitle="The minds behind the machines. Elite engineers, designers, and strategists."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {teamMembers.map((member, i) => (
                <div key={member.name} className="group relative p-6 bg-surface/50 border border-border rounded-2xl hover:border-accent/50 transition-colors duration-300">
                   <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-4 flex items-center justify-center text-white font-bold text-xl">
                      {member.name.charAt(0)}
                   </div>
                   <h3 className="text-xl font-bold text-text-primary mb-1">{member.name}</h3>
                   <p className="text-accent text-sm font-medium uppercase tracking-wider mb-2">{member.role}</p>
                   <p className="text-text-muted text-sm">{member.specialty}</p>

                   {/* Neon corner accent */}
                   <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/0 group-hover:border-accent/50 rounded-tr-2xl transition-all duration-300" />
                </div>
             ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          6. STATS (Updated)
          ═══════════════════════════════════════════ */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center group">
                <motion.div
                  className="text-5xl md:text-6xl font-bold mb-2 text-text-primary transition-all duration-500"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted group-hover:text-accent transition-colors duration-300">
                  {stat.label}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. CTA SECTION
          ═══════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/10" />
         
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="rounded-3xl p-1 px-4 md:px-20 text-center relative overflow-hidden">
               {/* Content */}
               <div className="relative z-10 py-16">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-text-primary tracking-tight leading-tight">
                    Ready to Build the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-400">Impossible?</span>
                  </h2>
                  <p className="text-text-secondary text-lg max-w-xl mx-auto mb-12">
                    Let&apos;s discuss how ZONEX-PRO can engineer your next breakthrough. 
                    The future doesn&apos;t wait.
                  </p>
                  <Link href="/contact" className="inline-block">
                    <Button size="lg" className="bg-white text-black hover:bg-cyan-50 hover:text-cyan-900 shadow-[0_0_30px_rgba(255,255,255,0.3)] border-none">
                      Initiate Collaboration
                      <ArrowRight size={18} />
                    </Button>
                  </Link>
               </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

