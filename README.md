# 🚀 Vantix Digital — Smart Digital Solutions for Modern Brands

<div align="center">
  <img src="public/footer.png" alt="Vantix Digital Logo" width="260px">
  <h3>High-Performance Web Engineering, UI/UX Creative Design & Digital Growth Agency</h3>
  <p><i>"Turning Ideas into High-Performance Digital Solutions"</i></p>

  <p align="center">
    <a href="https://vantixdigital.com" target="_blank">
      <img src="https://img.shields.io/badge/🌐_Live_Website-vantixdigital.com-10b981?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Website" />
    </a>
    <a href="https://wa.me/447840179553" target="_blank">
      <img src="https://img.shields.io/badge/💬_WhatsApp-Chat_Direct-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp Chat" />
    </a>
  </p>
</div>

---

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-Modern_Tokens-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Responsive-Mobile_First_100%25-6366f1?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Mobile First Responsive" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License MIT" />
</p>

> **Vantix Digital** is a results-driven digital agency focused on building powerful online experiences. We help startups, businesses, and modern brands scale through high-performance Next.js websites, conversion-driven UI/UX design in Figma, code-first SEO, high-authority link building, brand identity kits, and performance digital marketing.

---

## 📑 Table of Contents
- [✨ Key Highlights & Features](#-key-highlights--features)
- [🛠️ Technology Stack](#️-technology-stack)
- [📂 Project Architecture](#-project-architecture)
- [💼 Comprehensive Agency Services & SLA Pricing](#-comprehensive-agency-services--sla-pricing)
- [🌟 Live Client Portfolio Case Studies](#-live-client-portfolio-case-studies)
- [🚀 Getting Started & Local Setup](#-getting-started--local-setup)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)
- [👤 Author & Agency Contact](#-author--agency-contact)

---

## ✨ Key Highlights & Features

- ⚡ **Next.js 16 App Router**: Ultra-fast server-rendered architecture with sub-second page transitions and optimal Core Web Vitals.
- 📱 **Mobile-First Responsive Engine**: Flawlessly tested and adaptive across **Mobile (360px - 480px)**, **Tablet (768px - 1024px)**, **Laptop (1366px - 1440px)**, and **Desktop 4K (1920px+)**.
- 🎨 **Modern Agency Aesthetics**: Deep obsidian dark theme (`#090e17`), emerald glow accents (`#10b981`), glassmorphic cards, and kinetic hover micro-animations.
- 💬 **Dynamic WhatsApp Lead Capture**: Instant quote requests, budget selectors matched to active services, and floating live chat integration.
- 📊 **Service Level Agreement (SLA) Pricing**: Transparent tier pricing, fixed delivery timelines, and 100% money-back guarantees.
- 📂 **Rich Portfolio Modal Case Studies**: 6 live production projects featuring 4–6 detailed paragraphs, architectural highlights, and live URLs.
- ⚡ **1-Click Localhost Batch Launcher**: Start the server and launch the browser automatically with `Run-Website.bat`.

---

## 🛠️ Technology Stack

### Core Framework & Logic
- **Next.js 16.3.8 (App Router)**: Server-side rendering, streaming HTML, and edge optimization.
- **React 19**: Modern concurrent UI rendering with zero hydration latency.
- **TypeScript 5.x**: End-to-end type safety across data repositories, props, and event handlers.

### Styling & Visual Assets
- **Tailwind CSS**: Utility-first CSS engine customized with modern design tokens and custom glow animations.
- **Google Fonts (`next/font`)**: Self-hosted, zero-layout-shift font preloading (**Poppins** for body, **Cuprum** for headings).
- **Lucide Icons**: Featherweight, tree-shakeable SVG vector iconography.

---

## 📂 Project Architecture

```text
Vantix Digital Next JS/
├── public/                         # Production static assets (optimized WebP/PNG)
│   ├── images/                     # Hero & About visual banners
│   ├── footer.png                  # Brand logo asset (Navbar & Footer)
│   ├── Header.png                  # OpenGraph social share card
│   ├── favicon.png                 # Browser favicon
│   ├── voice-of-spain.png          # Portfolio case study banner
│   ├── saint-albert-university.png # Portfolio case study banner
│   ├── the-national-university-of-penal.png
│   ├── taskbuddy-web-portal.png
│   ├── personal-brand-portfolio.png
│   └── beauty-and-co.png
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Root HTML layout, SEO metadata, fonts & viewport
│   │   ├── page.tsx                # Single-page smooth scroll assembler
│   │   └── globals.css             # Design tokens, emerald glow effects & custom scrollbar
│   ├── components/                 # Modular UI Components
│   │   ├── Navbar.tsx              # Sticky glassmorphic navigation + Mobile Drawer
│   │   ├── Hero.tsx                # Hero banner, conversion CTAs & live stats
│   │   ├── About.tsx               # Agency story, 8+ years badge & guarantees
│   │   ├── Services.tsx            # 6 Core services, 3 pricing tiers each + SLA Modal
│   │   ├── Features.tsx            # 6 Numbered value propositions & guarantees
│   │   ├── Portfolio.tsx           # 6 Production Case Studies + Full-screen Modal
│   │   ├── Blog.tsx                # 3 Industry insight articles + Reading Modal
│   │   ├── Contact.tsx             # Dynamic budget selector & direct WhatsApp desk
│   │   ├── Footer.tsx              # UK office details, newsletter, and legal notice
│   │   ├── SocialIcons.tsx         # Standalone SVG social vectors
│   │   ├── HowItWorksModal.tsx     # 4-Step agency workflow modal
│   │   └── WhatsAppFloat.tsx       # Floating pulse live chat trigger
│   └── data/
│       └── siteData.ts             # Central Single Source of Truth (SSOT)
├── CONTRIBUTING.md                 # Open-source contribution guidelines
├── DEPLOYMENT.md                   # Production deployment manual (Vercel, Netlify, VPS)
├── LICENSE                         # Official MIT License
├── PROJECT_OVERVIEW.md             # Deep technical blueprint & architecture
├── README.md                       # Main project documentation
├── Run-Website.bat                 # 1-Click Windows localhost launcher
├── next.config.ts                  # Next.js configuration
├── package.json                    # Project dependencies & scripts
└── tsconfig.json                   # TypeScript configuration
```

---

## 💼 Comprehensive Agency Services & SLA Pricing

| Service | Starting Price | Turnaround | Key Deliverables |
| :--- | :--- | :--- | :--- |
| 💻 **Website Development** | From **$200** | 5 - 30 Days | Next.js architecture, Free 1-Yr Domain & Hostinger Setup, 3-Month Free Support |
| 🎨 **UI/UX Creative Design** | From **$80** | 3 - 10 Days | Figma interactive prototype, complete UI kit, unlimited concept revisions |
| 📈 **SEO (Search Engine Optimization)** | From **$150/mo** | Monthly Retainer | Code-first technical SEO, Core Web Vitals tuning, Tiered authority backlinks |
| 🌐 **Guest Posting & Link Building** | From **$40/post** | 5 - 21 Days | High DA/DR 20-60+ manual outreach, real UK/USA organic traffic, permanent do-follow |
| ✨ **Brand Identity & Graphic Design** | From **$80** | 3 - 20 Days | Complete vector logo suite (AI/SVG/PNG), Brand Book guidelines, social media templates |
| 📊 **Digital Marketing & Growth** | From **$150/mo** | Monthly Retainer | High-ROI Meta & Google Ads campaigns, WhatsApp lead funnels, A/B split testing |

---

## 🌟 Live Client Portfolio Case Studies

1. 📰 **[Voice of Spain (VOS Media)](https://www.vos.media/)** — Multilingual international news portal (English, Spanish, Hindi, Urdu) serving Spain's diaspora communities with real-time editorial feeds.
2. 🎓 **[Saint Albert's International University](https://saiu.education/)** — Royal Charter digital campus with dynamic online admissions, degree catalogs, and session-based mathematical CAPTCHA.
3. 🏛️ **[The National University of Penal (UNIPASS)](https://www.pass.university/)** — 60+ accredited programmes in criminal justice and security sciences with Google reCAPTCHA v2 and INU Global Consortium.
4. 🚀 **[TaskBuddy Web Portal](https://taskbuddy-portal.infinityfreeapp.com/)** — Intelligent 4-module task marketplace, dynamic 2-column print-ready CV generator, and 785 automated QA unit tests passed.
5. 🌐 **[Personal Brand Portfolio](https://jahanzaib-20.netlify.app/)** — Modern developer portfolio with micro-interactions, live case studies, and conversion funnel.
6. 🛍️ **[Beauty & Co. E-Commerce](https://beauty-co.netlify.app/)** — Luxury fashion and skincare e-commerce storefront with interactive cart and streamlined checkout.

---

## 🚀 Getting Started & Local Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 18.18 or higher / 20.x recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)

### Method 1: 1-Click Batch File (Windows)
Double-click **`Run-Website.bat`** in the project folder. It will install dependencies if needed, start the dev server, and automatically open `http://localhost:3000`.

### Method 2: Manual Terminal
```bash
# 1. Clone the repository
git clone https://github.com/Jahanzaib-Arain24/Vantix-Digital.git
cd Vantix-Digital

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🤝 Contributing

Contributions are warmly welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for full guidelines on opening issues, branch naming, and submitting pull requests.

---

## 📝 License

This project is open-sourced under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author & Agency Contact

**Muhammad Jahanzaib** — *Full-Stack Web Engineer & Founder of Vantix Digital*

- 🌐 **Portfolio**: [jahanzaib-20.netlify.app](https://jahanzaib-20.netlify.app/)
- 💼 **LinkedIn**: [@jahanzaib-arain](https://www.linkedin.com/in/jahanzaib-arain/)
- 📧 **Agency Email**: [hello.vantixdigital@gmail.com](mailto:hello.vantixdigital@gmail.com)
- 💬 **WhatsApp**: [+44 7840 179553](https://wa.me/447840179553)
- 💻 **GitHub**: [@Jahanzaib-Arain24](https://github.com/Jahanzaib-Arain24)

---

<div align="center">
  <b>⭐ Star this repository if you find Vantix Digital helpful!</b><br/>
  Made with ❤️ by Muhammad Jahanzaib
</div>
