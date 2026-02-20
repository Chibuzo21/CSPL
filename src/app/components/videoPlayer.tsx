"use client";
import React from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export const VideoPlayer = ({ value }: any) => {
  const { url, asset, caption } = value;
  const videoSource = url || asset?.url;

  if (!videoSource) return null;

  return (
    <div className='my-10 w-full'>
      {/* Aspect-video ensures the 16:9 shape is locked in immediately */}
      <div className='aspect-video w-full overflow-hidden rounded-2xl shadow-2xl bg-black border border-gray-100 dark:border-gray-800 relative'>
        <ReactPlayer
          src={videoSource}
          width='100%'
          height='100%'
          style={{ position: "absolute", top: 0, left: 0 }}
          controls
          light={true}
        />
      </div>
      {caption && (
        <p className='text-center text-sm text-gray-500 mt-3 italic uppercase tracking-wide'>
          {caption}
        </p>
      )}
    </div>
  );
};
