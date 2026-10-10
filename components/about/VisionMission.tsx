'use client';

import React from 'react';

export default function VisionMission() {
  return (
    <section className="py-16 sm:py-20 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="yc-card p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-medium text-[#FF6600] bg-orange-50 dark:bg-orange-950/40 px-2 py-0.5 rounded border border-orange-200 dark:border-orange-900/60 uppercase">
                Vision Statement
              </span>
              <h3 className="font-serif font-normal text-2xl sm:text-3xl text-zinc-950 dark:text-white my-4 leading-tight">
                &ldquo;Inspiring a Generation of <span className="italic text-[#FF6600]">Changemakers</span>&rdquo;
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-[#FF6600] font-bold text-xs mt-0.5">01</span>
                  <span><strong className="text-zinc-900 dark:text-white font-semibold">Inspire Innovation:</strong> Encouraging every student on campus to explore non-traditional career and founder paths.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-[#FF6600] font-bold text-xs mt-0.5">02</span>
                  <span><strong className="text-zinc-900 dark:text-white font-semibold">Empower Builders:</strong> Providing technical masterclasses, grant capital, and founder office hours.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-[#FF6600] font-bold text-xs mt-0.5">03</span>
                  <span><strong className="text-zinc-900 dark:text-white font-semibold">Create Enduring Value:</strong> Turning raw campus prototypes into defensible, revenue-generating entities.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mission Card */}
          <div className="yc-card p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-900/60 uppercase">
                Mission Statement
              </span>
              <h3 className="font-serif font-normal text-2xl sm:text-3xl text-zinc-950 dark:text-white my-4 leading-tight">
                &ldquo;Learn. Collaborate. <span className="italic text-emerald-600 dark:text-emerald-400">Launch.</span>&rdquo;
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-emerald-600 font-bold text-xs mt-0.5">01</span>
                  <span><strong className="text-zinc-900 dark:text-white font-semibold">Bias Toward Action:</strong> Focusing on customer discovery and working software over hypothetical business decks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-emerald-600 font-bold text-xs mt-0.5">02</span>
                  <span><strong className="text-zinc-900 dark:text-white font-semibold">Cross-Department Guilds:</strong> Connecting engineering devs with management and commerce talent.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-emerald-600 font-bold text-xs mt-0.5">03</span>
                  <span><strong className="text-zinc-900 dark:text-white font-semibold">Venture Access:</strong> Sponsoring demo day slots with angel syndicates and state incubation grants.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
