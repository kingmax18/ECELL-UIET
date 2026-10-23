'use client';

import React from 'react';
import Link from 'next/link';

const teamMembers = [
  { id: 1, name: 'Shubhkamna', role: 'President', year: '2nd Year, B.Tech ECE', image: null, tag: 'Executive Board' },
  { id: 2, name: 'Saloni Jha', role: 'Vice President', year: '2nd Year, B.Tech ECE', image: null, tag: 'Executive Board' },
  { id: 3, name: 'Lakshay', role: 'General Secretary', year: '2nd Year, B.Tech ECE', image: null, tag: 'Engineering & Tech' },
  { id: 4, name: 'Rimpi', role: 'Joint Secretary', year: '2nd Year, B.Tech Biotech', image: null, tag: 'Operations' },
  { id: 5, name: 'Muskan', role: 'Treasurer', year: '2nd Year, B.Tech ECE', image: null, tag: 'Finance & Research' },
];

export default function TeamPreview() {
  return (
    <section className="py-20 sm:py-26 bg-white dark:bg-[#0B0C0E] border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#FF6600] font-bold mb-2">
              STUDENT OPERATORS
            </div>
            <h2 className="font-serif font-normal text-3xl sm:text-4xl text-zinc-900 dark:text-white mb-2">
              Run by student builders, for student founders.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-xl">
              Our student executive board drives campus outreach, organizes the flagship Eureka Pitching Competition, and fosters peer collaboration across UIET.
            </p>
          </div>

          <Link
            href="/team"
            className="yc-btn-secondary text-xs self-start sm:self-auto"
          >
            Meet Full Team →
          </Link>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {teamMembers.map((m) => (
            <div
              key={m.id}
              className="yc-card overflow-hidden flex flex-col group hover:border-zinc-400 dark:hover:border-zinc-600"
            >
              <div className="relative w-full py-8 flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-100 dark:border-zinc-800">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-xl font-serif text-[#FF6600] font-bold shadow-xs">
                  {m.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <span className="mt-3 bg-white/95 dark:bg-zinc-900/95 text-zinc-800 dark:text-zinc-200 text-[10px] font-mono font-medium py-0.5 px-2 rounded border border-zinc-200 dark:border-zinc-700">
                  {m.tag}
                </span>
              </div>

              <div className="p-4 sm:p-5 flex flex-col">
                <h3 className="font-sans font-bold text-base text-zinc-900 dark:text-white mb-1">
                  {m.name}
                </h3>
                <span className="text-xs font-mono font-medium text-[#FF6600] mb-1">
                  {m.role}
                </span>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{m.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
