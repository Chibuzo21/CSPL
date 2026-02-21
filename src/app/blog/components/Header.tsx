import Image from "next/image";
import React from "react";
import { urlFor } from "@/sanity/lib/image";
import { Post } from "../types";
export default function Header({ post }: Post) {
  return (
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
  );
}
