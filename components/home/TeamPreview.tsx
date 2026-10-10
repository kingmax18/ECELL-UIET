'use client';

import React from 'react';
import Link from 'next/link';

const teamMembers = [
  { id: 1, name: 'Ananya Sharma', role: 'President', year: '4th Year, B.Tech CSE', image: '/gallery/page_10.jpg', tag: 'Executive Board' },
  { id: 2, name: 'Rohan Mehta', role: 'Vice President', year: '3rd Year, MBA', image: '/gallery/page_12.jpg', tag: 'Executive Board' },
  { id: 3, name: 'Lakshay', role: 'Tech & Product Lead', year: '3rd Year, B.Tech CSE', image: '/gallery/page_20.jpg', tag: 'Engineering' },
  { id: 4, name: 'Priya Verma', role: 'Secretary', year: '3rd Year, B.Com (Hons)', image: '/gallery/page_6.jpg', tag: 'Operations' },
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
              Our executive board manages cohort logistics, grant disbursements, mentor office hours, and university venture relationships.
            </p>
          </div>

          <Link
            href="/team"
            className="yc-btn-secondary text-xs self-start sm:self-auto"
          >
            Meet Full 30+ Core Board →
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((m) => (
            <div
              key={m.id}
              className="yc-card overflow-hidden flex flex-col group hover:border-zinc-400 dark:hover:border-zinc-600"
            >
              <div className="relative w-full h-[260px] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover object-[center_20%] transition-transform duration-300 group-hover:scale-102"
                />
                <span className="absolute top-3 right-3 bg-white/95 dark:bg-zinc-900/95 text-zinc-800 dark:text-zinc-200 text-[10px] font-mono font-medium py-0.5 px-2 rounded border border-zinc-200 dark:border-zinc-700">
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
