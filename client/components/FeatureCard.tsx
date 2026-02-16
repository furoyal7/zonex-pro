"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ y: -4 }}
      className="glass-card p-7 md:p-8 group cursor-default"
    >
      <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
        <Icon size={22} strokeWidth={2} />
      </div>
      <h3 className="text-lg font-bold mb-2 tracking-tight" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;

