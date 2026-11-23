"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Navbar from "../Components/Navbar";
import type { Project } from "../data/projects";
import type { SiteContent } from "@/sanity/content";

export default function ProjectsPageClient({
  projects,
  content,
}: {
  projects: Project[];
  content: SiteContent;
}) {
  const { projectsPage } = content;

  return (
    <main className="bg-[#EFF6FF] min-h-screen">
      <Navbar name={content.profile.name} />
      <section className="pt-36 pb-14 sm:pt-40 sm:pb-16 border-b border-stone-900/5">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[13px] font-semibold tracking-[0.18em] uppercase text-[#5B9BD5] mb-4">
              {projectsPage.eyebrow}
            </div>
            <h1 className="font-sans text-[clamp(34px,5.5vw,52px)] font-semibold text-stone-900 leading-[1.12] tracking-tight max-w-2xl">
              {projectsPage.headlinePrefix}{" "}
              <span className="text-[#5B9BD5]">{projectsPage.headlineAccent}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, i) => {
              const imageSrc =
                project.image ??
                (project.hasImage ? `/projects/${project.id}.png` : undefined);

              return (
                <Link key={project.id} href={`/projects/${project.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.5,
                      delay: (i % 2) * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:border-[#5B9BD5]/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative aspect-video bg-[#DBEAFE] border-b border-stone-200 overflow-hidden">
                      {imageSrc ? (
                        <Image
                          src={imageSrc}
                          alt={project.imageAlt ?? project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-stone-400">
                          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <path d="m21 15-5-5L5 21" />
                          </svg>
                          <span className="text-[11px] font-medium tracking-wide uppercase">Preview coming soon</span>
                        </div>
                      )}

                      <div className="absolute top-4 left-4">
                        <span
                          className={`text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full ${
                            project.status === "Live"
                              ? "bg-emerald-600/90 text-white"
                              : project.status === "In Development"
                                ? "bg-[#5B9BD5]/90 text-white"
                                : "bg-stone-600/90 text-white"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-7">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <h3 className="font-sans text-[20px] sm:text-[22px] font-semibold text-stone-900 group-hover:text-[#5B9BD5] transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-[12px] font-medium text-stone-400 mb-4">
                        {project.role} · {project.period}
                      </p>
                      <p className="text-[14px] font-light text-stone-600 leading-[1.75] mb-5">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] text-stone-600 border border-stone-200 bg-[#EFF6FF] rounded-md px-2.5 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
