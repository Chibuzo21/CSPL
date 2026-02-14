import React from "react";
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
              <div className='flex items-center mb-4'>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className='w-5 h-5 text-secondary-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                ))}
              </div>
              <p className='text-gray-700 dark:text-gray-300 mb-4 italic'>
                "{review.quote}"
              </p>
              <p className='font-semibold text-gray-900 dark:text-white'>
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
