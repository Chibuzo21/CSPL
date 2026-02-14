import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Author() {
  return (
    <section className='py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12'>
      <div className='md:w-1/2 flex justify-center md:justify-start'>
        <Image
          src='/author.jpg'
          alt='Author'
          width={400}
          height={400}
          className='rounded-xl shadow-lg'
        />
      </div>
      <div className='md:w-1/2 text-center md:text-left'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white'>
          Meet the Author
        </h2>
        <p className='text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'>
          Dr Chibueze Ukaegbu writes Christian books that inspire, uplift, and
          strengthen your faith. From exploring biblical principles in everyday
          life to understanding God's promises, his works guide readers to live
          purposefully and faithfully.
        </p>
        <Link
          href='/about'
          className='inline-block text-primary-900 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold hover:underline mt-2 transition-colors duration-200'>
          Learn More About the Author →
        </Link>
      </div>
    </section>
  );
}
