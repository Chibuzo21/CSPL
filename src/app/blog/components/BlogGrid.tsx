import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "../types";
import { urlFor } from "@/sanity/lib/image";
import { iBookGridParams } from "@/app/books/components/types";
import { BOOKS_PER_PAGE } from "@/app/books/components/bookGrid2";

export default function BlogGrid({
  filteredBooks,
  currentPage,
}: iBookGridParams) {
  const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
  const endIndex = startIndex + BOOKS_PER_PAGE;
  const currentPosts = filteredBooks.slice(startIndex, endIndex) as BlogPost[];
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {currentPosts.map((post) => (
        <Link
          key={post._id}
          href={`/blog/${post.slug.current}`}
          className='group'>
          <article className='bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700 hover:shadow-xl transition-all duration-300 flex flex-col h-105 '>
            {/* Cover Image */}
            {post.coverImage && (
              <div className='relative h-48 bg-gray-200 dark:bg-gray-700'>
                <Image
                  src={urlFor(post.coverImage).width(800).height(450).url()}
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
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>

                <span>Dr. Chibueze Ukaegbu</span>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
