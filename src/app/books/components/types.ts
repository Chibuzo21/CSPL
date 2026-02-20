import { Dispatch, SetStateAction } from "react";
import { Book } from "../../../../types/book";

export interface isearchInputParams {
  handleSearch: (value: string) => void;
  filteredBooks: Book[];
  searchQuery: string;
}
export interface iBookGridParams extends isearchInputParams {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}
export interface iPaginationParams {
  currentPage: number;
  filteredBooks: Book[];
  BOOKS_PER_PAGE: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}
