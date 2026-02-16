import React from "react";
import { BottomNav } from "@/components/BottomNav";

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-primary-100 transition-colors duration-300">
      <main className="pb-32">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
