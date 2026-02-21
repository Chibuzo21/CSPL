export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  coverImage: string;
  publishedAt: string;
}

export interface BlogPostPageProps {
  params: {
    slug: string;
  };
}
export interface PostType {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  coverImage: string;
  content: ContentBlock[];
  publishedAt: string;
  relatedBook: string;
  enableComments: boolean;
}

export interface ContentBlock {
  _type: string;
  _key: string;
  image?: string;
  video?: string;
  youtube?: string;
}
export type Post = {
  post: PostType;
};
