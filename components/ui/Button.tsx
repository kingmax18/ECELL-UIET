import React from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'blue' | 'outline' | 'white' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
  onDark?: boolean;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  target?: string;
  rel?: string;
  style?: React.CSSProperties;
}

const VARIANT_CLASSES: Record<ButtonVariant, { base: string; icon: string }> = {
  primary: {
    base: 'bg-[#FF6600] text-white border-transparent hover:bg-[#E65C00] font-semibold shadow-xs',
    icon: 'bg-white/20 text-white group-hover:bg-white group-hover:text-[#FF6600]',
  },
  blue: {
    base: 'bg-[#111827] text-white border-transparent hover:bg-[#1F2937] font-semibold shadow-xs',
    icon: 'bg-white/20 text-white group-hover:bg-[#FF6600] group-hover:text-white',
  },
  outline: {
    base: 'bg-white text-[#111827] border-[#D1D5DB] hover:border-[#111827] hover:bg-[#F9FAFB] font-medium shadow-2xs',
    icon: 'bg-black/5 text-[#111827] group-hover:bg-[#111827] group-hover:text-white',
  },
  white: {
    base: 'bg-white text-[#111827] border-[#E5E7EB] hover:bg-[#F9FAFB] hover:border-[#D1D5DB] font-medium shadow-2xs',
    icon: 'bg-[#FF6600] text-white',
  },
  ghost: {
    base: 'bg-transparent text-[#111827] border-transparent hover:text-[#FF6600] hover:bg-black/5 font-medium',
    icon: 'bg-[#FF6600]/10 text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white',
  },
};

const OUTLINE_ON_DARK = {
  base: 'bg-transparent text-white border-white/30 hover:bg-white hover:text-[#111827] hover:border-white font-medium',
  icon: 'bg-white/20 text-white group-hover:bg-[#111827] group-hover:text-white',
};

const SIZE_CLASSES: Record<
  ButtonSize,
  { base: string; icon: string; svg: string; padRest: string; padHover: string }
> = {
  sm: {
    base: 'py-1.5 text-xs rounded-md',
    icon: 'h-5 w-5',
    svg: 'h-3 w-3',
    padRest: 'pl-3.5 pr-1.5',
    padHover: 'pl-1.5 pr-3.5',
  },
  md: {
    base: 'py-2 text-sm rounded-md',
    icon: 'h-6 w-6',
    svg: 'h-3.5 w-3.5',
    padRest: 'pl-4 pr-2',
    padHover: 'pl-2 pr-4',
  },
  lg: {
    base: 'py-2.5 text-sm sm:text-base rounded-md',
    icon: 'h-7 w-7',
    svg: 'h-4 w-4',
    padRest: 'pl-5 pr-2.5',
    padHover: 'pl-2.5 pr-5',
  },
};

function ArrowIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  arrow = true,
  onDark = false,
  className = '',
  type = 'button',
  disabled = false,
  target,
  rel,
  style,
  ...props
}: ButtonProps) {
  const resolvedVariant = VARIANT_CLASSES[variant] ? variant : 'primary';
  const v = variant === 'outline' && onDark ? OUTLINE_ON_DARK : VARIANT_CLASSES[resolvedVariant];
  const s = SIZE_CLASSES[size];

  const rootClass = [
    'group inline-flex items-center border select-none tracking-normal whitespace-nowrap cursor-pointer transition-all duration-200',
    v.base,
    s.base,
    disabled ? 'opacity-50 pointer-events-none' : '',
    className,
  ].join(' ');

  const swapEase =
    'transition-all duration-[300ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]';

  const circleClass = `inline-flex items-center justify-center rounded-full shrink-0 ${v.icon} ${s.icon}`;
  const childEase = 'transition-transform duration-[300ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]';

  const content = arrow ? (
    <span className="relative inline-flex items-center">
      <span className={`flex items-center gap-2.5 opacity-100 ${s.padRest} ${swapEase} group-hover:opacity-0`}>
        <span className={`${childEase} group-hover:translate-x-4`}>{children}</span>
        <span className={`${circleClass} ${childEase} group-hover:-translate-x-4`}>
          <ArrowIcon className={s.svg} />
        </span>
      </span>

      <span
        aria-hidden="true"
        className={`absolute inset-0 flex items-center gap-2.5 opacity-0 pointer-events-none ${s.padHover} ${swapEase} group-hover:opacity-100`}
      >
        <span className={`${circleClass} ${childEase} translate-x-4 group-hover:translate-x-0`}>
          <ArrowIcon className={s.svg} />
        </span>
        <span className={`${childEase} -translate-x-4 group-hover:translate-x-0`}>{children}</span>
      </span>
    </span>
  ) : (
    <span className={s.padRest}>{children}</span>
  );

  if (href) {
    if (href.startsWith('http') || target === '_blank') {
      return (
        <a href={href} className={rootClass} target={target} rel={rel || 'noopener noreferrer'} style={style} {...props}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={rootClass} style={style} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={rootClass} onClick={onClick} disabled={disabled} style={style} {...props}>
      {content}
    </button>
  );
}
