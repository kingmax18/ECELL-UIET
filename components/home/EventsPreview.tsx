'use client';

import React from 'react';
import Link from 'next/link';

const showcaseEvents = [
  {
    id: 1,
    title: 'UIET Annual Demo Day 2026',
    tagline: 'Cohort S26 pitches to 20+ angel investors and seed syndicates.',
    category: 'Flagship Demo Day',
    date: '28 Oct 2026',
    venue: 'Radhakrishnan Auditorium, MDU',
    status: 'Applications Open',
    isOpen: true,
  },
  {
    id: 2,
    title: 'Founder Office Hours: Product Architecture Teardown',
    tagline: '1-on-1 private advisory clinics with visiting alumni founders.',
    category: 'Founder Clinic',
    date: '15 Nov 2026',
    venue: 'UIET Computer Labs',
    status: 'Registrations Open',
    isOpen: true,
  },
  {
    id: 3,
    title: '24-Hour Campus Hackathon & Prototyping Sprint',
    tagline: 'Build, deploy, and ship working code in 24 hours with ₹1L in prizes.',
    category: 'Hackathon',
    date: '12 Dec 2026',
    venue: 'Seminar Hall & Central Labs',
    status: 'Upcoming',
    isOpen: true,
  },
  {
    id: 4,
    title: 'National Entrepreneurship Summit & Investor Conclave',
    tagline: 'Keynote speakers, VC panels, and state innovation policy leaders.',
    category: 'Venture Summit',
    date: '05 Jan 2027',
    venue: 'MDU University Campus',
    status: 'Upcoming',
    isOpen: false,
  },
];

export default function EventsPreview() {
  return (
    <section className="py-20 sm:py-26 bg-[#FAFAF8] dark:bg-[#0D0E12] border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#FF6600] font-bold mb-2">
              UPCOMING GATHERINGS
            </div>
            <h2 className="font-serif font-normal text-3xl sm:text-4xl text-zinc-900 dark:text-white mb-2">
              Demo Days, hackathons, and office hours.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-xl">
              We host high-signal gatherings where university builders meet investors and collaborators.
            </p>
          </div>

          <Link
            href="/events"
            className="yc-btn-secondary text-xs self-start sm:self-auto"
          >
            View Full Calendar →
          </Link>
        </div>

        {/* Schedule List Format - Clean YC Institutional Aesthetic */}
        <div className="space-y-4">
          {showcaseEvents.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#14161C] border border-zinc-200 dark:border-zinc-800 rounded-lg p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all shadow-2xs group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                {/* Date Box */}
                <div className="w-24 h-16 rounded bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 flex flex-col items-center justify-center shrink-0">
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                    DATE
                  </span>
                  <span className="font-semibold text-xs text-zinc-900 dark:text-white mt-0.5 text-center px-1">
                    {item.date}
                  </span>
                </div>

                {/* Details */}
                <div>
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="text-[11px] font-mono font-medium text-[#FF6600] bg-orange-50 dark:bg-orange-950/40 px-2 py-0.5 rounded border border-orange-200 dark:border-orange-900/60">
                      {item.category}
                    </span>
                    <span className="text-xs text-zinc-400">·</span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      {item.venue}
                    </span>
                  </div>

                  <h3 className="font-serif font-normal text-xl text-zinc-900 dark:text-white group-hover:text-[#FF6600] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    {item.tagline}
                  </p>
                </div>
              </div>

              {/* Action & Status */}
              <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
                <span className="text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-200 dark:border-emerald-800/60">
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
