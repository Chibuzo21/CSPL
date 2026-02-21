import React from "react";

export default function Hero() {
  return (
    <div className='bg-linear-to-b from-primary-900 to-primary-800 text-white py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <h1 className='text-5xl md:text-6xl font-bold mb-6'>Blog & Insights</h1>
        <p className='text-xl text-blue-100 max-w-3xl mx-auto'>
          Deep dives into Scripture, reflections on faith, and insights on
          living a Christ-centered life
        </p>
      </div>
    </div>
  );
}
