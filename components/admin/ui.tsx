'use client';

import React from 'react';

/* Shared admin UI primitives — Tailwind, Awake design language,
   tight rhythm */

export const adminInput =
  'w-full bg-[#070A26] border border-[#863DFF]/40 rounded-card px-3.5 py-2.5 text-sm text-white placeholder:text-[#DDE0FF]/40 outline-none transition-colors duration-200 focus:border-[#CBFF2E]';

export const adminLabel = 'block text-[13px] font-semibold text-[#DDE0FF] mb-1.5';

export const adminCard = 'bg-[#0B0F33] border border-[#863DFF]/40 rounded-panel text-white';

export const adminTh =
  'text-left text-xs font-bold uppercase tracking-[0.06em] text-[#DDE0FF]/70 px-4 py-3 border-b border-[#1F2766] bg-[#070A26]/60';

export const adminTd = 'px-4 py-3 text-sm text-white align-middle border-b border-[#1F2766]/60';

export function PageHeader({ title, subtitle, action }: { title: string; subtitle: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
      <div>
        <h1 className="font-sans font-bold text-[26px] leading-tight tracking-tight text-white">{title}</h1>
        <p className="text-sm text-[#DDE0FF]/70 mt-1">{subtitle}</p>
      </div>
      {action}
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
      className="fixed inset-0 z-[2000] bg-[#070A26]/80 [backdrop-filter:blur(6px)] flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className={`bg-[#0B0F33] border-2 border-[#863DFF]/50 rounded-panel w-full ${wide ? 'max-w-xl' : 'max-w-md'} my-8 shadow-[0_16px_48px_rgba(7,10,38,0.8)] text-white`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#1F2766]">
          <h2 className="font-sans font-bold text-[15px] tracking-tight text-white">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-[#070A26] text-white hover:bg-[#101648] border border-[#863DFF]/40 transition-colors duration-200 flex items-center justify-center cursor-pointer"
            aria-label="Close"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}

const STATUS_STYLES: Record<string, string> = {
  Pending: 'bg-[#ffefda] text-[#b3661d]',
  Shortlisted: 'bg-[#e2f0ff] text-[#1d6fb3]',
  Accepted: 'bg-[#e4f6df] text-[#2f7a1d]',
  Rejected: 'bg-[#fde7eb] text-[#c74a62]',
  upcoming: 'bg-[#e4f6df] text-[#2f7a1d]',
  past: 'bg-soft text-secondary',
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex py-0.5 px-2 rounded-pill text-[11px] font-medium whitespace-nowrap ${
        STATUS_STYLES[status] || 'bg-soft text-secondary'
      }`}
    >
      {status}
    </span>
  );
}

export function EmptyState({ text }: { text: string }) {
  return (
    <div className="bg-[#0B0F33] border border-[#1F2766] rounded-card py-10 px-5 text-center text-[13px] text-[#DDE0FF]/70">
      {text}
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
    <div className="flex items-center gap-1 bg-[#070A26] border border-[#1F2766] rounded-cta p-1 w-fit flex-wrap">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`py-1.5 px-3.5 text-[13px] font-semibold rounded-cta transition-all duration-200 whitespace-nowrap cursor-pointer ${
            active === opt ? 'bg-[#CBFF2E] text-[#070A26]' : 'text-[#DDE0FF] hover:text-white hover:bg-[#101648]'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
