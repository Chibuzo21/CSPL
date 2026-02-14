import React from "react";

export default function BookHeader({ book }) {
  return (
    <div className='mb-12'>
      <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
        {book.title}
      </h1>
      <p className='text-xl text-gray-600 dark:text-gray-400 mb-4'>
        by {book.author}
      </p>
      <div className='flex flex-wrap gap-2 mb-6'>
        {book.genre.map((genre) => (
          <span
            key={genre}
            className='px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full'>
            {genre}
          </span>
        ))}
      </div>
      <p className='text-lg text-gray-700 dark:text-gray-300 mb-6'>
        {book.description}
      </p>

      {/* Amazon CTA */}
      <a
        href={book.amazonLink}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg'>
        Buy on Amazon
      </a>
    </div>
  );
}
