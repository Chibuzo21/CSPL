import Hero from "./home/Hero";
import Author from "./home/Author";
import BookGrid from "./home/BookGrid";
import Testimonial from "./home/Testimonial/Testimonial";
import CTA from "./home/CTA";

export default function Home() {
  // Let's feature the first book as the hero

  return (
    <div className='bg-[#FEF9F3] dark:bg-gray-900 text-[#1F2937] dark:text-white'>
      <Hero />
      <Author />
      <BookGrid />
      <Testimonial />
      <CTA />
    </div>
  );
}
