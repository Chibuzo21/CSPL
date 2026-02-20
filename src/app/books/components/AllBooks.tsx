"use client";
import React, { useState, useMemo } from "react";
import SearchInput from "./searchInput";
import BookGrid2 from "./bookGrid2";
import { books } from "../../../../data/books";
export default function AllBooks() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };
  const filteredBooks = useMemo(() => {
    if (!searchQuery.trim()) return books;

    const query = searchQuery.toLowerCase();
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.description.toLowerCase().includes(query) ||
        book.genre.some((g) => g.toLowerCase().includes(query)),
    );
  }, [searchQuery]);
  return (
    <div>
      <SearchInput
        handleSearch={handleSearch}
        searchQuery={searchQuery}
        filteredBooks={filteredBooks}
      />
      <BookGrid2
        handleSearch={handleSearch}
        filteredBooks={filteredBooks}
        currentPage={currentPage}
        searchQuery={searchQuery}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
