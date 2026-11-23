// app/projects/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";
import { getProjects, getProjectBySlug, getSiteContent } from "@/sanity/lib/queries";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.desc,
    openGraph: {
      title: project.title,
      description: project.desc,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const [project, content] = await Promise.all([
    getProjectBySlug(slug),
    getSiteContent(),
  ]);
  if (!project) notFound();

  return (
    <main className="bg-[#FBF6EE] min-h-screen">
      <ProjectDetailClient project={project} content={content} />
    </main>
  );
}