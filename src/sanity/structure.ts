import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
import { BookIcon, EditIcon } from "@sanity/icons";

export const structure = (S: any) =>
  S.list()
    .title("Website Content")
    .items([
      S.listItem()
        .title("Blog Posts")
        .icon(EditIcon)
        .child(S.documentTypeList("blogPost").title("All Posts")),

      // S.listItem()
      //   .title("Books")
      //   .icon(BookIcon)
      //   .child(S.documentTypeList("book").title("Library")),

      S.divider(), // Adds a visual line

      // Filter out the technical stuff you don't want them to see
      ...S.documentTypeListItems().filter(
        (item: any) =>
          !["blogPost", "book", "media.tag"].includes(item.getId()),
      ),
    ]);
