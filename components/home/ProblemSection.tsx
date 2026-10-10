'use client';

import React from 'react';
import Link from 'next/link';

export default function ProblemSection() {
  const problems = [
    {
      step: '01',
      title: 'The Co-Founder Void',
      trap: 'Brilliant developers build in isolation without someone handling sales, regulatory filings, or design.',
      solution: 'Curated cross-disciplinary matchmaking across engineering, management, and pharmacy departments.',
    },
    {
      step: '02',
      title: 'The Zero-Capital Cold Start',
      trap: 'Teams stall because paying for AWS cloud servers, GPU compute, or 3D sensor prototypes comes out of pocket.',
      solution: 'Direct equity-free university seed grants and $25,000+ in cloud hosting infrastructure.',
    },
    {
      step: '03',
      title: 'The Silent Code Trap',
      trap: 'Founders write code for six months without ever talking to a single prospective customer or testing pricing.',
      solution: 'Weekly customer interview quotas and rapid MVP sprints before writing extensive architectures.',
    },
  ];

  return (
    <section id="problem" className="py-20 sm:py-26 bg-[#FAFAF8] dark:bg-[#0D0E12] border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#FF6600] font-bold mb-2">
            THE CAMPUS BOTTLENECK
          </div>
          <h2 className="font-serif font-normal text-3xl sm:text-4xl text-zinc-900 dark:text-white mb-4 [text-wrap:balance]">
            Most student projects die in the dorm room. Here is why.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            University students generate incredible technical concepts, but 90% never reach their first 100 users due to predictable institutional friction. We systematically remove those bottlenecks.
          </p>
        </div>

        {/* 3 Comparative Analysis Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#14161C] border border-zinc-200 dark:border-zinc-800 rounded-lg p-7 flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#FF6600]">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                    DIAGNOSIS
                  </span>
                </div>

                <h3 className="font-sans font-bold text-lg text-zinc-900 dark:text-white mb-3">
                  {item.title}
                </h3>

                <div className="mb-5 pb-5 border-b border-zinc-100 dark:border-zinc-800/80">
                  <span className="text-[11px] font-mono text-red-600 dark:text-red-400 font-semibold block mb-1">
                    THE USUAL FAILURE:
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.trap}
                  </p>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold block mb-1">
                  THE E-CELL REMEDY:
                </span>
                <p className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 font-medium leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Footnote Callout */}
        <div className="p-6 bg-white dark:bg-[#14161C] border border-zinc-200 dark:border-zinc-800 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#FF6600]" />
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-medium">
              Have an idea or prototype stalled in development? We review applications on a rolling basis.
            </p>
          </div>
          <Link
            href="/contact"
            className="yc-btn-primary text-xs shrink-0 py-2 px-4 font-semibold"
          >
            Apply with Your Idea →
          </Link>
        </div>
      </div>
    </section>
  );
}
