import React from "react";
import SocialMedia from "./SocialMedia";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className='border-t border-gray-200 dark:border-gray-800 mt-16 bg-gray-100 dark:bg-gray-800'>
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
                <Link
                  href='/'
                  className='text-primary-900 dark:text-primary-400 font-medium hover:underline transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/books'
                  className='text-primary-900 dark:text-primary-400 font-medium hover:underline transition-colors'>
                  All Books
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='text-primary-900 dark:text-primary-400 font-medium hover:underline transition-colors'>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-primary-900 dark:text-primary-400 font-medium hover:underline transition-colors'>
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/faq'
                  className='text-primary-900 dark:text-primary-400 font-medium hover:underline transition-colors'>
                  FAQ
                </Link>
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
                <Link
                  href='/contact'
                  className='text-primary-900 dark:text-primary-400 font-medium hover:underline transition-colors'>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href='mailto:uchibueze@chibuezeukaegbu.com'
                  className='text-primary-900 dark:text-primary-400 font-medium hover:underline transition-colors'>
                  Email
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col lg:flex-row justify-between gap-2  text-gray-600 dark:text-gray-400 text-sm'>
          <p className=''>
            © {new Date().getFullYear()} Chibueze Ukaegbu. All rights reserved.
          </p>
          <div className='flex gap-6 text-sm items-center'>
            <Link
              href='/privacy-policy'
              className='hover:text-primary-900 dark:hover:text-primary-400 transition-colors'>
              Privacy Policy
            </Link>
            <Link
              href='/terms'
              className='hover:text-primary-900 dark:hover:text-primary-400 transition-colors'>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
