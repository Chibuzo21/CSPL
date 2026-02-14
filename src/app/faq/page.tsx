import { Metadata } from "next";
import FAQMain from "./components/FAQMain";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description:
    "Get answers to common questions about our books, ordering, formats, and more.",
};

export default function FAQPage() {
  return (
    <div className=' py-12'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
          Frequently Asked Questions
        </h1>
        <p className='text-xl text-gray-600 dark:text-gray-400'>
          Everything you need to know about our books
        </p>
      </div>

      <FAQMain />

      {/* Still have questions CTA */}
      <div className='mt-20 text-center bg-primary-900 dark:bg-gray-900 text-white rounded-lg py-12'>
        <h2 className='text-3xl md:text-4xl font-bold text-white dark:text-white mb-4'>
          Still have questions?
        </h2>
        <p className=' text-blue-100 dark:text-gray-300 mb-8 text-xl'>
          Can't find the answer you're looking for? We're here to help.
        </p>
        <a
          href='/contact'
          className='inline-block bg-secondary-600 hover:bg-secondary-700 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl'>
          Contact Us
        </a>
      </div>
    </div>
  );
}
