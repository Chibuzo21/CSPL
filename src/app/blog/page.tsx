import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { urlFor } from "@/sanity/lib/image";

export const metadata: Metadata = {
  title: "Blog - Dr. Chibueze Ukaegbu | Christian Insights & Faith Articles",
  description:
    "Deep dives, reflections, and insights on faith, biblical wisdom, and Christian living by Dr. Chibueze Ukaegbu.",
  keywords: [
    "Christian blog",
    "biblical insights",
    "faith articles",
    "Dr. Chibueze Ukaegbu",
    "spiritual growth",
  ],
};

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  coverImage: string;
  publishedAt: string;
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
  const posts: BlogPost[] = await client.fetch(
    postsQuery,
    {},
    { next: { tags: ["posts"] } },
  );

  return (
    <div className='min-h-screen bg-white dark:bg-gray-900'>
      {/* Hero Section */}
      <div className='bg-linear-to-b from-primary-900 to-primary-800 text-white py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-5xl md:text-6xl font-bold mb-6'>
            Blog & Insights
          </h1>
          <p className='text-xl text-blue-100 max-w-3xl mx-auto'>
            Deep dives into Scripture, reflections on faith, and insights on
            living a Christ-centered life
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {posts.length === 0 ? (
          <div className='text-center py-12'>
            <p className='text-xl text-gray-600 dark:text-gray-400'>
              No blog posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className='group'>
                <article className='bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700 hover:shadow-xl transition-all duration-300'>
                  {/* Cover Image */}
                  {post.coverImage && (
                    <div className='relative h-48 bg-gray-200 dark:bg-gray-700'>
                      <Image
                        src={urlFor(post.coverImage)
                          .width(800)
                          .height(450)
                          .url()}
                        alt={post.title}
                        fill
                        className='object-cover group-hover:scale-105 transition-transform duration-300'
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className='p-6'>
                    {/* Title */}
                    <h2 className='text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-900 dark:group-hover:text-primary-400 transition-colors line-clamp-2'>
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    {post.excerpt && (
                      <p className='text-gray-600 dark:text-gray-400 mb-4 line-clamp-3'>
                        {post.excerpt}
                      </p>
                    )}

                    {/* Meta */}
                    <div className='flex items-center  gap-4 text-sm text-gray-500 dark:text-gray-500'>
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          },
                        )}
                      </time>

                      <span>Dr. Chibueze Ukaegbu</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
