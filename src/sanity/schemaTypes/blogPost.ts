import { defineField, defineType } from "sanity";
import { EditIcon, CogIcon, PlayIcon } from "@sanity/icons";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  icon: EditIcon,
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "settings", title: "Settings & SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      group: "settings", // Moved to settings to keep content clean
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      type: "text",
      group: "content",
      rows: 3,
      description: "A short summary for the homepage.",
    }),
    defineField({
      name: "coverImage",
      type: "image",
      group: "content",
      options: { hotspot: true },
    }),
    defineField({
      name: "content",
      title: "Body Content",
      type: "array",
      group: "content",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
        {
          name: "youtube",
          type: "object",
          title: "Video Link (YouTube/Vimeo)",
          icon: PlayIcon,
          fields: [
            {
              name: "url",
              type: "url",
              title: "URL",
              // Move the validation HERE, where the URL actually lives
              validation: (Rule) =>
                Rule.custom((url) => {
                  if (!url) return true;
                  const urlString = String(url).toLowerCase();
                  const isVideo =
                    urlString.includes("youtube.com") ||
                    urlString.includes("youtu.be") ||
                    urlString.includes("vimeo.com") ||
                    urlString.endsWith(".mp4");
                  return isVideo
                    ? true
                    : "Please use a valid YouTube or Vimeo link.";
                }),
            },
          ],
        },
        {
          name: "video",
          type: "file",
          title: "Video Upload (Direct)",
          options: { accept: "video/*" },
          fields: [{ name: "caption", type: "string", title: "Caption" }],
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      group: "settings",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "relatedBook",
      type: "string",
      group: "settings",
      description: "e.g., kingdom-driven-business",
    }),
    defineField({
      name: "enableComments",
      type: "boolean",
      group: "settings",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "title", media: "coverImage" },
  },
});
