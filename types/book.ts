export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  source: string;
  verified?: boolean;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  amazonLink: string;
  description: string;
  intro: string;
  publishedDate: string;
  isbn?: string;
  reviews?: Review[];
}
