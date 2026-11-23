// app/components/Footer.tsx
"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { SiteContent } from "@/sanity/content";

const navLinks = ["Home", "About", "Capabilities", "Projects", "Contact"];

export default function Footer({ content }: { content: SiteContent }) {
  const { capabilities, contact, footer, profile } = content;
  const socialLinks = [
    ...contact.socialLinks,
    { label: "Email", href: `mailto:${contact.email}` },
  ];

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
              {footer.ctaTitle}
            </h3>
            <p className="text-[13px] font-light text-[#F7F2EC]/50 leading-relaxed">
              {footer.ctaDescription}
            </p>
          </div>
          <Link
            href="/#contact"
            className="flex items-center gap-2 bg-[#5B9BD5] text-white rounded-full px-7 py-3.5 text-[12px] font-semibold tracking-wide whitespace-nowrap hover:bg-[#3A78B5] transition-colors"
          >
            {footer.ctaButtonLabel}
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
              {profile.name}
            </p>
            <p className="text-[13px] font-light text-[#F7F2EC]/45 leading-[1.75] max-w-[260px] mb-7">
              {footer.summary} Based in {contact.location}.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/45 hover:border-[#5B9BD5] hover:text-[#5B9BD5] transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 4h6v6M20 4 10 14" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[11px] font-semibold tracking-[.2em] uppercase text-[#5B9BD5] mb-5">{footer.navigationHeading}</p>
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
            <p className="text-[11px] font-semibold tracking-[.2em] uppercase text-[#5B9BD5] mb-5">{footer.capabilitiesHeading}</p>
            <ul className="flex flex-col gap-3">
              {capabilities.map((capability) => (
                <li key={capability.id}>
                  <Link href="/#services" className="text-[13px] font-light text-[#F7F2EC]/50 hover:text-[#F7F2EC] transition-colors">
                    {capability.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold tracking-[.2em] uppercase text-[#5B9BD5] mb-5">{footer.contactHeading}</p>
            {[
              { label: "Email", val: contact.email },
              { label: "Phone", val: contact.phone },
              { label: "Location", val: contact.location },
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
            © {footer.copyrightYear} <span className="text-[#5B9BD5]">{footer.copyrightName}</span>. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}