import { client } from "@/sanity/lib/client";
import { postQuery, commentsQuery } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Comments from "@/app/components/Comments";
import { getBookById } from "../../../../data/books";
import { urlFor } from "@/sanity/lib/image";
import { VideoPlayer } from "@/app/components/videoPlayer";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await client.fetch(postQuery, { slug });

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

  const relatedBook = post.relatedBook ? getBookById(post.relatedBook) : null;

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
        <header className='mb-12'>
          {/* Cover Image */}
          {post.coverImage && (
            <div className='relative h-96 rounded-xl overflow-hidden mb-8 bg-gray-200 dark:bg-gray-700'>
              <Image
                src={urlFor(post.coverImage).width(800).height(450).url()}
                alt={post.title}
                fill
                className='object-cover'
                priority
              />
            </div>
          )}

          {/* Title */}
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
            {post.title}
          </h1>

          {/* Meta */}
          <div className='flex items-center gap-4 text-gray-600 dark:text-gray-400'>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </header>

        {/* Content */}
        <div className='prose prose-lg dark:prose-invert max-w-none mb-12'>
          <PortableText
            value={post.content}
            components={{
              types: {
                image: ({ value }: any) => (
                  <div className='relative h-96 my-8 rounded-lg overflow-hidden'>
                    <Image
                      src={value.asset.url}
                      alt={value.alt || "Blog image"}
                      fill
                      className='object-cover'
                    />
                  </div>
                ),
                youtube: ({ value }: any) => <VideoPlayer value={value} />,
                video: ({ value }: any) => <VideoPlayer value={value} />,
              },
            }}
          />
        </div>

        {/* Related Book CTA */}
        {relatedBook && (
          <div className='my-12 p-8 bg-primary-50 dark:bg-gray-800 rounded-xl border border-primary-200 dark:border-gray-700'>
            <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              This post references:
            </h3>
            <div className='flex flex-col sm:flex-row gap-6'>
              {relatedBook.coverImage && (
                <Image
                  src={relatedBook.coverImage}
                  alt={relatedBook.title}
                  width={150}
                  height={225}
                  className='rounded-lg shadow-lg'
                />
              )}
              <div>
                <h4 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                  {relatedBook.title}
                </h4>
                <p className='text-gray-700 dark:text-gray-300 mb-4'>
                  {relatedBook.description}
                </p>
                <Link
                  href={`/books/${relatedBook.id}`}
                  className='inline-block bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200'>
                  View Book →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Comments Section */}
        {post.enableComments && (
          <Comments postId={post._id} initialComments={comments} />
        )}
      </article>
    </div>
  );
}
