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
  },
];
