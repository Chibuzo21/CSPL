import { Metadata } from "next";
import Image from "next/image";
import SocialMedia from "../components/SocialMedia";
import { books } from "../../../data/books";

export const metadata: Metadata = {
  title: "About Dr. Chibueze Ukaegbu",
  description:
    "Learn more about the life, career, and spiritual journey of Dr. Chibueze Ukaegbu.",
};

export default function AboutPage() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <section className='flex flex-col lg:flex-row gap-12 lg:items-center mb-16'>
        {/* IMAGE CONTAINER: Larger on Desktop, Hero-style on Mobile */}
        <div className='w-full lg:w-1/2'>
          <Image
            src='/author.jpg'
            alt='Dr. Chibueze Ukaegbu portrait'
            width={1200}
            height={1500}
            sizes='(max-width: 1024px) 100vw, 50vw'
            priority
            className='rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-white dark:border-gray-800'
          />
        </div>

        {/* INTRO TEXT: Balanced with the large image */}
        <div className='w-full lg:w-1/2'>
          <h1 className='text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6'>
            Dr. Chibueze Ukaegbu
          </h1>
          <p className='text-xl text-primary-900 dark:text-primary-400 font-semibold mb-6'>
            Chemical Engineer, Management Scientist & Author
          </p>
          <div className='prose prose-lg dark:prose-invert'>
            <p>
              A graduate of the prestigious{" "}
              <strong>Imperial College, London</strong>, Dr. Ukaegbu has spent
              his life bridging the gap between professional excellence and
              spiritual devotion. After a 21-year career in the Abia State Civil
              Service, retiring as a Permanent Secretary, he now focuses his
              energy on building the Church through literature.
            </p>
          </div>
        </div>
      </section>

      {/* FULL WIDTH CONTENT BELOW FOR READABILITY */}
      <article className='prose prose-lg dark:prose-invert max-w-none border-t border-gray-200 dark:border-gray-800 pt-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              A Life of Service
            </h2>
            <p className='text-gray-700 dark:text-gray-300'>
              Since 1970, Dr. Ukaegbu's life has revolved around{" "}
              <strong>Christ and the Church</strong>. His career in the public
              sector was marked by "meritorious service," culminating in his
              2006 appointment as Permanent Secretary. He is a Fellow of the
              Nigerian Institute of Management and a Consultant Management
              Scientist.
            </p>
            <p className='text-gray-700 dark:text-gray-300'>
              He is happily married with six children and nine grandchildren,
              all of whom serve the Lord in various capacities across the globe.
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              Bibliography
            </h2>
            <ul className='space-y-3 list-none pl-0'>
              {books.map((book, index) => (
                <li
                  key={index}
                  className='flex gap-3 text-gray-700 dark:text-gray-300 items-start hover:text-primary-900 dark:hover:text-primary-400 transition-colors duration-200'>
                  <span className='bg-primary-50 dark:bg-primary-900/20 text-primary-900 dark:text-primary-300 px-2 py-0.5 rounded text-sm font-bold flex-shrink-0'>
                    {index + 1}
                  </span>
                  <span className='italic'>{book.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='mt-16 p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 text-center'>
          <h2 className='text-2xl font-bold text-gray-900 dark:text-white mt-0 mb-3'>
            Connect with Dr. Ukaegbu
          </h2>
          <p className='text-gray-600 dark:text-gray-400 mb-6'>
            Stay updated on new releases and exclusive content.
          </p>
          <div className='flex justify-center not-prose'>
            <SocialMedia />
          </div>
        </div>
      </article>
    </div>
  );
}
