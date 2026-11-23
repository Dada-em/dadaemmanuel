import { defineArrayMember, defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  orderings: [
    {
      title: "Display order",
      name: "sortOrderAsc",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "period", type: "string" }),
    defineField({
      name: "status",
      type: "string",
      options: {
        list: [
          { title: "Live", value: "Live" },
          { title: "In Development", value: "In Development" },
          { title: "Completed", value: "Completed" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "tagline", type: "string" }),
    defineField({
      name: "summary",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "mainImage",
      title: "Card image",
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
    defineField({ name: "overview", type: "text", rows: 5 }),
    defineField({ name: "challenge", type: "text", rows: 5 }),
    defineField({
      name: "approach",
      type: "array",
      of: [defineArrayMember({ type: "text", rows: 3 })],
    }),
    defineField({
      name: "outcomes",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "links",
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
        }),
      ],
    }),
    defineField({
      name: "gallery",
      type: "array",
      of: [
        defineArrayMember({
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
      ],
    }),
    defineField({
      name: "sortOrder",
      type: "number",
      initialValue: 0,
      validation: (rule) => rule.required().integer(),
    }),
    defineField({
      name: "visible",
      type: "boolean",
      title: "Show on portfolio",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "status", media: "mainImage" },
  },
});
