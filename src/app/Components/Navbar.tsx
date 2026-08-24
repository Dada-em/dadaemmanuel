// app/components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Capabilities", href: "/#services" },
  { label: "Projects", href: "/projects" },
];

const sectionThemes: Record<string, "light" | "dark"> = {
  home: "dark",
  about: "dark",
  services: "dark",
  approach: "dark",
  projects: "dark",
  contact: "dark",
  footer: "light",
};

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = ["home", "about", "services", "approach", "projects", "contact", "footer"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Smooth-scroll helper: on home page scroll directly; otherwise navigate then scroll
  const handleHashClick = (e: React.MouseEvent, href: string) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return; // no hash — let Next.js handle normally

    e.preventDefault();
    const sectionId = href.slice(hashIndex + 1);

    if (isHomePage) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push(href);
    }
  };

  const currentTheme = isHomePage ? sectionThemes[activeSection] ?? "dark" : "dark";
  const isDarkText = currentTheme === "dark";
  const isTransparentHero = isHomePage && activeSection === "home";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-colors duration-300 ${
        isTransparentHero
          ? "bg-transparent border-b border-transparent"
          : "bg-white/70 backdrop-blur-sm border-b border-black/5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-14 py-3">
        <Link
          href="/"
          aria-label="Go to Home"
          className={`font-sans text-lg sm:text-xl font-semibold tracking-tight transition-colors duration-300 ${
            isDarkText ? "text-stone-900" : "text-white"
          }`}
        >
          Dada <span className="text-[#5B9BD5]">Emmanuel</span>
        </Link>

        <nav
          className={`hidden md:flex items-center gap-8 text-sm border rounded-full px-6 py-3 transition-colors duration-300 ${
            isDarkText ? "border-black/10 bg-white/40 backdrop-blur-sm" : "border-white/20"
          }`}
        >
          {navLinks.map((link) => {
            const isProjectsLink = link.href === "/projects";
            const isActive = isProjectsLink
              ? pathname === "/projects"
              : isHomePage && activeSection === link.href.replace("/#", "");

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleHashClick(e, link.href)}
                className={`font-medium transition-colors duration-300 ${
                  isDarkText
                    ? isActive
                      ? "text-stone-900 font-semibold underline underline-offset-4 decoration-[#5B9BD5]"
                      : "text-stone-500 hover:text-stone-900"
                    : isActive
                    ? "text-white font-semibold underline underline-offset-4 decoration-[#82B6E0]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={(e) => handleHashClick(e as unknown as React.MouseEvent, "/#contact")}
            className={`hidden sm:inline-block text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-full transition-colors ${
              isDarkText
                ? "bg-[#5B9BD5] text-white hover:bg-[#3A78B5]"
                : "bg-white text-stone-900 hover:bg-white/90"
            }`}
          >
            Get in Touch
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className={`md:hidden p-2 rounded-md focus:outline-none transition-colors ${
              isDarkText ? "text-stone-900" : "text-white"
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-stone-900 px-6 py-6 border-b border-black/5 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => {
                handleHashClick(e, link.href);
                setMobileMenuOpen(false);
              }}
              className="text-base font-medium py-2 border-b border-black/5 text-stone-600 hover:text-stone-900"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={(e) => {
              handleHashClick(e as unknown as React.MouseEvent, "/#contact");
              setMobileMenuOpen(false);
            }}
            className="mt-2 text-center bg-[#5B9BD5] text-white text-sm font-semibold py-3 rounded-full hover:bg-[#3A78B5] transition-colors"
          >
            Get in Touch
          </button>
        </div>
      )}
    </header>
  );
}