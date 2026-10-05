"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Layers, ArrowRight, Eye, X, Globe } from "lucide-react";
import { portfolioData, PortfolioProject, siteConfig } from "@/data/siteData";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [activePreview, setActivePreview] = useState<PortfolioProject | null>(null);

  const categories = ["all", ...Array.from(new Set(portfolioData.map((p) => p.category)))];

  const filteredProjects = filter === "all"
    ? portfolioData
    : portfolioData.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-20 md:py-28 relative overflow-hidden">
      {/* Glow */}
      <div className="glow-emerald w-[500px] h-[500px] top-1/4 -right-32 opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Our Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Our Creative Journey
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Check out some of our recent live client projects that showcase our expertise and commitment to quality.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/20"
                  : "bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat === "all" ? "All Projects" : cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-slate-900/80 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              <div>
                {/* Image Banner Container */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/90 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay with Live Link & Preview buttons */}
                  <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={() => setActivePreview(project)}
                      className="p-3 rounded-full bg-slate-800/90 text-white hover:bg-emerald-500 hover:text-slate-950 transition-colors shadow-lg"
                      title="Quick Preview"
                      aria-label="Quick Preview"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors shadow-lg"
                      title="Visit Live Website"
                      aria-label="Visit Live Website"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-6 pt-0">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-emerald-500 text-slate-200 hover:text-slate-950 border border-slate-700/60 hover:border-emerald-500 transition-all duration-200"
                >
                  <span>Visit Live Website</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Project CTA */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-emerald-950/40 via-slate-900/90 to-emerald-950/40 border border-emerald-500/30 text-center flex flex-col items-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Want a Custom High-Performance Website for Your Brand?
          </h3>
          <p className="text-slate-300 max-w-xl text-sm sm:text-base mb-6">
            Let&apos;s build a fast, modern Next.js website tailored specifically to your business goals.
          </p>
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-slate-950 bg-emerald-500 hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 transition-all"
          >
            <span>Start Your Project Today</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Modal Preview */}
      {activePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setActivePreview(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video w-full">
              <Image
                src={activePreview.image}
                alt={activePreview.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 font-semibold">
                  {activePreview.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{activePreview.title}</h3>
              <p className="text-slate-300 text-sm mb-6">{activePreview.description}</p>

              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <a
                  href={activePreview.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all"
                >
                  <Globe className="w-4 h-4" />
                  <span>Open Live Project</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
