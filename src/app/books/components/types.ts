import { Dispatch, SetStateAction } from "react";
import { Book } from "../../../../types/book";
import { BlogPost } from "@/app/blog/types";

export interface isearchInputParams {
  handleSearch: (value: string) => void;
  filteredBooks: Book[] | BlogPost[];
  searchQuery: string;
  placeholder?: string;
}
export interface iBookGridParams extends isearchInputParams {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}
export interface iPaginationParams {
  currentPage: number;
  filteredBooks: Book[] | BlogPost[];
  BOOKS_PER_PAGE: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}
