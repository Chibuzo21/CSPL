import Link from "next/link";
import React from "react";
import { books } from "../../../data/books";
import Image from "next/image";

export default function BookGrid() {
  const featuredBooks = books.slice(0, 3);
  return (
    <section className='py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
          Featured Books
        </h2>
        <p className='text-lg text-gray-600 dark:text-gray-400'>
          Start your journey with these reader favorites
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {featuredBooks.map((book) => (
          <Link
            key={book.id}
            href={`/books/${book.id}`}
            className='group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-700 border border-transparent transition-all duration-300'>
            <div className='relative h-96 bg-gray-200 dark:bg-gray-700'>
              <div className='absolute inset-0 flex items-center justify-center text-gray-400'>
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className=''
                />
              </div>
            </div>
            <div className='p-6'>
              <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-900 dark:group-hover:text-primary-400 transition-colors'>
                {book.title}
              </h3>
              <p className='text-sm text-gray-500 dark:text-gray-400 mb-3'>
                by {book.author}
              </p>
              <p className='text-gray-600 dark:text-gray-300 mb-4 line-clamp-3'>
                {book.description}
              </p>
              <div className='text-primary-900 dark:text-primary-400 font-medium group-hover:underline transition-colors'>
                Read Preview →
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className='text-center mt-12'>
        <Link
          href='/books'
          className='inline-block text-primary-900 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:underline font-semibold text-lg transition-colors duration-200'>
          View All Books →
        </Link>
      </div>
    </section>
  );
}
