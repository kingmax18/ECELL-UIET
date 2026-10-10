'use client';

import React from 'react';
import {
  RiBuilding2Line,
  RiGovernmentLine,
  RiAtomLine,
  RiRocketLine,
  RiGlobalLine,
  RiLightbulbLine,
} from 'react-icons/ri';

const partners = [
  { icon: RiRocketLine, name: 'Startup India', tag: 'DPIIT Recognised' },
  { icon: RiGovernmentLine, name: 'Startup Haryana', tag: 'State Ecosystem' },
  { icon: RiBuilding2Line, name: 'UIET MDU Rohtak', tag: 'Host Institution' },
  { icon: RiAtomLine, name: 'MDU Innovation Hub', tag: 'R&D Center' },
  { icon: RiLightbulbLine, name: 'IIT Bombay E-Cell Network', tag: 'National Partner' },
  { icon: RiGlobalLine, name: 'NASSCOM 10,000 Startups', tag: 'Industry Ally' },
];

export default function LogoStrip() {
  return (
    <section className="bg-[#FAFAF8] dark:bg-[#0E1015] border-b border-zinc-200 dark:border-zinc-800 py-6 overflow-hidden select-none">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 mb-3 text-center sm:text-left">
        <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold">
          SUPPORTED BY &amp; CONNECTED WITH NATIONAL VENTURE ECOSYSTEMS
        </span>
      </div>

      <div className="flex items-center">
        <div className="flex items-center gap-8 sm:gap-12 pr-12 animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-3 text-zinc-700 dark:text-zinc-300 font-medium text-xs sm:text-sm hover:text-zinc-950 dark:hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shrink-0 text-[#FF6600]">
                  <Icon size={16} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">{p.name}</span>
                  <span className="text-[10px] text-zinc-400 font-mono tracking-tight">{p.tag}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
