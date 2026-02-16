"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatarFallback: string;
  rating?: number;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  avatarFallback,
  rating = 5,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className="glass-card p-7 md:p-8 flex flex-col gap-5"
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "star-filled" : "text-gray-300"}
            fill={i < rating ? "currentColor" : "none"}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm leading-relaxed flex-grow" style={{ color: "var(--text-secondary)" }}>
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: "var(--border-light)" }}>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white text-sm font-bold shrink-0">
          {avatarFallback}
        </div>
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
