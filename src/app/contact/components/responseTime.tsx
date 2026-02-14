import React from "react";

export default function ResponseTime() {
  return (
    <div className='bg-primary-50 dark:bg-primary-900 rounded-lg p-6'>
      <div className='flex items-start'>
        <svg
          className='w-6 h-6 text-primary-600 dark:text-primary-400 mt-1 mr-3'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        <div>
          <h4 className='font-bold text-gray-900 dark:text-white mb-1'>
            Response Time
          </h4>
          <p className='text-sm text-gray-700 dark:text-gray-300'>
            We typically respond to inquiries within 24-48 hours during business
            days.
          </p>
        </div>
      </div>
    </div>
  );
}
