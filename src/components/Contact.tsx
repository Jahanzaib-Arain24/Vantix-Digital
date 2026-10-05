"use client";

import { useState } from "react";
import { Mail, MessageSquare, MapPin, Send, CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Website Development",
    budget: "$500 - $1,500",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message URL for direct instant conversion
    const text = `*New Project Inquiry from Website*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Service:* ${encodeURIComponent(formData.service)}%0A*Budget:* ${encodeURIComponent(formData.budget)}%0A*Message:* ${encodeURIComponent(formData.message || "Hi, I would like to discuss my project.")}`;
    
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
    
    setSubmitted(true);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="glow-emerald w-[500px] h-[500px] -bottom-32 -left-32 opacity-20" />
      <div className="glow-blue w-[450px] h-[450px] top-12 right-0 opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Build Something Extraordinary
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Have a project in mind or want to scale your digital presence? We are ready to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Direct Card */}
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-1">
                    WhatsApp (Fastest Response)
                  </div>
                  <div className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {siteConfig.contact.phone}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Available for instant project consultation & quotes.
                  </p>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="group block p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-1">
                    Direct Email
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors break-all">
                    {siteConfig.contact.email}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Send RFP, project briefs, or partnership inquiries.
                  </p>
                </div>
              </div>
            </a>

            {/* Office Address Card */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-teal-400 font-semibold uppercase tracking-wider mb-1">
                    Office Location
                  </div>
                  <address className="text-sm text-slate-200 not-italic font-medium leading-relaxed">
                    {siteConfig.contact.address}
                  </address>
                </div>
              </div>
            </div>

            {/* Guarantees Box */}
            <div className="p-5 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-emerald-400 flex-shrink-0" />
              <div>
                <div className="text-sm font-bold text-white">100% Risk Free Promise</div>
                <div className="text-xs text-emerald-300/80 mt-0.5">
                  Money back guarantee if agreed requirements are not met.
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Send Project Details</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Fill this out to get an instant quote directly via WhatsApp.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Replies in ~15 mins</span>
                </div>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center gap-3 text-emerald-300 text-sm">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Redirecting to WhatsApp with your details. Thank you!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Interested Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="UI/UX Creative Design">UI/UX Creative Design</option>
                      <option value="SEO (Search Engine Optimization)">SEO & Growth</option>
                      <option value="Guest Posting & Link Building">Guest Posting & Backlinks</option>
                      <option value="Brand Identity & Graphic Design">Brand Identity & Design</option>
                      <option value="Digital Marketing & Ads">Digital Marketing & Ads</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option value="$40 - $150">$40 - $150 (Starter / Single Placement)</option>
                      <option value="$200 - $400">$200 - $400 (Kickstart / Local SEO / UI Kit)</option>
                      <option value="$400 - $750">$400 - $750 (Growth Hub / Business Edition)</option>
                      <option value="$900 - $1,500+">$900 - $1,500+ (Market Leader / Full Enterprise)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Project Requirements / Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project, timeline, and any specific features you need..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl font-bold text-slate-950 bg-emerald-500 hover:bg-emerald-400 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via WhatsApp Direct</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
