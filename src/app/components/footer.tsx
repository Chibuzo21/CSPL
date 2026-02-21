import React from "react";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <footer className='border-t border-gray-200 dark:border-gray-800 mt-16 bg-gray-50 dark:bg-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
          <div className='md:col-span-2'>
            <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-4'>
              Dr Chibueze Ukaegbu
            </h3>
            <p className='text-gray-600 dark:text-gray-400 mb-4 max-w-md'>
              Inspiring readers through powerful stories of faith, hope, and
              redemption. Discover books that touch hearts and transform lives.
            </p>

            <SocialMedia />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-4'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='/'
                  className='text-primary-900 dark:text-primary-400 font-medium hover:underline transition-colors'>
                  Home
                </a>
              </li>
              <li>
                <a
                  href='/books'
                  className='text-primary-900 dark:text-primary-400 font-medium hover:underline transition-colors'>
                  All Books
                </a>
              </li>
              <li>
                <a
                  href='/about'
                  className='text-primary-900 dark:text-primary-400 font-medium hover:underline transition-colors'>
                  About
                </a>
              </li>
              <li>
                <a
                  href='/faq'
                  className='text-primary-900 dark:text-primary-400 font-medium hover:underline transition-colors'>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-4'>
              Get in Touch
            </h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='/contact'
                  className='text-primary-900 dark:text-primary-400 font-medium hover:underline transition-colors'>
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href='mailto:uchibueze@cspl.com'
                  className='text-primary-900 dark:text-primary-400 font-medium hover:underline transition-colors'>
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-200 dark:border-gray-800 pt-8'>
          <p className='text-center text-gray-600 dark:text-gray-400 text-sm'>
            © {new Date().getFullYear()} Chibueze Ukaegbu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
