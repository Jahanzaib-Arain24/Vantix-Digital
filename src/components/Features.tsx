"use client";

import { Gift, Headphones, Target, Eye, Cpu, BadgeDollarSign, Sparkles } from "lucide-react";
import { featuresData } from "@/data/siteData";

const iconMap: Record<string, React.ElementType> = {
  Gift,
  Headphones,
  Target,
  Eye,
  Cpu,
  BadgeDollarSign,
};

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Choose Us</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Reasons to Choose Vantix Digital
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg">
            We help businesses reduce operational effort while delivering high-quality digital solutions that create amazing UI/UX experiences and measurable growth.
          </p>
        </div>

        {/* Features 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuresData.map((item) => {
            const IconComp = iconMap[item.iconName] || Gift;
            return (
              <div
                key={item.id}
                className="group relative rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-500/10"
              >
                {/* Number & Icon header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/40 transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  
                  <span className="text-2xl sm:text-3xl font-bold font-mono text-slate-700 group-hover:text-emerald-500/50 transition-colors">
                    {item.number}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
