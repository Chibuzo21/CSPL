import { Metadata } from "next";

import AllBooks from "./components/AllBooks";

export const metadata: Metadata = {
  title: "Christian Books by Dr. Chibueze Ukaegbu - Faith-Based Literature",
  description:
    "Discover inspiring Christian books by Dr. Chibueze Ukaegbu. Biblical fiction, devotionals, spiritual growth guides, and faith-building literature. Read previews and find your next transformative read.",
  keywords: [
    "Christian books",
    "Christian author",
    "biblical fiction",
    "devotional books",
    "spiritual growth",
    "faith-based literature",
    "Christian living",
    "inspirational books",
    "Dr. Chibueze Ukaegbu",
    "Nigerian Christian author",
    "faith and spirituality",
    "Christian literature",
    "religious books",
    "spiritual journey",
    "Christian faith",
  ],
};

export default function BooksPage() {
  return (
    <div className='min-h-screen bg-linear-to-b from-primary-900 via-primary-800 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900'>
      {/* Hero Section */}
      <div className='relative overflow-hidden'>
        {/* Background Pattern */}
        <div className='absolute inset-0 opacity-10'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 35px, #ffffff 35px, #ffffff 36px)`,
            }}
          />
        </div>

        {/* Content */}
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28'>
          <div className='text-center'>
            {/* Badge */}
            <div className='inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6'>
              <span className='text-blue-200 dark:text-gray-300 text-sm font-medium'>
                📚 15+ Transformative Books
              </span>
            </div>

            {/* Main Heading */}
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6 leading-tight'>
              Books That
              <br />
              <span className='relative inline-block'>
                <span className='bg-linear-to-r from-secondary-400 via-secondary-300 to-secondary-400 bg-clip-text text-transparent'>
                  Illuminate Faith
                </span>
                <svg
                  className='absolute -bottom-2 left-0 w-full'
                  height='12'
                  viewBox='0 0 300 12'
                  fill='none'>
                  <path
                    d='M1 9C50 3 100 1 150 3C200 5 250 7 299 9'
                    stroke='#fbbf24'
                    strokeWidth='3'
                    strokeLinecap='round'
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className='text-xl md:text-2xl text-blue-100 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed'>
              Discover biblical wisdom through engaging narratives. Each book is
              crafted to strengthen your walk with Christ and deepen your
              understanding of God's word.
            </p>

            {/* Stats */}
            <div className='flex flex-wrap justify-center gap-8 mb-12'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-white mb-1'>15+</div>
                <div className='text-blue-200 dark:text-gray-400 text-sm'>
                  Published Books
                </div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-white mb-1'>50K+</div>
                <div className='text-blue-200 dark:text-gray-400 text-sm'>
                  Readers Inspired
                </div>
              </div>
              <div className='text-3xl font-bold text-white mx-4'>✝️</div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-white mb-1'>4.8★</div>
                <div className='text-blue-200 dark:text-gray-400 text-sm'>
                  Average Rating
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className='flex flex-wrap justify-center gap-3'>
              <span className='px-4 py-2 bg-white/10 backdrop-blur-sm dark:bg-gray-800 rounded-full text-sm font-medium text-white dark:text-gray-300 shadow-sm border border-white/20'>
                📖 Biblical Fiction
              </span>
              <span className='px-4 py-2 bg-white/10 backdrop-blur-sm dark:bg-gray-800 rounded-full text-sm font-medium text-white dark:text-gray-300 shadow-sm border border-white/20'>
                ✝️ Devotionals
              </span>
              <span className='px-4 py-2 bg-white/10 backdrop-blur-sm dark:bg-gray-800 rounded-full text-sm font-medium text-white dark:text-gray-300 shadow-sm border border-white/20'>
                🙏 Spiritual Growth
              </span>
              <span className='px-4 py-2 bg-white/10 backdrop-blur-sm dark:bg-gray-800 rounded-full text-sm font-medium text-white dark:text-gray-300 shadow-sm border border-white/20'>
                💒 Christian Living
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
          <svg
            className='w-6 h-6 text-white/50'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 14l-7 7m0 0l-7-7m7 7V3'
            />
          </svg>
        </div>
      </div>

      {/* Books Grid Section */}
      <div className='bg-white dark:bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          {/* Section Header */}
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
              Browse the Collection
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
              Each book offers a unique perspective on faith, drawing from
              biblical principles and real-world experiences.
            </p>
          </div>

          <AllBooks />
        </div>
      </div>
    </div>
  );
}
