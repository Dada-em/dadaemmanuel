import ProjectsPageClient from "./ProjectsPageClient";
import { getProjects, getSiteContent } from "@/sanity/lib/queries";

export default async function ProjectsPage() {
  const [projects, content] = await Promise.all([
    getProjects(),
    getSiteContent(),
  ]);

  return <ProjectsPageClient projects={projects} content={content} />;
}
