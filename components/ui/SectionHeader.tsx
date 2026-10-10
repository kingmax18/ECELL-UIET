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
      className={`reveal mb-12 sm:mb-16 ${centered ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'} ${className}`}
    >
      {badge && (
        <div className={`mb-3.5 flex ${centered ? 'justify-center' : 'justify-start'}`}>
          <span className="yc-badge-orange uppercase tracking-wider text-[11px] font-bold">
            {badge}
          </span>
        </div>
      )}

      <h2 className="font-serif font-normal text-[clamp(28px,3.8vw,44px)] leading-[1.18] tracking-tight text-[#111827] dark:text-white mb-4 [text-wrap:balance]">
        {title}{' '}
        {italicTitle && (
          <span className="italic text-[#FF6600] dark:text-[#FF8533] ml-1">
            {italicTitle}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className={`text-[clamp(15px,1.6vw,17px)] font-normal leading-relaxed text-zinc-600 dark:text-zinc-400 ${centered ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
