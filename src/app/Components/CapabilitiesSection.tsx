// app/components/CapabilitiesSection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import type { SiteContent } from "@/sanity/content";

const rowVariants: Variants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: { height: "auto", opacity: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function CapabilitiesSection({ content }: { content: SiteContent }) {
  const [expanded, setExpanded] = useState<string | null>(
    content.capabilities[0]?.id ?? null,
  );
  const { capabilities, capabilitiesSection } = content;

  return (
    <section
      id="services"
      className="bg-[#EFF6FF] py-20 sm:py-24 border-t border-stone-900/5 transition-colors duration-300"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-14">
        {/* Header */}
        <motion.header
          className="mx-auto mb-14 sm:mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[13px] font-semibold tracking-[0.18em] uppercase text-[#5B9BD5] mb-4">
            {capabilitiesSection.eyebrow}
          </div>
          <h2 className="font-sans text-[clamp(32px,5vw,48px)] font-semibold text-stone-900 leading-[1.12] mb-5 tracking-tight">
            {capabilitiesSection.headlinePrefix}{" "}
            <span className="text-[#5B9BD5]">{capabilitiesSection.headlineAccent}</span>
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] font-light text-stone-600 leading-[1.85]">
            {capabilitiesSection.description}
          </p>
        </motion.header>

        {/* Capabilities List */}
        <div className="flex flex-col gap-4">
          {capabilities.map((cap, i) => {
            const isOpen = expanded === cap.id;

            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`bg-white border rounded-2xl shadow-sm overflow-hidden transition-colors duration-300 ${
                  isOpen ? "border-[#5B9BD5]/40" : "border-stone-200 hover:border-[#5B9BD5]/25"
                }`}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : cap.id)}
                  className="w-full text-left"
                >
                  <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_auto] md:items-center gap-4 px-6 sm:px-8 py-6 sm:py-7">
                    <span className="text-[13px] font-semibold text-[#5B9BD5]/50 tracking-[.1em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3
                        className={`font-sans text-[20px] sm:text-[22px] font-semibold leading-[1.2] transition-colors ${
                          isOpen ? "text-[#5B9BD5]" : "text-stone-900"
                        }`}
                      >
                        {cap.title}
                      </h3>
                      <p className="text-[13px] font-light text-stone-500 mt-1 leading-[1.6]">
                        {cap.shortDesc}
                      </p>
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex h-10 w-10 items-center justify-center rounded-full border shrink-0 self-start md:self-center ${
                        isOpen
                          ? "bg-[#5B9BD5] border-[#5B9BD5] text-white"
                          : "border-[#5B9BD5]/30 text-[#5B9BD5]"
                      }`}
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      variants={rowVariants}
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      style={{ overflow: "hidden" }}
                    >
                      <div className="px-6 sm:px-8 pb-7 sm:pb-8">
                        <div className="border-t border-stone-100 pt-6 sm:pt-7 grid grid-cols-1 md:grid-cols-[1fr_280px] gap-6 md:gap-10">
                          <p className="text-[14px] font-light text-stone-600 leading-[1.8]">
                            {cap.fullDesc}
                          </p>
                          <div>
                            <p className="text-[10px] font-semibold tracking-[.18em] uppercase text-[#5B9BD5] mb-3">
                              {capabilitiesSection.deliverablesLabel}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {cap.deliverables.map((d) => (
                                <span
                                  key={d}
                                  className="text-[11px] text-stone-600 border border-stone-200 bg-[#EFF6FF] rounded-md px-2.5 py-1"
                                >
                                  {d}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 sm:mt-14 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.a
            href={`mailto:${content.contact.email}`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2.5 bg-[#5B9BD5] text-white rounded-full px-7 py-3.5 text-[13px] font-semibold tracking-wide shadow-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            {capabilitiesSection.ctaLabel}
          </motion.a>
          <p className="text-[12px] text-stone-500 mt-3 font-light">
            {capabilitiesSection.responseTime}
          </p>
        </motion.div>
      </div>
    </section>
  );
}