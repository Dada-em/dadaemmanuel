// app/components/Footer.tsx
"use client";

import Link from "next/link";
import { motion } from "motion/react";

const navLinks = ["Home", "About", "Capabilities", "Projects", "Contact"];
const capabilities = [
  "Design Systems & Components",
  "Front-End Architecture",
  "Real-Time Features",
  "Testing & Quality",
  "Accessibility & Performance",
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0F172A] border-t border-white/[.06] pt-16 sm:pt-20 pb-8">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-14">

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#131C2B] border border-[#5B9BD5]/[.16] rounded-2xl px-6 py-7 sm:px-10 sm:py-9 lg:px-12 lg:py-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center mb-14 sm:mb-16"
        >
          <div>
            <h3 className="font-sans text-[24px] sm:text-[26px] font-semibold text-[#F7F2EC] mb-1.5">
              Ready to build something together?
            </h3>
            <p className="text-[13px] font-light text-[#F7F2EC]/50 leading-relaxed">
              Open to full-time roles and contract work — let's talk.
            </p>
          </div>
          <Link
            href="/#contact"
            className="flex items-center gap-2 bg-[#5B9BD5] text-white rounded-full px-7 py-3.5 text-[12px] font-semibold tracking-wide whitespace-nowrap hover:bg-[#3A78B5] transition-colors"
          >
            Get in Touch
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>
        </motion.div>

        {/* Columns */}
        <div className="grid grid-cols-1 gap-10 mb-14 sm:mb-16 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-12">

          {/* Brand */}
          <div>
            <p className="font-sans text-[24px] font-semibold text-[#F7F2EC] mb-3">
              Dada <span className="text-[#5B9BD5]">Emmanuel</span>
            </p>
            <p className="text-[13px] font-light text-[#F7F2EC]/45 leading-[1.75] max-w-[260px] mb-7">
              Lead Frontend Developer specialising in React, Next.js, and design systems that scale. Based in Ibadan, Nigeria.
            </p>
            <div className="flex gap-2.5">
              {[
                { label: "GitHub", href: "https://github.com/Dada-em" },
                { label: "Portfolio", href: "https://daa-ddf.netlify.app" },
                { label: "Email", href: "mailto:dadaoluwawamiri@gmail.com" },
              ].map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/45 hover:border-[#5B9BD5] hover:text-[#5B9BD5] transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"/>
                    <path d="M22 6l-10 7L2 6"/>
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[11px] font-semibold tracking-[.2em] uppercase text-[#5B9BD5] mb-5">Navigation</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l}>
                  <Link
                    href={
                      l === "Home" ? "/" :
                      l === "Projects" ? "/projects" :
                      `/#${l.toLowerCase() === "capabilities" ? "services" : l.toLowerCase()}`
                    }
                    className="text-[13px] font-light text-[#F7F2EC]/50 hover:text-[#F7F2EC] transition-colors"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <p className="text-[11px] font-semibold tracking-[.2em] uppercase text-[#5B9BD5] mb-5">Capabilities</p>
            <ul className="flex flex-col gap-3">
              {capabilities.map((s) => (
                <li key={s}>
                  <Link href="/#services" className="text-[13px] font-light text-[#F7F2EC]/50 hover:text-[#F7F2EC] transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold tracking-[.2em] uppercase text-[#5B9BD5] mb-5">Contact</p>
            {[
              { label: "Email", val: "dadaoluwawamiri@gmail.com" },
              { label: "Phone", val: "+234 901 434 5902" },
              { label: "Location", val: "Ibadan, Nigeria" },
            ].map((c) => (
              <div key={c.label} className="mb-4">
                <p className="text-[10px] tracking-[.14em] uppercase text-white/25 mb-0.5">{c.label}</p>
                <p className="text-[13px] font-light text-[#F7F2EC]/60">{c.val}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[.05] pt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-white/25">
            © 2026 <span className="text-[#5B9BD5]">Dada Emmanuel Oluwawamiri</span>. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}