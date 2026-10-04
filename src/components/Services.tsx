"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Code2, 
  Palette, 
  TrendingUp, 
  Globe2, 
  Sparkles, 
  BarChart3, 
  ArrowRight, 
  Check, 
  Sparkle,
  X,
  MessageSquare
} from "lucide-react";
import { servicesData, Service, siteConfig } from "@/data/siteData";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Palette,
  TrendingUp,
  Globe2,
  Sparkles,
  BarChart3,
};

// Map original service icons
const serviceImages: Record<string, string> = {
  "web-dev": "/images/service-1.png",
  "ui-ux": "/images/service-2.png",
  "seo": "/images/service-3.png",
  "guest-posting": "/images/service-4.png",
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="glow-emerald w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium mb-3">
            <Sparkle className="w-3.5 h-3.5" />
            <span>What We Offer</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Our Creative Services
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg">
            We deliver high-quality digital solutions that strengthen brands, enhance user experience, reduce effort, and drive measurable business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || Code2;
            const customImg = serviceImages[service.id];

            return (
              <div
                key={service.id}
                className="group relative rounded-3xl bg-slate-900/70 border border-slate-800/90 hover:border-emerald-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-emerald-500/10 backdrop-blur-sm"
              >
                <div>
                  {/* Top Bar: Icon / Illustration + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative w-16 h-16 rounded-2xl bg-slate-800/80 border border-slate-700/60 p-2.5 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-colors">
                      {customImg ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={customImg}
                            alt={service.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <IconComponent className="w-8 h-8 text-emerald-400" />
                      )}
                    </div>

                    {service.badge && (
                      <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300/80 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature check tags */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/60">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="mt-2 w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-800/60 hover:bg-emerald-500/20 border border-slate-700/60 hover:border-emerald-500/40 text-xs sm:text-sm font-medium text-slate-200 hover:text-emerald-300 transition-all"
                >
                  <span>Service Details</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-slate-950 bg-emerald-500 hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-200"
          >
            <span>Get Started with Vantix Digital</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                Service Overview
              </span>
              <h3 className="text-2xl font-bold text-white mt-3">
                {selectedService.title}
              </h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                {selectedService.description}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Key Features & Deliverables:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`${siteConfig.contact.whatsappLink}?text=Hi,%20I%20am%20interested%20in%20your%20${encodeURIComponent(selectedService.title)}%20service`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold bg-emerald-500 text-slate-950 shadow-md hover:bg-emerald-400 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
