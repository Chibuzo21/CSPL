"use client";
import { useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navlinks } from "./navlinks";
import Link from "next/link";
export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <div
          className='text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
          aria-label='Toggle menu'>
          <svg
            className='h-6 w-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </div>
      </SheetTrigger>
      <SheetContent side='right' className='flex flex-col gap-6 p-6   bg-white'>
        <VisuallyHidden>
          <DialogTitle>Navigation Menu</DialogTitle>
          <DialogDescription>
            Main Navigation menu with links to Home, Play trivia, Join Waitlist
          </DialogDescription>
        </VisuallyHidden>
        <nav className='flex flex-col gap-4'>
          {navlinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}>
              {link.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
