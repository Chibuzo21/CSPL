import { Metadata } from "next";

import AllBooks from "./components/AllBooks";

export const metadata: Metadata = {
  title: "All Books - Author Book Showcase",
  description:
    "Browse the complete collection of books. Read exclusive previews and find your next favorite story.",
  keywords: [
    "books",
    "fiction",
    "mystery",
    "thriller",
    "adventure",
    "author collection",
  ],
};

export default function BooksPage() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
          Complete Book Collection
        </h1>
        <p className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
          Explore all books, read exclusive previews, and dive into worlds of
          mystery, adventure, and wonder.
        </p>
      </div>

      <AllBooks />
    </div>
  );
}
