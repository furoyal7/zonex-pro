"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon, Check } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ y: -4 }}
      className="glass-card p-8 md:p-10 group cursor-default relative overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/[0.03] to-cyan-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
          <Icon size={26} strokeWidth={1.8} />
        </div>

        <h3
          className="text-xl font-bold mb-3 tracking-tight"
          style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
        >
          {title}
        </h3>

        <p
          className="text-sm leading-relaxed mb-6"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {description}
        </p>

        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-2.5 text-sm font-medium"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <div className="w-5 h-5 rounded-full bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-green-600 shrink-0">
                <Check size={12} strokeWidth={3} />
              </div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ServiceCard;

