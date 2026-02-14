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
                className='group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300'>
                <div className='relative h-96 bg-gray-200 dark:bg-gray-700'>
                  <div className='absolute inset-0 flex items-center justify-center text-gray-400'>
                    <Image
                      src={book.coverImage}
                      alt={book.title}
                      fill
                      className=''
                    />
                  </div>
                </div>
                <div className='p-6'>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors'>
                    {book.title}
                  </h2>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-3'>
                    by {book.author}
                  </p>
                  <p className='text-gray-600 dark:text-gray-300 mb-4 line-clamp-3'>
                    {book.description}
                  </p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {book.genre.map((genre) => (
                      <span
                        key={genre}
                        className='px-3 py-1 bg-blue-100 dark:bg-purple-900 text-purple-800 dark:text-blue-200 text-xs rounded-full'>
                        {genre}
                      </span>
                    ))}
                  </div>
                  <div className='text-purple-600 dark:text-purple-400 font-medium group-hover:underline'>
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
            className='bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2 rounded-lg transition-colors'>
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
}
