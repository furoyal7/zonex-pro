import React from "react";
import { BottomNav } from "@/components/BottomNav";

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-cyan-500/30">
      <main className="pb-32">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
