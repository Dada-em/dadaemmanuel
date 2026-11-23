import "server-only";
import { defineQuery } from "next-sanity";
import { projects as defaultProjects, type Project } from "@/app/data/projects";
import {
  normalizeSiteContent,
  type SiteContent,
} from "../content";
import { sanityFetch } from "./live";

const PROJECT_FIELDS = /* groq */ `
  _id,
  "id": slug.current,
  title,
  role,
  period,
  status,
  tagline,
  "desc": summary,
  tags,
  "image": mainImage.asset->url,
  "imageAlt": coalesce(mainImage.alt, title),
  overview,
  challenge,
  approach,
  outcomes,
  links[]{label, href},
  "gallery": gallery[defined(asset)]{"src": asset->url, "alt": alt},
  sortOrder,
  visible
`;

const PROJECTS_QUERY = defineQuery(/* groq */ `
  *[_type == "project" && defined(slug.current)]
    | order(sortOrder asc, _createdAt desc) {
      ${PROJECT_FIELDS}
    }
`);

const SITE_CONTENT_QUERY = defineQuery(/* groq */ `
  *[_id == "siteContent"][0]{
    seo{title, description},
    hero{
      eyebrow,
      headlinePrefix,
      headlineAccent,
      headlineSuffix,
      description,
      "cvUrl": coalesce(cvUrl, ""),
      workLinkLabel,
      cvLinkLabel,
      stats[]{_key, value, label}
    },
    profile{
      name,
      aboutEyebrow,
      aboutHeadlinePrefix,
      aboutHeadlineAccent,
      aboutHeadlineSuffix,
      bio,
      "photoUrl": photo.asset->url,
      "photoAlt": coalesce(photo.alt, photoAlt),
      availability,
      cgpa,
      cgpaScale,
      degree,
      experienceYears,
      experienceLabel,
      credentials,
      credentialsHeading,
      toolGroups[]{_key, category, tools},
      toolsHeading,
      "workPhotoUrl": workPhoto.asset->url,
      "workPhotoAlt": coalesce(workPhoto.alt, workPhotoAlt),
      workCaption,
      ctaTitle,
      ctaDescription,
      ctaButtonLabel
    },
    projectsPage{eyebrow, headlinePrefix, headlineAccent},
    capabilitiesSection{
      eyebrow,
      headlinePrefix,
      headlineAccent,
      description,
      deliverablesLabel,
      ctaLabel,
      responseTime
    },
    capabilities[]{_key, "id": id.current, title, shortDesc, fullDesc, deliverables},
    contact{
      eyebrow,
      headingPrefix,
      headingAccent,
      description,
      email,
      phone,
      location,
      socialLinks[]{_key, label, href},
      socialHeading,
      availability,
      responseTime
    },
    footer{
      ctaTitle,
      ctaDescription,
      ctaButtonLabel,
      summary,
      navigationHeading,
      capabilitiesHeading,
      contactHeading,
      copyrightYear,
      copyrightName
    }
  }
`);

async function fetchSanity<T>(
  query: string,
  params: Record<string, string> = {},
): Promise<T> {
  const { data } = await sanityFetch({
    query,
    params,
    perspective: "published",
    stega: false,
  });

  return data as T;
}

export async function getSiteContent(): Promise<SiteContent> {
  const content = await fetchSanity<Partial<SiteContent> | null>(
    SITE_CONTENT_QUERY,
  );
  return normalizeSiteContent(content);
}

export async function getProjects(): Promise<Project[]> {
  const content = await fetchSanity<Project[]>(PROJECTS_QUERY);
  const contentById = new Map(content.map((project) => [project.id, project]));
  const fallbackIds = new Set(defaultProjects.map((project) => project.id));
  const merged: Project[] = [];

  for (const fallbackProject of defaultProjects) {
    const cmsProject = contentById.get(fallbackProject.id);
    if (cmsProject?.visible === false) continue;
    merged.push(cmsProject ?? fallbackProject);
  }

  merged.push(
    ...content.filter(
      (project) => !fallbackIds.has(project.id) && project.visible !== false,
    ),
  );

  return merged.sort(
    (first, second) =>
      (first.sortOrder ?? Number.MAX_SAFE_INTEGER) -
      (second.sortOrder ?? Number.MAX_SAFE_INTEGER),
  );
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find((project) => project.id === slug);
}
