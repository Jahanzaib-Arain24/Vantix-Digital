export interface PackageTier {
  name: string;
  tagline: string;
  price: string;
  timeline: string;
  popular?: boolean;
  deliverables: string[];
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: string;
  badge?: string;
  startingPrice: string;
  features: string[];
  packages: PackageTier[];
}

export interface Feature {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  liveUrl: string;
  tags: string[];
  paragraphs: string[];
  keyHighlights?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  description: string;
  slug: string;
  paragraphs: string[];
}

export const siteConfig = {
  name: "Vantix Digital",
  tagline: "Smart Digital Solutions for Modern Brands",
  shortAbout: "Turning Ideas into High-Performance Digital Solutions",
  description: "Vantix Digital is a results-driven digital agency focused on building powerful online experiences. We help startups, businesses, and brands grow through smart design, high-performance websites, and ethical digital marketing.",
  experienceYears: "8+",
  contact: {
    email: "hello.vantixdigital@gmail.com",
    phone: "+44 7840 179553",
    whatsappNumber: "447840179553",
    whatsappLink: "https://wa.me/447840179553",
    address: "45 King Street, Manchester M2 7AY, United Kingdom",
  },
  socials: {
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/447840179553",
  },
  guarantees: [
    "Clear and transparent pricing based on official Service Level Agreements (SLAs)",
    "Complimentary 1-Year Domain & Hosting setup on Hostinger included with Web Development",
    "20% Combo Discount when bundling UI/UX Design + Web Development",
    "100% money back guarantee if agreed project deliverables are not fulfilled in 7 days",
  ],
  stats: [
    { label: "Years Experience", value: "8+" },
    { label: "Projects Completed", value: "150+" },
    { label: "Client Satisfaction", value: "99%" },
    { label: "Support Available", value: "24/7" },
  ],
};

export const servicesData: Service[] = [
  {
    id: "web-dev",
    title: "Website Development",
    shortDesc: "Fast, secure, scalable and mobile-first websites.",
    description: "We build high-performance digital assets designed to scale business operations and increase market reach across Mobile, Tablet, and Desktop.",
    iconName: "Code2",
    badge: "Most Popular",
    startingPrice: "From $200",
    features: [
      "Next.js & React App Architecture",
      "Free 1-Year Domain & Hostinger Setup",
      "Conversion & Speed Optimization",
      "Priority 3-Month Technical Support"
    ],
    packages: [
      {
        name: "01. The Kickstart (Startup)",
        tagline: "Establish Brand Identity",
        price: "$200 - $250",
        timeline: "5-7 Business Days",
        deliverables: [
          "High-Impact Responsive Landing Page",
          "Custom Logo & Banner Design",
          "Hostinger Server Setup Included",
          "Standard Technical Support",
          "7-Day Full Refund Guarantee"
        ]
      },
      {
        name: "02. The Growth Hub (Professional)",
        tagline: "Lead Generation & Engagement",
        price: "$400 - $600",
        timeline: "10-14 Business Days",
        popular: true,
        deliverables: [
          "Multi-Page Business Platform",
          "Complete Brand Visual Identity",
          "SEO & Social Channels Integration",
          "Priority 3-Month Dedicated Support",
          "Free 1-Year Domain & Hosting"
        ]
      },
      {
        name: "03. The Market Leader (Premium)",
        tagline: "Market Dominance & E-Commerce",
        price: "$900 - $1,200",
        timeline: "21-30 Business Days",
        deliverables: [
          "Full-Scale Enterprise / E-Commerce Solution",
          "Premium Graphics & Assets Suite",
          "24/7 Premium Maintenance & Monitoring",
          "Custom CMS & CRM Funnels",
          "High-Reliability Server Optimization"
        ]
      }
    ]
  },
  {
    id: "ui-ux",
    title: "UI/UX Creative Design",
    shortDesc: "Pixel-perfect, conversion-driven user interface design in Figma.",
    description: "We craft interfaces that guide users towards active conversions (buying, booking, or contacting) with mathematical design-to-code precision.",
    iconName: "Palette",
    badge: "Design-To-Code",
    startingPrice: "From $80",
    features: [
      "Figma Clickable Interactive Prototypes",
      "Complete UI Kits & Design Systems",
      "20% Combo Discount with Web Dev",
      "Unlimited Revisions until 100% Satisfaction"
    ],
    packages: [
      {
        name: "01. The Concept (Starter)",
        tagline: "High-Impact Landing / MVP",
        price: "$80 - $120",
        timeline: "3 Business Days",
        deliverables: [
          "2 Premium High-Fidelity Screens (Home + Inner)",
          "Desktop & Mobile Optimized Views",
          "Source Figma Files + Custom Typography & Icons",
          "Unlimited Revisions"
        ]
      },
      {
        name: "02. The Professional (Business)",
        tagline: "Complete Business Website",
        price: "$250 - $350",
        timeline: "5 Business Days",
        popular: true,
        deliverables: [
          "Up to 6 Premium High-Fidelity Screens",
          "Full Interactive Clickable Prototype",
          "Complete Brand UI Kit (Colors, Buttons, Icons)",
          "Asset Export in WebP/SVG"
        ]
      },
      {
        name: "03. The Market Leader (Premium)",
        tagline: "E-Commerce / SaaS Application",
        price: "$500 - $750",
        timeline: "7-10 Business Days",
        deliverables: [
          "10+ Premium Screens (Full User Journey Flow)",
          "UX Competitor Research & Wireframing",
          "Full Design System Documentation",
          "Design Walkthrough Strategy Call"
        ]
      }
    ]
  },
  {
    id: "seo",
    title: "SEO (Search Engine Optimization)",
    shortDesc: "Code-First SEO engineered for Google search dominance.",
    description: "We don't just build links; we engineer Search Engine Dominance through Core Web Vitals optimization, semantic schema, and 100% white-hat drip-fed authority links.",
    iconName: "TrendingUp",
    badge: "Code-First",
    startingPrice: "From $150/mo",
    features: [
      "Technical Core Web Vitals Optimization",
      "Tiered High-Authority Backlink Structure",
      "UK/USA Local Citations & Google Maps",
      "100% White-Hat Drip-Feed Safety"
    ],
    packages: [
      {
        name: "01. Local Visibility (Startup)",
        tagline: "Local Maps & Small Business",
        price: "$150 - $200 / Month",
        timeline: "10-Day Work Cycle",
        deliverables: [
          "30 Tier-1 High Authority + 100 Tier-2 Support Links",
          "10 Essential UK/USA Business Listings / Citations",
          "Monthly Off-Page Strategy Report",
          "Local Search Ranking Push"
        ]
      },
      {
        name: "02. Business Authority (Growth)",
        tagline: "Lead Generation & Competitor Rank",
        price: "$350 - $450 / Month",
        timeline: "21-Day Work Cycle",
        popular: true,
        deliverables: [
          "70 Tier-1 Authority + 200 Tier-2 Contextual Links",
          "Full Technical SEO Audit & Speed Optimization",
          "Competitor Backlink & Keyword Intelligence",
          "Weekly Keyword Climb Tracking"
        ]
      },
      {
        name: "03. Market Dominance (Enterprise)",
        tagline: "National Dominance & E-Commerce",
        price: "$700 - $900 / Month",
        timeline: "30-Day Work Cycle",
        deliverables: [
          "100+ Premium Tier-1 + 400 Tier-2 Contextual Links",
          "50 Elite Business Listings (Yelp, YellowPages)",
          "Core Web Vitals Code Tuning & Schema Markup",
          "Dedicated SEO Strategist & Priority Support"
        ]
      }
    ]
  },
  {
    id: "guest-posting",
    title: "Guest Posting & Link Building",
    shortDesc: "Manual outreach with real human traffic and permanent do-follow backlinks.",
    description: "Quality over quantity. We secure contextual guest posts on verified niche-relevant publications with genuine UK/USA traffic and zero spam score.",
    iconName: "Globe2",
    badge: "Real Traffic",
    startingPrice: "From $40/post",
    features: [
      "Manual Outreach (No PBNs / Bot Links)",
      "Vetted via Ahrefs & Semrush Traffic",
      "Free 500-1000 Word SEO Article Included",
      "Permanent Do-Follow & 30-Day Index Guarantee"
    ],
    packages: [
      {
        name: "01. Standard Outreach (Starter)",
        tagline: "Niche Authority Foundation",
        price: "$40 - $60 / Post",
        timeline: "5-7 Business Days",
        deliverables: [
          "DA/DR 20+ Sites | 1k - 5k Monthly Traffic",
          "500+ Words SEO-Optimized Article Included",
          "Permanent Do-Follow In-Content Link",
          "30-Day Google Indexing Guarantee"
        ]
      },
      {
        name: "02. Authority Booster (Growth)",
        tagline: "Competitive Keyword Climber",
        price: "$100 - $180 / Post",
        timeline: "10-14 Business Days",
        popular: true,
        deliverables: [
          "DA/DR 40+ Sites | 10k - 50k Monthly Traffic",
          "800+ Words Premium SEO Article",
          "Guaranteed Real UK/USA Audience",
          "Ahrefs / Semrush Proof Report"
        ]
      },
      {
        name: "03. Industry Leader (Elite)",
        tagline: "High-Traffic Brand Authority",
        price: "$300 - $500+ / Post",
        timeline: "15-21 Business Days",
        deliverables: [
          "DA/DR 60+ Sites | 100k+ Monthly Real Visitors",
          "Journalism-Grade Content by Pro Writers",
          "Brand Mentions in High-Authority Publications",
          "12-Month Link Replacement Assurance"
        ]
      }
    ]
  },
  {
    id: "graphic-design",
    title: "Brand Identity & Graphic Design",
    shortDesc: "Standout logos, comprehensive branding books, and marketing creatives.",
    description: "Build a memorable visual identity with precision vector logos, full brand guidelines, high-converting social media creatives, and premium marketing collateral.",
    iconName: "Sparkles",
    badge: "Branding Kit",
    startingPrice: "From $80",
    features: [
      "Vector Logos (AI, EPS, SVG, PNG)",
      "Complete Brand Guidelines & Color Palettes",
      "Social Media Templates & Ad Creatives",
      "Full Commercial Copyright Transfer"
    ],
    packages: [
      {
        name: "01. Essential Brand Kit (Starter)",
        tagline: "Logo & Brand Foundation",
        price: "$80 - $150",
        timeline: "3-5 Business Days",
        deliverables: [
          "2 Unique Logo Concepts + Favicon",
          "High-Res Vector Files (AI, SVG, PNG)",
          "Brand Color Palette & Typography Hierarchy",
          "Unlimited Concept Revisions"
        ]
      },
      {
        name: "02. Complete Identity Suite (Business)",
        tagline: "Full Commercial Brand Book",
        price: "$200 - $350",
        timeline: "7-10 Business Days",
        popular: true,
        deliverables: [
          "Full Brand Guidelines Book & Rulebook",
          "Social Media Kit (Covers, Avatars, 6 Post Templates)",
          "Stationery Set (Business Card, Letterhead, Envelope)",
          "Ready-to-Print & Web-Optimized Assets"
        ]
      },
      {
        name: "03. Enterprise 360 Branding (Premium)",
        tagline: "Complete Brand Ecosystem",
        price: "$450 - $700",
        timeline: "14-20 Business Days",
        deliverables: [
          "Full Corporate Brand Architecture & Strategy",
          "Custom 3D / Vector Illustrations & Icon Set",
          "Marketing Pitch Deck & Brochure Design",
          "Full Source Ownership & Commercial Licensing"
        ]
      }
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Growth",
    shortDesc: "Performance campaigns and lead funnels engineered for maximum ROI.",
    description: "Maximize return on ad spend with targeted Meta & Google Ads campaigns, automated email marketing funnels, conversion rate optimization, and transparent analytics.",
    iconName: "BarChart3",
    badge: "High ROI",
    startingPrice: "From $150/mo",
    features: [
      "Meta Ads (Facebook/Instagram) & Google Search",
      "Conversion Rate Optimization (CRO)",
      "A/B Testing & Audience Retargeting",
      "Direct WhatsApp Lead Funnels"
    ],
    packages: [
      {
        name: "01. Starter Ad Campaign (Launch)",
        tagline: "New Lead Generation",
        price: "$150 - $250 / Month",
        timeline: "14-Day Cycle",
        deliverables: [
          "Meta (FB/Insta) or Google Search Setup",
          "2 Target Audience Segments & Copywriting",
          "3 High-Converting Ad Creatives Designed",
          "Weekly Performance & Lead Analytics"
        ]
      },
      {
        name: "02. Growth Funnel (Performance)",
        tagline: "Multi-Channel Scaling",
        price: "$350 - $550 / Month",
        timeline: "Monthly Retainer",
        popular: true,
        deliverables: [
          "Omni-Platform Campaign (Meta + Google Search)",
          "Retargeting Pixel & Custom Audience Setup",
          "Landing Page CRO & A/B Split Testing",
          "Bi-Weekly Strategy Calls & ROI Optimization"
        ]
      },
      {
        name: "03. Market Domination (Enterprise)",
        tagline: "Scale to 7-Figures",
        price: "$750 - $1,200 / Month",
        timeline: "Monthly Dedicated Management",
        deliverables: [
          "Full Omni-Channel (Meta, Google, TikTok, Email)",
          "High-Converting Sales Funnel Engineering",
          "Custom Real-Time Analytics Dashboard",
          "Dedicated 24/7 Growth Manager"
        ]
      }
    ]
  },
];

export const featuresData: Feature[] = [
  {
    id: "01",
    number: "01",
    title: "Free 1-Year Domain & Hosting",
    description: "Enjoy complimentary 1-year domain registration and high-reliability Hostinger server management included with web development projects.",
    iconName: "Gift",
  },
  {
    id: "02",
    number: "02",
    title: "3-Month Free Dedicated Support",
    description: "Enjoy dedicated technical support for three months after launch to ensure smooth operations and seamless user experience.",
    iconName: "Headphones",
  },
  {
    id: "03",
    number: "03",
    title: "20% Combo Loyalty Discount",
    description: "Save 20% on total project investment when bundling UI/UX Design with Website Development.",
    iconName: "Target",
  },
  {
    id: "04",
    number: "04",
    title: "100% Risk-Free Guarantee",
    description: "Full refund of initial deposit within the first 7 days if project progress does not meet your agreed expectations.",
    iconName: "Eye",
  },
  {
    id: "05",
    number: "05",
    title: "Next.js & Code-First SEO",
    description: "Built with bleeding-edge Next.js architecture, ensuring sub-second speeds and flawless Core Web Vitals.",
    iconName: "Cpu",
  },
  {
    id: "06",
    number: "06",
    title: "Transparent SLA Pricing",
    description: "Every service is backed by a clear Service Level Agreement with fixed milestones and zero surprise fees.",
    iconName: "BadgeDollarSign",
  },
];

export const portfolioData: PortfolioProject[] = [
  {
    id: "voice-of-spain",
    title: "Voice of Spain (VOS Media)",
    category: "Web Portal & Media",
    image: "/voice-of-spain.png",
    description: "Multilingual international news portal (English, Spanish, Hindi, Urdu) serving Spain's diaspora communities with breaking news, culture, business, and community reporting.",
    liveUrl: "https://www.vos.media/",
    tags: ["Multilingual News", "EN / ES / HI / UR", "Next.js / Web", "Media Portal"],
    keyHighlights: [
      "Real-time multilingual publishing in 4 languages: English, Spanish, Hindi, and Urdu",
      "High-concurrency digital media architecture built for breaking news traffic spikes",
      "Optimized editorial categorization covering Politics, Diaspora, Business, and Culture",
      "Mobile-first responsive reading experience with instant search and zero-latency caching"
    ],
    paragraphs: [
      "Voice of Spain (VOS Media) is a premier digital news publication engineered to bridge the linguistic and cultural gap for Spain's multicultural and diaspora communities. The portal delivers real-time international coverage, investigative reports, immigration updates, business analyses, and cultural highlights across four major languages: English, Spanish, Hindi, and Urdu.",
      "The architectural foundation focuses on ultra-high concurrency and sub-second page loads. News platforms experience extreme traffic surges during breaking stories; to handle this, the platform utilizes high-performance caching layers, responsive media compression, and optimized server-side rendering to deliver a frictionless reading experience across all global regions.",
      "From an editorial workflow perspective, the portal provides structured taxonomy and categorization for politics, regional affairs, diaspora life, and commercial trade. Content editors can seamlessly manage multilingual editions, ensuring that news articles are accurately localized with tailored typographic rendering for both Latin and right-to-left/Indic scripts.",
      "The user interface incorporates modern newsfeed aesthetics, high-contrast readability modes, dynamic trending tickers, and intuitive category navigation. Readers enjoy uninterrupted access on smartphones, tablets, and desktop workstations with minimal bandwidth consumption.",
      "By combining journalistic standards with robust web technology, Voice of Spain has established itself as an indispensable media hub, connecting hundreds of thousands of expatriates, researchers, and local residents across Spain and worldwide."
    ],
  },
  {
    id: "saint-alberts-university",
    title: "Saint Albert's International University",
    category: "Educational Platform",
    image: "/saint-albert-university.png",
    description: "Premier online academic institution endowed with the Royal Charter of the Bunyoro Kitara Kingdom, featuring dynamic admissions, academic degree catalogs, and secure session verification.",
    liveUrl: "https://saiu.education/",
    tags: ["Royal Charter", "Online Admissions", "Session CAPTCHA", "PHP 8 & Modular Layout"],
    keyHighlights: [
      "Endowed by Royal Charter of King Omukama Dr. Solomon Gafabusa Iguru I (Bunyoro Kitara Kingdom)",
      "Dynamic multi-tier academic degree catalog (Certificates, Bachelor's, Master's, Doctorates)",
      "Built-in session-based mathematical CAPTCHA verification eliminating spam without external cookies",
      "Privacy-hardened backend architecture with automated Git-ignored submission logging"
    ],
    paragraphs: [
      "Saint Albert's International University (Universitas Internationalis Saint Albert's - SAIU) is an esteemed self-paced academic and theological institution. Bestowed with the Royal Charter of Incorporation by His Majesty Omukama Rukirabasaja Agutamba Dr. Solomon Gafabusa Iguru I, King of the Bunyoro Kitara Kingdom in Uganda, SAIU confers globally accredited Associate, Bachelor’s, Master’s, and Doctoral qualifications.",
      "The SAIU Web Portal serves as the comprehensive digital campus for the university, handling the complete international student lifecycle. Prospective students across Europe, Africa, Asia, and the Americas can review academic curricula, tuition fees, faculty profiles, and royal decrees, before submitting structured admissions applications directly online.",
      "A core architectural highlight is the custom-engineered PHP 8 backend with session-based mathematical verification (`e.g., 4 + 5 = ?`). Unlike third-party tracking scripts that slow down performance and collect user data, SAIU's native numeric verification stops automated spam bots while respecting visitor privacy and maintaining 100% compliance with international data regulations.",
      "Data privacy was prioritized throughout engineering: student submissions containing personal identification, addresses, and academic records are securely logged into encrypted server storage and explicitly excluded from version control systems via Git rules to eliminate any risk of public data leakage.",
      "The visual design celebrates the university's royal patronage through a majestic Crimson and Gold color palette, dignified serif typography, and modular PHP template architecture (`includes/header.php`, `includes/footer.php`) that ensures lightning-fast load times and consistent multi-device navigation across desktop, tablet, and mobile browsers."
    ],
  },
  {
    id: "pass-university",
    title: "The National University of Penal (UNIPASS)",
    category: "University & Admin Panel",
    image: "/the-national-university-of-penal.png",
    description: "National University of Penal, Administrative and Security Sciences offering 60+ accredited programmes with Google reCAPTCHA v2 security and international university network integration.",
    liveUrl: "https://www.pass.university/",
    tags: ["60+ Programmes", "Google reCAPTCHA v2", "INU Global Consortium", "Security Headers"],
    keyHighlights: [
      "Over 60 accredited academic programmes spanning 5 levels (Certificate, Diploma, BS, MS, PhD)",
      "Integrated under the Royal Patronage of Bunyoro-Kitara Kingdom & INU Global Network",
      "Server-side Google reCAPTCHA v2 bot protection on all admissions and inquiry endpoints",
      "Comprehensive HTTP security headers (X-Frame-Options, XSS protection, nosniff)"
    ],
    paragraphs: [
      "The National University of Penal, Administrative and Security Sciences (UNIPASS / pass.university) is a globally recognized institution dedicated to advanced higher education in criminal justice, cyber security, forensic sciences, public administration, intelligence studies, and international law enforcement under the motto 'Knowledge Guard Thee'.",
      "Operating under the royal patronage of HRM Omukama Dr. Solomon Gafabusa Iguru I and serving as a foundational pillar in the International Network of Universities (INU) alongside six partner institutions, UNIPASS delivers an expansive curriculum consisting of over 60 distinct degree programmes across five academic levels: Certificate, Diploma, Bachelor's, Master's, and PhD.",
      "The web portal was engineered with modular PHP 8.3 architecture, managing 19+ primary landing pages and 60 individual programme detail silos. Each programme page displays detailed academic syllabi, prerequisite requirements, career pathways, and fee structures, allowing prospective students to explore their desired field with complete clarity.",
      "Security engineering on the portal adheres to strict institutional standards. Form handling features server-side Google reCAPTCHA v2 verification, automated dual-channel email notifications to both applicants and university registrars (`admissions@pass.university`), and enterprise-grade HTTP security headers including X-Frame-Options (clickjacking defense), nosniff MIME protection, and strict referrer policies.",
      "The user experience reflects the prestige of the institution with a bespoke Bunyoro Royal palette of Deep Crimson Red (`#8B0000`), Royal Navy Blue (`#1E3A8A`), and Burnished Gold (`#D4AF37`), perfectly balancing academic gravitas with fluid responsive layouts across all mobile, tablet, and desktop screens."
    ],
  },
  {
    id: "taskbuddy-portal",
    title: "TaskBuddy Web Portal",
    category: "Full-Stack Web App",
    image: "/taskbuddy-web-portal.png",
    description: "Intelligent online task & freelance gig marketplace featuring a 4-module architecture, integrated ATS candidate hiring pipeline, print-ready dynamic CV builder, and 785 automated QA tests.",
    liveUrl: "https://taskbuddy-portal.infinityfreeapp.com/",
    tags: ["4-Module Architecture", "ATS Hiring Pipeline", "Dynamic CV Generator", "785 QA Tests Passed"],
    keyHighlights: [
      "Complete 4-Module System: Public Discovery Hub, Task Seeker workstation, Task Lister ATS, and Admin Center",
      "7-Tier Credential Manager & automated 2-column recruitment-standard Print-Ready CV Generator",
      "Full Applicant Tracking System (ATS) with real-time candidate statuses (Pending to Selected)",
      "785 automated QA unit test assertions with 100% pass rate & OWASP security hardening"
    ],
    paragraphs: [
      "TaskBuddy is a comprehensive, production-ready gig and freelance task marketplace web platform built to connect verified service providers (**Task Seekers**) with businesses and clients (**Task Listers**). Designed as a complete end-to-end ecosystem, the platform bridges the gap between talent discovery, proposal bidding, candidate hiring, and project execution.",
      "The architecture is structured around four interconnected modules: The **Public Discovery Hub** with multi-parameter search filtering by location, category, and budget; the **Task Seeker Portal** featuring a 7-tier credential repository (academic degrees, certified licenses, work history, language ratings, references, and ViewerJS document preview); the **Task Lister Portal** with a built-in Applicant Tracking System (ATS) for managing candidate pipelines from initial review to hiring; and the **Admin Control Center** providing platform analytics, user moderation, and category CRUD governance.",
      "A standout innovation is the built-in **Dynamic Print-Ready CV Generator** (`/employee/my_cv`). As freelancers upload and verify their academic credentials, work experience, and certifications, TaskBuddy automatically compiles a standardized 2-column executive resume that employers can review or print with one click.",
      "Security and code quality follow strict OWASP guidelines: 100% of database interactions are fortified with PDO prepared statements and typed parameter bindings to eliminate SQL injection; cryptographically secure CSRF tokens guard every state-modifying POST request; and recursive `htmlspecialchars` sanitization prevents XSS vulnerabilities.",
      "TaskBuddy has been validated through an extensive automated testing suite (`tests/run_all_tests.php`) comprising 785 test assertions with a flawless 100% pass rate across authentication, RBAC session guards, CRUD operations, and security headers. Additionally, it features full Progressive Web App (PWA) readiness with service worker caching (`sw.js`) and mobile manifest (`manifest.json`) for seamless mobile installation."
    ],
  },
  {
    id: "personal-portfolio",
    title: "Personal Brand Portfolio",
    category: "Portfolio & Branding",
    image: "/personal-brand-portfolio.png",
    description: "High-performance developer portfolio showcasing engineering milestones, interactive case studies, dynamic dark mode aesthetics, and lead conversion funnels.",
    liveUrl: "https://jahanzaib-20.netlify.app/",
    tags: ["Full-Stack Showcase", "Interactive UI", "Netlify Global CDN", "Lead Conversion"],
    keyHighlights: [
      "Interactive project showcase featuring live demo links, source code repositories, and case studies",
      "Engineered for sub-second page loads with modern CSS grid design tokens and smooth transitions",
      "Direct conversion contact funnels integrated with email and WhatsApp communication channels",
      "Global CDN deployment with automated CI/CD pipelines ensuring 99.99% uptime"
    ],
    paragraphs: [
      "The Personal Brand Portfolio is a bespoke digital showcase engineered to highlight senior full-stack development capabilities, UI/UX design systems, and successful enterprise client deliveries. Built with a focus on speed, typography, and visual elegance, the website acts as an interactive resume for prospective clients and technical recruiters worldwide.",
      "The user interface features a sleek modern dark-mode aesthetic, custom glassmorphic cards, curated typography hierarchies, and subtle CSS micro-animations that engage visitors without degrading performance. Every component is designed from scratch to reflect engineering rigor and brand identity.",
      "Visitors can explore detailed case studies covering complex web applications, university portals, e-commerce stores, and backend RESTful architectures. Each case study provides instant access to live production URLs, GitHub source repositories, and technical breakdowns of solved problems.",
      "Conversion optimization is seamlessly woven into the user journey. High-visibility call-to-actions, direct WhatsApp lead funnels, and integrated contact desks allow prospective clients to initiate project inquiries instantly with zero communication friction.",
      "Deployed on a global high-speed CDN with automated Git-driven CI/CD deployment pipelines, the portfolio guarantees 99.99% uptime, flawless Core Web Vitals scores, and a responsive experience across all mobile, tablet, and desktop devices."
    ],
  },
  {
    id: "beauty-co",
    title: "Beauty & Co. E-Commerce",
    category: "E-Commerce Experience",
    image: "/beauty-and-co.png",
    description: "Sophisticated luxury skincare and fashion e-commerce storefront featuring interactive cart mechanics, product filtering, dynamic catalogs, and frictionless checkout flow.",
    liveUrl: "https://beauty-co.netlify.app/",
    tags: ["Luxury E-Commerce", "Interactive Cart", "Product Filtering", "Frictionless Checkout"],
    keyHighlights: [
      "Luxury visual storefront with elegant product galleries, hover zoom effects, and badge highlights",
      "Dynamic interactive shopping cart with real-time subtotal calculation and instant updates",
      "Multi-category product filtering enabling shoppers to browse skincare, beauty, and fashion items",
      "Mobile-optimized one-page checkout funnel designed to maximize conversion rates"
    ],
    paragraphs: [
      "Beauty & Co. is a modern luxury e-commerce web application created for high-end fashion, beauty, and skincare brands. The platform is designed to provide consumers with an elegant, boutique shopping experience that rivals top international luxury retailers.",
      "The visual design leverages minimalist luxury aesthetics, warm pastel accents, refined typography, and high-resolution product imagery with smooth hover-zoom interactions. Every layout element has been carefully calibrated to elevate brand prestige and accentuate product quality.",
      "At the functional core is a dynamic client-side shopping cart system. Customers can seamlessly browse product collections, filter items by category or price range, add products to their cart with real-time visual feedback, and adjust quantities with immediate cart subtotal recalculations.",
      "The checkout flow is engineered for maximum conversion, featuring a streamlined single-page order form with intuitive form field validations, order summary breakdowns, and multiple payment gateway options designed to minimize cart abandonment.",
      "Built with mobile-first responsiveness, Beauty & Co. delivers a fluid, app-like shopping experience on iOS and Android smartphones as well as desktop displays, ensuring seamless commercial transactions across all customer touchpoints."
    ],
  },
];

export const blogData: BlogPost[] = [
  {
    id: "future-web-design-2026",
    slug: "future-web-design-2026",
    title: "The Future of Web Design in 2026",
    date: "Jan 25, 2026",
    readTime: "5 min read",
    category: "Design Trends",
    image: "/The Future of Web Design in 2026.jpg",
    description: "Exploring the latest trends in UI/UX, AI-driven layouts, micro-interactions, and what to expect in modern web development.",
    paragraphs: [
      "The web development landscape in 2026 has evolved beyond static aesthetic appeal into immersive, lightning-fast interactive experiences. Modern users demand zero-latency page transitions, dynamic content personalization, and cohesive design systems that adapt seamlessly across devices from smart wearables to ultrawide desktop monitors.",
      "Key emerging trends include subtle micro-interactions, glassmorphism balanced with high-contrast accessibility, and AI-assisted layout adaptations. By integrating modern component-driven architectures like Next.js App Router and React Server Components, agency websites can deliver rich visual storytelling without sacrificing Core Web Vitals or organic search ranking.",
      "Furthermore, responsive design has shifted from simple media queries to fluid design tokens and container queries. This empowers layouts to feel completely native regardless of screen orientation or browser zoom level, building user trust and significantly boosting lead conversion rates.",
      "As digital agencies strive for competitive advantage, investing in custom UI engineering, kinetic typography, and frictionless call-to-actions remains the ultimate driver of measurable online business success."
    ],
  },
  {
    id: "seo-best-practices-2026",
    slug: "seo-best-practices-2026",
    title: "SEO Best Practices: Dominating 2026",
    date: "Jan 20, 2026",
    readTime: "7 min read",
    category: "SEO & Growth",
    image: "/SEO Best Practices Dominating 2026.webp",
    description: "Master the art of search engine optimization using the newest AI search algorithms, semantic entity mapping, and Core Web Vitals.",
    paragraphs: [
      "Search Engine Optimization in 2026 is governed by AI-powered search algorithms, intent-based conversational queries, and stringent user-experience standards. Traditional keyword stuffing has been completely replaced by semantic entity mapping, topical authority, and authentic content depth that answers user queries comprehensively.",
      "Technical SEO now places uncompromising emphasis on performance metrics like Interaction to Next Paint (INP), Cumulative Layout Shift (CLS), and structured schema markup. Websites that achieve sub-second render speeds and clean semantic HTML hierarchy consistently outrank slower competitors in Google's search indexes.",
      "Strategic link building and high-authority guest posting continue to be vital ranking catalysts. Earning editorial backlinks from reputable, niche-relevant publications signals deep domain credibility, protecting your rankings against algorithm fluctuations.",
      "To dominate search rankings long-term, businesses must combine ethical white-hat SEO, automated performance monitoring, and localized search optimization to attract ready-to-convert organic traffic."
    ],
  },
  {
    id: "scaling-agency-efficiently",
    slug: "scaling-agency-efficiently",
    title: "Scaling Your Digital Agency Efficiently",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    category: "Agency Business",
    image: "/Scaling Your Digital Agency Efficiently.png",
    description: "Proven methods, modern tech stacks, and workflow improvements for growing your client base and managing larger project pipelines.",
    paragraphs: [
      "Scaling a digital agency from a boutique studio to an industry-leading powerhouse requires operational excellence, standardized Service Level Agreements (SLAs), and modern tech tooling. Moving away from legacy development workflows toward modular frameworks like Next.js allows agencies to deliver client projects in record time with unmatched reliability.",
      "Clear client communication and transparent delivery milestones are critical. When prospective clients see transparent scope definitions, performance guarantees, and dedicated post-launch support periods, acquisition friction drops dramatically.",
      "Automating repetitive tasks — such as build pipelines, SEO auditing, and CRM lead capture directly via WhatsApp — enables creative teams to focus on high-impact strategic problem solving rather than administrative overhead.",
      "By maintaining stringent quality control, establishing recurring retainer relationships, and showcasing verified portfolio case studies, agencies can sustainably scale revenue while keeping client satisfaction above 99%."
    ],
  },
];
