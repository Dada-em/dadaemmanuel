// app/data/projects.ts

export type Project = {
    id: string;
    title: string;
    role: string;
    period: string;
    status: "Live" | "In Development" | "Completed";
    tagline: string;
    desc: string;
    tags: string[];
    hasImage: boolean;
    overview: string;
    challenge: string;
    approach: string[];
    outcomes: string[];
    links?: { label: string; href: string }[];
    gallery?: {
      src: string;
      alt: string;
    }[];
  };
  
  export const projects: Project[] = [
    {
      id: "tls",
      title: "The Legal Space (TLS)",
      role: "Co-Founder & Lead Frontend Developer",
      period: "Jul 2026 – Present",
      status: "In Development",
      tagline: "A lawyer-marketplace built on trust, verified from the ground up",
      desc: "A lawyer-marketplace and legal-tech platform for the Nigerian legal market, built on Next.js App Router. Architected a six-layer lawyer verification system, real-time messaging with Socket.io and TanStack Query, and Paystack-integrated payment flows.",
      tags: ["Next.js", "Socket.io", "TanStack Query", "Paystack", "Playwright"],
      hasImage: true,
      overview:
        "TLS connects clients with verified lawyers across Nigeria. As one of four co-founders and the sole frontend lead, the architecture had to support anonymous-first user trust (clients messaging lawyers before revealing identity) while still guaranteeing every lawyer on the platform is real, licensed, and accountable.",
      challenge:
        "Legal marketplaces live or die on trust. Anyone can claim to be a lawyer online, so the core technical challenge wasn't UI polish, it was building a verification pipeline rigorous enough that clients could trust a stranger's credentials, without making onboarding so heavy that lawyers gave up halfway through.",
      approach: [
        "Designed a six-layer verification system: admin review, SCN uniqueness checks, certificate upload, NBA database cross-check, NIN/BVN identity verification, and rate limiting each layer closing a different fraud vector.",
        "Built real-time messaging with Socket.io and TanStack Query, supporting anonymous identity handling so clients could start conversations before either party fully commits, with encrypted-UI messaging patterns protecting sensitive exchanges.",
        "Architected the platform on Next.js App Router with deliberate server/client separation, prioritizing SEO for lawyer discovery pages while keeping interactive flows (messaging, booking) fully client-rendered.",
        "Wrote a documented vulnerability and mitigation report covering the verification system, and led a strategic technology partnership negotiation with a Chambers-ranked Nigerian law firm.",
      ],
      outcomes: [
        "Six-layer verification system now in late-stage development ahead of public launch",
        "Real-time messaging and AI credits system both shipped and functional pre-launch",
        "Playwright E2E coverage across lawyer search, filtering, and core navigation flows",
      ],
      gallery: [
        { src: "/projects/tls-1.png", alt: "TLS directory view" },
        { src: "/projects/tls-2.png", alt: "TLS messaging view" },
        { src: "/projects/tls-3.png", alt: "TLS verification view" },
      ],
    },
    {
      id: "exodus",
      title: "Exodus Music Group",
      role: "Lead Frontend Developer - ChakraTek (Contract)",
      period: "Jul 2025 - Present",
      status: "Live",
      tagline: "An artist platform that replaced spreadsheets with real infrastructure",
      desc: "End-to-end artist platform - directory, releases, playlists, artist profiles, and onboarding plus an admin dashboard that replaced manual spreadsheet tracking for newsletter subscribers and artist applications.",
      tags: ["React", "Next.js", "Admin Dashboard", "Component Library"],
      hasImage: true,
      overview:
        "Exodus Music Group needed a public-facing platform for artist discovery and an internal system to stop managing applications and subscribers by hand in spreadsheets. Both were owned end-to-end, from the artist directory a fan sees to the dashboard the label team uses daily.",
      challenge:
        "Two very different user bases, public visitors browsing artists and releases, and an internal team managing operations needed to share a design language without either side feeling like an afterthought, while keeping delivery fast across two live products at once with ChakraTek.",
      approach: [
        "Built a shared, reusable component library used across this and other ChakraTek products, so new features shipped faster without rebuilding UI primitives each time.",
        "Structured the artist directory, releases, and playlist views around consistent, reusable data-fetching patterns to keep the public site fast and predictable.",
        "Designed the admin dashboard around the actual workflow of the label team, replacing manual spreadsheet tracking for every artist application and newsletter subscriber with a real interface.",
        "Translated Figma designs into responsive, high-performance interfaces in close collaboration with designers and backend engineers.",
      ],
      outcomes: [
        "Live platform covering artist directory, releases, playlists, and onboarding",
        "Admin dashboard fully replaced manual spreadsheet-based tracking",
        "Shared component library cut repetitive UI work across ChakraTek's product line",
      ],
      gallery: [
        { src: "/projects/exodus-1.png", alt: "Exodus homepage" },
        { src: "/projects/exodus-2.png", alt: "Artist directory view" },
        { src: "/projects/exodus-3.png", alt: "Mobile artist profile" },
      ],
    },
    {
      id: "turnup-lagos",
      title: "TurnUp Lagos",
      role: "Lead Frontend Developer - ChakraTek (Contract)",
      period: "Jul 2025 - Present",
      status: "Live",
      tagline: "Event creation, promotion, and ticketing in one responsive platform",
      desc: "A responsive event platform covering creation, promotion, and ticketing workflows, with a companion admin dashboard for live event and content management for events in Lagos and not just events in Lagos, but events in other cities as well.",
      tags: ["React", "Next.js", "Responsive Design", "Event Ticketing"],
      hasImage: true,
      overview:
        "TurnUp Lagos gives event organizers a full workflow, creating an event, promoting it, and selling tickets while giving the ChakraTek team an admin layer to manage live events and content without engineering involvement for every change.",
      challenge:
        "Event platforms are used unevenly: organizers need a focused creation flow, attendees need a fast, low-friction browsing and ticketing experience, and the admin team needs oversight across everything live at once, three different usage patterns on one codebase.",
      approach: [
        "Built the event creation, promotion, and ticketing workflows as distinct, focused flows rather than one generic form, reducing friction at each step.",
        "Reused component patterns from the shared ChakraTek library to keep TurnUp Lagos visually and structurally consistent with the studio's other live products.",
        "Refactored and optimized frontend code across the platform, improving page load speed and cutting production bugs and crashes.",
        "Built the companion admin dashboard for live event and content management, giving the team direct control without needing a deploy for routine changes.",
      ],
      outcomes: [
        "Live, responsive platform in active use for event creation and ticketing",
        "Companion admin dashboard shipped for real-time content management",
        "Measurable improvement in page load speed following refactor work",
      ],
      gallery: [
        { src: "/projects/turnup-lagos-1.png", alt: "Event creation view" },
        { src: "/projects/turnup-lagos-2.png", alt: "Event promotion view" },
        { src: "/projects/turnup-lagos-3.png", alt: "Event ticketing view" },
      ],
    },
    {
      id: "phoenixpath",
      title: "Phoenixpath Mental Health",
      role: "Personal Project",
      period: "2025",
      status: "Live",
      tagline: "A booking platform built to fail gracefully, not just work perfectly",
      desc: "A booking platform with real-time slot availability, multi-step form validation, and serverless email confirmation with graceful failure handling, fully covered by Playwright tests, including network mocking and localStorage assertions.",
      tags: ["React", "Tailwind CSS", "Playwright", "Form Validation"],
      hasImage: true,
      overview:
        "Phoenixpath is a booking platform for mental health services, where a failed booking or a confusing form isn't just a bad UX moment, it can be someone's one attempt at reaching out. That context shaped every decision here, especially around failure states.",
      challenge:
        "Most booking flows are designed for the happy path. This one needed to handle real-time slot conflicts, multi-step validation without losing user progress, and email confirmation failures gracefully without making an already vulnerable user feel like the platform failed them.",
      approach: [
        "Built real-time slot availability so users never book a conflicting time, with immediate feedback rather than a failed submission after the fact.",
        "Designed multi-step form validation that preserves progress and gives clear, calm error messaging at each step.",
        "Implemented serverless email confirmation with explicit graceful-failure handling, so a backend hiccup never silently loses a booking.",
        "Wrote full Playwright test coverage including network mocking and localStorage assertions, treating this as production-grade software even as a personal project.",
      ],
      outcomes: [
        "Fully functional booking platform live and in use",
        "Complete Playwright E2E coverage including edge-case and failure-state testing",
        "Zero silent-failure paths in the booking or confirmation flow",
      ],
      gallery: [
        { src: "/projects/phoenixpath-1.png", alt: "Booking platform view" },
        { src: "/projects/phoenixpath-2.png", alt: "Booking form view" },
        { src: "/projects/phoenixpath-3.png", alt: "Booking confirmation view" },
      ],
    },
  ];
  
  export function getProjectById(id: string) {
    return projects.find((p) => p.id === id);
  }