'use client';

import React from 'react';
import Image from 'next/image';
import type { Faculty } from '@/lib/types';

export default function FacultySection({ faculty }: { faculty: Faculty }) {
  if (!faculty) return null;

  return (
    <section className="py-16 sm:py-20 bg-[#FAFAF8] dark:bg-[#0E1015] border-t border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="bg-white dark:bg-[#14161C] border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 sm:p-10 shadow-2xs flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-36 h-36 rounded-md overflow-hidden shrink-0 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
            <Image
              src={faculty.photo || '/gallery/page_28.jpg'}
              alt={faculty.name}
              width={160}
              height={160}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#FF6600] font-bold uppercase tracking-wider mb-1.5">
              <span>●</span>
              <span>INSTITUTIONAL LEADERSHIP</span>
            </div>

            <h3 className="font-serif font-normal text-2xl sm:text-3xl text-zinc-950 dark:text-white mb-1">
              {faculty.name}
            </h3>

            <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-3">
              {faculty.designation} · Maharshi Dayanand University
            </p>

            {faculty.bio && (
              <p className="text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-2xl mb-6">
                {faculty.bio}
              </p>
            )}

            {faculty.email && (
              <a
                href={`mailto:${faculty.email}`}
                className="yc-btn-primary text-xs py-2 px-4 font-semibold"
              >
                Contact Faculty Advisory Office →
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
