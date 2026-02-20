"use client";

import dynamic from "next/dynamic";

function StudioLoading() {
  return (
    <div className='flex items-center justify-center w-full h-screen bg-slate-950'>
      <div className='flex flex-col items-center gap-4'>
        <div className='w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin' />
        <p className='text-white text-sm tracking-widest uppercase'>
          Loading Studio
        </p>
      </div>
    </div>
  );
}

const Studio = dynamic(() => import("./studio").then((mod) => mod.Studio), {
  ssr: false,
  loading: () => <StudioLoading />,
});

export function StudioWrapper() {
  return <Studio />;
}
