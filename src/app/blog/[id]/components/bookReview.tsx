import React from "react";

export default function BookReview({ book }) {
  return (
    <>
      {book.reviews && book.reviews.length > 0 && (
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
            What Readers Are Saying
          </h2>
          <div className='grid grid-cols-1 gap-6'>
            {book.reviews.map((review) => (
              <div
                key={review.id}
                className='bg-gray-50 dark:bg-gray-800 p-6 rounded-lg'>
                <div className='flex items-center mb-3'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? "text-yellow-400"
                          : "text-gray-300 dark:text-gray-600"
                      }`}
                      fill='currentColor'
                      viewBox='0 0 20 20'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>
                <p className='text-gray-700 dark:text-gray-300 mb-3 italic'>
                  "{review.text}"
                </p>
                <div className='flex items-center text-sm text-gray-600 dark:text-gray-400'>
                  <span className='font-semibold'>{review.author}</span>
                  <span className='mx-2'>•</span>
                  <span>{review.source}</span>
                  {review.verified && (
                    <>
                      <span className='mx-2'>•</span>
                      <span className='text-green-600 dark:text-green-400'>
                        Verified Purchase
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
