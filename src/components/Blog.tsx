"use client";

import { useState } from "react";
import Image from "next/image";
import { Newspaper, Calendar, Clock, ArrowRight, X, Sparkles } from "lucide-react";
import { blogData, BlogPost } from "@/data/siteData";

export default function Blog() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 md:py-28 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium mb-3">
            <Newspaper className="w-3.5 h-3.5" />
            <span>From The Blog</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Latest News & Insights
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Stay updated with the latest industry trends, design tips, and digital marketing strategies from our expert team.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <article
              key={post.id}
              className="group rounded-3xl bg-slate-900/80 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              <div>
                {/* Image Banner */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/90 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  {/* Meta (Date & Read Time) */}
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 sm:p-7 pt-0">
                <button
                  onClick={() => setActivePost(post)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-emerald-500/20 border border-slate-700/60 hover:border-emerald-500/40 text-xs sm:text-sm font-medium text-slate-200 hover:text-emerald-300 transition-all"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Blog Article Reading Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video w-full flex-shrink-0">
              <Image
                src={activePost.image}
                alt={activePost.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto">
              <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 font-semibold">
                  {activePost.category}
                </span>
                <span>•</span>
                <span>{activePost.date}</span>
                <span>•</span>
                <span>{activePost.readTime}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                {activePost.title}
              </h3>

              <div className="prose prose-invert max-w-none text-slate-200 text-sm sm:text-base leading-relaxed space-y-4">
                {activePost.paragraphs && activePost.paragraphs.length > 0 ? (
                  activePost.paragraphs.map((para, idx) => (
                    <p key={idx} className="text-slate-300 leading-relaxed">
                      {para}
                    </p>
                  ))
                ) : (
                  <p className="text-slate-300 leading-relaxed">{activePost.description}</p>
                )}

                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 mt-6">
                  <Sparkles className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-emerald-300 font-medium m-0">
                    Vantix Digital Insight: Focus on responsive architecture, Core Web Vitals, and intuitive UI to boost conversion rates and user retention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
