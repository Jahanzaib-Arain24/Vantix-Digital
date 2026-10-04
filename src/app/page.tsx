import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#090e17] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Features />
        <Portfolio />
        <Blog />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloat />
    </div>
  );
}
