'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links?: NavLink[];
  currentPath?: string;
}

export default function MobileMenu({ isOpen, onClose, links = NAV_LINKS, currentPath }: MobileMenuProps) {
  const pathname = usePathname();
  const activePath = currentPath || pathname;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-xs transition-opacity lg:hidden"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label="Navigation menu"
    >
      <div
        className="absolute top-[68px] left-3 right-3 sm:left-6 sm:right-6 bg-white dark:bg-[#16181F] border border-black/[0.08] dark:border-white/[0.08] rounded-2xl p-5 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Brand header */}
        <div className="flex items-center gap-2.5 pb-3.5 mb-3 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div className="w-8 h-8 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center p-1">
            <Image src="/logo.png" alt="UIET E-Cell Logo" width={28} height={28} className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-sans font-bold text-base text-black dark:text-white">E-Cell</span>
            <span className="text-[9.5px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold">UIET MDU Rohtak</span>
          </div>
        </div>

        <nav aria-label="Mobile Navigation">
          <div className="flex flex-col gap-1.5">
            {links.map((link) => {
              const isActive = activePath === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-black dark:bg-white text-white dark:text-black font-semibold'
                      : 'text-zinc-700 dark:text-zinc-300 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]'
                  }`}
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-col gap-2.5">
            <Link
              href="/apply"
              onClick={onClose}
              className="w-full inline-flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold text-sm py-3 transition-opacity hover:opacity-90 shadow-xs"
            >
              <span>Join E-Cell</span>
            </Link>

            <Link
              href="/admin"
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-zinc-50 dark:bg-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-300 py-2.5 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>Admin Portal</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
