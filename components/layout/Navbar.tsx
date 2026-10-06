'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, SITE } from '@/lib/constants';
import Button from '@/components/ui/Button';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // Transparent over hero → floating white pill after slight scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-[1000] w-full bg-[#070A26]/95 backdrop-blur-md border-b-2 border-[#1F2766] transition-all">
        <nav
          aria-label="Main Navigation"
          className="max-w-[1272px] mx-auto h-[72px] px-4 sm:px-6 flex items-center justify-between"
        >
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 no-underline group" aria-label="UIET E-Cell Home">
            <div className="w-10 h-10 rounded-xl bg-[#863DFF] border-2 border-[#DDE0FF] p-1 shadow-[2px_2px_0px_#CBFF2E] flex items-center justify-center shrink-0 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
              <Image
                src="/logo-icon.png"
                alt="UIET E-Cell"
                width={32}
                height={32}
                className="w-full h-full object-contain brightness-110"
                unoptimized
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-lg leading-tight tracking-tight text-white">
                UIET E-Cell
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-[#DDE0FF]/70 uppercase">
                MDU Rohtak
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-[#0B0F33] border-2 border-[#1F2766] rounded-full p-1 shadow-[2px_2px_0px_#070A26]">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-1.5 px-4 text-xs font-bold rounded-full no-underline whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-[#863DFF] text-white shadow-xs'
                      : 'text-[#DDE0FF] hover:bg-[#CBFF2E] hover:text-[#070A26]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#0B0F33] text-[#DDE0FF] font-extrabold text-xs uppercase tracking-wider px-3.5 py-2.5 rounded-full border-2 border-[#863DFF] shadow-[2px_2px_0px_#070A26] hover:text-[#CBFF2E] hover:border-[#CBFF2E] hover:translate-x-0.5 hover:translate-y-0.5 transition-all no-underline"
              title="Admin Dashboard"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span>Admin</span>
            </Link>

            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-[#CBFF2E] text-[#070A26] font-extrabold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full border-2 border-[#070A26] shadow-[3px_3px_0px_#863DFF] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#863DFF] transition-all no-underline"
            >
              <span>Join E-Cell</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="lg:hidden flex flex-col items-center justify-center gap-1 w-10 h-10 rounded-xl bg-[#0B0F33] border-2 border-[#863DFF] shadow-[2px_2px_0px_#070A26] cursor-pointer shrink-0 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileOpen}
            >
              <span className={`block w-5 h-0.5 bg-[#DDE0FF] rounded-full transition-all duration-200 ${isMobileOpen ? 'translate-y-[6px] rotate-45' : ''}`} />
              <span className={`block w-5 h-0.5 bg-[#DDE0FF] rounded-full transition-all duration-200 ${isMobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-[#DDE0FF] rounded-full transition-all duration-200 ${isMobileOpen ? '-translate-y-[6px] -rotate-45' : ''}`} />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        links={NAV_LINKS}
        currentPath={pathname}
      />
    </>
  );
}
