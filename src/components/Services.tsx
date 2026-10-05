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
  MessageSquare,
  Clock,
  Tag,
  ShieldCheck
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

const serviceImages: Record<string, string> = {
  "web-dev": "/images/service-1.png",
  "ui-ux": "/images/service-2.png",
  "seo": "/images/service-3.png",
  "guest-posting": "/images/service-4.png",
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedPackageTab, setSelectedPackageTab] = useState<number>(1); // Default to Growth / Professional

  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="glow-emerald w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium mb-3">
            <Sparkle className="w-3.5 h-3.5" />
            <span>SLA-Backed Solutions</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Our Creative Services & Packages
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg">
            Fixed-milestone Service Level Agreements (SLAs) with transparent pricing, zero hidden fees, and guaranteed satisfaction.
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
                  {/* Top Bar: Icon + Price Pill / Badge */}
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

                    <div className="flex flex-col items-end gap-1.5">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                        {service.startingPrice}
                      </span>
                      {service.badge && (
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                          {service.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300/85 text-sm leading-relaxed mb-6">
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
                  onClick={() => {
                    setSelectedService(service);
                    setSelectedPackageTab(1);
                  }}
                  className="mt-2 w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-slate-800/80 hover:bg-emerald-500 text-xs sm:text-sm font-semibold text-slate-200 hover:text-slate-950 border border-slate-700/60 hover:border-emerald-500 transition-all duration-200"
                >
                  <span>View SLA Pricing & Tiers</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Combo Bonus Promo Card */}
        <div className="rounded-3xl p-6 sm:p-8 bg-slate-900/90 border border-emerald-500/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <Tag className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Special 20% Loyalty Bundle Discount
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Bundle UI/UX Design + Website Development and save 20% on the entire project investment.
              </p>
            </div>
          </div>

          <a
            href={`${siteConfig.contact.whatsappLink}?text=Hi,%20I%20am%20interested%20in%20the%2020%%20Combo%20Design%20+%20Development%20discount`}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-md transition-all"
          >
            Claim 20% Bundle Offer
          </a>
        </div>

      </div>

      {/* SLA Packages Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/90 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] flex flex-col overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-500/30">
                  Official SLA Packages
                </span>
                <span className="text-xs text-slate-400">
                  {selectedService.startingPrice}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {selectedService.title}
              </h3>
              <p className="text-slate-300 text-sm mt-1">
                {selectedService.description}
              </p>
            </div>

            {/* Package Selector Tabs */}
            <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-slate-950/70 border border-slate-800 mb-6">
              {selectedService.packages.map((pkg, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPackageTab(idx)}
                  className={`py-2 px-2 text-center rounded-xl text-xs font-semibold transition-all ${
                    selectedPackageTab === idx
                      ? "bg-emerald-500 text-slate-950 shadow-md"
                      : "text-slate-300 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  <div className="truncate">{pkg.name.split(" ")[1] || pkg.name}</div>
                  <div className="text-[10px] opacity-80">{pkg.price}</div>
                </button>
              ))}
            </div>

            {/* Active Package Card Detail */}
            {selectedService.packages[selectedPackageTab] && (
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-700/60">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {selectedService.packages[selectedPackageTab].name}
                    </h4>
                    <p className="text-xs text-emerald-400 font-medium mt-0.5">
                      {selectedService.packages[selectedPackageTab].tagline}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-2xl font-bold text-emerald-400">
                      {selectedService.packages[selectedPackageTab].price}
                    </div>
                    <div className="flex items-center sm:justify-end gap-1 text-xs text-slate-400 mt-0.5">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{selectedService.packages[selectedPackageTab].timeline}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-2.5">
                    Package Deliverables & Inclusions:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.packages[selectedPackageTab].deliverables.map((d, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-700/60 flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>50% Deposit • 50% on Completion • 7-Day Refund Guarantee</span>
                </div>
              </div>
            )}

            {/* Direct WhatsApp Order CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`${siteConfig.contact.whatsappLink}?text=Hi,%20I%20would%20like%20to%20order%20the%20*${encodeURIComponent(selectedService.title)}*%20(${encodeURIComponent(selectedService.packages[selectedPackageTab]?.name || "")})%20priced%20at%20${encodeURIComponent(selectedService.packages[selectedPackageTab]?.price || "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold bg-emerald-500 text-slate-950 shadow-lg hover:bg-emerald-400 transition-all text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Order This SLA Package on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
