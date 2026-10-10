'use client';

import React from 'react';

const awards = [
  {
    title: 'E-Summit Innovation Excellence Award',
    desc: 'Awarded by university leadership for pioneering 100% student-run founder incubation, seed grants, and pitch forums.',
    year: '2026',
    badge: 'MDU Innovation',
  },
  {
    title: 'State Startup Hub Recognition',
    desc: 'Recognized by state innovation authorities for fostering high-density university patents and B2B SaaS solutions.',
    year: '2025',
    badge: 'Ecosystem Partner',
  },
  {
    title: 'Best University Chapter Initiative',
    desc: 'Honored for highest collegiate engagement, technical workshop execution, and founder retention across North India.',
    year: '2024',
    badge: 'Youth Leadership',
  },
];

export default function AccoladesSection() {
  return (
    <section className="py-20 sm:py-26 bg-[#FAFAF8] dark:bg-[#0D0E12] border-b border-zinc-200 dark:border-zinc-800" id="award">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#FF6600] font-bold mb-2">
            INSTITUTIONAL HONORS
          </div>
          <h2 className="font-serif font-normal text-3xl sm:text-4xl text-zinc-900 dark:text-white mb-2">
            Recognized by state and national ecosystems.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            Our incubator framework has been commended for creating tangible startup velocity on university grounds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {awards.map((a, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#14161C] border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:border-zinc-400 dark:hover:border-zinc-600 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-[11px] font-mono font-medium text-[#FF6600] bg-orange-50 dark:bg-orange-950/40 px-2 py-0.5 rounded border border-orange-200 dark:border-orange-900/60">
                    {a.badge}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {a.year}
                  </span>
                </div>

                <h3 className="font-serif font-normal text-xl leading-snug text-zinc-900 dark:text-white mb-2.5">
                  {a.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {a.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
