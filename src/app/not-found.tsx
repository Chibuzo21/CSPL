import Link from "next/link";

export default function NotFound() {
  return (
    <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center'>
      <h1 className='text-6xl font-bold text-gray-900 dark:text-white mb-4'>
        404
      </h1>
      <h2 className='text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-8'>
        Book Not Found
      </h2>
      <p className='text-gray-600 dark:text-gray-400 mb-8'>
        Sorry, we couldn't find the book you're looking for.
      </p>
      <Link
        href='/books'
        className='inline-block bg-primary-900 hover:bg-primary-800 text-white font-bold px-8 py-3 rounded-lg transition-colors duration-200'>
        Back to books
      </Link>
    </div>
  );
}
