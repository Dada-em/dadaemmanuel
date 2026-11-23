// app/components/AboutSection.tsx
"use client";

import Image from "next/image";
import { motion, Variants } from "motion/react";
import type { SiteContent } from "@/sanity/content";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

export default function AboutSection({ content }: { content: SiteContent }) {
  const { profile } = content;
  const cgpaValue = Number.parseFloat(profile.cgpa);
  const cgpaScale = Number.parseFloat(profile.cgpaScale);
  const cgpaProgress =
    Number.isFinite(cgpaValue) && Number.isFinite(cgpaScale) && cgpaScale > 0
      ? Math.min(100, Math.max(0, (cgpaValue / cgpaScale) * 100))
      : 0;

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
              {profile.aboutEyebrow}
            </div>
            <h2 className="font-sans text-[clamp(32px,5vw,44px)] font-semibold text-stone-900 leading-[1.15] mb-5 tracking-tight">
              {profile.aboutHeadlinePrefix}{" "}
              <span className="text-[#5B9BD5]">{profile.aboutHeadlineAccent}</span>{" "}
              {profile.aboutHeadlineSuffix}
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] font-light text-stone-600 leading-[1.85]">
              {profile.bio}
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
              src={profile.photoUrl}
              alt={profile.photoAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/45 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="inline-flex items-center gap-2 bg-white/90 border border-[#5B9BD5]/25 rounded-full px-4 py-1.5 text-[11px] font-medium text-[#5B9BD5] tracking-widest uppercase shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B9BD5]" />
                {profile.availability}
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
                {profile.cgpa}<span className="text-[26px] text-[#5B9BD5]">/{profile.cgpaScale}</span>
              </p>
              <p className="text-[12px] text-stone-500 tracking-wide mt-2">Graduating CGPA - {profile.degree}</p>
            </div>
            <div className="h-1 bg-stone-100 rounded-full mt-5 overflow-hidden">
              <div className="h-full bg-[#5B9BD5] rounded-full" style={{ width: `${cgpaProgress}%` }} />
            </div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div variants={fadeUp} className="bg-white border border-stone-200 shadow-sm rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <p className="font-sans text-[54px] font-semibold text-stone-900 leading-none">
                {profile.experienceYears}
              </p>
              <p className="text-[12px] text-stone-500 tracking-wide mt-2">{profile.experienceLabel}</p>
            </div>
            <div className="h-1 bg-stone-100 rounded-full mt-5 overflow-hidden">
              <div className="h-full w-[55%] bg-[#5B9BD5] rounded-full" />
            </div>
          </motion.div>

          {/* Credentials */}
          <motion.div variants={fadeUp} className="bg-white border border-stone-200 shadow-sm rounded-2xl p-7 sm:p-8">
            <p className="text-[11px] font-semibold tracking-[.18em] uppercase text-[#5B9BD5] mb-5">{profile.credentialsHeading}</p>
            {profile.credentials.map((credential, i) => (
              <div key={credential} className="flex items-start gap-3 py-2.5 border-b border-stone-100 last:border-0">
                <span className="font-sans text-[13px] font-semibold text-[#5B9BD5]/60 min-w-[20px] pt-px">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[13px] font-light text-stone-700 leading-snug">{credential}</span>
              </div>
            ))}
          </motion.div>

          {/* Tools */}
          <motion.div variants={fadeUp} className="bg-white border border-stone-200 shadow-sm rounded-2xl p-7 sm:p-8">
            <p className="text-[11px] font-semibold tracking-[.18em] uppercase text-[#5B9BD5] mb-5">{profile.toolsHeading}</p>
            <div className="flex flex-col gap-5">
              {profile.toolGroups.map((group) => (
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
              src={profile.workPhotoUrl}
              alt={profile.workPhotoAlt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/55 to-transparent" />
            <div className="absolute bottom-4 left-4 bg-white/90 border border-[#5B9BD5]/25 rounded-full px-4 py-1.5 text-[11px] font-medium text-[#5B9BD5] tracking-widest uppercase shadow-sm">
              {profile.workCaption}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="bg-[#5B9BD5] rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="font-sans text-[24px] sm:text-[26px] font-semibold text-white leading-[1.25] mb-3">
                {profile.ctaTitle}
              </h3>
              <p className="text-[13px] font-light text-white/85 leading-[1.7] mb-6">
                {profile.ctaDescription}
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
                {profile.ctaButtonLabel}
              </motion.a>
            </div>
            <p className="font-sans font-semibold text-[20px] text-white/60 mt-6">{profile.name}</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}