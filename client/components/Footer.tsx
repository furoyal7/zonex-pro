import React from "react";
import Link from "next/link";
import { Twitter, Linkedin, Github, Instagram, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  explore: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/projects" },
  ],
  services: [
    { name: "Software Development", href: "/services" },
    { name: "Cloud Infrastructure", href: "/services" },
    { name: "AI & Data Science", href: "/services" },
    { name: "Digital Strategy", href: "/services" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

const Footer: React.FC = () => {
  return (
    <footer
      className="border-t mt-20"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-6 block">
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
                <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", color: "var(--text-primary)" }}>
                  ZONEX<span className="text-cyan-500">-</span>PRO
                </span>
              </div>
            </Link>
            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: "var(--text-secondary)" }}
            >
              Innovating at the intersection of business and technology. Professional digital
              experiences that drive growth.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-500/10"
                  style={{
                    color: "var(--text-muted)",
                    background: "var(--surface-elevated)",
                    border: "1px solid var(--border-light)",
                  }}
                >
                  <social.icon size={16} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4
              className="font-semibold text-sm mb-5"
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
            >
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-indigo-600"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-semibold text-sm mb-5"
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-indigo-600"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-semibold text-sm mb-5"
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
            >
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@zonex-pro.com"
                  className="flex items-center gap-2.5 text-sm transition-colors duration-200 hover:text-indigo-600"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <Mail size={14} className="text-indigo-500 shrink-0" />
                  info@zonex-pro.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15550000000"
                  className="flex items-center gap-2.5 text-sm transition-colors duration-200 hover:text-indigo-600"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <Phone size={14} className="text-indigo-500 shrink-0" />
                  +1 (555) 000-0000
                </a>
              </li>
              <li>
                <div
                  className="flex items-start gap-2.5 text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <MapPin size={14} className="text-indigo-500 shrink-0 mt-0.5" />
                  <span>
                    123 Innovation Dr.
                    <br />
                    Silicon Valley, CA
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderColor: "var(--border-light)" }}
        >
          <p
            className="text-xs font-medium"
            style={{ color: "var(--text-muted)" }}
          >
            © {new Date().getFullYear()} ZONEX-PRO. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs font-medium transition-colors hover:text-indigo-600"
              style={{ color: "var(--text-muted)" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs font-medium transition-colors hover:text-indigo-600"
              style={{ color: "var(--text-muted)" }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
