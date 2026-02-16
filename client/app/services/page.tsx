"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Cloud,
  Brain,
  Palette,
  Shield,
  Smartphone,
  ArrowRight,
  Check,
} from "lucide-react";
import Button from "@/components/Button";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "We design and build robust, scalable, and secure software solutions tailored to your specific business requirements.",
    features: [
      "Full-stack Web Development",
      "API Design & Integration",
      "Microservices Architecture",
      "Legacy System Modernization",
    ],
    iconBg: "rgba(99, 102, 241, 0.08)",
    iconColor: "#6366f1",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Optimize your infrastructure with enterprise-grade cloud solutions ensuring high availability and cost-efficiency.",
    features: [
      "AWS / Azure / GCP Management",
      "DevOps & CI/CD Automation",
      "Container Orchestration (K8s)",
      "Serverless Computing",
    ],
    iconBg: "rgba(6, 182, 212, 0.08)",
    iconColor: "#06b6d4",
  },
  {
    icon: Brain,
    title: "AI & Data Science",
    description:
      "Unlock the power of your data with advanced AI and machine learning services for actionable insights.",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Data Engineering Pipelines",
    ],
    iconBg: "rgba(168, 85, 247, 0.08)",
    iconColor: "#a855f7",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating beautiful, intuitive interfaces that delight users and drive engagement across every touchpoint.",
    features: [
      "Design Systems",
      "User Research & Testing",
      "Responsive Web Design",
      "Brand Identity",
    ],
    iconBg: "rgba(236, 72, 153, 0.08)",
    iconColor: "#ec4899",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Protect your digital assets with comprehensive security audits, monitoring, and incident response.",
    features: [
      "Penetration Testing",
      "Security Audits",
      "Compliance (SOC2, GDPR)",
      "Threat Monitoring",
    ],
    iconBg: "rgba(16, 185, 129, 0.08)",
    iconColor: "#10b981",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps that deliver seamless experiences on iOS and Android.",
    features: [
      "React Native / Flutter",
      "Native iOS & Android",
      "App Store Optimization",
      "Push Notifications",
    ],
    iconBg: "rgba(245, 158, 11, 0.08)",
    iconColor: "#f59e0b",
  },
];

const techStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React Native",
  "Python",
  "AWS",
  "Docker",
  "Prisma",
];

const processSteps = [
  { num: "01", title: "Discovery", desc: "Deep-dive into your goals, challenges, and market position." },
  { num: "02", title: "Strategy", desc: "Craft a technical roadmap tailored to your exact needs." },
  { num: "03", title: "Build", desc: "Agile development with weekly demos and continuous feedback." },
  { num: "04", title: "Launch & Scale", desc: "Deploy, monitor, optimize, and grow together." },
];

/* Subtle fade-up helper */
const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
  transition: { duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] as const },
});

export default function ServicesPage() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ────────────────────────────────── */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-28 relative overflow-hidden">
        {/* Very soft background blob — 10 % opacity */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[160px] pointer-events-none"
          style={{ background: "rgba(99, 102, 241, 0.07)" }}
        />

        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <motion.span
            {...fadeUp(0)}
            className="badge mb-5 inline-flex"
          >
            Our Services
          </motion.span>

          <motion.h1
            {...fadeUp(0.05)}
            className="heading-hero mb-6"
          >
            Next-Gen <span className="text-gradient">Capabilities</span>.
          </motion.h1>

          <motion.p
            {...fadeUp(0.1)}
            className="body-lg max-w-xl mx-auto mb-10"
          >
            From strategic consulting to technical execution, our services give
            your business a decisive edge in the digital landscape.
          </motion.p>

          <motion.div {...fadeUp(0.15)} className="flex items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary">
                Get Started
                <ArrowRight size={16} />
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline">View Our Work</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Service Cards ──────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: "var(--color-surface-elevated)" }}>
        <div className="container-custom">
          <motion.div {...fadeUp(0)} className="text-center mb-14 md:mb-16">
            <span className="badge mb-4 inline-flex">What We Offer</span>
            <h2
              className="heading-section mb-4"
            >
              Comprehensive Solutions for Every Challenge
            </h2>
            <p className="body-lg max-w-xl mx-auto">
              Each service is delivered by domain experts with deep industry experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                  className="rounded-2xl p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 cursor-default group"
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border-light)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "var(--shadow-md)";
                    e.currentTarget.style.borderColor = "var(--color-border)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                    e.currentTarget.style.borderColor = "var(--color-border-light)";
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: service.iconBg, color: service.iconColor }}
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <h3
                    className="text-base font-semibold mb-2.5 tracking-tight"
                    style={{
                      fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    className="text-[13px] leading-relaxed mb-5"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-[13px]"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        <Check
                          size={14}
                          strokeWidth={2.5}
                          style={{ color: service.iconColor, flexShrink: 0 }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Process ────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <motion.div {...fadeUp(0)} className="text-center mb-14 md:mb-16">
            <span className="badge mb-4 inline-flex">Our Process</span>
            <h2 className="heading-section mb-4">How We Deliver Results</h2>
            <p className="body-lg max-w-xl mx-auto">
              A proven four-step methodology that ensures quality at every stage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-4xl mx-auto">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.1,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="text-center"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 text-sm font-bold"
                  style={{
                    background: "rgba(99, 102, 241, 0.08)",
                    color: "var(--primary)",
                  }}
                >
                  {step.num}
                </div>
                <h3
                  className="font-semibold text-sm mb-1.5"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ─────────────────────────── */}
      <section
        className="py-16 md:py-24"
        style={{ background: "var(--color-surface-elevated)" }}
      >
        <div className="container-custom text-center">
          <motion.div {...fadeUp(0)} className="mb-12">
            <span className="badge mb-4 inline-flex">Tech Stack</span>
            <h2 className="heading-section">Built with the Modern Stack</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.06,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="px-4 py-2 rounded-lg text-xs font-semibold tracking-wide cursor-default transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border-light)",
                  color: "var(--color-text-muted)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.color = "var(--color-text-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border-light)";
                  e.currentTarget.style.color = "var(--color-text-muted)";
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-3xl px-8 py-14 sm:px-14 sm:py-16 md:px-20 md:py-20 text-center text-white relative overflow-hidden"
          >
            {/* Soft decorative circle */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.04] rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/[0.04] rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 relative z-10"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Need a Custom Solution?
            </h2>
            <p className="text-indigo-200 text-sm md:text-base max-w-md mx-auto mb-8 relative z-10">
              Let&apos;s discuss your requirements and build something extraordinary together.
            </p>
            <div className="relative z-10">
              <Link href="/contact" className="inline-block">
                <Button variant="secondary" size="lg">
                  Start a Conversation
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

