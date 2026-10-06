'use client';

import React from 'react';

/* Shared admin UI primitives — Tailwind, Awake design language,
   tight rhythm */

export const adminInput =
  'w-full bg-white border-2 border-[#0047FF]/40 rounded-card px-3.5 py-2.5 text-sm text-[#0A0E1A] placeholder:text-[#475569]/50 outline-none transition-colors duration-200 focus:border-[#0047FF]';

export const adminLabel = 'block text-[13px] font-bold text-[#0A0E1A] mb-1.5';

export const adminCard = 'bg-[#F4F6FF] border-2 border-[#0047FF]/40 rounded-panel text-[#0A0E1A] shadow-[4px_4px_0px_#0A0E1A]';

export const adminTh =
  'text-left text-xs font-bold uppercase tracking-[0.06em] text-[#475569] px-4 py-3 border-b border-[#C0CCFF] bg-[#EEF2FF]';

export const adminTd = 'px-4 py-3 text-sm text-[#0A0E1A] align-middle border-b border-[#C0CCFF]/60';

export function PageHeader({ title, subtitle, action }: { title: string; subtitle: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
      <div>
        <h1 className="font-sans font-bold text-[26px] leading-tight tracking-tight text-[#0A0E1A]">{title}</h1>
        <p className="text-sm text-[#475569] mt-1">{subtitle}</p>
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
      className="fixed inset-0 z-[2000] bg-white/80 [backdrop-filter:blur(6px)] flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className={`bg-[#F4F6FF] border-2 border-[#0047FF] rounded-panel w-full ${wide ? 'max-w-xl' : 'max-w-md'} my-8 shadow-[6px_6px_0px_#0A0E1A] text-[#0A0E1A]`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#C0CCFF]">
          <h2 className="font-sans font-bold text-[15px] tracking-tight text-[#0A0E1A]">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white text-[#0A0E1A] hover:bg-[#EEF2FF] border border-[#0047FF]/40 transition-colors duration-200 flex items-center justify-center cursor-pointer"
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
  past: 'bg-[#F4F6FF] text-[#475569]',
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex py-0.5 px-2 rounded-pill text-[11px] font-bold whitespace-nowrap border border-current ${
        STATUS_STYLES[status] || 'bg-[#F4F6FF] text-[#475569]'
      }`}
    >
      {status}
    </span>
  );
}

export function EmptyState({ text }: { text: string }) {
  return (
    <div className="bg-[#F4F6FF] border border-[#C0CCFF] rounded-card py-10 px-5 text-center text-[13px] text-[#475569] font-medium">
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
    <div className="flex items-center gap-1 bg-white border border-[#C0CCFF] rounded-cta p-1 w-fit flex-wrap">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`py-1.5 px-3.5 text-[13px] font-bold rounded-cta transition-all duration-200 whitespace-nowrap cursor-pointer ${
            active === opt ? 'bg-[#0047FF] text-white shadow-xs' : 'text-[#0A0E1A] hover:text-[#0047FF] hover:bg-[#EEF2FF]'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
