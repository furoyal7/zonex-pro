"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Search, LayoutGrid, User, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { icon: Home, label: "Home", href: "/mobile" },
  { icon: Search, label: "Explore", href: "/mobile/explore" },
  { icon: LayoutGrid, label: "Apps", href: "/mobile/apps" },
  { icon: User, label: "Profile", href: "/mobile/profile" },
];

export const BottomNav = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md h-16 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl z-50 flex items-center justify-around px-2 shadow-2xl">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link key={item.label} href={item.href} className="relative p-3">
            <item.icon 
              size={24} 
              className={`transition-colors duration-300 ${isActive ? "text-cyan-400" : "text-white/60"}`} 
            />
            {isActive && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-cyan-400/10 rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
};
