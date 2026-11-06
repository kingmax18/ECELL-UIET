import React from 'react';

type BadgeColor = 'orange' | 'blue' | 'yellow' | 'cream' | 'pink' | 'green' | 'lilac' | 'purple';

interface CategoryBadgeProps {
  children: React.ReactNode;
  color?: BadgeColor;
  className?: string;
}

const COLORS: Record<BadgeColor, string> = {
  orange: 'bg-porangebg text-porangedeep border border-[#ff933e]/20',
  blue: 'bg-pbluebg text-pbluedeep border border-[#73a5ca]/25',
  yellow: 'bg-pyellowbg text-pyellowdeep border border-[#ffcb56]/30',
  cream: 'bg-pcreambg text-porangedeep border border-[#ffe9a9]/40',
  pink: 'bg-porangebg text-porangedeep border border-[#ff933e]/20',
  green: 'bg-pgreenbg text-pgreendeep border border-pgreen/30',
  lilac: 'bg-pbluebg text-pbluedeep border border-[#73a5ca]/25',
  purple: 'bg-pbluebg text-pbluedeep border border-[#73a5ca]/25',
};

export default function CategoryBadge({ children, color = 'purple', className = '' }: CategoryBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-pill px-3 py-1 text-[13px] font-medium ${COLORS[color]} ${className}`}
    >
      {children}
    </span>
  );
}
