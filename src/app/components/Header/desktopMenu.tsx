"use client";
import Link from "next/link";
import { navlinks } from "./navlinks";

import { usePathname } from "next/navigation";
export default function DesktopMenu() {
  const pathname = usePathname();
  return (
    <div className='hidden md:flex space-x-8'>
      {navlinks.map((nav) => (
        <Link
          key={nav.href}
          href={nav.href}
          className={`${pathname === nav.href ? "text-primary-900 dark:text-primary-400 font-semibold" : "text-gray-700 dark:text-gray-300"} px-3 py-2  font-medium`}>
          {nav.title}
        </Link>
      ))}
    </div>
  );
}
