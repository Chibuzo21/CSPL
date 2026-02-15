import Image from "next/image";
import Link from "next/link";
import { iBookGridParams } from "./types";
import Pagination from "./Pagination";

const BOOKS_PER_PAGE = 6;
export default function BookGrid2({
  handleSearch,
  filteredBooks,
  searchQuery,
  currentPage,
  setCurrentPage,
}: iBookGridParams) {
  const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
  const endIndex = startIndex + BOOKS_PER_PAGE;
  const currentBooks = filteredBooks.slice(startIndex, endIndex);
  return (
    <div>
      {currentBooks.length > 0 ? (
        <>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
            {currentBooks.map((book) => (
              <Link
                key={book.id}
                href={`/blog/${book.id}`}
                className='group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-700 border border-transparent transition-all duration-300'>
                <div className='relative h-96 bg-gray-200 dark:bg-gray-700'>
                  <div className='absolute inset-0 flex items-center justify-center text-gray-400'>
                    <Image
                      src={book.coverImage}
                      alt={book.title}
                      fill
                      className='object-cover'
                    />
                  </div>
                </div>
                <div className='p-6'>
                  <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-900 dark:group-hover:text-primary-400 transition-colors'>
                    {book.title}
                  </h3>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-3'>
                    by {book.author}
                  </p>
                  <p className='text-gray-600 dark:text-gray-300 mb-4 line-clamp-3'>
                    {book.description}
                  </p>
                  <div className='text-primary-900 dark:text-primary-400 font-medium group-hover:underline transition-colors'>
                    Read Preview →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            filteredBooks={filteredBooks}
            BOOKS_PER_PAGE={BOOKS_PER_PAGE}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        /* No Results */
        <div className='text-center py-12'>
          <svg
            className='mx-auto h-16 w-16 text-gray-400 mb-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
            No books found
          </h3>
          <p className='text-gray-600 dark:text-gray-400 mb-6'>
            We couldn't find any books matching "{searchQuery}"
          </p>
          <button
            onClick={() => handleSearch("")}
            className='bg-primary-900 hover:bg-primary-800 text-white font-medium px-6 py-2 rounded-lg transition-colors'>
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
}
