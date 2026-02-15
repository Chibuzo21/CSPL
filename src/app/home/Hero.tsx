import Link from "next/link";
import Button from "../components/Button";

export default function Hero() {
  return (
    <section className='relative min-h-screen flex items-center bg-primary-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'>
      {/* Book Pages Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 35px, #000 35px, #000 36px)`,
          }}></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-14'>
        <div className='text-center'>
          {/* Opening Quote */}
          <div className='mb-8'>
            <svg
              className='w-12 h-12 mx-auto text-secondary-400 mb-4'
              fill='currentColor'
              viewBox='0 0 24 24'>
              <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
            </svg>
            <p className='text-lg md:text-xl text-blue-200 dark:text-gray-300 italic max-w-3xl mx-auto'>
              For I know the plans I have for you, declares the Lord, plans to
              prosper you and not to harm you, plans to give you hope and a
              future.
            </p>
            <p className='text-sm text-blue-300 dark:text-gray-400 mt-2'>
              — Jeremiah 29:11
            </p>
          </div>

          {/* Main Heading */}
          <h1 className='text-5xl md:text-7xl font-bold text-white dark:text-white mb-6'>
            Discover Your
            <br />
            <span className='relative inline-block'>
              <span className='text-white'>Spiritual Journey</span>
              <svg
                className='absolute -bottom-2 left-0 w-full'
                height='12'
                viewBox='0 0 300 12'
                fill='none'>
                <path
                  d='M1 9C50 3 100 1 150 3C200 5 250 7 299 9'
                  stroke='#d97706'
                  strokeWidth='3'
                  strokeLinecap='round'
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className='text-xl md:text-2xl text-blue-100 dark:text-gray-300 mb-12 max-w-3xl mx-auto'>
            Dive into inspiring Christian literature that illuminates God's word
            and transforms hearts through powerful storytelling
          </p>

          {/* CTAs */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-16'>
            <Link href='/blog'>
              <Button>
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
                Start Reading
              </Button>
            </Link>

            <Link
              href='/about'
              className='inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300'>
              About the Author
            </Link>
          </div>

          {/* Book Categories */}
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

      {/* Decorative Book Icon */}
      <div className='absolute bottom-0 right-0 w-64 h-64 opacity-5 dark:opacity-10'>
        <svg
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-full h-full text-primary-600'>
          <path d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
        </svg>
      </div>
    </section>
  );
}
