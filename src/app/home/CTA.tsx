import Link from "next/link";
import React from "react";

export default function CTA() {
  return (
    <section className='py-10 bg-primary-900 dark:bg-gray-900 text-white'>
      <div className='max-w-4xl mx-auto px-4 text-center rounded-2xl py-16'>
        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
          Ready to Start Reading?
        </h2>
        <p className='text-xl text-blue-100 dark:text-gray-300 mb-8 max-w-2xl mx-auto'>
          Browse the complete collection and find your next favorite book. Free
          previews available for all titles.
        </p>
        <Link
          href='/blog'
          className='inline-block bg-secondary-600 hover:bg-secondary-700 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl'>
          Explore All Books →
        </Link>
      </div>
    </section>
  );
}
