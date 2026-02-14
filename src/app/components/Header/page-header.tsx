import { navlinks } from "./navlinks";
import Link from "next/link";

import Image from "next/image";

import MobileMenu from "./mobileMenu";

export default function PageHeader() {
  return (
    <nav className='border-b border-gray-200 z-50 dark:border-gray-800 sticky top-0 bg-white dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-3'>
        <div className='flex justify-between h-16 items-center'>
          <div className='shrink-0'>
            <Link href='/' className='text-2xl font-bold  '>
              <Image src='/Logo.png' alt='logo' width={300} height={300} />
            </Link>
          </div>
          <div className='hidden md:flex space-x-8'>
            {navlinks.map((nav) => (
              <Link
                key={nav.href}
                href={nav.href}
                className='text-gray-700 dark:text-gray-300 hover:bg-primary-50 rounded-lg hover:text-primary-900 dark:hover:text-white px-3 py-2 text-sm font-medium'>
                {nav.title}
              </Link>
            ))}
          </div>
          {/* Mobile menu button */}

          <div className='md:hidden'>
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
