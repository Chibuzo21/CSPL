import { notFound } from "next/navigation";
import { getBookById, getAllBookIds } from "../../../../data/books";
import { Metadata } from "next";
import BookHeader from "./components/bookHeader";
import BookReview from "./components/bookReview";
import ReadMore from "./components/ReadMore";
import Introduction from "./components/introduction";
import Link from "next/link";

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
    <section className=' py-12'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-3'>
        {/* Back button */}
        <Link
          href='/blog'
          className='inline-flex items-center text-primary-900 dark:text-primary-400 font-medium hover:underline transition-colors mb-8'>
          ← Back to all books
        </Link>

        {/* Book header */}

        <BookHeader book={book} />
        {/* Reader Reviews */}
        <BookReview book={book} />
        {/* Divider */}
        <div className='border-t border-gray-200 dark:border-gray-800 my-12'></div>
        {/* Prologue (if exists) */}
        {/* Introduction */}
        <Introduction book={book} />
      </div>
      {/* Bottom CTA */}
      <ReadMore book={book} />
    </section>
  );
}
