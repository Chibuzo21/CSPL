import React from "react";

export default function ReadMore({ book }) {
  return (
    <div className='border-t border-gray-200 dark:border-gray-800 pt-12 text-center'>
      <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
        Want to read more?
      </h3>
      <p className='text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto'>
        Continue this gripping story by purchasing the full book on Amazon.
      </p>
      <a
        href={book.amazonLink}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg'>
        Get the Full Book on Amazon
      </a>
    </div>
  );
}
