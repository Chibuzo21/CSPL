import React from "react";
import { BookParams } from "./types";

export default function Introduction({ book }: BookParams) {
  return (
    <section className='mb-12' id='book-summary'>
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
