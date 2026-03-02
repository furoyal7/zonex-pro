"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Sparkles } from "lucide-react";

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Protocol initiated. I am the Safenetics Intelligence Assistant. How can I assist with your infrastructure requirements today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userMsg = { role: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // High-end bot response simulation
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "bot", 
        text: "Understood. Our Intelligence Mesh is currently processing high-priority requests. For specialized architectural consultations, I recommend initiating the enterprise inquiry protocol." 
      }]);
    }, 1200);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-6 w-[360px] md:w-[420px] h-[550px] bg-black border border-white/10 rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 bg-white flex items-center justify-between text-black">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white">
                  <Bot size={20} />
                </div>
                <div>
                  <div className="text-sm font-black tracking-tight">SAFENETICS AI</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-60 flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" /> Active Node
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="hover:bg-black/10 p-2 rounded-lg transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-6 scrollbar-hide">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed font-medium ${
                    m.role === 'user' 
                    ? 'bg-white text-black ml-auto rounded-tr-none shadow-lg' 
                    : 'bg-white/[0.03] border border-white/5 text-white/80 mr-auto rounded-tl-none'
                  }`}
                >
                  {m.text}
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <form onSubmit={handleSend} className="p-6 border-t border-white/5 bg-black">
               <div className="relative">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Inquire about Neural, Quantum, Intelligence..." 
                    className="w-full bg-white/[0.04] border border-white/10 rounded-2xl pl-5 pr-14 py-4 text-xs font-medium text-white focus:outline-none focus:border-white/30 transition-all placeholder:text-white/20" 
                  />
                  <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-accent text-white rounded-xl hover:bg-accent-dark active:scale-95 transition-all shadow-lg">
                    <Send size={16} />
                  </button>
               </div>
               <div className="mt-4 text-[9px] text-white/20 text-center flex items-center justify-center gap-1.5 uppercase font-bold tracking-[0.2em]">
                 <Sparkles size={10} /> Powered by Safenetics Neural-Core
               </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1, backgroundColor: "#8C6B4F", color: "#fff" }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 rounded-2xl bg-white text-black shadow-[0_10px_40px_rgba(140,107,79,0.3)] flex items-center justify-center transition-all group"
        aria-label="Toggle AI assistant"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
}
