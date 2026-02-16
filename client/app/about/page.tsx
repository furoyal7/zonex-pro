"use client";

import React from "react";
import Link from "next/link";
import { Target, Heart, Users, TrendingUp, ArrowRight, Globe } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import Button from "@/components/Button";
import { motion } from "framer-motion";

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge technology and creative problem solving.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Transparent processes, honest communication, and ethical delivery at every step.",
  },
  {
    icon: Users,
    title: "Expertise",
    description: "A team of world-class engineers, designers, and strategists dedicated to your success.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Our metrics are tied to your growth — when you succeed, we succeed.",
  },
];

const milestones = [
  { year: "2019", title: "Founded", description: "ZONEX-PRO was born with a mission to bridge technology and business." },
  { year: "2020", title: "First Enterprise Client", description: "Signed our first Fortune 500 partner for a full digital transformation." },
  { year: "2022", title: "Global Expansion", description: "Expanded operations to 12 countries with distributed engineering teams." },
  { year: "2024", title: "AI Division Launch", description: "Launched our dedicated AI & Machine Learning practice." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="hero-mesh" />
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <span className="badge mb-6">About ZONEX-PRO</span>
            <h1 className="heading-hero mb-6">
              Driven by <span className="text-gradient">Precision</span>,
              <br />
              Defined by Excellence.
            </h1>
            <p className="body-lg max-w-2xl mx-auto">
              ZONEX-PRO was founded with a single mission: to provide uncompromising
              technological depth to businesses of all scales. We don&apos;t just build
              software — we build foundations for the future.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: "var(--surface-elevated)" }}>
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeading
              badge="Our Values"
              title="The Principles That Drive Us"
              subtitle="Every decision we make is guided by our core values — they're the DNA of our company."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {values.map((value, i) => (
              <FeatureCard
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Vision — Split Layout */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection direction="left">
              <div
                className="aspect-square max-w-md mx-auto lg:mx-0 rounded-3xl relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(79, 70, 229, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    className="w-4/5 h-4/5 rounded-3xl border border-dashed opacity-15"
                    style={{ borderColor: "var(--accent)" }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="w-3/5 h-3/5 rounded-3xl border-2 border-dashed opacity-15"
                    style={{ borderColor: "var(--primary)" }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2/5 h-2/5 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-2xl shadow-2xl shadow-indigo-500/20 flex items-center justify-center">
                    <Globe className="text-white" size={40} />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="badge mb-4">Our Vision</span>
              <h2 className="heading-section mb-5">
                A Vision for <span className="text-gradient">Global</span> Scaling
              </h2>
              <p className="body-lg mb-6">
                Our vision is to become the leading catalyst for digital transformation
                worldwide. By bridging the gap between complex engineering and business
                goals, we help our partners achieve dominance in their respective
                markets.
              </p>
              <p className="body-lg mb-8">
                With offices across 3 continents and a growing network of technology
                partners, we&apos;re positioned to tackle the most ambitious projects on
                the planet.
              </p>
              <Link href="/services">
                <Button variant="primary">
                  Explore Our Services
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Journey / Milestones */}
      <section className="section-padding" style={{ background: "var(--surface-elevated)" }}>
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeading
              badge="Our Journey"
              title="Building the Future, One Milestone at a Time"
            />
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-8">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.year} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md shadow-indigo-500/20">
                    {m.year}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-outfit)" }}>{m.title}</h3>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{m.description}</p>
                  </div>
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 relative z-10" style={{ fontFamily: "var(--font-outfit)" }}>
                Want to Work With Us?
              </h2>
              <p className="text-indigo-200 text-base md:text-lg max-w-xl mx-auto mb-10 relative z-10">
                We&apos;re always looking for ambitious projects and talented collaborators.
              </p>
              <Link href="/contact" className="relative z-10 inline-block">
                <Button variant="secondary" size="lg">
                  Get in Touch
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
