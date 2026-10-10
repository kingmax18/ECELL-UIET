'use client';

import React from 'react';
import { formatDate } from '@/lib/utils';

export interface EventData {
  id: number;
  title: string;
  tagline?: string;
  description?: string;
  date?: string;
  time?: string;
  venue?: string;
  mode?: string;
  category?: string;
  tags?: string[];
  status?: string;
  registrationUrl?: string;
}

export default function EventCard({ event }: { event: EventData }) {
  const isConcluded = event.status === 'past' || !event.registrationUrl;

  return (
    <article className="yc-card p-6 sm:p-7 flex flex-col justify-between group hover:border-zinc-400 dark:hover:border-zinc-600">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
          <span className="text-[11px] font-mono font-medium text-[#FF6600] bg-orange-50 dark:bg-orange-950/40 px-2 py-0.5 rounded border border-orange-200 dark:border-orange-900/60 uppercase">
            {event.category || event.mode || 'Incubator Event'}
          </span>
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
            {formatDate(event.date)} {event.time ? `· ${event.time}` : ''}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif font-normal text-xl sm:text-2xl text-zinc-950 dark:text-white group-hover:text-[#FF6600] transition-colors mb-2 leading-snug">
          {event.title}
        </h3>

        {event.tagline && (
          <p className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
            {event.tagline}
          </p>
        )}

        {event.description && (
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
            {event.description}
          </p>
        )}

        {/* Tags */}
        {event.tags && event.tags.length > 0 && (
          <div className="flex gap-1.5 flex-wrap mb-5">
            {event.tags.map((t, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700"
              >
                #{t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between gap-3 flex-wrap">
        <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
          {event.venue || 'MDU Campus'}
        </span>

        {isConcluded ? (
          <span className="text-xs font-mono text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded">
            Concluded
          </span>
        ) : (
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="yc-btn-primary text-xs py-1.5 px-3.5 font-semibold"
          >
            Register Now →
          </a>
        )}
      </div>
    </article>
  );
}
