'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants';
import MobileMenu from './MobileMenu';
import TopBanner from './TopBanner';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
        className={`fixed top-0 left-0 right-0 z-[1000] flex flex-col items-center pointer-events-none transition-all duration-200`}
      >
        <TopBanner />
        <div className="w-full flex justify-center px-4 pt-3">
          <nav
            aria-label="Main Navigation"
            className={`pointer-events-auto flex items-center justify-between gap-5 w-full max-w-[1272px] h-16 rounded-cta border transition-all duration-300 px-4 pl-5 ${
              isScrolled
                ? 'bg-white/90 [backdrop-filter:blur(12px)] border-[var(--line)] shadow-[0_4px_20px_rgba(10,14,26,0.06)]'
                : 'bg-white/60 [backdrop-filter:blur(8px)] border-[var(--line)]'
            }`}
          >
            {/* Brand Logo */}
            <Link href="/" className="logo flex items-center gap-2.5 shrink-0 no-underline">
              <Image src="/logo.png" alt="UIET E-Cell Logo" width={32} height={32} className="rounded-lg object-contain" priority />
              <span className="font-['Space_Grotesk'] font-bold text-lg tracking-[-0.01em] text-[var(--ink)]">
                E-Cell<b className="text-[var(--orange)]">.</b>UIET
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1 rounded-cta py-1 px-1.5 bg-[rgba(10,14,26,0.05)]">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-2 px-[18px] text-sm font-['Space_Grotesk'] font-medium rounded-cta no-underline whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? 'bg-white text-[var(--ink)] shadow-xs'
                        : 'text-[var(--mute)] hover:text-[var(--orange)] hover:bg-white/60'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Action Button */}
            <div className="flex items-center gap-3">
              <Link href="/contact" className="btn hidden md:inline-block text-xs py-2.5 px-5">
                Join E-Cell
              </Link>

              <button
                type="button"
                className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-full bg-zinc-100 hover:bg-zinc-200 active:bg-zinc-300 border-none cursor-pointer transition-colors"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMobileOpen}
              >
                <span className={`w-4 h-0.5 bg-[var(--ink)] rounded-full transition-all duration-200 origin-center ${isMobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`w-4 h-0.5 bg-[var(--ink)] rounded-full transition-all duration-200 ${isMobileOpen ? 'opacity-0 scale-0' : ''}`} />
                <span className={`w-4 h-0.5 bg-[var(--ink)] rounded-full transition-all duration-200 origin-center ${isMobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
              </button>
            </div>
          </nav>
        </div>
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
