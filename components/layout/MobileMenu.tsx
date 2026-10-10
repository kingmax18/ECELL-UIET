'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
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
        className="absolute top-[70px] left-3 right-3 sm:left-4 sm:right-4 bg-white dark:bg-[#13151A] border border-zinc-200 dark:border-zinc-800 rounded-lg p-5 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <nav aria-label="Mobile Navigation">
          <div className="flex flex-col gap-1">
            {links.map((link) => {
              const isActive = activePath === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-orange-50 dark:bg-orange-950/40 text-[#FF6600] font-semibold'
                      : 'text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
                  }`}
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-2.5">
            <div className="flex items-center justify-between px-3 py-2 bg-zinc-50 dark:bg-zinc-900 rounded-md border border-zinc-200 dark:border-zinc-800">
              <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Theme Mode</span>
              <ThemeToggle showLabel />
            </div>

            <Link
              href="/apply"
              onClick={onClose}
              className="w-full yc-btn-primary justify-center text-sm py-2.5 rounded-md"
            >
              <span>Apply for Cohort 2026</span>
              <span>→</span>
            </Link>

            <Link
              href="/admin"
              onClick={onClose}
              className="w-full yc-btn-secondary justify-center text-xs py-2 rounded-md"
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
