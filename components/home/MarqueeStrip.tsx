'use client';

import React from 'react';
import { useData } from '@/context/DataProvider';

export default function MarqueeStrip() {
  const { sponsors } = useData();

  return (
    <div className="w-full">
      <div className="mq" aria-hidden="true">
        <div className="d">
          <span>Ideas</span><i>✦</i>
          <span>Founders</span><i>✦</i>
          <span>Pitches</span><i>✦</i>
          <span>Community</span><i>✦</i>
          <span>Ideas</span><i>✦</i>
          <span>Founders</span><i>✦</i>
          <span>Pitches</span><i>✦</i>
          <span>Community</span><i>✦</i>
          <span>Ideas</span><i>✦</i>
          <span>Founders</span><i>✦</i>
          <span>Pitches</span><i>✦</i>
          <span>Community</span><i>✦</i>
        </div>
      </div>

      {sponsors && sponsors.length > 0 && (
        <div className="py-3 px-6 bg-white border-b border-[var(--color-border)]">
          <div className="max-w-[1272px] mx-auto flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
            <span className="text-[11px] uppercase tracking-wider text-[var(--color-muted)] font-['Space_Grotesk'] font-semibold">
              Ecosystem &amp; Partners:
            </span>
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
              {sponsors.map((s) => {
                const isClickable = Boolean(s.url && s.url !== '#');
                const Tag = isClickable ? 'a' : 'div';
                return (
                  <Tag
                    key={s.id}
                    {...(isClickable ? { href: s.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full border border-[var(--color-border)] bg-[rgba(10,14,26,0.02)] text-xs font-semibold text-[var(--color-ink)] hover:border-[var(--orange)] transition-colors no-underline"
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: s.color || 'var(--orange)' }}
                    />
                    <span>{s.name}</span>
                  </Tag>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
