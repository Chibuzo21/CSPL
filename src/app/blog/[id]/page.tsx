import { notFound } from "next/navigation";
import { getBookById, getAllBookIds } from "../../../../data/books";
import { Metadata } from "next";
import BookHeader from "./components/bookHeader";
import BookReview from "./components/bookReview";
import ReadMore from "./components/ReadMore";
import Introduction from "./components/introduction";

interface BookPageProps {
  params: {
    id: string;
  };
}
// Generate static paths for all books
export async function generateStaticParams() {
  const bookIds = getAllBookIds();
  return bookIds.map((id) => ({
    id: id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: BookPageProps): Promise<Metadata> {
  const { id } = await params;
  const book = getBookById(id);

  if (!book) {
    return {
      title: "Book Not Found",
    };
  }

  return {
    title: `${book.title} - ${book.author}`,
    description: book.description,
    keywords: [...book.genre, "book", "preview", "read online"],
    openGraph: {
      title: book.title,
      description: book.description,
      type: "book",
      authors: [book.author],
    },
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const { id } = await params;
  const book = getBookById(id);

  if (!book) {
    notFound();
  }

  return (
    <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      {/* Back button */}
      <a
        href='/blog'
        className='inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline mb-8'>
        ← Back to all books
      </a>

      {/* Book header */}

      <BookHeader book={book} />
      {/* Reader Reviews */}
      <BookReview book={book} />
      {/* Divider */}
      <div className='border-t border-gray-200 dark:border-gray-800 my-12'></div>
      {/* Prologue (if exists) */}
      {/* Introduction */}
      <Introduction book={book} />

      {/* Bottom CTA */}
      <ReadMore book={book} />
    </div>
  );
}
