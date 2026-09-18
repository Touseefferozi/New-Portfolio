import type { StaticImageData } from "next/image";
import { projectImages } from "@/components/projectImages";

export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  description: string;
  stack: string;
  year: string;
  website: string;
  image: string | StaticImageData;
  client: string;
  duration: string;
  services: string;
  overview: string;
  problem: string;
  solution: string;
  gallery: Array<string | StaticImageData>;
  liveUrl?: string;
  results?: string[];
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
  featured?: boolean;
};

export function getProjectLiveUrl(project: PortfolioProject) {
  if (project.liveUrl) return project.liveUrl;
  const host = project.website.replace(/^https?:\/\//, "");
  return `https://${host}`;
}

export function getProjectImageSrc(image: PortfolioProject["image"]) {
  return typeof image === "string" ? image : image.src;
}

export function getProjectSeo(project: PortfolioProject) {
  const title =
    project.seoTitle ??
    `${project.title} Case Study | ${project.category} Web Design & Development`;
  const description =
    project.seoDescription ??
    `${project.description} Explore the challenge, approach, and results from this ${project.category.toLowerCase()} project.`;
  const keywords = project.keywords ?? [
    project.title,
    project.category,
    "case study",
    "web design",
    "web development",
    project.stack,
    "Toseef Ferozi",
  ];

  return { title, description, keywords };
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "hnydc-global",
    title: "HNYDC Global",
    category: "Corporate Website",
    description:
      "International holding company site for global trade, real estate, and investment partnerships across the US and Ghana.",
    stack: "Next.js / Tailwind",
    year: "2026",
    website: "hnydc-global.vercel.app",
    liveUrl: "https://hnydc-global.vercel.app/",
    image: projectImages.hnydcGlobal,
    client: "HNYDC Global Holdings Inc.",
    duration: "5 Weeks",
    services: "Corporate UX, UI Design, Full-Stack Front-End",
    featured: true,
    seoTitle: "HNYDC Global Case Study | Corporate Website for Trade & Investment",
    seoDescription:
      "Case study: designing and developing HNYDC Global’s corporate website for international trade, real estate, logistics, and investment partnerships across the US and Ghana.",
    keywords: [
      "HNYDC Global",
      "corporate website case study",
      "investment company website",
      "real estate web design",
      "Next.js corporate site",
      "international business website",
    ],
    overview:
      "A premium corporate website for HNYDC Global Holdings presenting services, sectors, projects, leadership, and partnership pathways with a clear international brand presence.",
    problem:
      "The company needed a credible digital presence that could communicate diversified operations—trade, real estate, agribusiness, and investments—without feeling cluttered or generic.",
    solution:
      "I built a structured multi-section experience with strong hierarchy, sector storytelling, project showcases, and clear CTAs so investors and partners can quickly understand the business and take the next step.",
    results: [
      "Clear sector storytelling across trade, real estate, agribusiness, and investments",
      "Conversion-focused partnership and consultation CTAs throughout the journey",
      "SEO-ready structure with descriptive headings for services, projects, and leadership",
      "Responsive corporate layout optimized for investor and partner browsing",
    ],
    gallery: [projectImages.hnydcGlobal],
  },
  {
    slug: "the-devspark",
    title: "The DevSpark",
    category: "AI SaaS Platform",
    description:
      "AI enrollment automation platform that turns student inquiries into conversions with chat, workflows, and analytics.",
    stack: "Next.js / AI Automation",
    year: "2026",
    website: "thedevspark.com",
    liveUrl: "https://thedevspark.com",
    image: projectImages.theDevspark,
    client: "The DevSpark",
    duration: "6 Weeks",
    services: "Product UI, SaaS Architecture, Front-End Development",
    featured: true,
    seoTitle: "The DevSpark Case Study | AI Enrollment Automation Platform",
    seoDescription:
      "Case study: building The DevSpark’s AI enrollment automation platform with chat assistants, lead workflows, and conversion analytics.",
    keywords: [
      "The DevSpark",
      "AI enrollment automation",
      "SaaS case study",
      "education CRM",
      "Next.js AI platform",
    ],
    overview:
      "A product-led SaaS experience for tutoring and test-prep centers, focused on automating conversations, managing leads, and increasing enrollment conversions.",
    problem:
      "Education businesses needed a clearer way to capture inquiries, automate follow-ups, and prove conversion impact without complex tools.",
    solution:
      "I designed a dashboard-first product story with AI chat, workflow automation, reporting, and mobile assistant flows tailored for enrollment teams.",
    results: [
      "Clear AI automation narrative for tutoring and test-prep buyers",
      "Dashboard and mobile assistant visuals that communicate product value quickly",
      "Feature modules covering chat, leads, billing, and analytics",
      "Conversion-focused messaging for SaaS evaluation and demos",
    ],
    gallery: [projectImages.theDevspark],
  },
  {
    slug: "backpack-wander",
    title: "Backpack Wander",
    category: "Industrial Engineering",
    description:
      "Industrial field platform visuals connecting QA/QC inspections, documentation, and project dashboards for heavy industry teams.",
    stack: "Next.js / Product UI",
    year: "2026",
    website: "backpackwander.com",
    liveUrl: "https://www.backpackwander.com",
    image: projectImages.backpackWander,
    client: "Backpack Wander",
    duration: "5 Weeks",
    services: "Product Marketing, UI Design, Front-End Development",
    featured: true,
    seoTitle: "Backpack Wander Case Study | Industrial QA/QC Digital Platform",
    seoDescription:
      "Case study: crafting Backpack Wander’s industrial digital experience for inspections, documentation, and project compliance workflows.",
    keywords: [
      "Backpack Wander",
      "industrial QA QC",
      "engineering platform case study",
      "inspection software UI",
    ],
    overview:
      "A visually strong industrial brand and product presentation that communicates field inspection workflows, documentation control, and compliance monitoring.",
    problem:
      "Complex industrial QA processes needed a premium digital presentation that felt credible to field teams and project stakeholders.",
    solution:
      "I created a cinematic product visual system with dashboard overlays, inspection storytelling, and clear industrial branding.",
    results: [
      "Strong industrial brand presence for field and office audiences",
      "Dashboard storytelling that explains inspections and compliance clearly",
      "Premium visual direction aligned with heavy-industry trust signals",
    ],
    gallery: [projectImages.backpackWander],
  },
  {
    slug: "learn-ai",
    title: "LearnAI",
    category: "EdTech Platform",
    description:
      "AI-powered learning platform with personalized tutoring, quizzes, progress tracking, and a modern student dashboard.",
    stack: "Next.js / Supabase",
    year: "2026",
    website: "LearnAI Platform",
    image: projectImages.learnAi,
    client: "LearnAI",
    duration: "4 Weeks",
    services: "Product Design, Dashboard UI, Front-End Development",
    featured: true,
    seoTitle: "LearnAI Case Study | AI-Powered Learning Platform",
    seoDescription:
      "Case study: designing LearnAI, an AI tutoring and progress-tracking platform with personalized learning workflows.",
    keywords: [
      "LearnAI",
      "AI learning platform",
      "edtech case study",
      "AI tutor UI",
      "Next.js dashboard",
    ],
    overview:
      "A modern edtech product interface focused on personalized learning, AI tutoring, quizzes, and measurable student progress.",
    problem:
      "Learners needed a clearer, more engaging way to continue courses, get AI help, and track progress across devices.",
    solution:
      "I designed a dual-device product story with a rich dashboard and mobile AI tutor experience supported by a clean modern visual system.",
    results: [
      "Clear product value across desktop dashboard and mobile tutor flows",
      "Feature communication for tutoring, quizzes, tracking, and security",
      "Modern tech-stack storytelling for production-ready positioning",
    ],
    gallery: [projectImages.learnAi],
  },
  {
    slug: "rocrita",
    title: "Rocrita",
    category: "E-commerce",
    description:
      "Premium beauty ecommerce experience for wigs and hair products with strong brand storytelling and conversion-focused shopping UI.",
    stack: "Next.js / Commerce UI",
    year: "2026",
    website: "Rocrita Beauty",
    image: projectImages.rocrita,
    client: "Rocrita",
    duration: "4 Weeks",
    services: "Ecommerce UX, Brand UI, Front-End Development",
    featured: true,
    seoTitle: "Rocrita Case Study | Beauty Ecommerce Website Design",
    seoDescription:
      "Case study: building Rocrita’s premium beauty ecommerce interface for wigs, bundles, and high-converting product discovery.",
    keywords: [
      "Rocrita",
      "beauty ecommerce case study",
      "wig store website",
      "ecommerce UI design",
    ],
    overview:
      "A polished ecommerce homepage designed to elevate a beauty brand with lifestyle imagery, clear navigation, and shopping-focused CTAs.",
    problem:
      "The brand needed a more premium online presence that could showcase product categories and drive shoppers toward purchase.",
    solution:
      "I crafted a brand-led storefront layout with refined typography, category navigation, and a strong hero conversion path.",
    results: [
      "Premium first impression aligned with beauty brand positioning",
      "Clear category navigation for faster product discovery",
      "Hero and CTA structure designed for ecommerce conversion",
    ],
    gallery: [projectImages.rocrita],
  },
  {
    slug: "bw-digit",
    title: "BW Digit",
    category: "Industrial SaaS",
    description:
      "Digital QA/QC platform for heavy industry—automated MDR compilation, weld traceability, and compliance verification.",
    stack: "Next.js / Product UI",
    year: "2026",
    website: "bwdigit-5klx.vercel.app",
    liveUrl: "https://bwdigit-5klx.vercel.app/",
    image: projectImages.backpackWander,
    client: "BW Digit / Backpack Wander GmbH",
    duration: "6 Weeks",
    services: "Product Marketing Site, UI Architecture, Front-End Development",
    featured: false,
    seoTitle: "BW Digit Case Study | Industrial QA/QC SaaS Product Website",
    seoDescription:
      "Case study: building BW Digit’s product website for automated MDR compilation, digital weld tracking, and compliance intelligence for heavy industry.",
    keywords: [
      "BW Digit",
      "industrial SaaS case study",
      "QA QC software website",
      "MDR automation",
      "weld traceability",
      "Next.js product marketing",
    ],
    overview:
      "A product-led website for BW Digit that explains industrial data automation—MDR compilation, weld tracking, and compliance intelligence—with clear outcomes for EPCs and operators.",
    problem:
      "Complex QA/QC tooling needed a clear narrative for technical buyers, field inspectors, and decision makers without burying the value in jargon.",
    solution:
      "I designed a focused product story with modular feature sections, measurable outcomes, deployment case studies, and a strong demo CTA flow tailored to industrial audiences.",
    results: [
      "Product narrative tailored to EPCs, operators, and field QA/QC teams",
      "Feature modules for MDR automation, weld traceability, and compliance checks",
      "Outcome-led metrics section that improves buyer confidence and SEO clarity",
      "Demo-ready contact flow for technical evaluation requests",
    ],
    gallery: [projectImages.backpackWander],
  },
  {
    slug: "creative-agency-showcase",
    title: "Creative Agency Showcase",
    category: "Agency Website",
    description: "High-end landing structure focused on storytelling, premium visuals, and conversion-first sections.",
    stack: "Next.js / Tailwind",
    year: "2026",
    website: "webflow.com",
    image: "https://image.thum.io/get/width/1600/crop/980/noanimate/https://webflow.com",
    client: "Creative Studio",
    duration: "4 Weeks",
    services: "UX Strategy, UI Design, Front-End Development",
    overview:
      "A cinematic agency website concept designed to communicate craftsmanship, credibility, and premium services through bold typography, spacious layouts, and polished visual storytelling.",
    problem:
      "The client needed a landing experience that could instantly communicate value, reduce bounce, and create a more memorable first impression than a standard brochure-style website.",
    solution:
      "I created a structured case-study style layout with clear section hierarchy, strong CTA placement, elegant motion, and a refined dark visual system to help the brand feel premium and trustworthy.",
    gallery: [
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://webflow.com",
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.figma.com",
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.adobe.com",
    ],
  },
  {
    slug: "saas-product-experience",
    title: "SaaS Product Experience",
    category: "SaaS Platform",
    description: "Clean product marketing page with feature-led layout and polished enterprise design language.",
    stack: "React / UI Architecture",
    year: "2026",
    website: "notion.so",
    image: "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.notion.so",
    client: "Product Team",
    duration: "3 Weeks",
    services: "UI Design, Design System, Responsive Front-End",
    overview:
      "A premium SaaS landing page tailored for clarity, confidence, and easy feature scanning, with strong spacing and a modern dark theme.",
    problem:
      "The product needed a cleaner way to explain key features while keeping users engaged across desktop and mobile devices.",
    solution:
      "I designed a focused marketing experience with clear messaging, strong visual anchors, and structured cards that guide users through the product story.",
    gallery: [
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.notion.so",
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.linear.app",
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.framer.com",
    ],
  },
  {
    slug: "modern-storefront",
    title: "Modern Storefront",
    category: "E-commerce",
    description: "Commerce-focused UI with trusted product discovery and conversion-friendly shopping flow.",
    stack: "Next.js / Commerce",
    year: "2026",
    website: "shopify.com",
    image: "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.shopify.com",
    client: "Retail Brand",
    duration: "5 Weeks",
    services: "Product UI, E-commerce UX, Front-End Development",
    overview:
      "A high-conversion storefront concept that balances editorial storytelling with practical shopping interactions and trusted product presentation.",
    problem:
      "The retailer needed a more premium feel to stand out in a crowded market while improving product exploration and checkout confidence.",
    solution:
      "I crafted a rich dark interface with bold product cards, spacious grids, and subtle motion to help the shopping experience feel elevated and effortless.",
    gallery: [
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.shopify.com",
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.squarespace.com",
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.stripe.com",
    ],
  },
  {
    slug: "fintech-product-site",
    title: "Fintech Product Site",
    category: "Fintech",
    description: "Data-rich interface style with strong hierarchy and consistent product credibility.",
    stack: "TypeScript / Design System",
    year: "2026",
    website: "stripe.com",
    image: "https://image.thum.io/get/width/1600/crop/980/noanimate/https://stripe.com",
    client: "Fintech Startup",
    duration: "4 Weeks",
    services: "Product Design, UI System, Landing Page Development",
    overview:
      "A credibility-focused fintech showcase built to communicate security, scale, and modern product thinking through a sleek interface.",
    problem:
      "The brand needed to present a complex financial offering in a way that felt simple, professional, and visually trustworthy.",
    solution:
      "I used precise typography, contrasting panels, and strong information grouping to make the offer feel premium and easy to understand.",
    gallery: [
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://stripe.com",
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.paypal.com",
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.coinbase.com",
    ],
  },
  {
    slug: "design-collaboration-hub",
    title: "Design Collaboration Hub",
    category: "Design Tool",
    description: "Interface concept inspired by fast collaboration and minimal, modern productivity patterns.",
    stack: "UI/UX / Frontend",
    year: "2025",
    website: "figma.com",
    image: "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.figma.com",
    client: "Design Team",
    duration: "3 Weeks",
    services: "Product UX, Interface Design, Responsive Prototyping",
    overview:
      "A collaborative workspace concept inspired by modern design tools, focused on speed, flexibility, and clear visual organization.",
    problem:
      "The concept needed to feel fast and approachable while still supporting dense collaborative workflows.",
    solution:
      "I built a modular layout system with soft panels, consistent spacing, and clear action areas to support productive daily use.",
    gallery: [
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.figma.com",
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.notion.so",
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.framer.com",
    ],
  },
  {
    slug: "education-product-landing",
    title: "Education Product Landing",
    category: "EdTech",
    description: "Friendly onboarding experience with clear value communication for learners.",
    stack: "React / Motion UI",
    year: "2025",
    website: "duolingo.com",
    image: "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.duolingo.com",
    client: "Learning Platform",
    duration: "2 Weeks",
    services: "Landing Page UX, Motion Design, Front-End Build",
    overview:
      "An educational product landing page designed to make the value proposition easy to understand and enjoyable to explore.",
    problem:
      "The site needed to simplify onboarding and make users feel comfortable before starting their learning journey.",
    solution:
      "I introduced friendly imagery, playful emphasis, and a simple hierarchy to help the page feel welcoming and conversion-focused.",
    gallery: [
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.duolingo.com",
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.khanacademy.org",
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.coursera.org",
    ],
  },
  {
    slug: "travel-booking-interface",
    title: "Travel Booking Interface",
    category: "Travel",
    description: "Visual-first booking flow designed for trust, speed, and easier decision making.",
    stack: "Frontend / API UX",
    year: "2025",
    website: "airbnb.com",
    image: "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.airbnb.com",
    client: "Travel Brand",
    duration: "4 Weeks",
    services: "Search UX, Booking Flow Design, Front-End Development",
    overview:
      "A travel discovery interface that emphasizes imagery, clarity, and a seamless booking journey with modern card-based layouts.",
    problem:
      "The existing experience needed a better way to help users quickly compare options and feel confident before booking.",
    solution:
      "I designed a visual-first interface with stronger information hierarchy, smoother flow, and premium destination presentation.",
    gallery: [
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.airbnb.com",
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.booking.com",
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.expedia.com",
    ],
  },
  {
    slug: "creative-cloud-campaign",
    title: "Creative Cloud Campaign",
    category: "Brand Campaign",
    description: "Bold hero-led campaign page with strong art direction and high-quality visual composition.",
    stack: "Branding / Web Design",
    year: "2025",
    website: "adobe.com",
    image: "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.adobe.com",
    client: "Creative Brand",
    duration: "3 Weeks",
    services: "Campaign Design, Art Direction, Front-End Layout",
    overview:
      "A visually striking campaign page created to feel like a premium launch moment with strong contrast and immersive imagery.",
    problem:
      "The campaign needed a powerful brand presence that could hold attention and present the product with visual authority.",
    solution:
      "I used immersive imagery, bold section breaks, and a refined dark palette to create an elevated campaign experience.",
    gallery: [
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.adobe.com",
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.behance.net",
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.dribbble.com",
    ],
  },
];

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}

export function getFeaturedCaseStudies(limit = 4) {
  const featured = portfolioProjects.filter((project) => project.featured);
  const rest = portfolioProjects.filter((project) => !project.featured);
  return [...featured, ...rest].slice(0, limit);
}
