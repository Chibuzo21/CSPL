import { VideoPlayer } from "@/app/components/videoPlayer";
import { PortableText } from "next-sanity";
import Image from "next/image";

import { Post, PostType } from "../types";

export default function Content({ post }: { post: PostType }) {
  return (
    <div className='prose prose-lg dark:prose-invert max-w-none mb-12'>
      <PortableText
        value={post.content}
        components={{
          types: {
            image: ({ value }: any) => (
              <div className='relative h-96 my-8 rounded-lg overflow-hidden'>
                <Image
                  src={value.asset.url}
                  alt={value.alt || "Blog image"}
                  fill
                  className='object-cover'
                />
              </div>
            ),
            youtube: ({ value }: any) => <VideoPlayer value={value} />,
            video: ({ value }: any) => <VideoPlayer value={value} />,
          },
        }}
      />
    </div>
  );
}
