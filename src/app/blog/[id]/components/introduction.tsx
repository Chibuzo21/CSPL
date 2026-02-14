import React from "react";
import { Book } from "../../../../../types/book";

interface IntroParams {
  book: Book;
}
export default function Introduction({ book }: IntroParams) {
  return (
    <section className='mb-12'>
      <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
        Summary
      </h2>
      <div className='prose prose-lg dark:prose-invert max-w-none'>
        <div className='text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed'>
          {book.intro}
        </div>
      </div>
    </section>
  );
}
