'use client';

import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  italicTitle?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  italicTitle,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const centered = align === 'center';

  return (
    <div
      className={`reveal mb-10 md:mb-14 ${centered ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'} ${className}`}
    >
      {badge && (
        <div className="lab mb-3">
          ( {badge} )
        </div>
      )}

      <h2 className="d text-[clamp(32px,5vw,56px)] leading-[1.02] tracking-[-0.02em] text-[var(--ink)] mb-4">
        {title}{' '}
        {italicTitle && (
          <em className="text-[var(--orange)]" style={{ fontStyle: 'normal' }}>
            {italicTitle}
          </em>
        )}
      </h2>

      {subtitle && (
        <p className="font-['Space_Grotesk'] text-[clamp(15px,1.8vw,18px)] font-normal leading-[1.6] text-[var(--mute)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
