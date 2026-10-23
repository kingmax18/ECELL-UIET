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
            Why we built E-Cell.
          </h2>
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-3xl">
            <p>
              It started with a simple belief on our campus — that UIET MDU has no shortage of brilliant, driven students, but needed a dedicated student-run ecosystem to turn technical curiosity into enduring, scalable ventures.
            </p>
            <p>
              Taking over the leadership in August, our current student council relaunched E-Cell to create an active, accessible platform for campus innovators. Building on the foundation laid by our seniors who organized Eureka on 15th September, we host the flagship Eureka pitching competition where students showcase working prototypes, receive direct faculty guidance, and collaborate across engineering and biotechnology departments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
