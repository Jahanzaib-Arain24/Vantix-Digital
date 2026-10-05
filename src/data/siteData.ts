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
  },
  {
    id: "saint-alberts-university",
    title: "Saint Albert's University",
    category: "Educational Platform",
    image: "/saint-albert-university.png",
    description: "Modern university platform featuring dynamic online admissions, academic program catalogs, student aid management, and backend administration portal.",
    liveUrl: "https://saiu.education/",
    tags: ["University Portal", "Admissions System", "Academic Catalog", "Admin Backend"],
  },
  {
    id: "pass-university",
    title: "The National University of Penal",
    category: "University & Admin Panel",
    image: "/the-national-university-of-penal.png",
    description: "Comprehensive administrative and faculty operations portal for university management, curriculum planning, student records, and content management.",
    liveUrl: "https://www.pass.university/",
    tags: ["Faculty Dashboard", "Curriculum Management", "Role-Based Access", "PASS University"],
  },
  {
    id: "taskbuddy-portal",
    title: "TaskBuddy Web Portal",
    category: "Full-Stack Web App",
    image: "/taskbuddy-web-portal.png",
    description: "Full-stack online task & freelance service marketplace. Features 4 modules (Seeker, Lister, Admin, Public Hub), integrated ATS candidate pipeline, dynamic print-ready CV builder, 7-tier verified credentials, and OWASP security hardening.",
    liveUrl: "https://taskbuddy-portal.infinityfreeapp.com/",
    tags: ["Freelance Marketplace", "4-Module Architecture", "ATS & CV Builder", "PHP & MySQL"],
  },
  {
    id: "personal-portfolio",
    title: "Personal Brand Portfolio",
    category: "Portfolio & Branding",
    image: "/personal-brand-portfolio.png",
    description: "A professional portfolio website showcasing full-stack projects, live interactive showcases, smooth micro-interactions, and conversion contact funnel.",
    liveUrl: "https://jahanzaib-20.netlify.app/",
    tags: ["Developer Portfolio", "High Performance", "Smooth Animations", "Lead Capture"],
  },
  {
    id: "beauty-co",
    title: "Beauty & Co.",
    category: "E-Commerce Experience",
    image: "/beauty-and-co.png",
    description: "A fully functional fashion and skincare e-commerce website with interactive cart, dynamic product showcases, and secure checkout experience.",
    liveUrl: "https://beauty-co.netlify.app/",
    tags: ["E-Commerce", "Fashion & Beauty", "Cart System", "Responsive"],
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
