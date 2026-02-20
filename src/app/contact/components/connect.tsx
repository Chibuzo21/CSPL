import SocialMedia from "@/app/components/SocialMedia";

export default function Connect() {
  return (
    <div className='bg-primary-900 dark:bg-gray-800 rounded-lg shadow-md p-6'>
      <h3 className='text-xl font-bold text-white dark:text-white mb-4'>
        Connect With Us
      </h3>
      <p className='text-white dark:text-gray-300 mb-6'>
        Follow us on social media for updates, behind-the-scenes content, and
        more!
      </p>

      {/* Phone Number */}
      <div className='mb-6 flex items-center text-white dark:text-gray-300'>
        <div className='w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-3'>
          <svg
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='w-6 h-6 text-primary-900 dark:text-primary-400'>
            <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
          </svg>
        </div>
        <div>
          <div className='text-xs text-gray-100 dark:text-gray-400'>
            Call us
          </div>
          <div className='font-medium'>
            <p>+234-812-818-1620 (Whatsapp only)</p>
            <p>+1 (347)-969-2477</p>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div>
        <p className='text-sm text-gray-100 dark:text-gray-400 mb-3'>
          Find us on social media
        </p>
        <SocialMedia />
      </div>
    </div>
  );
}
