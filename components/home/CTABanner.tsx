'use client';

import React from 'react';
import Link from 'next/link';
import { CTA_STRIP_IMAGES } from '@/data/ycHomepageData';

export default function CTABanner() {
  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-6 pt-16 md:pt-24 pb-8 bg-[#FDFCF7] dark:bg-[#0B0C0E] border-t border-zinc-200/60 dark:border-zinc-800/60 transition-colors">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-center text-center">
        {/* Headline & Subhead */}
        <div className="flex w-full flex-col items-center gap-3">
          <h2 className="m-0 font-['Source_Serif_4',serif] text-4xl sm:text-5xl md:text-[3.75rem] font-normal italic leading-[1.1] text-[#16140f] dark:text-zinc-100">
            It’s never too early to apply.
          </h2>
          <p className="m-0 max-w-xl text-center font-['Outfit',sans-serif] font-light text-base sm:text-lg leading-[1.4] text-[#16140f]/80 dark:text-zinc-300">
            We back student builders with no revenue, working prototype, or fully baked business plan.
          </p>
        </div>

        {/* Big Black Oval Pill Button */}
        <div className="mt-8 flex w-full justify-center">
          <Link
            href="/apply"
            className="inline-flex h-16 sm:h-20 items-center justify-center rounded-full bg-black dark:bg-white px-10 pb-1 font-['Source_Serif_4',serif] text-2xl sm:text-[1.75rem] font-normal italic tracking-[0.015rem] text-white dark:text-black no-underline transition-[opacity,transform] duration-300 ease-out hover:opacity-80 active:scale-95 shadow-lg"
          >
            Apply
          </Link>
        </div>

        {/* Iconic Horizontal Campus Founder Portrait Strip (5 Photos) */}
        <div className="mt-16 md:mt-20 flex w-full gap-2.5 sm:gap-3 overflow-hidden max-w-[1400px]">
          {CTA_STRIP_IMAGES.map((imgSrc, i) => (
            <div
              key={i}
              className={`aspect-square min-w-0 flex-1 overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800 shadow-xs ${
                i >= 3 ? 'hidden sm:block' : ''
              }`}
            >
              <img
                src={imgSrc}
                alt="UIET E-Cell student cohort"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
