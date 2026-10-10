'use client';

import React from 'react';
import { CORE_VALUES } from '@/lib/constants';

export default function CoreValues() {
  return (
    <section className="py-16 sm:py-22 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#FF6600] font-bold mb-2">
            OPERATING PRINCIPLES
          </div>
          <h2 className="font-serif font-normal text-3xl sm:text-4xl text-zinc-900 dark:text-white mb-2">
            The core values that guide our cohort.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            How our mentors, executive board, and campus founders hold each other accountable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="yc-card p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#FF6600]">
                    {val.number}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase">
                    {val.label}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-lg text-zinc-950 dark:text-white mb-2">
                  {val.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
