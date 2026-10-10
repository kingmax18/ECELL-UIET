'use client';

import React, { useState } from 'react';
import { EDITORIAL_STRIP_IMAGES, FOUNDER_WORDS } from '@/data/ycHomepageData';

export default function EditorialMissionSection() {
  const [activeQuote, setActiveQuote] = useState<number | null>(null);

  return (
    <section className="relative w-full overflow-hidden bg-[#FDFCF7] dark:bg-[#0B0C0E] py-16 md:py-24 border-t border-zinc-200/60 dark:border-zinc-800/60 transition-colors">
      <div className="mx-auto max-w-[620px] px-6">
        {/* Editorial Text with Giant Drop Cap */}
        <div className="flex flex-col gap-6 text-left">
          <p className="m-0 font-['Source_Serif_4',serif] text-[1.2rem] md:text-[1.28rem] font-normal leading-[1.75] text-[#16140F] dark:text-zinc-200 first-letter:float-left first-letter:mr-3.5 first-letter:text-[6.5rem] md:first-letter:text-[7.4rem] first-letter:font-bold first-letter:leading-[0.75] first-letter:text-[#16140F] dark:first-letter:text-white">
            Founded at UIET MDU Rohtak, the Entrepreneurship Cell operates on a single founding conviction: ambitious student builders shouldn’t have to wait until graduation to build companies that matter. Twice a year we induct cohorts into our campus venture program, where teams receive prototyping grants, lab access, and intensive mentorship before presenting their traction to mentors and investors on Demo Day.
          </p>
          <p className="m-0 font-['Source_Serif_4',serif] text-[1.2rem] md:text-[1.28rem] font-normal leading-[1.75] text-[#16140F] dark:text-zinc-200">
            But E-Cell doesn’t end on Demo Day. We, our faculty advisors, and the broader alumni founder network continue to support student builders throughout the life of their ventures, and beyond.
          </p>
        </div>

        {/* 5-Photo Strip of Campus Founders */}
        <div className="my-10 -mx-6 sm:mx-0 flex gap-2.5 sm:gap-3 overflow-hidden px-6 sm:px-0">
          {EDITORIAL_STRIP_IMAGES.map((imgSrc, i) => (
            <div
              key={i}
              className={`aspect-square min-w-0 flex-1 overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-800 ${
                i >= 3 ? 'hidden sm:block' : ''
              }`}
            >
              <img
                src={imgSrc}
                alt="UIET E-Cell student builder"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* "IN FOUNDERS' WORDS" Section */}
        <div className="flex flex-col gap-6 pt-4">
          <h2 className="m-0 font-['Outfit',sans-serif] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF6600]">
            In Founders’ Words
          </h2>

          <div className="flex flex-col gap-6 text-left font-['Source_Serif_4',serif] text-[1.18rem] md:text-[1.25rem] leading-[1.75] text-[#16140F] dark:text-zinc-200">
            {/* Quote 1 & 2 */}
            <div className="relative">
              <span
                onMouseEnter={() => setActiveQuote(0)}
                onMouseLeave={() => setActiveQuote(null)}
                className="inline py-1 underline underline-offset-4 decoration-[#FF6600]/30 hover:decoration-[#FF6600] cursor-pointer transition-all"
              >
                {FOUNDER_WORDS[0].quote}
              </span>
              <button
                type="button"
                onClick={() => setActiveQuote(activeQuote === 0 ? null : 0)}
                className="mx-2 inline-block h-8 w-8 shrink-0 align-middle rounded-full ring-2 ring-[#FF6600]/40 overflow-hidden cursor-pointer"
                title={`${FOUNDER_WORDS[0].author} (${FOUNDER_WORDS[0].company})`}
              >
                <img
                  src={FOUNDER_WORDS[0].avatar}
                  alt={FOUNDER_WORDS[0].author}
                  className="h-full w-full object-cover"
                />
              </button>

              <span
                onMouseEnter={() => setActiveQuote(1)}
                onMouseLeave={() => setActiveQuote(null)}
                className="inline py-1 underline underline-offset-4 decoration-[#FF6600]/30 hover:decoration-[#FF6600] cursor-pointer transition-all"
              >
                {FOUNDER_WORDS[1].quote}
              </span>
              <button
                type="button"
                onClick={() => setActiveQuote(activeQuote === 1 ? null : 1)}
                className="mx-2 inline-block h-8 w-8 shrink-0 align-middle rounded-full ring-2 ring-[#FF6600]/40 overflow-hidden cursor-pointer"
                title={`${FOUNDER_WORDS[1].author} (${FOUNDER_WORDS[1].company})`}
              >
                <img
                  src={FOUNDER_WORDS[1].avatar}
                  alt={FOUNDER_WORDS[1].author}
                  className="h-full w-full object-cover"
                />
              </button>
            </div>

            {/* Quote 3 & 4 */}
            <div className="relative">
              <span
                onMouseEnter={() => setActiveQuote(2)}
                onMouseLeave={() => setActiveQuote(null)}
                className="inline py-1 underline underline-offset-4 decoration-[#FF6600]/30 hover:decoration-[#FF6600] cursor-pointer transition-all"
              >
                {FOUNDER_WORDS[2].quote}
              </span>
              <button
                type="button"
                onClick={() => setActiveQuote(activeQuote === 2 ? null : 2)}
                className="mx-2 inline-block h-8 w-8 shrink-0 align-middle rounded-full ring-2 ring-[#FF6600]/40 overflow-hidden cursor-pointer"
                title={`${FOUNDER_WORDS[2].author} (${FOUNDER_WORDS[2].company})`}
              >
                <img
                  src={FOUNDER_WORDS[2].avatar}
                  alt={FOUNDER_WORDS[2].author}
                  className="h-full w-full object-cover"
                />
              </button>

              <span
                onMouseEnter={() => setActiveQuote(3)}
                onMouseLeave={() => setActiveQuote(null)}
                className="inline py-1 underline underline-offset-4 decoration-[#FF6600]/30 hover:decoration-[#FF6600] cursor-pointer transition-all"
              >
                {FOUNDER_WORDS[3].quote}
              </span>
              <button
                type="button"
                onClick={() => setActiveQuote(activeQuote === 3 ? null : 3)}
                className="mx-2 inline-block h-8 w-8 shrink-0 align-middle rounded-full ring-2 ring-[#FF6600]/40 overflow-hidden cursor-pointer"
                title={`${FOUNDER_WORDS[3].author} (${FOUNDER_WORDS[3].company})`}
              >
                <img
                  src={FOUNDER_WORDS[3].avatar}
                  alt={FOUNDER_WORDS[3].author}
                  className="h-full w-full object-cover"
                />
              </button>
            </div>

            {/* Quote 5 & 6 */}
            <div className="relative">
              <span
                onMouseEnter={() => setActiveQuote(4)}
                onMouseLeave={() => setActiveQuote(null)}
                className="inline py-1 underline underline-offset-4 decoration-[#FF6600]/30 hover:decoration-[#FF6600] cursor-pointer transition-all"
              >
                {FOUNDER_WORDS[4].quote}
              </span>
              <button
                type="button"
                onClick={() => setActiveQuote(activeQuote === 4 ? null : 4)}
                className="mx-2 inline-block h-8 w-8 shrink-0 align-middle rounded-full ring-2 ring-[#FF6600]/40 overflow-hidden cursor-pointer"
                title={`${FOUNDER_WORDS[4].author} (${FOUNDER_WORDS[4].company})`}
              >
                <img
                  src={FOUNDER_WORDS[4].avatar}
                  alt={FOUNDER_WORDS[4].author}
                  className="h-full w-full object-cover"
                />
              </button>

              <span
                onMouseEnter={() => setActiveQuote(5)}
                onMouseLeave={() => setActiveQuote(null)}
                className="inline py-1 underline underline-offset-4 decoration-[#FF6600]/30 hover:decoration-[#FF6600] cursor-pointer transition-all"
              >
                {FOUNDER_WORDS[5].quote}
              </span>
              <button
                type="button"
                onClick={() => setActiveQuote(activeQuote === 5 ? null : 5)}
                className="mx-2 inline-block h-8 w-8 shrink-0 align-middle rounded-full ring-2 ring-[#FF6600]/40 overflow-hidden cursor-pointer"
                title={`${FOUNDER_WORDS[5].author} (${FOUNDER_WORDS[5].company})`}
              >
                <img
                  src={FOUNDER_WORDS[5].avatar}
                  alt={FOUNDER_WORDS[5].author}
                  className="h-full w-full object-cover"
                />
              </button>
            </div>
          </div>

          {/* Active quote author badge */}
          {activeQuote !== null && (
            <div className="p-3 bg-[#FFF4ED] dark:bg-orange-950/20 border border-[#FFD8BE] dark:border-orange-900/40 rounded-lg flex items-center gap-3 animate-fadeIn">
              <img
                src={FOUNDER_WORDS[activeQuote].avatar}
                alt={FOUNDER_WORDS[activeQuote].author}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="font-['Outfit',sans-serif] font-semibold text-sm text-[#16140F] dark:text-white">
                  {FOUNDER_WORDS[activeQuote].author}
                </span>
                <span className="font-['Outfit',sans-serif] text-xs text-[#FF6600]">
                  {FOUNDER_WORDS[activeQuote].company} · Cohort {FOUNDER_WORDS[activeQuote].batch}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
