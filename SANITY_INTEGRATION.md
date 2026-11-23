# Sanity Content Integration

## Overview

This project uses Sanity as the editable content source for the portfolio website. The integration was introduced to separate presentation code from content that changes independently, such as projects, profile information, service descriptions, contact details, social links, and SEO metadata.

The implementation keeps the Next.js components responsible for layout and interaction. Sanity is responsible for the text, images, and structured records that appear in those components.

The Studio is embedded in the Next.js application at `/studio`, using the existing Next.js and Sanity setup. The website reads published Sanity documents with GROQ and Live Content API support.

## Why Sanity Was Added

Before the integration, the portfolio's content was distributed across React components and a local TypeScript project array:

- [projects.ts](./src/app/data/projects.ts) contained every project write-up.
- The homepage components contained profile, hero, capability, contact, footer, and availability text.
- Images were mostly referenced directly from the `public` directory.
- Updating content required editing source code and rebuilding or redeploying the site.

Sanity was added to provide:

- A browser-based editing interface.
- Image management and hotspot support.
- Structured project entries and project detail pages.
- A centralized site-content document.
- Live content updates and published/draft-aware content fetching.
- A fallback to the original static content if Sanity data is unavailable.

The code retains static fallbacks so the portfolio remains functional during initial setup or if a dataset or document has not yet been published.

## Integration Architecture

```text
Sanity Studio (/studio)
        |
        | create and publish content
        v
Sanity Content Lake
        |
        | GROQ via next-sanity
        v
src/sanity/lib/queries.ts
        |
        | normalized TypeScript content
        v
Next.js pages and components
```

The main content flow is:

1. Authors edit content in the Sanity Studio.
2. The Studio publishes documents to the configured Sanity dataset.
3. GROQ queries in `src/sanity/lib/queries.ts` fetch the documents.
4. Fetched values are normalized against default local content.
5. Next.js passes the normalized content to interactive or presentational components.
6. `SanityLive` listens for published content changes and refreshes the site.

## Editable Sanity Content

### Project documents

The `project` document type makes these fields editable:

- Title
- Slug
- Role
- Period
- Status
- Tagline
- Summary
- Technology tags
- Card image and alternative text
- Overview
- Challenge
- Approach steps
- Outcomes
- External links
- Gallery images and alternative text
- Sort order
- Portfolio visibility

The schema is defined in [project.ts](./src/sanity/schemaTypes/project.ts).

Matching project documents replace the existing fallback projects. New project documents appear on the project index without requiring source-code changes. Setting **Show on portfolio** to false hides a project.

This is used by:

- [projects/page.tsx](./src/app/projects/page.tsx)
- [ProjectsPageClient.tsx](./src/app/projects/ProjectsPageClient.tsx)
- [projects/[slug]/page.tsx](./src/app/projects/%5Bslug%5D/page.tsx)
- [ProjectDetailClient.tsx](./src/app/projects/%5Bslug%5D/ProjectDetailClient.tsx)

The project ID in the URL comes from the published project slug. Sanity-generated document IDs remain implementation details rather than URL conventions.

### Site content singleton

The `siteContent` document type stores all general portfolio copy. It is intended to be a single document with the explicit ID `siteContent`.

The following areas are editable:

- SEO title and description
- Hero eyebrow, headline, description, CV URL, button labels, and stats
- Profile name, biography, profile photo, work photo, availability, CGPA, degree, experience, credentials, tool groups, and profile call-to-action
- Projects-page heading
- Capabilities-section heading and response text
- Capabilities entries and deliverables
- Contact heading, description, response text, email, phone, location, availability, and social links
- Footer CTA, summary, headings, copyright year, and copyright name

The schema is defined in [siteContent.ts](./src/sanity/schemaTypes/siteContent.ts).

The singleton is registered in [structure.ts](./src/sanity/structure.ts), placing **Site Content** at the top of the Studio and excluding it from a duplicate generic document list.

The initial Sanity document values are populated from [content.ts](./src/sanity/content.ts). This file also contains the runtime fallback content used when the CMS document is missing or only partially filled.

## Where It Was Implemented

### Sanity configuration

- [sanity.config.ts](./sanity.config.ts) defines the Studio configuration, embedded `/studio` base path, dataset, project ID, schema, Structure Tool, and Vision Tool.
- [sanity.cli.ts](./sanity.cli.ts) defines the Sanity CLI configuration.
- [env.ts](./src/sanity/env.ts) reads the public project ID, dataset, and API version.
- [structure.ts](./src/sanity/structure.ts) organizes the Studio around the site-content singleton and project documents.

### Schema

- [schemaTypes/index.ts](./src/sanity/schemaTypes/index.ts) registers all Sanity document types.
- [project.ts](./src/sanity/schemaTypes/project.ts) defines the project document.
- [siteContent.ts](./src/sanity/schemaTypes/siteContent.ts) defines the site-content singleton.

### Data access

- [client.ts](./src/sanity/lib/client.ts) creates the Next.js/Sanity client.
- [live.ts](./src/sanity/lib/live.ts) enables the Live Content API and exports `sanityFetch` and `SanityLive`.
- [queries.ts](./src/sanity/lib/queries.ts) contains GROQ queries and functions used by Next.js pages.
- [content.ts](./src/sanity/content.ts) defines TypeScript content shapes and fallback values.

### Frontend integration

- [layout.tsx](./src/app/layout.tsx) reads editable SEO metadata and renders `SanityLive`.
- [page.tsx](./src/app/page.tsx) fetches site content and passes it to the homepage sections.
- [HeroSection.tsx](./src/app/Components/HeroSection.tsx) renders editable hero copy and stats.
- [AboutSection.tsx](./src/app/Components/AboutSection.tsx) renders editable profile, credentials, skills, images, and CTA content.
- [CapabilitiesSection.tsx](./src/app/Components/CapabilitiesSection.tsx) renders editable capability accordions.
- [ContactSection.tsx](./src/app/Components/ContactSection.tsx) renders editable contact and social-link cards.
- [Footer.tsx](./src/app/Components/Footer.tsx) renders editable footer copy and links.
- [Navbar.tsx](./src/app/Components/Navbar.tsx) accepts the editable profile name used in its brand text.
- [projects/page.tsx](./src/app/projects/page.tsx) fetches projects and site content for the project index.
- [ProjectsPageClient.tsx](./src/app/projects/ProjectsPageClient.tsx) handles the project grid.
- [projects/[slug]/page.tsx](./src/app/projects/%5Bslug%5D/page.tsx) fetches project details and generates project metadata/static parameters.
- [ProjectDetailClient.tsx](./src/app/projects/%5Bslug%5D/ProjectDetailClient.tsx) renders the editable project detail experience.

### Supporting configuration

- [next.config.ts](./next.config.ts) allows Next.js Image optimization to load images from `cdn.sanity.io`.
- [.env.local](./.env.local) contains the local Sanity project configuration and must not be committed. Only the variable names and server-side nature of tokens are documented here; their values are not included.
- [README.md](./README.md) documents Sanity setup for the project.

## How the Data Fallback Works

For site content:

1. `getSiteContent()` requests `_id == "siteContent"`.
2. The result is passed to `normalizeSiteContent()`.
3. Missing top-level objects are merged with `defaultSiteContent`.
4. Missing arrays and nested values use their static defaults.

For projects:

1. Existing fallback projects remain in [projects.ts](./src/app/data/projects.ts).
2. The GROQ query fetches published project documents.
3. A fallback project is replaced when a Sanity document has the same slug.
4. A Sanity document marked with **Show on portfolio** false is omitted.
5. Completely new Sanity projects are appended to the project list.
6. The final list is sorted by `sortOrder`, then falls back to stable array order.

This approach allows the site to remain visually complete before every document has been migrated to Sanity.

## Image Handling

Sanity image fields are expanded through GROQ to return the CDN asset URL and alternative text.

The portfolio now allows remote Sanity images for:

- Project card images
- Project gallery images
- Profile photo
- Work/about photo

[next.config.ts](./next.config.ts) restricts optimized remote images to `https://cdn.sanity.io`.

The local public project and profile images remain as fallback images until their corresponding Sanity assets are uploaded.

## Studio Usage

1. Start the Next.js development server with `npm run dev`.
2. Open `http://localhost:3000/studio`.
3. Sign in to Sanity if prompted.
4. Open **Site Content** and create or edit the singleton document.
5. Fill in each group:
   - SEO
   - Homepage Hero
   - About and Profile
   - Projects Page
   - Capabilities
   - Contact
   - Footer
6. Open **Project** from the Studio content list.
7. Create or edit a project, add a slug and images, set the sort order, and publish it.
8. Return to the website to confirm the content.

The project list and detail routes update from published data. Draft content is not intended to be displayed to ordinary website visitors.

## Environment Variables

The project expects these public variables:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`

For a private or token-authenticated read setup, the optional server-side variable is:

- `SANITY_API_READ_TOKEN`

The read token must not use the `NEXT_PUBLIC_` prefix.

Sanity CORS settings must include the local website origin and every deployed website origin that needs to use Live Content API or Studio preview features.

## Validation Performed

The implementation was checked with:

- `npx tsc --noEmit`
- `npm run lint`
- `npx sanity schemas validate`
- `npm run build`
- HTTP smoke checks for `/`, `/projects`, `/projects/tls`, and `/studio`

The Sanity schema validation reported zero errors. The Next.js production build compiled successfully, including static generation for the fallback project routes and successful rendering for the `/studio` route.

## Result

The portfolio now supports editing the majority of visible copy and project content without modifying component source code. Interaction and layout remain in Next.js, while Sanity owns structured, frequently changing content and media.
