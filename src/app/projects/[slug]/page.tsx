// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { projects, getProjectById } from "@/app/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectById(slug);
  if (!project) notFound();

  return (
    <main className="bg-[#FBF6EE] min-h-screen">
      <ProjectDetailClient project={project} />
    </main>
  );
}