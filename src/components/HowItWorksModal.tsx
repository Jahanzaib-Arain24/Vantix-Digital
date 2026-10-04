"use client";

import { X, CheckCircle2, ArrowRight, PhoneCall } from "lucide-react";
import { siteConfig } from "@/data/siteData";

interface HowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We analyze your brand goals, target audience, and requirements to craft a clear roadmap.",
  },
  {
    step: "02",
    title: "UI/UX Design & Prototype",
    desc: "We build intuitive, high-conversion visual prototypes with modern layouts and aesthetics.",
  },
  {
    step: "03",
    title: "Fast Next.js Development",
    desc: "Engineered with clean code, lightning-fast Core Web Vitals, and mobile-first responsiveness.",
  },
  {
    step: "04",
    title: "Launch & 3-Month Free Support",
    desc: "Seamless deployment with SEO setup, performance tests, and dedicated 3-month ongoing support.",
  },
];

export default function HowItWorksModal({ isOpen, onClose }: HowItWorksModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Our Work Process
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">
            How Vantix Digital Works
          </h3>
          <p className="text-slate-300 text-sm mt-1">
            Simple 4-step streamlined workflow to transform your digital presence.
          </p>
        </div>

        {/* Steps List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/50 hover:border-emerald-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400">
                  {item.step}
                </span>
                <h4 className="text-sm font-semibold text-white">{item.title}</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Guarantees & CTA */}
        <div className="pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
            <CheckCircle2 className="w-4 h-4" />
            <span>100% Money-Back Guarantee Included</span>
          </div>

          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20 transition-all"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
