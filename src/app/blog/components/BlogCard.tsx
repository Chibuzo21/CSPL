"use client";
import SearchInput from "@/app/books/components/searchInput";
import React, { useMemo, useState } from "react";
import BlogGrid from "./BlogGrid";
import { BlogPost, PostType } from "../types";
import Pagination from "@/app/books/components/Pagination";
import { BOOKS_PER_PAGE } from "@/app/books/components/bookGrid2";
import { Book } from "../../../../types/book";

export default function BlogCard({ posts }: { posts: BlogPost[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const handleSearch = (value: string) => {
    setSearchQuery(value);
    //   setCurrentPage(1);
  };
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;

    const query = searchQuery.toLowerCase();
    return posts.filter((post) => post.title.toLowerCase().includes(query));
  }, [searchQuery]);
  return (
    <div>
      <SearchInput
        placeholder='Search blog by title'
        handleSearch={handleSearch}
        searchQuery={searchQuery}
        filteredBooks={filteredPosts}
      />
      <BlogGrid
        handleSearch={handleSearch}
        filteredBooks={filteredPosts}
        currentPage={currentPage}
        searchQuery={searchQuery}
        setCurrentPage={setCurrentPage}
      />
      <Pagination
        currentPage={currentPage}
        filteredBooks={filteredPosts}
        BOOKS_PER_PAGE={BOOKS_PER_PAGE}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
