"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
  { name: "Solutions", href: "/solutions" },
  { name: "Technology", href: "/technology" },
  { name: "Intelligence", href: "/intelligence" },
  { name: "About", href: "/about" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 h-[30px] flex items-center ${
          isScrolled 
          ? "bg-[#0E0E10]/90 backdrop-blur-xl border-b border-white/5" 
          : "bg-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between px-6 md:px-12 w-full">
          <Link href="/">
            <Logo showIcon={false} textClassName="text-[11px] tracking-[0.2em]" />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[9px] font-black uppercase transition-opacity duration-300 tracking-[0.1em] ${
                  pathname === link.href ? "text-white" : "text-white/40 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#8C6B4F", color: "#fff" }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-1 bg-white text-black text-[9px] font-black uppercase rounded-full shadow-lg transition-all"
              >
                Inquiry
              </motion.button>
            </Link>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center gap-8 p-10 h-[100dvh] overflow-y-auto"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-bold text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="mt-8">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#8C6B4F", color: "#fff" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-black font-bold rounded-full transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enterprise Inquiry
              </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
