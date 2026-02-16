"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/#solutions" },
  { name: "Services", href: "/services" },
  { name: "Team", href: "/#team" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass-nav ${
        isScrolled ? "py-2" : "py-2.5"
      }`}
    >
      <div className="w-full px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 relative flex items-center justify-center">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                  <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                <path d="M8 8 L32 32" stroke="url(#grad1)" strokeWidth="6" strokeLinecap="round" className="opacity-90"/>
                <path d="M32 8 L8 32" stroke="url(#grad2)" strokeWidth="6" strokeLinecap="round" className="opacity-100 mix-blend-screen"/>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-outfit)" }}>
              ZONEX<span className="text-cyan-500">-</span>PRO
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3 py-1.5 text-xs font-medium transition-colors duration-200 rounded-md ${
                  isActive
                    ? "text-indigo-600"
                    : "hover:text-indigo-600"
                }`}
                style={{ color: isActive ? undefined : "var(--text-secondary)" }}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-600"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
          <div className="ml-3">
            <Link href="/contact">
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-1.5 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-white/5"
          style={{ color: "var(--text-secondary)" }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="md:hidden overflow-hidden"
          >
            <div
              className="px-5 pb-4 pt-3 border-t"
              style={{
                background: "var(--glass-bg)",
                backdropFilter: "blur(20px)",
                borderColor: "var(--border-light)",
              }}
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        isActive
                          ? "text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10"
                          : "hover:bg-gray-50 dark:hover:bg-white/5"
                      }`}
                      style={{ color: isActive ? undefined : "var(--text-secondary)" }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
              <div className="mt-3 px-3">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="primary" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
