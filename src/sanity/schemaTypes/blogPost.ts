import { defineField, defineType } from "sanity";
import { EditIcon, PlayIcon } from "@sanity/icons";
import { books } from "../../../data/books";
import { Book } from "../../../types/book";

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
      group: "settings",
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
      title: "Related Book",
      type: "string",
      group: "settings",
      description: "Select a book if this post is about a specific book",
      options: {
        list: books.map((book: Book) => {
          return {
            title: book.title,
            value: book.id,
          };
        }),
        layout: "dropdown",
      },
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
