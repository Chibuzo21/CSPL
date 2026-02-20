import { groq } from "next-sanity";

export const postsQuery = groq`
  *[_type == "blogPost" && defined(publishedAt)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    "coverImage": coverImage.asset->url,
    publishedAt,
    enableComments
  }
`;

export const postQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    "coverImage": coverImage,
     content[]{
      ...,
      _type == "image" => {
        ...,
        "asset": asset->{url}
      },
      _type == "video" => {
        ...,
        "asset": asset->{url, originalFilename, size}
      }
    },
    publishedAt,
    relatedBook,
    enableComments
  }
`;

export const commentsQuery = groq`
  *[_type == "comment" && post._ref == $postId && approved == true] | order(createdAt desc) {
    _id,
    name,
    content,
    createdAt
  }
`;
