'use client';

import React from 'react';
import { FEATURED_QUOTE } from '@/data/ycHomepageData';

export default function FeaturedQuoteSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FDFCF7] dark:bg-[#0B0C0E] border-t border-b border-zinc-200/60 dark:border-zinc-800/60 transition-colors">
      <figure className="mx-auto flex max-w-[860px] flex-col gap-8 px-6 text-center">
        <blockquote className="m-0 font-['Source_Serif_4',serif] text-2xl sm:text-3xl md:text-[2rem] font-normal leading-[1.45] tracking-[-0.01em] text-[#16140F] dark:text-zinc-100">
          “{FEATURED_QUOTE.text}”
        </blockquote>
        <figcaption className="flex items-center justify-center gap-3.5 font-['Outfit',sans-serif] text-sm sm:text-base font-normal leading-tight text-[#16140F] dark:text-zinc-300">
          <div className="w-10 h-10 shrink-0 rounded-full bg-orange-50 dark:bg-orange-950/40 border border-[#FF6600]/30 flex items-center justify-center font-mono font-bold text-sm text-[#FF6600]">
            RK
          </div>
          <span>
            <strong className="font-semibold text-zinc-900 dark:text-white">{FEATURED_QUOTE.author}</strong>
            , {FEATURED_QUOTE.role}
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
