"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="p-2 w-10 h-10" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 overflow-hidden"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ y: 20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center justify-center text-primary-light dark:text-accent"
        >
          {isDark ? <Moon size={20} /> : <Sun size={20} />}
        </motion.div>
      </AnimatePresence>
      
      {/* Subtle glow background */}
      <motion.div
        className="absolute inset-0 z-[-1] opacity-0"
        animate={{ opacity: isDark ? 0.1 : 0 }}
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />
    </button>
  );
};

export default ThemeToggle;

