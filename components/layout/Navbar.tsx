'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-50 w-full transition-all duration-200 bg-[#FDFCF7] dark:bg-[#0B0C0E] ${
          isScrolled
            ? 'border-b border-[#16140f]/10 dark:border-zinc-800 shadow-2xs backdrop-blur-md bg-[#FDFCF7]/95 dark:bg-[#0B0C0E]/95'
            : 'border-b border-transparent'
        }`}
      >
        {/* Mobile Header (< 1200px) */}
        <nav
          aria-label="Mobile Navigation"
          className="relative flex min-[1200px]:hidden items-center justify-between px-4 py-3"
        >
          <Link
            href="/"
            title="UIET E-Cell"
            className="flex items-center gap-2.5 no-underline"
          >
            <div className="w-10 h-10 bg-[#FF6600] flex items-center justify-center rounded-xs shrink-0">
              <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9012 11.7843H17.6595L22.4961 21.5325C23.203 22.9836 23.7984 24.3976 23.7984 24.3976C23.7984 24.3976 24.4313 23.021 25.175 21.5325L30.0868 11.7843H33.5843L25.2865 27.3746V37.309H22.1244V27.1884L13.9012 11.7843Z" fill="white" />
              </svg>
            </div>
            <span className="font-['Outfit',sans-serif] font-bold text-base text-[#16140f] dark:text-white">
              UIET E-Cell
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/apply"
              className="flex h-8 items-center justify-center rounded-full bg-black dark:bg-white px-3.5 pb-[1px] font-['Source_Serif_4',serif] text-xs font-normal italic tracking-[0.015rem] text-white dark:text-black transition-opacity hover:opacity-80"
            >
              Apply
            </Link>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="inline-flex items-center justify-center rounded-md p-1.5 text-[#16140f] dark:text-zinc-200 focus:outline-hidden"
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={isMobileOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Desktop Header (>= 1200px) — Identical layout to Y Combinator */}
        <nav
          aria-label="Desktop Navigation"
          className="relative hidden min-[1200px]:flex items-center justify-center px-5 py-[12px] bg-[#FDFCF7] dark:bg-[#0B0C0E]"
        >
          <div className="flex w-full max-w-[1400px] items-center gap-6 min-[1400px]:gap-10">
            {/* Left Column Links */}
            <div className="flex flex-1 items-center justify-end gap-5 min-[1400px]:gap-8 font-['Source_Serif_4',serif] text-[15px] text-[#16140f] dark:text-zinc-200">
              {/* About Dropdown */}
              <div
                className="relative inline-block"
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1 cursor-pointer transition-opacity hover:opacity-60 py-1"
                >
                  About
                  <svg className="h-3 w-3 translate-y-[0.5px]" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path d="M6 8L10 12L14 8" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
                  </svg>
                </Link>

                {activeDropdown === 'about' && (
                  <div className="absolute left-0 top-full pt-1 z-50">
                    <div className="min-w-[200px] bg-white dark:bg-[#16181F] border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-lg py-2 flex flex-col font-['Outfit',sans-serif] text-sm text-[#16140f] dark:text-zinc-200">
                      <Link href="/about" className="px-4 py-2 hover:bg-[#F4F2EC] dark:hover:bg-zinc-800 transition-colors">
                        What Happens at UIET E-Cell?
                      </Link>
                      <Link href="/apply" className="px-4 py-2 hover:bg-[#F4F2EC] dark:hover:bg-zinc-800 transition-colors">
                        Apply to Cohort
                      </Link>
                      <Link href="/faq" className="px-4 py-2 hover:bg-[#F4F2EC] dark:hover:bg-zinc-800 transition-colors">
                        FAQ & Interview Guide
                      </Link>
                      <Link href="/team" className="px-4 py-2 hover:bg-[#F4F2EC] dark:hover:bg-zinc-800 transition-colors">
                        People & Mentors
                      </Link>
                      <Link href="/blog" className="px-4 py-2 hover:bg-[#F4F2EC] dark:hover:bg-zinc-800 transition-colors">
                        E-Cell Blog & Essays
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Events */}
              <Link
                href="/events"
                className="inline-flex items-center gap-1 cursor-pointer transition-opacity hover:opacity-60 py-1"
              >
                Events
              </Link>

              {/* Library */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 cursor-pointer transition-opacity hover:opacity-60 py-1"
              >
                Library
              </Link>
            </div>

            {/* Center: Iconic Orange Square Monogram */}
            <div className="flex shrink-0 items-center justify-center">
              <Link
                href="/"
                title="UIET E-Cell"
                className="inline-block h-[40px] w-[40px] transition-transform hover:scale-105"
              >
                <div className="w-[40px] h-[40px] bg-[#FF6600] flex items-center justify-center rounded-xs shadow-2xs">
                  <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9012 11.7843H17.6595L22.4961 21.5325C23.203 22.9836 23.7984 24.3976 23.7984 24.3976C23.7984 24.3976 24.4313 23.021 25.175 21.5325L30.0868 11.7843H33.5843L25.2865 27.3746V37.309H22.1244V27.1884L13.9012 11.7843Z" fill="white" />
                  </svg>
                </div>
              </Link>
            </div>

            {/* Right Column Links */}
            <div className="flex flex-1 items-center justify-start gap-5 min-[1400px]:gap-8 font-['Source_Serif_4',serif] text-[15px] text-[#16140f] dark:text-zinc-200">
              {/* Team */}
              <Link
                href="/team"
                className="inline-flex items-center gap-1 cursor-pointer transition-opacity hover:opacity-60 py-1"
              >
                Team
              </Link>

              {/* FAQ */}
              <Link
                href="/faq"
                className="inline-flex items-center gap-1 cursor-pointer transition-opacity hover:opacity-60 py-1"
              >
                FAQ
              </Link>

              {/* Join Us */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 cursor-pointer transition-opacity hover:opacity-60 py-1"
              >
                Join Us
              </Link>
            </div>
          </div>

          {/* Far Right Action Buttons */}
          <div className="absolute right-5 flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/admin"
              className="font-['Outfit',sans-serif] text-sm tracking-[0.3px] text-[#16140f] dark:text-zinc-300 transition-opacity hover:opacity-60"
            >
              Log in
            </Link>
            <Link
              href="/apply"
              className="flex h-10 items-center justify-center rounded-full bg-black dark:bg-white px-5 pb-[2px] font-['Source_Serif_4',serif] text-sm font-normal italic tracking-[0.015rem] text-white dark:text-black transition-opacity hover:opacity-80 shadow-2xs"
            >
              Apply
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
