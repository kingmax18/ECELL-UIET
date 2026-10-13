'use client';

import React from 'react';
import Link from 'next/link';

const showcaseEvents = [
  {
    id: 1,
    title: 'Eureka Pitching Competition 2026',
    tagline: 'Flagship pitching conclave with certificates, mentor judges, and campus incubator recognition.',
    category: 'Pitch Competition',
    date: '27 Aug 2026',
    venue: 'UIET MDU Main Auditorium',
    status: 'Concluded',
    isOpen: false,
  },
  {
    id: 2,
    title: 'Digital Marketing & Content Masterclass',
    tagline: 'Hands-on live SEO, growth marketing, and social media brand-building workshop.',
    category: 'Skill Workshop',
    date: '20 May 2025',
    venue: 'Google Meet',
    status: 'Concluded',
    isOpen: false,
  },
  {
    id: 3,
    title: 'Ideathon 2025 — Solutions for Campus',
    tagline: '24-hour collaborative sprint building high-impact tech solutions for university problems.',
    category: '24-hr Hackathon',
    date: '10 Mar 2025',
    venue: 'MDU Innovation Hub',
    status: 'Concluded',
    isOpen: false,
  },
  {
    id: 4,
    title: 'Annual E-Summit 2024',
    tagline: 'University entrepreneurship conclave uniting 600+ students, founder keynotes, and VC panels.',
    category: 'Flagship Summit',
    date: '25 Nov 2024',
    venue: 'MDU Main Campus',
    status: 'Concluded',
    isOpen: false,
  },
];

export default function EventsPreview() {
  return (
    <section className="py-20 sm:py-24 bg-[#FAFAF8] dark:bg-[#0D0E12] border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 dark:bg-orange-500/20 border border-orange-500/20 text-[#FF6600] text-xs font-bold uppercase tracking-wider mb-2">
              Campus Initiatives
            </div>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white mb-2 tracking-tight">
              Flagship events and summits<span className="text-[#FF6600]">.</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-lg leading-relaxed">
              A look back at our hands-on workshops, ideathons, and pitch challenges hosted at UIET MDU.
            </p>
          </div>

          <Link
            href="/events"
            className="yc-btn-secondary text-xs self-start sm:self-auto"
          >
            Browse All Events →
          </Link>
        </div>

        {/* Schedule List Format - Clean Aesthetic */}
        <div className="space-y-4">
          {showcaseEvents.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#14161C] border border-zinc-200 dark:border-zinc-800 rounded-lg p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all shadow-2xs group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                {/* Date Box */}
                <div className="w-24 h-16 rounded bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 flex flex-col items-center justify-center shrink-0">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                    DATE
                  </span>
                  <span className="font-semibold text-xs text-zinc-900 dark:text-white mt-0.5 text-center px-1">
                    {item.date}
                  </span>
                </div>

                {/* Details */}
                <div>
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="text-[11px] font-sans font-semibold text-[#FF6600] bg-orange-50 dark:bg-orange-950/40 px-2 py-0.5 rounded border border-orange-200 dark:border-orange-900/60">
                      {item.category}
                    </span>
                    <span className="text-xs text-zinc-400">·</span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-sans">
                      {item.venue}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-lg sm:text-xl text-zinc-900 dark:text-white group-hover:text-[#FF6600] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                    {item.tagline}
                  </p>
                </div>
              </div>

              {/* Action & Status */}
              <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
                <span className="text-xs font-sans font-semibold text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/80 px-2.5 py-1 rounded-full border border-zinc-200/80 dark:border-zinc-700/60">
                  {item.status}
                </span>
                <Link
                  href="/events"
                  className="yc-btn-secondary text-xs py-1.5 px-3 rounded"
                >
                  Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
