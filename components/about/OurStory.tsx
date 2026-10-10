'use client';

import React from 'react';

export default function OurStory() {
  return (
    <section className="py-16 sm:py-20 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="bg-[#FAFAF8] dark:bg-[#14161C] border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 sm:p-12">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#FF6600] font-bold mb-3">
            ORIGIN &amp; PURPOSE
          </div>
          <h2 className="font-serif font-normal text-2xl sm:text-4xl text-zinc-950 dark:text-white mb-6">
            Why we built UIET E-Cell.
          </h2>
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-3xl">
            <p>
              It started with a simple belief on our campus — that UIET MDU has no shortage of brilliant, driven students, but needed a dedicated student-run ecosystem to turn technical curiosity into enduring, scalable ventures.
            </p>
            <p>
              Established in 2024, UIET E-Cell has rapidly grown into an institutional powerhouse. We organize hands-on product sprints, 24-hour campus ideathons, 1-on-1 advisory clinics with exited founders, and angel pitch delegations that bridge university researchers with the broader Indian venture ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
