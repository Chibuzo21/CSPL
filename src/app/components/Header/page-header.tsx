import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./mobileMenu";

import DesktopMenu from "./desktopMenu";
export default function PageHeader() {
  return (
    <nav className='border-b border-gray-200 z-50 dark:border-gray-800 sticky top-0 bg-white dark:bg-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-3'>
        <div className='flex justify-between h-16 items-center'>
          <div className='shrink-0'>
            <Link
              href='/'
              className='text-2xl font-extrabold tracking-wide text-gray-900 dark:text-white'>
              Chibueze Ukaegbu
            </Link>
          </div>
          <DesktopMenu />
          {/* Mobile menu button */}

          <div className='lg:hidden'>
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
