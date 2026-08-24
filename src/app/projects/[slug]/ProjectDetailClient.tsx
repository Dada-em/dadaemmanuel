// app/projects/[slug]/ProjectDetailClient.tsx
"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/app/data/projects";
import Image from "next/image";
import Navbar from "@/app/Components/Navbar";

const statusColor: Record<Project["status"], string> = {
  Live: "bg-emerald-600/90 text-white",
  "In Development": "bg-[#5B9BD5]/90 text-white",
  Completed: "bg-stone-600/90 text-white",
};

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-14 sm:pt-40 sm:pb-16 border-b border-stone-900/5">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-stone-500 hover:text-[#5B9BD5] transition-colors mb-8"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              All Projects
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <span className={`text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full ${statusColor[project.status]}`}>
                {project.status}
              </span>
              <span className="text-[12px] font-medium text-stone-400">{project.period}</span>
            </div>

            <h1 className="font-sans text-[clamp(32px,5.5vw,50px)] font-semibold text-stone-900 leading-[1.12] tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-[17px] sm:text-[18px] font-light text-[#5B9BD5] leading-relaxed mb-3">
              {project.tagline}
            </p>
            <p className="text-[13px] font-medium text-stone-400 mb-8">{project.role}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[12px] text-stone-600 border border-stone-200 bg-white rounded-md px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Supporting gallery — top full-width, bottom pair */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="pb-12 sm:pb-14">
          <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-14">
            <div className="flex flex-col gap-4 sm:gap-5">

              {project.gallery[0] && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-video bg-[#DBEAFE] border border-stone-200 rounded-2xl overflow-hidden shadow-sm"
                >
                  <Image
                    src={project.gallery[0].src}
                    alt={project.gallery[0].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                  />
                </motion.div>
              )}

              {(project.gallery[1] || project.gallery[2]) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {project.gallery.slice(1, 3).map((img, i) => (
                    <motion.div
                      key={img.src}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                      className="relative aspect-video bg-[#DBEAFE] border border-stone-200 rounded-2xl overflow-hidden shadow-sm"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </motion.div>
                  ))}
                </div>
              )}

            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12 lg:gap-16">
            <div className="flex flex-col gap-12">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-[11px] font-semibold tracking-[.18em] uppercase text-[#5B9BD5] mb-4">
                  Overview
                </p>
                <p className="text-[15px] sm:text-[16px] font-light text-stone-600 leading-[1.85]">
                  {project.overview}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <p className="text-[11px] font-semibold tracking-[.18em] uppercase text-[#5B9BD5] mb-4">
                  The Challenge
                </p>
                <p className="text-[15px] sm:text-[16px] font-light text-stone-600 leading-[1.85]">
                  {project.challenge}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className="text-[11px] font-semibold tracking-[.18em] uppercase text-[#5B9BD5] mb-5">
                  Approach
                </p>
                <div className="flex flex-col gap-4">
                  {project.approach.map((point, i) => (
                    <div key={i} className="flex items-start gap-4 bg-white border border-stone-200 rounded-xl p-5">
                      <span className="text-[13px] font-semibold text-[#5B9BD5]/50 pt-0.5 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[14px] font-light text-stone-600 leading-[1.75]">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.aside
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:sticky lg:top-28 h-fit bg-white border border-stone-200 rounded-2xl p-6 shadow-sm"
            >
              <p className="text-[11px] font-semibold tracking-[.18em] uppercase text-[#5B9BD5] mb-5">
                Outcomes
              </p>
              <div className="flex flex-col gap-4">
                {project.outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[#5B9BD5] mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-[13px] font-light text-stone-600 leading-[1.6]">{outcome}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/#contact"
                className="mt-7 flex items-center justify-center gap-2 bg-[#5B9BD5] text-white text-[13px] font-semibold rounded-full px-5 py-3 hover:bg-[#3A78B5] transition-colors"
              >
                Discuss Similar Work
              </Link>
            </motion.aside>
          </div>
        </div>
      </section>
    </>
  );
}