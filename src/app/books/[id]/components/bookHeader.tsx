"use client";
import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import { BookParams } from "./types";

export default function BookHeader({ book }: BookParams) {
  return (
    <div className='mb-12'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8'>
        {/* LEFT: Book Cover Image */}
        <div className='flex justify-center lg:justify-start'>
          <div className='relative w-full max-w-md'>
            <Image
              src={book.coverImage}
              alt={`${book.title} book cover`}
              width={400}
              height={600}
              className='rounded-xl shadow-2xl w-full h-auto object-cover border-4 border-white dark:border-gray-800'
              priority
            />
          </div>
        </div>

        {/* RIGHT: Book Information */}
        <div className='flex flex-col justify-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight'>
            {book.title}
          </h1>

          <p className='text-xl text-primary-900 dark:text-primary-400 font-semibold mb-6'>
            by {book.author}
          </p>

          <p className='text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed'>
            {book.description}
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-3'>
            <a
              href={book.amazonLink}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block'>
              <Button>Buy on Amazon</Button>
            </a>

            <button
              onClick={() => {
                const summarySection = document.getElementById("book-summary");
                summarySection?.scrollIntoView({ behavior: "smooth" });
              }}
              className='px-6 py-3 border-2 border-primary-900 dark:border-primary-500 text-primary-900 dark:text-primary-400 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200'>
              Read Preview Below ↓
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
