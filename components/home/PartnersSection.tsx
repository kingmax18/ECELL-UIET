'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { YC_PARTNERS, PartnerItem } from '@/data/ycHomepageData';

export default function PartnersSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="w-full overflow-hidden py-16 md:py-[100px] bg-[#FDFCF7] dark:bg-[#0B0C0E] transition-colors">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 xl:px-12">
        <h2 className="mx-auto mb-10 md:mb-[60px] px-4 text-center font-['Source_Serif_4',serif] text-3xl sm:text-4xl md:text-5xl font-normal italic leading-[1.2] text-[#16140f] dark:text-zinc-100">
          All partners were <br className="md:hidden" />
          campus builders first
        </h2>

        {/* Responsive Grid */}
        <div className="scrollbar-none flex w-full snap-x snap-mandatory flex-row gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8 sm:overflow-visible sm:pb-0">
          {YC_PARTNERS.map((partner, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={partner.name}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="max-sm:w-[85vw] max-sm:max-w-[340px] shrink-0 snap-center"
              >
                <Link href={partner.url} className="text-inherit no-underline block group">
                  <div className="relative aspect-[3/3.5] w-full overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 transition-all duration-300 md:hover:shadow-2xl">
                    {/* Image 1: Main Photo */}
                    <img
                      src={partner.photo}
                      alt={partner.name}
                      referrerPolicy="no-referrer"
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                        isHovered ? 'opacity-0' : 'opacity-100'
                      }`}
                      loading="lazy"
                    />

                    {/* Image 2: Batch / Day 1 Photo (revealed on hover) */}
                    <img
                      src={partner.batchPhoto}
                      alt={`${partner.name} at campus`}
                      referrerPolicy="no-referrer"
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading="lazy"
                    />

                    {/* Shadow & Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 via-50% to-transparent" />

                    {/* Partner Card Details */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white z-10">
                      <div className="mb-2 flex flex-col items-start gap-0.5 text-left">
                        <span className="font-['Outfit',sans-serif] text-xl md:text-2xl font-normal leading-tight text-white drop-shadow-md">
                          {partner.name}
                        </span>
                        <span className="font-['Outfit',sans-serif] text-xs md:text-sm font-medium text-[#FF6600] drop-shadow-sm">
                          {partner.batchTitle}
                        </span>
                      </div>
                      <p className="m-0 font-['Outfit',sans-serif] font-light text-xs md:text-[13px] leading-relaxed text-white/90 drop-shadow-sm line-clamp-3">
                        {partner.bio}
                      </p>
                    </div>

                    {/* Hover indicator banner */}
                    <div
                      className={`absolute top-4 right-4 text-[10px] uppercase font-['Outfit',sans-serif] tracking-widest px-2.5 py-1 rounded bg-black/60 text-white backdrop-blur-xs transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      Day 1 Photo
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
