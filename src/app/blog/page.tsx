import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import { Metadata } from "next";

import { BlogPost } from "./types";
import Hero from "./components/Hero";
import BlogGrid from "./components/BlogGrid";
import SearchInput from "../books/components/searchInput";
import BlogCard from "./components/BlogCard";

export const metadata: Metadata = {
  title: "Blog - Dr. Chibueze Ukaegbu | Christian Insights & Faith Articles",
  description:
    "Deep dives, reflections, and insights on faith, biblical wisdom, and Christian living by Dr. Chibueze Ukaegbu.",
  keywords: [
    "Christian blog",
    "biblical insights",
    "faith articles",
    "Dr. Chibueze Ukaegbu",
    "spiritual growth",
  ],
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
  const posts: BlogPost[] = await client.fetch(
    postsQuery,
    {},
    { next: { tags: ["posts"] } },
  );

  return (
    <div className='min-h-screen bg-white dark:bg-gray-900'>
      <Hero />

      {/* Posts Grid */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {posts.length === 0 ? (
          <div className='text-center py-12'>
            <p className='text-xl text-gray-600 dark:text-gray-400'>
              No blog posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <BlogCard posts={posts} />
        )}
      </div>
    </div>
  );
}
