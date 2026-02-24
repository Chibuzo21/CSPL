import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy | Chibueze Ukaegbu",
};
export default function PrivacyPolicyPage() {
  return (
    <main className='max-w-4xl mx-auto px-6 py-16'>
      <h1 className='text-xl font-bold mb-6'>Privacy Policy</h1>
      <p className='text-sm text-gray-500 mb-8'>
        Last updated: February 24, 2026
      </p>

      <div className='space-y-6 text-gray-700 leading-relaxed'>
        <p>
          At www.chibuezeukaegbu.com (“we”, “us”, or “our”), we respect your
          privacy and are committed to protecting your personal information.
        </p>

        <div>
          <h2 className='text-xl font-semibold mb-2'>
            1. Information We Collect
          </h2>
          <p>
            We collect personal information that you voluntarily provide when
            filling out our contact form, including:
          </p>
          <ul className='list-disc pl-6 mt-2'>
            <li>Name</li>
            <li>Email address</li>
            <li>Message content</li>
          </ul>
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-2'>
            2. How We Use Your Information
          </h2>
          <p>
            We use the information you provide solely to respond to your
            inquiries and communicate with you.
          </p>
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-2'>3. Data Security</h2>
          <p>
            We take reasonable measures to protect your personal information.
            However, no method of transmission over the internet is 100% secure.
          </p>
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-2'>
            4. Third-Party Services
          </h2>
          <p>
            We do not sell or share your personal information. Messages may be
            processed through secure email or hosting providers.
          </p>
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-2'>
            5. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Updates will be
            posted on this page.
          </p>
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-2'>6. Contact Us</h2>
          <p>
            If you have any questions, please use the contact form on this
            website.
          </p>
        </div>
      </div>
    </main>
  );
}
