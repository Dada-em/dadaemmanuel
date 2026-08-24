// app/components/ContactSection.tsx
"use client";

import { useState } from "react";
import { motion } from "motion/react";

const contactMethods = [
  {
    id: "email",
    label: "Email",
    value: "dadaoluwawamiri@gmail.com",
    href: "mailto:dadaoluwawamiri@gmail.com",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    id: "phone",
    label: "Phone",
    value: "+234 901 434 5902",
    href: "tel:+2349014345902",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Dada-em" },
  { label: "Portfolio", href: "https://daa-ddf.netlify.app" },
];

export default function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (e: React.MouseEvent, text: string, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // no-op fallback
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#EFF6FF] py-20 sm:py-24 border-t border-stone-900/5 transition-colors duration-300"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-14">
        <motion.header
          className="mx-auto mb-14 sm:mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[13px] font-semibold tracking-[0.18em] uppercase text-[#5B9BD5] mb-4">
            Get in Touch
          </div>
          <h2 className="font-sans text-[clamp(32px,5vw,48px)] font-semibold text-stone-900 leading-[1.12] mb-5 tracking-tight">
            Let's start a{" "}
            <span className="text-[#5B9BD5]">conversation</span>
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] font-light text-stone-600 leading-[1.85]">
            Open to full-time roles, contract work, and teams that care about
            craft as much as velocity. I respond within 24 hours.
          </p>
        </motion.header>

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {contactMethods.map((method) => (
            <motion.a
              key={method.id}
              href={method.href}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -3 }}
              className="group bg-white border border-stone-200 rounded-2xl p-6 sm:p-7 shadow-sm transition-colors duration-300 hover:border-[#5B9BD5]/40 block"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#5B9BD5]/30 text-[#5B9BD5] mb-4 transition duration-300 group-hover:bg-[#5B9BD5] group-hover:text-white">
                {method.icon}
              </div>

              <p className="text-[10px] font-semibold tracking-[.18em] uppercase text-[#5B9BD5] mb-2">
                {method.label}
              </p>

              <div className="flex items-center justify-between gap-3">
                <span className="text-[15px] font-medium text-stone-900 group-hover:text-[#5B9BD5] transition-colors leading-snug break-all">
                  {method.value}
                </span>

                <button
                  onClick={(e) => handleCopy(e, method.value, method.id)}
                  className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 text-stone-400 hover:border-[#5B9BD5] hover:text-[#5B9BD5] transition-all duration-300"
                  title="Copy to clipboard"
                >
                  {copied === method.id ? (
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  ) : (
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="9" y="9" width="13" height="13" rx="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  )}
                </button>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="mt-10 sm:mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-[11px] font-semibold tracking-[.18em] uppercase text-stone-400 mb-4">
            Also find me on
          </p>
          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] font-medium text-stone-600 border border-stone-200 bg-white rounded-full px-5 py-2 hover:border-[#5B9BD5] hover:text-[#5B9BD5] transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Availability Badge */}
        <motion.div
          className="mt-10 sm:mt-12 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2.5 bg-white border border-stone-200 rounded-full px-5 py-2.5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[12px] font-medium text-stone-600">
              Available for new roles
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}