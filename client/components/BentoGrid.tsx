"use client";

import React from "react";
import { motion } from "framer-motion";

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: 1 | 2;
  rowSpan?: 1 | 2;
  delay?: number;
}

export const BentoItem = ({ 
  children, 
  className = "", 
  colSpan = 1, 
  rowSpan = 1,
  delay = 0 
}: BentoItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`
        relative overflow-hidden rounded-3xl border border-border 
        bg-surface-elevated backdrop-blur-md p-6 flex flex-col justify-between
        ${colSpan === 2 ? "col-span-2" : "col-span-1"}
        ${rowSpan === 2 ? "row-span-2" : "row-span-1"}
        ${className}
      `}
    >
      {/* Subtle glow effect */}
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
};

export const BentoGrid = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`grid grid-cols-2 gap-4 auto-rows-min ${className}`}>
      {children}
    </div>
  );
};
