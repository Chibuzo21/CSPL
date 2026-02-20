import { defineField, defineType } from "sanity";

export default defineType({
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    defineField({
      name: "post",
      title: "Blog Post",
      type: "reference",
      to: [{ type: "blogPost" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "content",
      title: "Comment",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required().min(10).max(1000),
    }),
    defineField({
      name: "approved",
      title: "Approved",
      type: "boolean",
      initialValue: false,
      description: "Comments must be approved before appearing on site",
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      name: "name",
      comment: "content",
      approved: "approved",
    },
    prepare(selection) {
      const { name, comment, approved } = selection;
      return {
        title: `${name} ${approved ? "✅" : "⏳"}`,
        subtitle: comment?.substring(0, 50) + "...",
      };
    },
  },
});
