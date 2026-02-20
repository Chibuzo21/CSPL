import { blogPost } from "./blogPost";
import comment from "./comments";
import author from "./authorType";
import category from "./category";

import { blockContentType } from "./blockContentType";

// Wrap the array in an object with a 'types' property
export const schemaTypes = [
  blogPost,
  comment,
  author,
  category,
  blockContentType,
];
