'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useData } from '@/context/DataProvider';

export default function TopBanner() {
  const { settings } = useData();
  const [dismissed, setDismissed] = useState(false);

  const banner = settings?.announcementBanner;
  if (!banner?.enabled || dismissed) return null;

  return (
    <aside
      aria-label="Announcement banner"
      className="pointer-events-auto w-full bg-[#111827] text-white py-2 px-4 text-xs border-b border-zinc-800 shadow-sm"
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 mx-auto text-center sm:text-left flex-wrap justify-center">
          <span className="inline-flex items-center gap-1.5 bg-[#FF6B00] text-white px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase font-['Space_Grotesk']">
            Announcement
          </span>
          <span className="text-zinc-300 font-normal">
            {banner.text || 'Applications for UIET E-Cell are open.'}
          </span>
          {banner.linkUrl && (
            <Link
              href={banner.linkUrl}
              className="text-[#FFCB56] hover:text-[#FFE9A9] font-medium inline-flex items-center gap-1 underline underline-offset-4 transition-colors"
            >
              {banner.linkText || 'Learn More →'}
            </Link>
          )}
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="text-zinc-400 hover:text-white p-1 rounded transition-colors hidden sm:inline-flex items-center justify-center shrink-0 cursor-pointer"
          aria-label="Dismiss banner"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
