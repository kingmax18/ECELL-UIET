import React from 'react';
import type { Founder } from '@/lib/types';

export default function FounderCard({ founder }: { founder: Founder }) {
  const initials = founder.name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');

  return (
    <div className="reveal group bg-white dark:bg-[#14161C] border border-zinc-200 dark:border-zinc-800 rounded-lg p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#FF6600]">
      <div className="flex items-center justify-between mb-4">
        <div className="w-11 h-11 rounded-md bg-orange-50 dark:bg-orange-950/40 border border-[#FF6600]/30 flex items-center justify-center font-mono font-bold text-sm text-[#FF6600]">
          {initials}
        </div>
        <span className="text-[10px] font-mono font-medium text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">
          {founder.badge || 'Founding Pioneer'}
        </span>
      </div>

      <div className="flex flex-col items-start gap-1">
        <h3 className="font-serif font-bold text-base text-zinc-950 dark:text-white group-hover:text-[#FF6600] transition-colors">
          {founder.name}
        </h3>
        <p className="text-xs font-mono font-medium text-[#FF6600]">{founder.role}</p>
        {founder.batch && <p className="text-xs text-zinc-500">{founder.batch}</p>}
        {founder.contribution && (
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">{founder.contribution}</p>
        )}
      </div>
    </div>
  );
}
