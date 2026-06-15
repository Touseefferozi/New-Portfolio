export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  description: string;
  stack: string;
  year: string;
  website: string;
  image: string;
  client: string;
  duration: string;
  services: string;
  overview: string;
  problem: string;
  solution: string;
  gallery: string[];
};

export const portfolioProjects: PortfolioProject[] = [
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
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.canva.com",
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.notion.so",
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
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.canva.com",
      "https://image.thum.io/get/width/1600/crop/980/noanimate/https://www.behance.net",
    ],
  },
];

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}
