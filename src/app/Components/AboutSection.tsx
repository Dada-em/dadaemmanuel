// app/components/AboutSection.tsx
"use client";

import Image from "next/image";
import { motion, Variants } from "motion/react";

const credentials = [
  { n: "01", text: "B.Sc Computer Science, CGPA 4.05/5.0 — Redeemer's University, 2025" },
  { n: "02", text: "Captain, CS Basketball Team — Redeemer's University (2023–2025)" },
  { n: "03", text: "Volunteer mentor, university coding workshops & Nigeria's 3MTT program" },
];

const toolGroups = [
  { category: "Languages", tools: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SQL"] },
  { category: "Frontend", tools: ["React.js", "Next.js", "React Native", "Tailwind CSS", "Motion"] },
  { category: "Backend & Data", tools: ["Node.js", "Express.js", "Prisma", "PostgreSQL"] },
  { category: "Testing & Tools", tools: ["Vitest", "Figma", "Git", "GitHub"] },
];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#EFF6FF] py-20 sm:py-24 transition-colors duration-300">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-14">

        {/* Header with Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-14 sm:mb-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <div className="text-[13px] font-semibold tracking-[0.18em] uppercase text-[#5B9BD5] mb-4">
              About
            </div>
            <h2 className="font-sans text-[clamp(32px,5vw,44px)] font-semibold text-stone-900 leading-[1.15] mb-5 tracking-tight">
              Engineering with <span className="text-[#5B9BD5]">intention</span>, not just implementation
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] font-light text-stone-600 leading-[1.85]">
              Dada Emmanuel Oluwawamiri is a Lead Frontend Developer with a first-class
              foundation in Computer Science, currently co-founding a legal-tech platform
              while shipping production interfaces on contract with a multi-product studio.
              The work spans component systems, real-time features, and the accessibility
              and testing discipline that keeps them reliable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-[#BFDBFE] shadow-sm border border-stone-200"
          >
            <Image
              src="/profile-photo.png"
              alt="Dada Emmanuel Oluwawamiri"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/45 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="inline-flex items-center gap-2 bg-white/90 border border-[#5B9BD5]/25 rounded-full px-4 py-1.5 text-[11px] font-medium text-[#5B9BD5] tracking-widest uppercase shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B9BD5]" />
                Available for new roles
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Stat 1 */}
          <motion.div variants={fadeUp} className="bg-white border border-stone-200 shadow-sm rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <p className="font-sans text-[54px] font-semibold text-stone-900 leading-none">
                4.05<span className="text-[26px] text-[#5B9BD5]">/5.0</span>
              </p>
              <p className="text-[12px] text-stone-500 tracking-wide mt-2">Graduating CGPA — Computer Science</p>
            </div>
            <div className="h-1 bg-stone-100 rounded-full mt-5 overflow-hidden">
              <div className="h-full w-[81%] bg-[#5B9BD5] rounded-full" />
            </div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div variants={fadeUp} className="bg-white border border-stone-200 shadow-sm rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <p className="font-sans text-[54px] font-semibold text-stone-900 leading-none">
                2<span className="text-[26px] text-[#5B9BD5]">+</span>
              </p>
              <p className="text-[12px] text-stone-500 tracking-wide mt-2">Years across frontend leadership & delivery</p>
            </div>
            <div className="h-1 bg-stone-100 rounded-full mt-5 overflow-hidden">
              <div className="h-full w-[55%] bg-[#5B9BD5] rounded-full" />
            </div>
          </motion.div>

          {/* Credentials */}
          <motion.div variants={fadeUp} className="bg-white border border-stone-200 shadow-sm rounded-2xl p-7 sm:p-8">
            <p className="text-[11px] font-semibold tracking-[.18em] uppercase text-[#5B9BD5] mb-5">Credentials & Highlights</p>
            {credentials.map((c) => (
              <div key={c.n} className="flex items-start gap-3 py-2.5 border-b border-stone-100 last:border-0">
                <span className="font-sans text-[13px] font-semibold text-[#5B9BD5]/60 min-w-[20px] pt-px">{c.n}</span>
                <span className="text-[13px] font-light text-stone-700 leading-snug">{c.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Tools */}
          <motion.div variants={fadeUp} className="bg-white border border-stone-200 shadow-sm rounded-2xl p-7 sm:p-8">
            <p className="text-[11px] font-semibold tracking-[.18em] uppercase text-[#5B9BD5] mb-5">Stack & Tools</p>
            <div className="flex flex-col gap-5">
              {toolGroups.map((group) => (
                <div key={group.category}>
                  <p className="text-[10px] font-medium tracking-[.16em] uppercase text-stone-400 mb-2.5">{group.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[12px] font-light text-stone-700 border border-stone-200 bg-[#EFF6FF] rounded-md px-2.5 py-1"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Photo — work in progress */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl overflow-hidden min-h-[240px] sm:min-h-[280px] lg:min-h-[320px] relative bg-[#BFDBFE] shadow-sm border border-stone-200"
          >
            <Image
              src="/about-work.jpg"
              alt="Frontend engineering work"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/55 to-transparent" />
            <div className="absolute bottom-4 left-4 bg-white/90 border border-[#5B9BD5]/25 rounded-full px-4 py-1.5 text-[11px] font-medium text-[#5B9BD5] tracking-widest uppercase shadow-sm">
              Building at ChakraTek & TLS
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="bg-[#5B9BD5] rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="font-sans text-[24px] sm:text-[26px] font-semibold text-white leading-[1.25] mb-3">
                Let's build something worth shipping
              </h3>
              <p className="text-[13px] font-light text-white/85 leading-[1.7] mb-6">
                Open to full-time roles, contract work, and teams that care about
                craft as much as they care about velocity.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-[#0F172A] text-white rounded-full px-6 py-3 text-[12px] font-semibold tracking-wide w-fit"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <path d="M16 2v4M8 2v4M3 10h18"/>
                </svg>
                Get in Touch
              </motion.a>
            </div>
            <p className="font-sans font-semibold text-[20px] text-white/60 mt-6">Dada E.</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}