"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Sparkles } from "lucide-react";

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hello! I'm the Zonex-Pro AI assistant. How can I help you explore our enterprise solutions today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userMsg = { role: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "bot", 
        text: "I've noted your interest. Our solutions architecture team specializes in exactly that. Would you like to see a relevant case study?" 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] glass-card shadow-neon-sm overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-primary flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <Bot size={18} />
                </div>
                <div>
                  <div className="text-sm font-bold">Zonex AI</div>
                  <div className="text-[10px] opacity-80 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Online
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-md transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 flex flex-col gap-4 scrollbar-hide">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: m.role === 'user' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${
                    m.role === 'user' 
                    ? 'bg-primary text-white ml-auto rounded-tr-none' 
                    : 'bg-surface border border-border mr-auto rounded-tl-none'
                  }`}
                >
                  {m.text}
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <form onSubmit={handleSend} className="p-4 border-t border-border bg-surface/50">
               <div className="relative">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about AI, Cloud, Security..." 
                    className="w-full bg-surface border border-border rounded-xl pl-4 pr-12 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors">
                    <Send size={16} />
                  </button>
               </div>
               <div className="mt-2 text-[10px] text-text-muted text-center flex items-center justify-center gap-1">
                 <Sparkles size={10} /> Powered by Zonex-Pro LLM
               </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary text-white shadow-neon flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
}
