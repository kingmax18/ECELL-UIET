'use client';

import React from 'react';

/* Shared admin UI primitives — Modern, polished, executive design system */

export const adminInput =
  'w-full bg-zinc-50 dark:bg-[#14161D] border border-zinc-200 dark:border-zinc-700/80 rounded-lg px-3.5 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-hidden focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600]/15 transition-all';

export const adminLabel =
  'block text-xs font-mono font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5';

export const adminCard =
  'bg-white dark:bg-[#101217] border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-xs text-zinc-900 dark:text-zinc-100 transition-all';

export const adminTh =
  'text-left text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-[#14161D]/80';

export const adminTd =
  'px-4 py-3.5 text-sm text-zinc-900 dark:text-zinc-200 align-middle border-b border-zinc-100 dark:border-zinc-800/80';

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div>
        <h1 className="font-sans font-bold text-2xl sm:text-3xl text-zinc-950 dark:text-white tracking-tight">
          {title}
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1 font-sans">
          {subtitle}
        </p>
      </div>
      {action && <div className="shrink-0 flex items-center gap-2.5">{action}</div>}
    </div>
  );
}

export function Modal({
  open,
  onClose,
  title,
  children,
  wide,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[2000] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={`bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 rounded-2xl w-full ${
          wide ? 'max-w-2xl' : 'max-w-lg'
        } my-8 shadow-2xl text-zinc-900 dark:text-zinc-100 transition-all`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 dark:border-zinc-800">
          <h2 className="font-sans font-bold text-base sm:text-lg text-zinc-950 dark:text-white tracking-tight">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Close modal"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="p-6 max-h-[80vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}

const STATUS_CONFIG: Record<string, { bg: string; text: string; dot: string }> = {
  Pending: {
    bg: 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800/50',
    text: 'text-amber-800 dark:text-amber-300',
    dot: 'bg-amber-500',
  },
  Shortlisted: {
    bg: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800/50',
    text: 'text-blue-800 dark:text-blue-300',
    dot: 'bg-blue-500',
  },
  Accepted: {
    bg: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/50',
    text: 'text-emerald-800 dark:text-emerald-300',
    dot: 'bg-emerald-500',
  },
  Rejected: {
    bg: 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800/50',
    text: 'text-rose-800 dark:text-rose-300',
    dot: 'bg-rose-500',
  },
  upcoming: {
    bg: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/50',
    text: 'text-emerald-800 dark:text-emerald-300',
    dot: 'bg-emerald-500',
  },
  past: {
    bg: 'bg-zinc-100 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700/50',
    text: 'text-zinc-600 dark:text-zinc-400',
    dot: 'bg-zinc-400',
  },
};

export function StatusBadge({ status }: { status: string }) {
  const conf = STATUS_CONFIG[status] || {
    bg: 'bg-zinc-100 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700/50',
    text: 'text-zinc-600 dark:text-zinc-400',
    dot: 'bg-zinc-400',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-mono font-medium border ${conf.bg} ${conf.text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${conf.dot}`} />
      <span>{status}</span>
    </span>
  );
}

export function EmptyState({ text }: { text: string }) {
  return (
    <div className="bg-white dark:bg-[#101217] border border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl py-12 px-6 text-center text-sm text-zinc-500 dark:text-zinc-400 font-sans flex flex-col items-center justify-center gap-2">
      <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      </div>
      <p>{text}</p>
    </div>
  );
}

export function FilterPills({
  options,
  active,
  onChange,
}: {
  options: string[];
  active: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-1.5 bg-zinc-100 dark:bg-[#14161D] border border-zinc-200 dark:border-zinc-800 rounded-lg p-1 w-fit flex-wrap">
      {options.map((opt) => {
        const isActive = active.toLowerCase() === opt.toLowerCase();
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`py-1.5 px-3 rounded-md text-xs font-medium transition-all duration-150 whitespace-nowrap cursor-pointer ${
              isActive
                ? 'bg-white dark:bg-[#1C1F26] text-zinc-950 dark:text-white shadow-xs font-semibold'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
