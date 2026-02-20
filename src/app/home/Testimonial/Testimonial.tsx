import React from "react";
import Image from "next/image";
import { testimonialList } from "./data";

export default function Testimonial() {
  return (
    <section className='bg-gray-50 dark:bg-gray-900 py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
            What Readers Are Saying
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-400'>
            Faithful readers share how these books have impacted their spiritual
            journey.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonialList.map((review, idx) => (
            <div
              key={idx}
              className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700 hover:shadow-lg transition-all duration-300'>
              {/* Reviewer Image & Info */}
              <div className='flex items-center gap-4 mb-4'>
                <div className='relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary-200 dark:border-primary-700'>
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className='object-cover'
                  />
                </div>
                <div>
                  <p className='font-semibold text-gray-900 dark:text-white'>
                    {review.name}
                  </p>
                </div>
              </div>

              {/* Quote Icon */}
              <div className='mb-3'>
                <svg
                  className='w-8 h-8 text-primary-200 dark:text-primary-800'
                  fill='currentColor'
                  viewBox='0 0 24 24'>
                  <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
                </svg>
              </div>

              {/* Review Text */}
              <p className='text-gray-700 dark:text-gray-300 mb-4 italic leading-relaxed'>
                "{review.quote}"
              </p>

              {/* Book Referenced */}
              <div className='pt-4 border-t border-gray-200 dark:border-gray-700'>
                <p className='text-sm text-primary-900 dark:text-primary-400 font-semibold'>
                  📖 {review.book}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
