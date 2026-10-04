"use client";

import { MessageSquare, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden md:flex items-center gap-1.5 mr-3 px-3.5 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-medium border border-emerald-500/30 backdrop-blur-md shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
        <span>Chat with us on WhatsApp</span>
      </div>

      {/* Floating Button */}
      <a
        href={siteConfig.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 hover:scale-110 hover:shadow-emerald-500/60 transition-all duration-300"
        aria-label="Direct WhatsApp Chat"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300"></span>
        </span>
        <MessageSquare className="w-7 h-7 fill-slate-950 text-slate-950" />
      </a>
    </div>
  );
}
