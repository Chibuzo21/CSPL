import { useState, useMemo } from "react";
import { books } from "../../../../data/books";
import { isearchInputParams } from "./types";
import { styles } from "@/lib/utils";
export default function SearchInput({
  handleSearch,
  searchQuery,
  filteredBooks,
  placeholder,
}: isearchInputParams) {
  return (
    <div className='max-w-2xl mx-auto mb-12'>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
          <svg
            className='h-5 w-5 text-gray-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </div>
        <input
          type='text'
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={placeholder}
          className={`pl-10 ${styles.default}`}
        />
        {searchQuery && (
          <button
            onClick={() => handleSearch("")}
            className='absolute inset-y-0 right-0 pr-3 flex items-center'>
            <svg
              className='h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        )}
      </div>
      {searchQuery && (
        <p className='mt-3 text-sm text-gray-600 dark:text-gray-400'>
          Found {filteredBooks.length}{" "}
          {filteredBooks.length === 1 ? "book" : "books"} matching "
          {searchQuery}"
        </p>
      )}
    </div>
  );
}
