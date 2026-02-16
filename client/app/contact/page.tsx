"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage("Failed to connect to the server. Please try again later.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "partners@zonex-pro.com",
      href: "mailto:partners@zonex-pro.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 000-0000",
      href: "tel:+15550000000",
    },
    {
      icon: MapPin,
      label: "Office",
      value: "123 Innovation Drive, Digital Valley, CA 94043",
      href: null,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="hero-mesh" />
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-4xl">
            <span className="badge mb-6">Contact Us</span>
            <h1 className="heading-hero mb-6">
              Let&apos;s Start a <span className="text-gradient">Partnership</span>.
            </h1>
            <p className="body-lg max-w-2xl">
              Ready to scale your digital presence? Reach out to our team of
              experts and let&apos;s discuss how ZONEX-PRO can drive your next innovation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form & Info */}
      <section className="section-padding" style={{ background: "var(--surface-elevated)" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <AnimatedSection direction="left" className="lg:col-span-3">
              <div className="glass-card p-8 md:p-10">
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-green-50 dark:bg-green-500/10 text-green-500 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={32} />
                      </div>
                      <h3
                        className="text-2xl font-bold mb-3"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        Message Received!
                      </h3>
                      <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
                        Our team will get back to you within 24 hours.
                      </p>
                      <Button variant="outline" onClick={() => setStatus("idle")}>
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-6"
                    >
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="name"
                          className="text-xs font-semibold uppercase tracking-wider"
                          style={{ color: "var(--text-muted)" }}
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full rounded-xl px-4 py-3.5 text-sm transition-all duration-200 outline-none"
                          style={{
                            background: "var(--surface-elevated)",
                            border: "1px solid var(--border)",
                            color: "var(--text-primary)",
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = "var(--primary)";
                            e.currentTarget.style.boxShadow = "0 0 0 3px rgba(79, 70, 229, 0.1)";
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = "var(--border)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="email"
                          className="text-xs font-semibold uppercase tracking-wider"
                          style={{ color: "var(--text-muted)" }}
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full rounded-xl px-4 py-3.5 text-sm transition-all duration-200 outline-none"
                          style={{
                            background: "var(--surface-elevated)",
                            border: "1px solid var(--border)",
                            color: "var(--text-primary)",
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = "var(--primary)";
                            e.currentTarget.style.boxShadow = "0 0 0 3px rgba(79, 70, 229, 0.1)";
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = "var(--border)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="message"
                          className="text-xs font-semibold uppercase tracking-wider"
                          style={{ color: "var(--text-muted)" }}
                        >
                          Project Brief
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project goals..."
                          className="w-full rounded-xl px-4 py-3.5 text-sm transition-all duration-200 outline-none resize-none"
                          style={{
                            background: "var(--surface-elevated)",
                            border: "1px solid var(--border)",
                            color: "var(--text-primary)",
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = "var(--primary)";
                            e.currentTarget.style.boxShadow = "0 0 0 3px rgba(79, 70, 229, 0.1)";
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = "var(--border)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        />
                      </div>

                      {status === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 text-sm rounded-xl"
                        >
                          {errorMessage}
                        </motion.div>
                      )}

                      <Button type="submit" size="lg" isLoading={status === "loading"}>
                        <Send size={16} />
                        Submit Inquiry
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection direction="right" className="lg:col-span-2">
              <div className="flex flex-col gap-10 lg:pt-4">
                {contactInfo.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600">
                        <item.icon size={18} />
                      </div>
                      <span
                        className="text-xs font-semibold uppercase tracking-wider"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {item.label}
                      </span>
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-lg md:text-xl font-bold hover:text-indigo-600 transition-colors"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className="text-lg md:text-xl font-bold"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}

                {/* Social */}
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-4"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Follow Us
                  </p>
                  <div className="flex gap-3">
                    {["LinkedIn", "Twitter", "GitHub", "Instagram"].map(
                      (social) => (
                        <span
                          key={social}
                          className="text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-500/10"
                          style={{
                            color: "var(--text-muted)",
                            background: "var(--surface)",
                            border: "1px solid var(--border-light)",
                          }}
                        >
                          {social}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
