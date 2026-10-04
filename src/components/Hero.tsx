"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { LinkedInIcon, FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/SocialIcons";
import { siteConfig } from "@/data/siteData";
import HowItWorksModal from "./HowItWorksModal";

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="glow-emerald w-[500px] h-[500px] -top-32 -left-32 opacity-25" />
      <div className="glow-blue w-[450px] h-[450px] top-1/3 -right-24 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium mb-6 animate-pulse-slow">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Smart Digital Solutions for Modern Brands</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
              Turning Ideas into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
                Digital Solutions
              </span>
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-8">
              {siteConfig.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-slate-950 bg-emerald-500 hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View Our Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/40 transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>How It Works</span>
              </button>
            </div>

            {/* Feature Highlights & Social Links */}
            <div className="pt-6 border-t border-slate-800/80 w-full flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>100% Quality Guaranteed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>3-Month Free Support</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Hero Image / Mockup Banner */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[480px] lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="relative z-10 rounded-2xl p-2 bg-gradient-to-b from-slate-700/50 via-slate-800/20 to-transparent shadow-2xl backdrop-blur-sm">
                <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square w-full rounded-xl overflow-hidden bg-slate-950/60 border border-slate-700/50">
                  <Image
                    src="/images/hero-banner.png"
                    alt="Vantix Digital Services"
                    fill
                    className="object-contain p-4 transition-transform duration-700 hover:scale-105"
                    priority
                  />
                </div>
              </div>

              {/* Floating Stat Badge 1 */}
              <div className="absolute -top-4 -left-4 sm:-left-6 z-20 px-4 py-3 rounded-2xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
                    8+
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Experience</div>
                    <div className="text-sm font-semibold text-white">Years in Agency</div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge 2 */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 z-20 px-4 py-3 rounded-2xl bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <div>
                    <div className="text-xs text-emerald-400 font-medium">100% Satisfaction</div>
                    <div className="text-sm font-semibold text-white">Guaranteed Results</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Video / How It Works Modal */}
      <HowItWorksModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </section>
  );
}
