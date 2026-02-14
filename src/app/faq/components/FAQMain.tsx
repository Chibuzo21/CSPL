"use client";

import { faqData } from "./faqData";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
export default function FAQMain() {
  const [openIndex, setOpenIndex] = useState<null | number>(null);
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className='space-y-6 max-w-4xl mx-auto'>
      {faqData.map((faq, index) => (
        <div
          key={index}
          onClick={() => handleToggle(index)}
          className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer'>
          <div className='flex justify-between items-center text-xl font-bold text-gray-900 dark:text-white mb-3'>
            {faq.question}
            <span className='text-[#9C9C9C]'>
              {openIndex === index ? <Minus className='' /> : <Plus />}
            </span>
          </div>
          <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
            {openIndex === index && faq.answer}
          </p>
        </div>
      ))}
    </div>
  );
}
