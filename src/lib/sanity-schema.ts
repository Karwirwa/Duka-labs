// Drop this into your Sanity Studio's schemas folder
// e.g. schemas/project.ts

export const projectSchema = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "Management System",
          "Ecommerce",
          "Network Management",
          "Mobile Platform",
          "SaaS Solution",
          "Enterprise System",
          "Automation",
        ],
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "tags",
      title: "Tech Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "features",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "projectUrl",
      title: "Live Project URL",
      type: "url",
    },
    {
      name: "caseStudyUrl",
      title: "Case Study URL",
      type: "url",
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
    },
  ],
};
