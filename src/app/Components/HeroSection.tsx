// app/components/HeroSection.tsx
"use client";

import { motion, type Variants } from "motion/react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const codeLines = [
  { w: 38, indent: 0, accent: false },
  { w: 62, indent: 0, accent: true },
  { w: 48, indent: 1, accent: false },
  { w: 71, indent: 1, accent: false },
  { w: 30, indent: 2, accent: true },
  { w: 55, indent: 2, accent: false },
  { w: 44, indent: 1, accent: false },
  { w: 66, indent: 0, accent: true },
  { w: 35, indent: 0, accent: false },
  { w: 58, indent: 1, accent: false },
  { w: 42, indent: 2, accent: false },
  { w: 68, indent: 2, accent: true },
  { w: 33, indent: 1, accent: false },
  { w: 50, indent: 0, accent: false },
  { w: 60, indent: 0, accent: false },
];

// Duplicate the list so the loop is seamless
const loopLines = [...codeLines, ...codeLines];

function CodeBackdrop() {
  return (
    <div
      className="hidden lg:block absolute right-0 top-0 h-full w-[45%] pointer-events-none overflow-hidden"
      style={{
        maskImage: "linear-gradient(to left, black 15%, transparent 80%)",
        WebkitMaskImage: "linear-gradient(to left, black 15%, transparent 80%)",
      }}
    >
      <motion.div
        className="flex flex-col gap-4 pl-16 blur-[1.5px]"
        animate={{ y: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {loopLines.map((line, i) => (
          <div
            key={i}
            style={{ width: `${line.w}%`, marginLeft: `${line.indent * 28}px` }}
            className={`h-[10px] rounded-full ${
              line.accent ? "bg-[#5B9BD5]" : "bg-stone-400"
            }`}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col overflow-hidden bg-[#EFF6FF]"
    >
      {/* Warm light background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 15%, rgba(91,155,213,0.10), transparent 60%),
            linear-gradient(to bottom, #F0F7FF 0%, #EFF6FF 55%, #DBEAFE 100%)
          `,
        }}
      />

      {/* Ambient moving glow */}
      <motion.div
        className="absolute -right-32 top-24 w-[420px] h-[420px] rounded-full blur-[110px]"
        style={{ background: "radial-gradient(circle, rgba(91,155,213,0.18), transparent 70%)" }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.85, 0.5],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Moving code stream */}
      <CodeBackdrop />

      <div className="relative z-10 flex-1 flex items-center pt-28 sm:pt-32">
        <motion.div
          className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-6 md:px-14"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="max-w-2xl">
            <motion.div variants={item} className="flex items-center gap-3 mb-6 sm:mb-7">
              <div className="w-10 h-px bg-[#5B9BD5]" />
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#5B9BD5]">
                Front-End Engineer - Lagos, Nigeria
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-sans text-[clamp(38px,7vw,64px)] font-semibold leading-[1.1] tracking-tight text-stone-900 mb-6"
            >
              I build interfaces that feel{" "}
              <span className="text-[#5B9BD5]">as good</span> as they work
            </motion.h1>

            <motion.p
              variants={item}
              className="text-[16px] sm:text-[17px] font-light text-stone-600 leading-relaxed max-w-lg mb-10"
            >
              Lead Frontend Developer shipping production React &amp; Next.js
              applications from shared design systems to real-time features,
              with the craft, accessibility, and test coverage to back it up.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5"
            >
              <motion.a
                href="/projects"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="text-[13px] font-semibold text-white bg-[#5B9BD5] px-7 py-3.5 rounded-full"
              >
                View My Work
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1LV_FzWnbKsOEGh0osMSiqEqlPRu-ealZ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="text-[13px] font-semibold text-stone-700 hover:text-stone-900 flex items-center gap-2"
              >
                Download CV
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <div className="relative z-10">
        <div className="mx-auto w-full max-w-[1440px] px-4 pb-10 sm:px-6 sm:pb-12 md:px-14">
          <motion.div
            className="flex flex-wrap gap-x-10 gap-y-6 sm:gap-12 border-t border-stone-900/10 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {[
              { num: "4+", label: "Live Products Shipped" },
              { num: "6-Layer", label: "Verification System Architected" },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="text-2xl sm:text-3xl font-semibold text-stone-900">{num}</div>
                <div className="text-[10px] tracking-[0.1em] uppercase text-stone-500 mt-1 max-w-[140px]">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}