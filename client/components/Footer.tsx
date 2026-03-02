import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0E0E10] border-t border-accent/20 mt-auto">
      <div className="container-custom py-20 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link href="/" className="mb-8 block">
              <Logo textClassName="text-2xl" />
            </Link>
            <p className="text-white/50 text-[15px] leading-relaxed max-w-sm font-medium">
              Secure. Intelligent. Precise. <br />
              Enterprise-grade cybersecurity and AI infrastructure for the future of enterprise technology.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Platform</h4>
              <ul className="space-y-4">
                <li><Link href="/solutions" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Solutions</Link></li>
                <li><Link href="/technology" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Technology</Link></li>
                <li><Link href="/intelligence" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Intelligence</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Company</h4>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-white/40 hover:text-white transition-colors text-sm font-medium">About</Link></li>
                <li><Link href="/security" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Security</Link></li>
                <li><Link href="/privacy" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Privacy</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Inquiries</h4>
              <a href="mailto:intelligence@safenetics.com" className="text-white/40 hover:text-white transition-colors text-sm font-medium mb-2 block">intelligence@safenetics.com</a>
              <div className="mt-8 flex gap-4">
                {/* Minimal social links could eventually be added here */}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-accent/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-[11px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Safenetics Intelligence Corp.
          </p>
          <div className="flex gap-8">
            <span className="text-accent/40 text-[11px] font-bold uppercase tracking-widest">System Status: <span className="text-accent">Active</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
