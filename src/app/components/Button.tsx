import React from "react";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className='group inline-flex items-center justify-center px-8 py-4 bg-secondary-600 hover:bg-secondary-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl'>
      {children}
    </button>
  );
}
