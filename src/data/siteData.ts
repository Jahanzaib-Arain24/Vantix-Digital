export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: string;
  badge?: string;
  features: string[];
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
    "Clear and transparent pricing based on project requirements",
    "Any additional features or tools quoted separately with zero hidden fees",
    "100% money back guarantee if agreed project deliverables are not fulfilled",
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
    description: "We build fast, secure, and scalable websites tailored to your business goals. Our websites are responsive, SEO-optimized, and engineered for high conversion across all devices.",
    iconName: "Code2",
    badge: "Most Popular",
    features: ["Next.js & React Apps", "E-Commerce Solutions", "Speed & Core Web Vitals", "Custom CMS Integration"],
  },
  {
    id: "ui-ux",
    title: "UI/UX Creative Design",
    shortDesc: "Modern, intuitive interfaces crafted for conversion.",
    description: "We design intuitive, visually appealing, and user-centered interfaces that enhance user engagement and improve conversion rates with modern clarity and aesthetics.",
    iconName: "Palette",
    badge: "Creative",
    features: ["Figma Wireframes & Prototypes", "Design Systems", "Mobile App UI", "User Journey Mapping"],
  },
  {
    id: "seo",
    title: "SEO (Search Engine Optimization)",
    shortDesc: "Rank on page 1 of Google with ethical, data-driven SEO.",
    description: "We help your business rank higher on search engines, attracting quality organic traffic that converts into loyal customers. Sustainable, data-driven strategies.",
    iconName: "TrendingUp",
    badge: "High ROI",
    features: ["On-Page & Technical SEO", "Keyword Research & Strategy", "Local SEO & Google Maps", "Performance Tracking"],
  },
  {
    id: "guest-posting",
    title: "Guest Posting & Link Building",
    shortDesc: "High authority backlinks for long-term ranking power.",
    description: "We grow your online presence through strategic guest posting, building high-quality backlinks that improve domain authority and search visibility.",
    iconName: "Globe2",
    badge: "Authority",
    features: ["High DA/DR Placements", "Niche-Relevant Outreach", "Editorial Quality Content", "Safe & White-Hat Methods"],
  },
  {
    id: "graphic-design",
    title: "Brand Identity & Graphic Design",
    shortDesc: "Memorable logos, social creatives and brand assets.",
    description: "Build a standout visual identity with premium logos, social media marketing creatives, vector illustrations, and cohesive branding guidelines.",
    iconName: "Sparkles",
    features: ["Logo & Brand Guidelines", "Social Media Graphics", "Marketing Collateral", "Vector Illustrations"],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Growth",
    shortDesc: "Performance marketing campaigns tailored to scale.",
    description: "Maximize your reach and return on ad spend with targeted ad campaigns, email funnels, and data-backed performance marketing.",
    iconName: "BarChart3",
    features: ["Google & Meta Ads", "Conversion Rate Optimization", "Email Marketing Funnels", "Analytics & ROI Reporting"],
  },
];

export const featuresData: Feature[] = [
  {
    id: "01",
    number: "01",
    title: "Free Premium Plugins & Tools",
    description: "Access essential tools and premium plugins at no extra cost to enhance your website's functionality and performance.",
    iconName: "Gift",
  },
  {
    id: "02",
    number: "02",
    title: "3-Month Free Dedicated Support",
    description: "Enjoy dedicated technical support for three months after launch to ensure smooth operations and a seamless user experience.",
    iconName: "Headphones",
  },
  {
    id: "03",
    number: "03",
    title: "Customer-Centric Strategy",
    description: "We create strategies tailored to your business goals, improving engagement, conversions, and long-term digital growth.",
    iconName: "Target",
  },
  {
    id: "04",
    number: "04",
    title: "High-Quality Visuals & UI",
    description: "Professional, premium images and graphics that strengthen your brand and make your digital presence visually unforgettable.",
    iconName: "Eye",
  },
  {
    id: "05",
    number: "05",
    title: "Advanced Next.js Technology",
    description: "Implement cutting-edge Next.js features and lightning-fast server components to provide a superior digital experience.",
    iconName: "Cpu",
  },
  {
    id: "06",
    number: "06",
    title: "Affordable & Reasonable Pricing",
    description: "Get top-quality digital solutions at competitive prices, ensuring maximum ROI without compromising on quality.",
    iconName: "BadgeDollarSign",
  },
];

export const portfolioData: PortfolioProject[] = [
  {
    id: "real-estate",
    title: "Real Estate Agency",
    category: "Web Design & Development",
    image: "/Real Estate Agency.png",
    description: "A modern real estate platform with property listings, smart search filters, interactive maps, and client trust-building features.",
    liveUrl: "https://vantix-real-estate.netlify.app/",
    tags: ["React / Web", "Modern UI", "Filters", "Real Estate"],
  },
  {
    id: "beauty-co",
    title: "Beauty & Co.",
    category: "E-Commerce Experience",
    image: "/Beauty & Co..png",
    description: "A fully functional fashion and skincare e-commerce website with interactive cart, product showcases, and secure checkout experience.",
    liveUrl: "https://beauty-co.netlify.app/",
    tags: ["E-Commerce", "Fashion & Beauty", "Cart System", "Responsive"],
  },
  {
    id: "personal-portfolio",
    title: "Personal Brand Portfolio",
    category: "Portfolio & Branding",
    image: "/My Portfolio.png",
    description: "A sleek professional portfolio showcasing creative services, case studies, interactive project showcases, and conversion funnels.",
    liveUrl: "https://jahanzaib-20.netlify.app/",
    tags: ["Agency / Portfolio", "High Performance", "Animations", "UI/UX"],
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
