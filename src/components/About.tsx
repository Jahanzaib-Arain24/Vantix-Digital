"use client";

import Image from "next/image";
import { Award, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left: About Banner Image with Floating Experience Tag */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/60 p-3 sm:p-5 shadow-2xl">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/about-banner.png"
                  alt="About Vantix Digital"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Experience badge card overlay */}
              <div className="absolute -bottom-2 -right-2 sm:bottom-6 sm:right-6 bg-slate-900/95 border border-emerald-500/40 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white leading-none">8+ Years</div>
                    <div className="text-xs text-emerald-400 font-medium mt-1">Agency Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content & Value Proposition */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>About Vantix Digital</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              We Design for Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Digital Success
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              At Vantix Digital, we don&apos;t just create designs — we craft strategic digital solutions that help your brand grow, convert, and stand out in a competitive online world. Every project is built with a clear focus on performance, usability, and long-term success.
            </p>

            {/* Guarantee bullet points */}
            <div className="space-y-3.5 mb-8">
              {siteConfig.guarantees.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm sm:text-base text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20 transition-all"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 transition-all"
              >
                <span>Speak with an Expert</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
