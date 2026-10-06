'use client';

import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';

const awards = [
  {
    title: 'E-Summit Excellence Award',
    desc: 'Celebrated for cutting-edge student founder mentorship, interactive workshops, and seamless pitch events.',
    year: '2026',
    badge: 'MDU Innovation',
  },
  {
    title: 'State Startup Hub Recognition',
    desc: 'Recognized for creative excellence, ecosystem leadership, and innovative student startup incubations.',
    year: '2025',
    badge: 'Ecosystem Award',
  },
  {
    title: 'Best Campus Chapter Initiative',
    desc: 'Honored for highest student engagement, masterclass series, and entrepreneurship bootcamp impact.',
    year: '2024',
    badge: 'Youth Leadership',
  },
];

export default function AccoladesSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#070A26] border-b-2 border-[#1F2766]" id="award">
      <div className="max-w-[1272px] mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Accolades and achievements celebrating our"
          italicTitle="excellence"
          subtitle="Recognized by university leaders and regional startup ecosystems for fostering innovation across Haryana."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {awards.map((a, idx) => (
            <div
              key={idx}
              className="neo-card p-6 sm:p-7 flex flex-col justify-between gap-6 bg-[#0B0F33] border-2 border-[#863DFF] shadow-[5px_5px_0px_#040619]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-black text-[#070A26] bg-[#CBFF2E] border-2 border-[#070A26] py-1 px-3 rounded-full uppercase tracking-wider shadow-[1.5px_1.5px_0px_#863DFF]">
                  {a.badge}
                </span>
                <span className="text-xs font-black text-[#DDE0FF] bg-[#101648] border border-[#863DFF] px-2.5 py-0.5 rounded-md">
                  {a.year}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-sans font-extrabold text-xl leading-snug text-white">
                  {a.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium leading-[1.6] text-[#DDE0FF]/75">
                  {a.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
