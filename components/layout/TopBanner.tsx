'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function TopBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside
      aria-label="Application announcement"
      className="bg-[#111827] text-white py-2 px-4 text-xs border-b border-zinc-800 relative z-[1001]"
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 mx-auto text-center sm:text-left flex-wrap justify-center">
          <span className="inline-flex items-center gap-1.5 bg-[#FF6600] text-white px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase">
            Recruiting
          </span>
          <span className="text-zinc-300 font-normal">
            Applications for the <strong className="text-white font-medium">UIET E-Cell Cohort 2026</strong> are now open.
          </span>
          <Link
            href="/apply"
            className="text-[#FF8533] hover:text-[#FF994D] font-medium inline-flex items-center gap-1 underline underline-offset-4 transition-colors"
          >
            Apply by April 30 →
          </Link>
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="text-zinc-400 hover:text-white p-1 rounded transition-colors hidden sm:inline-flex items-center justify-center shrink-0"
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
