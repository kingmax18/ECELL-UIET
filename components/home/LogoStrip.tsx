'use client';

import React from 'react';
import {
  RiLightbulbLine,
  RiBuilding2Line,
  RiGovernmentLine,
  RiAtomLine,
  RiRocketLine,
  RiMap2Line,
} from 'react-icons/ri';

const partners = [
  { icon: RiLightbulbLine, name: 'E-Cell IIT Bombay' },
  { icon: RiBuilding2Line, name: 'UIET MDU Rohtak' },
  { icon: RiGovernmentLine, name: 'Maharshi Dayanand University' },
  { icon: RiAtomLine, name: 'MDU Innovation Hub' },
  { icon: RiRocketLine, name: 'Startup India' },
  { icon: RiMap2Line, name: 'Startup Haryana' },
];

export default function LogoStrip() {
  return (
    <div className="bg-[#0B0F33] border-b-2 border-[#1F2766] py-5 overflow-hidden select-none">
      <div className="flex items-center">
        <div className="flex items-center gap-12 pr-12 animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-2.5 text-[#DDE0FF]/80 font-bold text-sm uppercase tracking-wider hover:text-[#CBFF2E] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#863DFF] border border-[#DDE0FF] flex items-center justify-center shrink-0 shadow-[1.5px_1.5px_0px_#CBFF2E]">
                  <Icon size={18} className="text-white" />
                </div>
                <span>{p.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
