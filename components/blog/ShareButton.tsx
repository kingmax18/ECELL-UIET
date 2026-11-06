'use client';

import React, { useState } from 'react';

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopyLink}
      className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-pill border border-border hover:border-borderstrong text-xs font-medium text-secondary hover:text-ink bg-white shadow-2xs transition-all cursor-pointer"
    >
      <svg className="w-3.5 h-3.5 text-[#FF933E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
      <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
    </button>
  );
}
