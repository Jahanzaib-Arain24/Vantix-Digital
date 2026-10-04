"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Send, MapPin, Phone, Mail, Check, ArrowUp } from "lucide-react";
import { LinkedInIcon, FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/SocialIcons";
import { siteConfig } from "@/data/siteData";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#060a10] border-t border-slate-800 text-slate-400 overflow-hidden">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="#home" className="inline-block relative h-10 w-40 mb-4">
                <Image
                  src="/footer.png"
                  alt="Vantix Digital"
                  fill
                  className="object-contain object-left"
                />
              </Link>

              <p className="text-sm text-slate-300/80 leading-relaxed mb-6">
                Stay connected with Vantix Digital and unlock the full potential of your business with our proven digital expertise, high-conversion web development, and strategic SEO.
              </p>
            </div>

            {/* Newsletter form */}
            <div>
              <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
                Subscribe to Industry Insights
              </div>

              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-400 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <Check className="w-4 h-4" />
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative flex items-center">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full pl-4 pr-12 py-3 rounded-full bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1.5 p-2 rounded-full bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  UI/UX Creative Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  SEO (Search Engine Optimization)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Guest Posting & Link Building
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Brand Identity & Graphic Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Digital Marketing & Ads
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-emerald-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-emerald-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-emerald-400 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-emerald-400 transition-colors">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            
            <div className="space-y-3 text-sm mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                <span className="text-xs sm:text-sm text-slate-300">
                  {siteConfig.contact.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-xs sm:text-sm text-slate-300 hover:text-emerald-400 transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400 text-center sm:text-left">
            &copy; 2026 Vantix Digital | All Rights Reserved. Built with Next.js
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Terms of Use
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-emerald-500 hover:text-slate-950 transition-colors"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
