import React from "react";
import { BookParams } from "./types";

export default function BookReview({ book }: BookParams) {
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
                className='bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700 hover:shadow-lg transition-all duration-300'>
                {/* Star Rating */}
                <div className='flex items-center mb-3'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? "text-secondary-500"
                          : "text-gray-300 dark:text-gray-600"
                      }`}
                      fill='currentColor'
                      viewBox='0 0 20 20'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className='text-gray-700 dark:text-gray-300 mb-3 italic leading-relaxed'>
                  "{review.text}"
                </p>

                {/* Review Author Info */}
                <div className='flex items-center text-sm text-gray-600 dark:text-gray-400'>
                  <span className='font-semibold text-gray-900 dark:text-white'>
                    {review.author}
                  </span>
                  <span className='mx-2'>•</span>
                  <span>{review.source}</span>
                  {review.verified && (
                    <>
                      <span className='mx-2'>•</span>
                      <span className='text-success-600 dark:text-success-400 flex items-center gap-1'>
                        <svg
                          className='w-4 h-4'
                          fill='currentColor'
                          viewBox='0 0 20 20'>
                          <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clipRule='evenodd'
                          />
                        </svg>
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
