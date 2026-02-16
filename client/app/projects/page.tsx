"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

const projects = [
  {
    title: "FinTech Dashboard",
    category: "Web Application",
    image:
      "https://images.unsplash.com/photo-1551288049-bbda38a5f973?q=80&w=2070&auto=format&fit=crop",
    description:
      "A comprehensive financial analytics platform with real-time data visualization, reporting, and intelligent forecasting.",
    tags: ["Next.js", "D3.js", "Tailwind", "PostgreSQL"],
  },
  {
    title: "E-Commerce Reimagined",
    category: "Platform Development",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
    description:
      "High-performance headless commerce solution for a global fashion brand with 10M+ monthly visitors.",
    tags: ["Shopify", "React", "Node.js", "Stripe"],
  },
  {
    title: "AI Healthcare Assistant",
    category: "AI / Machine Learning",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173bdd99625?q=80&w=2070&auto=format&fit=crop",
    description:
      "Intelligent diagnostic tools powered by advanced neural networks, reducing diagnosis time by 60%.",
    tags: ["Python", "TensorFlow", "React", "AWS"],
  },
  {
    title: "Smart City Platform",
    category: "IoT / Systems",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop",
    description:
      "Resource management system for sustainable urban environments, tracking energy and water usage city-wide.",
    tags: ["C++", "Vue.js", "AWS IoT", "GraphQL"],
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "20+", label: "Active Partners" },
  { value: "12", label: "Countries Reached" },
  { value: "99.9%", label: "Uptime Guaranteed" },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="hero-mesh" />
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <span className="badge mb-6">Portfolio</span>
            <h1 className="heading-hero mb-6">
              Digital <span className="text-gradient">Showcase</span>.
            </h1>
            <p className="body-lg max-w-2xl mx-auto">
              Explore our portfolio of high-impact digital products. Each project
              represents a unique challenge solved through technical excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding" style={{ background: "var(--color-surface-elevated)" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                className="glass-card overflow-hidden group"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest"
                      style={{
                        background: "var(--glass-bg)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid var(--glass-border)",
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-indigo-600 shadow-lg">
                      <ExternalLink size={16} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 md:p-8">
                  <h3
                    className="text-xl font-bold mb-3 tracking-tight"
                    style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                        style={{
                          background: "rgba(79, 70, 229, 0.08)",
                          color: "var(--primary)",
                          border: "1px solid rgba(79, 70, 229, 0.15)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <AnimatedSection
                key={stat.label}
                delay={i * 0.1}
                className="text-center"
              >
                <div
                  className="text-4xl md:text-5xl font-bold mb-2 text-gradient"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {stat.label}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 rounded-3xl p-10 sm:p-14 md:p-20 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 relative z-10"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Have a Project in Mind?
              </h2>
              <p className="text-indigo-200 text-base md:text-lg max-w-xl mx-auto mb-10 relative z-10">
                Let&apos;s turn your vision into a high-performing digital product.
              </p>
              <Link href="/contact" className="relative z-10 inline-block">
                <Button variant="secondary" size="lg">
                  Start Your Project
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

