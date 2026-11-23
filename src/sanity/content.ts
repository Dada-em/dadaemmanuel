export type Capability = {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
};

export type SiteContent = {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    headlinePrefix: string;
    headlineAccent: string;
    headlineSuffix: string;
    description: string;
    cvUrl: string;
    workLinkLabel: string;
    cvLinkLabel: string;
    stats: { value: string; label: string }[];
  };
  profile: {
    name: string;
    aboutEyebrow: string;
    aboutHeadlinePrefix: string;
    aboutHeadlineAccent: string;
    aboutHeadlineSuffix: string;
    bio: string;
    photoUrl: string;
    photoAlt: string;
    availability: string;
    cgpa: string;
    cgpaScale: string;
    degree: string;
    experienceYears: string;
    experienceLabel: string;
    credentials: string[];
    credentialsHeading: string;
    toolGroups: { category: string; tools: string[] }[];
    toolsHeading: string;
    workPhotoUrl: string;
    workPhotoAlt: string;
    workCaption: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButtonLabel: string;
  };
  projectsPage: {
    eyebrow: string;
    headlinePrefix: string;
    headlineAccent: string;
  };
  capabilitiesSection: {
    eyebrow: string;
    headlinePrefix: string;
    headlineAccent: string;
    description: string;
    deliverablesLabel: string;
    ctaLabel: string;
    responseTime: string;
  };
  capabilities: Capability[];
  contact: {
    eyebrow: string;
    headingPrefix: string;
    headingAccent: string;
    description: string;
    email: string;
    phone: string;
    location: string;
    socialLinks: { label: string; href: string }[];
    socialHeading: string;
    availability: string;
    responseTime: string;
  };
  footer: {
    ctaTitle: string;
    ctaDescription: string;
    ctaButtonLabel: string;
    summary: string;
    navigationHeading: string;
    capabilitiesHeading: string;
    contactHeading: string;
    copyrightYear: string;
    copyrightName: string;
  };
};

export const defaultSiteContent: SiteContent = {
  seo: {
    title: "Emmanuel Dada | Frontend Developer & Software Engineer",
    description:
      "Portfolio of Emmanuel Dada, a frontend developer and software engineer specializing in React, Next.js, modern web applications, and cybersecurity.",
  },
  hero: {
    eyebrow: "Front-End Engineer - Lagos, Nigeria",
    headlinePrefix: "I build interfaces that feel",
    headlineAccent: "as good",
    headlineSuffix: "as they work",
    description:
      "Lead Frontend Developer shipping production React & Next.js applications from shared design systems to real-time features, with the craft, accessibility, and test coverage to back it up.",
    cvUrl:
      "https://drive.google.com/file/d/1LV_FzWnbKsOEGh0osMSiqEqlPRu-ealZ/view?usp=sharing",
    workLinkLabel: "View My Work",
    cvLinkLabel: "Download CV",
    stats: [
      { value: "4+", label: "Live Products Shipped" },
      { value: "6-Layer", label: "Verification System Architected" },
    ],
  },
  profile: {
    name: "Dada Emmanuel Oluwawamiri",
    aboutEyebrow: "About",
    aboutHeadlinePrefix: "Engineering with",
    aboutHeadlineAccent: "intention",
    aboutHeadlineSuffix: "not just implementation",
    bio:
      "Dada Emmanuel Oluwawamiri is a Lead Frontend Developer with a first-class foundation in Computer Science, currently co-founding a legal-tech platform while shipping production interfaces on contract with a multi-product studio. The work spans component systems, real-time features, and the accessibility and testing discipline that keeps them reliable.",
    photoUrl: "/profile-photo.png",
    photoAlt: "Dada Emmanuel Oluwawamiri",
    availability: "Available for new roles",
    cgpa: "4.05",
    cgpaScale: "5.0",
    degree: "Computer Science",
    experienceYears: "2+",
    experienceLabel: "Years across frontend leadership & delivery",
    credentials: [
      "B.Sc Computer Science, CGPA 4.05/5.0: Redeemer's University, 2025",
      "Captain, CS Basketball Team: Redeemer's University (2023-2025)",
      "Volunteer mentor, university coding workshops & Nigeria's 3MTT program",
    ],
    credentialsHeading: "Credentials & Highlights",
    toolGroups: [
      {
        category: "Languages",
        tools: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SQL"],
      },
      {
        category: "Frontend",
        tools: ["React.js", "Next.js", "React Native", "Tailwind CSS", "Motion"],
      },
      {
        category: "Backend & Data",
        tools: ["Node.js", "Express.js", "Prisma", "PostgreSQL"],
      },
      {
        category: "Testing & Tools",
        tools: ["Vitest", "Figma", "Git", "GitHub"],
      },
    ],
    toolsHeading: "Stack & Tools",
    workPhotoUrl: "/about-work.jpg",
    workPhotoAlt: "Frontend engineering work",
    workCaption: "Building at ChakraTek & TLS",
    ctaTitle: "Let's build something worth shipping",
    ctaDescription:
      "Open to full-time roles, contract work, and teams that care about craft as much as they care about velocity.",
    ctaButtonLabel: "Get in Touch",
  },
  projectsPage: {
    eyebrow: "Selected Work",
    headlinePrefix: "Products shipped, not just",
    headlineAccent: "designs shown",
  },
  capabilitiesSection: {
    eyebrow: "What I Bring",
    headlinePrefix: "Craft that's",
    headlineAccent: "production-tested",
    description:
      "Five things I actually do, day to day, across live products with real users - not a services menu.",
    deliverablesLabel: "In Practice",
    ctaLabel: "Let's Talk About Your Team",
    responseTime: "Response within 24 hours",
  },
  capabilities: [
    {
      id: "systems",
      title: "Design Systems & Component Libraries",
      shortDesc: "Shared, reusable component libraries that scale across products.",
      fullDesc:
        "Built a shared component library reused across multiple ChakraTek products, cutting repetitive UI work and speeding up feature delivery. Currently architecting a similar system for The Legal Space, keeping UI consistency across a growing platform without sacrificing velocity.",
      deliverables: [
        "Reusable Component APIs",
        "Tailwind Design Tokens",
        "Cross-Product Consistency",
        "Documentation",
      ],
    },
    {
      id: "architecture",
      title: "Front-End Architecture (Next.js / React)",
      shortDesc: "Server/client separation built for performance and SEO.",
      fullDesc:
        "Architecting production platforms on Next.js App Router with deliberate server/client boundaries optimizing for both performance and SEO from the ground up, not bolted on after launch. Comfortable working across the stack with Node.js, Express, and PostgreSQL when the frontend needs backend context.",
      deliverables: [
        "Next.js App Router",
        "Server/Client Boundaries",
        "TypeScript",
        "REST API Integration",
      ],
    },
    {
      id: "realtime",
      title: "Real-Time & Interactive Features",
      shortDesc: "Live messaging, notifications, and stateful UI at scale.",
      fullDesc:
        "Built a real-time messaging system using Socket.io and TanStack Query, including anonymous identity handling and encrypted-UI messaging patterns. This is where front-end and system design intersect, state has to stay correct, fast, and predictable even under live updates.",
      deliverables: [
        "Socket.io Integration",
        "TanStack Query",
        "Optimistic UI",
        "State Synchronization",
      ],
    },
    {
      id: "testing",
      title: "Testing & Quality",
      shortDesc: "End-to-end coverage for the flows that actually matter.",
      fullDesc:
        "Wrote Vitest E2E tests covering critical user flows lawyer search and filtering, core navigation, booking systems with real-time slot availability. Testing isn't an afterthought; it's what lets a small team ship confidently and catch regressions before users do.",
      deliverables: [
        "Vitest E2E Tests",
        "Network Mocking",
        "Critical Flow Coverage",
        "Regression Prevention",
      ],
    },
    {
      id: "a11y",
      title: "Accessibility & Performance",
      shortDesc: "Interfaces that work for everyone, and load fast doing it.",
      fullDesc:
        "Responsive, mobile-first, accessibility-conscious builds (a11y/WCAG) across every project including a dark-themed, accessible EMR interface spanning three distinct user roles. Refactored and optimized frontend code across live products, improving load speed and cutting production bugs.",
      deliverables: [
        "WCAG Practices",
        "Mobile-First Design",
        "Performance Audits",
        "Bug Reduction",
      ],
    },
  ],
  contact: {
    eyebrow: "Get in Touch",
    headingPrefix: "Let's start a",
    headingAccent: "conversation",
    description:
      "Open to full-time roles, contract work, and teams that care about craft as much as velocity.",
    email: "dadaoluwawamiri@gmail.com",
    phone: "+234 901 434 5902",
    location: "Ibadan, Nigeria",
    socialLinks: [{ label: "GitHub", href: "https://github.com/Dada-em" }],
    socialHeading: "Also find me on",
    availability: "Available for new roles",
    responseTime: "I respond within 24 hours.",
  },
  footer: {
    ctaTitle: "Ready to build something together?",
    ctaDescription: "Open to full-time roles and contract work, let's talk.",
    ctaButtonLabel: "Get in Touch",
    summary:
      "Lead Frontend Developer specialising in React, Next.js, and design systems that scale.",
    navigationHeading: "Navigation",
    capabilitiesHeading: "Capabilities",
    contactHeading: "Contact",
    copyrightYear: "2026",
    copyrightName: "Dada Emmanuel Oluwawamiri",
  },
};

export function normalizeSiteContent(
  content: Partial<SiteContent> | null,
): SiteContent {
  if (!content) return defaultSiteContent;

  return {
    ...defaultSiteContent,
    ...content,
    seo: { ...defaultSiteContent.seo, ...content.seo },
    hero: {
      ...defaultSiteContent.hero,
      ...content.hero,
      stats: content.hero?.stats ?? defaultSiteContent.hero.stats,
    },
    profile: {
      ...defaultSiteContent.profile,
      ...content.profile,
      photoUrl:
        content.profile?.photoUrl || defaultSiteContent.profile.photoUrl,
      workPhotoUrl:
        content.profile?.workPhotoUrl ||
        defaultSiteContent.profile.workPhotoUrl,
      credentials:
        content.profile?.credentials ?? defaultSiteContent.profile.credentials,
      toolGroups:
        content.profile?.toolGroups ?? defaultSiteContent.profile.toolGroups,
    },
    projectsPage: {
      ...defaultSiteContent.projectsPage,
      ...content.projectsPage,
    },
    capabilitiesSection: {
      ...defaultSiteContent.capabilitiesSection,
      ...content.capabilitiesSection,
    },
    capabilities: content.capabilities ?? defaultSiteContent.capabilities,
    contact: {
      ...defaultSiteContent.contact,
      ...content.contact,
      socialLinks:
        content.contact?.socialLinks ?? defaultSiteContent.contact.socialLinks,
    },
    footer: { ...defaultSiteContent.footer, ...content.footer },
  };
}

export function siteContentInitialValue() {
  const { profile, ...content } = defaultSiteContent;

  return {
    ...content,
    capabilities: defaultSiteContent.capabilities.map(
      ({ id, ...capability }) => ({
        ...capability,
        id: { _type: "slug", current: id },
      }),
    ),
    profile: {
      name: profile.name,
      aboutEyebrow: profile.aboutEyebrow,
      aboutHeadlinePrefix: profile.aboutHeadlinePrefix,
      aboutHeadlineAccent: profile.aboutHeadlineAccent,
      aboutHeadlineSuffix: profile.aboutHeadlineSuffix,
      bio: profile.bio,
      photoAlt: profile.photoAlt,
      availability: profile.availability,
      cgpa: profile.cgpa,
      cgpaScale: profile.cgpaScale,
      degree: profile.degree,
      experienceYears: profile.experienceYears,
      experienceLabel: profile.experienceLabel,
      credentials: profile.credentials,
      credentialsHeading: profile.credentialsHeading,
      toolGroups: profile.toolGroups,
      toolsHeading: profile.toolsHeading,
      workPhotoAlt: profile.workPhotoAlt,
      workCaption: profile.workCaption,
      ctaTitle: profile.ctaTitle,
      ctaDescription: profile.ctaDescription,
      ctaButtonLabel: profile.ctaButtonLabel,
    },
  };
}
