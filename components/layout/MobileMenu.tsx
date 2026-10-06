'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  currentPath: string;
}

export default function MobileMenu({ isOpen, onClose, links, currentPath }: MobileMenuProps) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] bg-[#070A26]/80 [backdrop-filter:blur(8px)]"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label="Navigation menu"
    >
      <div
        className="absolute top-[82px] left-3 right-3 sm:left-4 sm:right-4 bg-[#0B0F33] border-2 border-[#863DFF] rounded-2xl p-5 shadow-[6px_6px_0px_#070A26]"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'slideDown 0.25s cubic-bezier(0.16,1,0.3,1) both' }}
      >
        <nav aria-label="Mobile Navigation">
          <div className="flex flex-col gap-1.5">
            {links.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2.5 px-4 rounded-xl text-sm font-bold no-underline transition-all ${
                    isActive ? 'bg-[#863DFF] text-white' : 'text-[#DDE0FF] hover:bg-[#863DFF]/20 hover:text-white'
                  }`}
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t-2 border-[#1F2766] flex flex-col gap-2.5">
            <Link
              href="/contact"
              onClick={onClose}
              className="w-full neo-btn-primary justify-center text-sm py-3"
            >
              <span>Join UIET E-Cell 2026-27</span>
              <span>→</span>
            </Link>

            <Link
              href="/admin"
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#070A26] text-[#DDE0FF] font-bold text-xs uppercase tracking-wider py-2.5 rounded-xl border-2 border-[#863DFF] hover:text-[#CBFF2E] hover:border-[#CBFF2E] transition-all no-underline"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span>Admin Portal</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
