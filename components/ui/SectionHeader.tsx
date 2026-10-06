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
      <h2 className="font-sans font-extrabold text-[clamp(28px,4.5vw,48px)] leading-[1.12] tracking-tight text-[#0A0E1A] mb-4 [text-wrap:balance]">
        {title}{' '}
        {italicTitle && (
          <span className="marker-yellow text-[0.9em] ml-1">
            {italicTitle}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="text-[clamp(15px,1.8vw,17px)] font-medium leading-[1.6] text-[#3A4A7A] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
