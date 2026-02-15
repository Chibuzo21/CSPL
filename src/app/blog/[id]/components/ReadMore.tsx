import Button from "@/app/components/Button";
import React from "react";
import { BookParams } from "./types";

export default function ReadMore({ book }: BookParams) {
  return (
    <section className='py-4 bg-primary-900 dark:bg-gray-900 text-white'>
      <div className='max-w-4xl mx-auto px-4 text-center rounded-2xl py-8'>
        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
          Want to read more?
        </h2>
        <p className='text-xl text-blue-100 dark:text-gray-300 mb-8 max-w-2xl mx-auto'>
          Continue this gripping story by purchasing the full book on Amazon.
        </p>
        <a href={book.amazonLink} target='_blank' rel='noopener noreferrer'>
          <Button>Get the Full Book on Amazon</Button>
        </a>
      </div>
    </section>
  );
}
