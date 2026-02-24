import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy | Chibueze Ukaegbu",
};
export default function TermsPage() {
  return (
    <main className='max-w-4xl mx-auto px-6 py-16'>
      <h1 className='text-3xl font-bold mb-6'>Terms of Service</h1>
      <p className='text-sm text-gray-500 mb-8'>
        Effective Date: February 24, 2026
      </p>

      <div className='space-y-6 text-gray-700 leading-relaxed'>
        <div>
          <h2 className='text-xl font-semibold mb-2'>1. Use of Website</h2>
          <p>
            By accessing this website, you agree to use it for lawful purposes
            only.
          </p>
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-2'>
            2. Intellectual Property
          </h2>
          <p>
            All content on this website, including text, images, and design, is
            owned or licensed by us and may not be reproduced without
            permission.
          </p>
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-2'>3. Contact Form Usage</h2>
          <p>
            You agree not to submit unlawful, harmful, or abusive content via
            the contact form.
          </p>
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-2'>
            4. Limitation of Liability
          </h2>
          <p>
            This website is provided “as is.” We are not liable for any damages
            arising from its use.
          </p>
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-2'>5. Changes to Terms</h2>
          <p>We reserve the right to update these Terms at any time.</p>
        </div>
      </div>
    </main>
  );
}
