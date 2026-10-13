'use client';

import React from 'react';
import Link from 'next/link';
import { YC_PARTNERS } from '@/data/ycHomepageData';

export default function PartnersSection() {
  return (
    <section className="w-full overflow-hidden py-16 md:py-[100px] bg-[#FDFCF7] dark:bg-[#0B0C0E] transition-colors">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 xl:px-12">
        <h2 className="mx-auto mb-10 md:mb-[60px] px-4 text-center font-['Source_Serif_4',serif] text-3xl sm:text-4xl md:text-5xl font-normal italic leading-[1.2] text-[#16140f] dark:text-zinc-100">
          All partners were <br className="md:hidden" />
          campus builders first
        </h2>

        {/* Responsive Grid */}
        <div className="scrollbar-none flex w-full snap-x snap-mandatory flex-row gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8 sm:overflow-visible sm:pb-0">
          {YC_PARTNERS.map((partner) => {
            const initials = partner.name
              .split(' ')
              .map((n) => n[0])
              .slice(0, 2)
              .join('');

            return (
              <div
                key={partner.name}
                className="max-sm:w-[85vw] max-sm:max-w-[340px] shrink-0 snap-center"
              >
                <Link href={partner.url} className="text-inherit no-underline block group h-full">
                  <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-[#13151A] border border-zinc-200/80 dark:border-zinc-800 transition-all duration-300 hover:border-[#FF6600] flex flex-col justify-between h-full min-h-[240px]">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-lg bg-orange-50 dark:bg-orange-950/40 border border-[#FF6600]/30 flex items-center justify-center font-mono font-bold text-sm text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                          {initials}
                        </div>
                        <span className="text-[10px] font-mono uppercase text-[#FF6600] font-bold">
                          {partner.title}
                        </span>
                      </div>
                      <h3 className="font-['Outfit',sans-serif] text-xl font-medium leading-tight text-zinc-950 dark:text-white mb-1">
                        {partner.name}
                      </h3>
                      <p className="font-['Outfit',sans-serif] text-xs font-mono text-zinc-500 mb-3">
                        {partner.batchTitle}
                      </p>
                      <p className="font-['Outfit',sans-serif] font-light text-xs md:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {partner.bio}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
