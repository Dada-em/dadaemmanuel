import { defineArrayMember, defineField, defineType } from "sanity";
import { siteContentInitialValue } from "../content";

const textArray = defineArrayMember({ type: "string" });

export const siteContent = defineType({
  name: "siteContent",
  title: "Site Content",
  type: "document",
  groups: [
    { name: "seo", title: "SEO" },
    { name: "hero", title: "Homepage Hero" },
    { name: "profile", title: "About & Profile" },
    { name: "projectsPage", title: "Projects Page" },
    { name: "capabilities", title: "Capabilities" },
    { name: "contact", title: "Contact" },
    { name: "footer", title: "Footer" },
  ],
  fields: [
    defineField({
      name: "seo",
      type: "object",
      group: "seo",
      fields: [
        defineField({
          name: "title",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "description",
          type: "text",
          rows: 3,
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "hero",
      type: "object",
      group: "hero",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headlinePrefix", title: "Headline (before accent)", type: "string" }),
        defineField({ name: "headlineAccent", title: "Headline accent", type: "string" }),
        defineField({ name: "headlineSuffix", title: "Headline (after accent)", type: "string" }),
        defineField({ name: "description", type: "text", rows: 3 }),
        defineField({
          name: "cvUrl",
          title: "CV link",
          type: "url",
          validation: (rule) => rule.uri({ scheme: ["http", "https"] }),
        }),
        defineField({ name: "workLinkLabel", type: "string" }),
        defineField({ name: "cvLinkLabel", type: "string" }),
        defineField({
          name: "stats",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "value", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "label", type: "string", validation: (rule) => rule.required() }),
              ],
              preview: { select: { title: "value", subtitle: "label" } },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "profile",
      type: "object",
      group: "profile",
      fields: [
        defineField({ name: "name", type: "string", validation: (rule) => rule.required() }),
        defineField({ name: "aboutEyebrow", title: "About section label", type: "string" }),
        defineField({ name: "aboutHeadlinePrefix", title: "About heading (before accent)", type: "string" }),
        defineField({ name: "aboutHeadlineAccent", title: "About heading accent", type: "string" }),
        defineField({ name: "aboutHeadlineSuffix", title: "About heading (after accent)", type: "string" }),
        defineField({ name: "bio", type: "text", rows: 5 }),
        defineField({
          name: "photo",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alternative Text",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
        }),
        defineField({ name: "photoAlt", title: "Profile photo alternative text", type: "string" }),
        defineField({ name: "availability", type: "string" }),
        defineField({ name: "cgpa", type: "string" }),
        defineField({ name: "cgpaScale", title: "CGPA scale", type: "string" }),
        defineField({ name: "degree", type: "string" }),
        defineField({ name: "experienceYears", title: "Years of experience", type: "string" }),
        defineField({ name: "experienceLabel", title: "Experience description", type: "string" }),
        defineField({
          name: "credentials",
          type: "array",
          of: [textArray],
        }),
        defineField({ name: "credentialsHeading", type: "string" }),
        defineField({
          name: "toolGroups",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "category", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "tools", type: "array", of: [textArray] }),
              ],
              preview: { select: { title: "category" } },
            }),
          ],
        }),
        defineField({ name: "toolsHeading", type: "string" }),
        defineField({
          name: "workPhoto",
          title: "Work photo",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alternative Text",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
        }),
        defineField({ name: "workPhotoAlt", title: "Work photo alternative text", type: "string" }),
        defineField({ name: "workCaption", type: "string" }),
        defineField({ name: "ctaTitle", title: "About section call to action title", type: "string" }),
        defineField({ name: "ctaDescription", title: "About section call to action description", type: "text", rows: 3 }),
        defineField({ name: "ctaButtonLabel", title: "About section call to action button", type: "string" }),
      ],
    }),
    defineField({
      name: "projectsPage",
      title: "Projects Page",
      type: "object",
      group: "projectsPage",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headlinePrefix", title: "Heading (before accent)", type: "string" }),
        defineField({ name: "headlineAccent", title: "Heading accent", type: "string" }),
      ],
    }),
    defineField({
      name: "capabilitiesSection",
      title: "Capabilities Section Text",
      type: "object",
      group: "capabilities",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headlinePrefix", title: "Heading (before accent)", type: "string" }),
        defineField({ name: "headlineAccent", title: "Heading accent", type: "string" }),
        defineField({ name: "description", type: "text", rows: 3 }),
        defineField({ name: "deliverablesLabel", type: "string" }),
        defineField({ name: "ctaLabel", type: "string" }),
        defineField({ name: "responseTime", type: "string" }),
      ],
    }),
    defineField({
      name: "capabilities",
      type: "array",
      group: "capabilities",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "id",
              type: "slug",
              options: { source: "title", maxLength: 64 },
              validation: (rule) => rule.required(),
            }),
            defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "shortDesc", title: "Short description", type: "string" }),
            defineField({ name: "fullDesc", title: "Full description", type: "text", rows: 4 }),
            defineField({ name: "deliverables", type: "array", of: [textArray] }),
          ],
          preview: {
            select: { title: "title" },
          },
        }),
      ],
    }),
    defineField({
      name: "contact",
      type: "object",
      group: "contact",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headingPrefix", type: "string" }),
        defineField({ name: "headingAccent", title: "Highlighted heading text", type: "string" }),
        defineField({ name: "description", type: "text", rows: 3 }),
        defineField({ name: "responseTime", type: "string" }),
        defineField({
          name: "email",
          type: "string",
          validation: (rule) => rule.email(),
        }),
        defineField({ name: "phone", type: "string" }),
        defineField({ name: "location", type: "string" }),
        defineField({
          name: "socialLinks",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "label", type: "string", validation: (rule) => rule.required() }),
                defineField({
                  name: "href",
                  type: "url",
                  validation: (rule) =>
                    rule.uri({ scheme: ["http", "https"] }).required(),
                }),
              ],
              preview: { select: { title: "label", subtitle: "href" } },
            }),
          ],
        }),
        defineField({ name: "socialHeading", type: "string" }),
        defineField({ name: "availability", type: "string" }),
      ],
    }),
    defineField({
      name: "footer",
      type: "object",
      group: "footer",
      fields: [
        defineField({ name: "ctaTitle", type: "string" }),
        defineField({ name: "ctaDescription", type: "text", rows: 2 }),
        defineField({ name: "ctaButtonLabel", type: "string" }),
        defineField({ name: "summary", type: "text", rows: 3 }),
        defineField({ name: "navigationHeading", type: "string" }),
        defineField({ name: "capabilitiesHeading", type: "string" }),
        defineField({ name: "contactHeading", type: "string" }),
        defineField({ name: "copyrightYear", type: "string" }),
        defineField({ name: "copyrightName", type: "string" }),
      ],
    }),
  ],
  initialValue: siteContentInitialValue,
});
