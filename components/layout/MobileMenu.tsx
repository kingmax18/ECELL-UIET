'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/lib/constants';

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
  // Lock body scroll when mobile menu is open
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

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] md:hidden flex flex-col justify-between bg-black/60 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="w-full bg-[#FCFCFA] text-zinc-900 border-b border-zinc-200 shadow-2xl flex flex-col max-h-[92vh] overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-200/80 bg-white">
          <Link href="/" onClick={onClose} className="flex items-center gap-2.5 no-underline">
            <Image src="/logo.png" alt="UIET E-Cell" width={32} height={32} className="rounded-lg object-contain" />
            <div className="leading-tight">
              <span className="font-['Space_Grotesk'] font-bold text-base tracking-tight text-zinc-900">
                E-Cell<span className="text-[#FF6600]">.</span>UIET
              </span>
              <span className="block text-[10px] font-mono text-zinc-500 font-medium">MDU Rohtak</span>
            </div>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Close navigation"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Mobile Navigation">
          {links.map((link) => {
            const isActive = currentPath === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`flex items-center justify-between py-3 px-4 rounded-xl text-base font-['Space_Grotesk'] font-semibold no-underline transition-all duration-150 ${
                  isActive
                    ? 'bg-[#FF6600]/10 text-[#FF6600]'
                    : 'text-zinc-800 hover:text-zinc-950 hover:bg-zinc-100/80 active:bg-zinc-200'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#FF6600]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Call to Actions & Direct Links */}
        <div className="px-5 py-4 border-t border-zinc-200/80 flex flex-col gap-3 bg-zinc-50/60">
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-[#FF6600] text-white font-['Space_Grotesk'] font-bold text-sm shadow-md hover:bg-[#E85C00] active:scale-[0.98] transition-all no-underline text-center"
          >
            <span>Join E-Cell</span>
            <span>→</span>
          </Link>

          <Link
            href="/events"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white border border-zinc-200 text-zinc-800 font-['Space_Grotesk'] font-semibold text-sm hover:bg-zinc-50 active:scale-[0.98] transition-all no-underline text-center"
          >
            <span>Explore Eureka 2026</span>
          </Link>
        </div>

        {/* Footer Meta / Direct Channels */}
        <div className="px-5 py-3.5 border-t border-zinc-200/60 bg-white flex items-center justify-between text-xs text-zinc-500 font-['Space_Grotesk']">
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/company/mdu-ecell"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-[#FF6600] font-medium transition-colors no-underline"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/ecell_mdu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-[#FF6600] font-medium transition-colors no-underline"
            >
              Instagram
            </a>
            <Link
              href="/admin"
              onClick={onClose}
              className="text-zinc-600 hover:text-[#FF6600] font-medium transition-colors no-underline"
            >
              Admin
            </Link>
          </div>
          <span className="text-[11px] text-zinc-400">UIET · MDU</span>
        </div>
      </div>
    </div>
  );
}
