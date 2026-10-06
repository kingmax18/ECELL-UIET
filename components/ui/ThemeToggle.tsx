'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeProvider';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(false);
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render skeleton/placeholder to prevent hydration layout shift
    return (
      <div
        className={`w-10 h-10 rounded-full border-2 border-[#0047FF] bg-[#F4F6FF] opacity-50 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`group relative inline-flex items-center justify-center gap-2 p-2 rounded-full border-2 transition-all cursor-pointer shadow-[2px_2px_0px_#0A0E1A] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none ${
        isDark
          ? 'bg-[#141B4D] border-[#CBFF2E] text-[#CBFF2E] hover:bg-[#CBFF2E] hover:text-[#0A0E1A]'
          : 'bg-[#F4F6FF] border-[#0047FF] text-[#0047FF] hover:bg-[#CBFF2E] hover:text-[#0A0E1A] hover:border-[#0A0E1A]'
      } ${className}`}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {isDark ? (
        /* Sun Icon */
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      ) : (
        /* Moon Icon */
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}

      {showLabel && (
        <span className="text-xs font-bold tracking-wider uppercase">
          {isDark ? 'Light' : 'Dark'}
        </span>
      )}
    </button>
  );
}
