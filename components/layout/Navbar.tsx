'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import MobileMenu from './MobileMenu';

export const NAV_ITEMS = [
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Team', href: '/team' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-50 w-full transition-all duration-200 bg-[#EBE9E3]/90 dark:bg-[#0B0C0E]/90 backdrop-blur-md ${
          isScrolled
            ? 'border-b border-black/[0.06] dark:border-white/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
            : 'border-b border-black/[0.03] dark:border-white/[0.04]'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex items-center justify-between gap-4">
          {/* Left: Brand Logo & Wordmark */}
          <Link
            href="/"
            title="E-Cell UIET MDU"
            className="flex items-center gap-2.5 sm:gap-3 group no-underline shrink-0"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="UIET E-Cell Logo"
                width={36}
                height={36}
                priority
                className="w-full h-full object-contain dark:brightness-110 drop-shadow-xs"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-sans font-bold text-[18px] sm:text-[19px] tracking-tight text-black dark:text-white">
                E-Cell
              </span>
              <span className="text-[9.5px] font-mono tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold uppercase">
                UIET MDU
              </span>
            </div>
          </Link>

          {/* Center: Modern Floating Pill Nav Container */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-white dark:bg-[#16181F] px-5 sm:px-6 py-2 rounded-full border border-black/[0.06] dark:border-white/[0.08] shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href || (item.href !== '/' && pathname?.startsWith(`${item.href}/`));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-[13.5px] font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-black dark:text-white font-semibold'
                      : 'text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: CTA Pill Button + Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Subtle Theme Toggle */}
            <ThemeToggle className="rounded-full! p-2! border-black/[0.06]! dark:border-white/[0.08]! bg-white! dark:bg-[#16181F]! shadow-[0_1px_4px_rgba(0,0,0,0.04)]" />

            {/* Solid Black Pill CTA Button */}
            <Link
              href="/apply"
              className="inline-flex items-center justify-center rounded-full bg-black dark:bg-white px-5 sm:px-6 py-2.5 text-[13.5px] font-semibold text-white dark:text-black transition-all hover:opacity-90 shadow-xs whitespace-nowrap cursor-pointer"
            >
              <span className="hidden sm:inline">Join E-Cell</span>
              <span className="sm:hidden">Join</span>
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-full bg-white dark:bg-[#16181F] border border-black/[0.06] dark:border-white/[0.08] text-black dark:text-white shadow-xs focus:outline-hidden"
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                {isMobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        links={NAV_ITEMS}
      />
    </>
  );
}
