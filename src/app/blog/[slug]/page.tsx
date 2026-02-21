import { client } from "@/sanity/lib/client";
import { postQuery, commentsQuery } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Comments from "@/app/components/Comments";
import { getBookById } from "../../../../data/books";

import { VideoPlayer } from "@/app/components/videoPlayer";
import { BlogPostPageProps, PostType } from "../types";
import Header from "../components/Header";
import Content from "../components/content";
import RelatedBook from "../components/relatedBook";

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post: PostType = await client.fetch(postQuery, { slug });

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} - Dr. Chibueze Ukaegbu`,
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export const revalidate = 60;

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await client.fetch(postQuery, { slug });

  if (!post) {
    notFound();
  }

  const comments = post.enableComments
    ? await client.fetch(commentsQuery, { postId: post._id })
    : [];

  return (
    <div className='min-h-screen bg-white dark:bg-gray-900'>
      <article className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Back Button */}
        <Link
          href='/blog'
          className='inline-flex items-center text-primary-900 dark:text-primary-400 font-medium hover:underline transition-colors mb-8'>
          ← Back to blog
        </Link>

        {/* Header */}
        <Header post={post} />

        {/* Content */}
        <Content post={post} />

        {/* Related Book CTA */}
        <RelatedBook post={post} />

        {/* Comments Section */}
        {post.enableComments && (
          <Comments postId={post._id} initialComments={comments} />
        )}
      </article>
    </div>
  );
}
