'use client';

import React from 'react';
import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-6 py-20 md:py-24 bg-[#FDFCF7] dark:bg-[#0B0C0E] border-t border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="mx-auto flex w-full max-w-[800px] flex-col items-center justify-center text-center">
        {/* Eyebrow */}
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF6600] font-bold mb-3">
          GET INVOLVED
        </span>

        {/* Headline */}
        <h2 className="font-serif font-normal text-3xl sm:text-5xl text-zinc-950 dark:text-white mb-4 [text-wrap:balance]">
          Ready to build with <span className="italic text-[#FF6600]">E-Cell?</span>
        </h2>

        {/* Subhead */}
        <p className="max-w-lg text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 mb-8">
          Join our community of innovators, problem-solvers, and builders across departments at UIET MDU Rohtak.
        </p>

        {/* Action Button */}
        <Link
          href="/apply"
          className="inline-flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold text-sm sm:text-base px-8 py-3.5 hover:opacity-90 transition-all shadow-sm"
        >
          Apply to Join E-Cell →
        </Link>
      </div>
    </section>
  );
}
