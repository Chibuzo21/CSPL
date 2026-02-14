import { Metadata } from "next";
import QuickLinks from "./components/quickLinks";
import Connect from "./components/connect";
import ResponseTime from "./components/responseTime";
import ContactForm from "./components/ContactForm/contactForm";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Have questions or need assistance? Contact our team today. We’re ready to help with support, feedback, or general inquiries.",
};

export default function ContactPage() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
          Get in Touch
        </h1>
        <p className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
          Have a question, feedback, or just want to say hello? We'd love to
          hear from you.
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <ContactForm />
        {/* Contact Information */}
        <div className='space-y-6'>
          <QuickLinks />
          <Connect />
          <ResponseTime />
        </div>
      </div>
    </div>
  );
}
