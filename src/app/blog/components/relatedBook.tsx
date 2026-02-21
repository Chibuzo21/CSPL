import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getBookById } from "../../../../data/books";
import { Post } from "../types";

export default function RelatedBook({ post }: Post) {
  const relatedBook = post.relatedBook ? getBookById(post.relatedBook) : null;
  return (
    <div>
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
    </div>
  );
}
