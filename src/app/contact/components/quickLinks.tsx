import React from "react";

export default function QuickLinks() {
  return (
    <div className='bg-primary-900 dark:bg-gray-800 rounded-lg shadow-md p-6'>
      <h3 className='text-xl font-bold text-white dark:text-white mb-4'>
        Quick Links
      </h3>
      <ul className='space-y-3'>
        <li>
          <a
            href='/faq'
            className='text-white dark:text-primary-400 font-medium group-hover:underline transition-colors flex items-center'>
            <svg
              className='w-5 h-5 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            Visit our FAQ page
          </a>
        </li>
        <li>
          <a
            href='/blog'
            className='text-white dark:text-primary-400 font-medium group-hover:underline transition-colors flex items-center'>
            <svg
              className='w-5 h-5 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
              />
            </svg>
            Browse all books
          </a>
        </li>
        <li>
          <a
            href='/about'
            className='text-white dark:text-primary-400 font-medium group-hover:underline transition-colors flex items-center'>
            <svg
              className='w-5 h-5 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
            About the author
          </a>
        </li>
      </ul>
    </div>
  );
}
