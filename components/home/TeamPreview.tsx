'use client';

import React from 'react';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';

const teamMembers = [
  { id: 1, name: 'Ananya Sharma', role: 'President', year: '4th Year, B.Tech CSE', image: '/gallery/page_10.jpg', badge: 'Leadership' },
  { id: 2, name: 'Rohan Mehta', role: 'Vice President', year: '3rd Year, MBA', image: '/gallery/page_12.jpg', badge: 'Leadership' },
  { id: 3, name: 'Lakshay', role: 'Tech & Product Lead', year: '3rd Year, B.Tech CSE', image: '/gallery/page_20.jpg', badge: 'Tech & Design' },
  { id: 4, name: 'Priya Verma', role: 'Secretary', year: '3rd Year, B.Com (Hons)', image: '/gallery/page_6.jpg', badge: 'Operations' },
];

export default function TeamPreview() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b-2 border-[#C0CCFF]">
      <div className="max-w-[1272px] mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Meet the creative minds behind"
          italicTitle="our success"
          subtitle="A dedicated group of student leaders, engineers, and strategists driving entrepreneurship across MDU Rohtak."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((m) => (
            <div
              key={m.id}
              className="neo-card flex flex-col bg-[#F4F6FF] border-2 border-[#0047FF] overflow-hidden shadow-[5px_5px_0px_#0A0E1A]"
            >
              <div className="relative w-full h-[280px] overflow-hidden bg-white border-b-2 border-[#C0CCFF]">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover object-[center_20%] transition-transform duration-300 hover:scale-[1.04]"
                />
                <span className="absolute top-3 right-3 bg-[#CBFF2E] text-[#0A0E1A] text-[10px] font-black py-0.5 px-2.5 rounded-full border-2 border-[#0A0E1A] uppercase tracking-wider shadow-[1.5px_1.5px_0px_#0047FF]">
                  {m.badge}
                </span>
              </div>

              <div className="p-5 flex flex-col items-start">
                <h3 className="font-sans font-extrabold text-lg text-[#0A0E1A] leading-tight mb-1">
                  {m.name}
                </h3>
                <span className="inline-block bg-[#0047FF] text-white text-[11px] font-bold px-2 py-0.5 rounded-md mb-2">
                  {m.role}
                </span>
                <p className="text-xs font-semibold text-[#475569]">{m.year}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/team"
            className="neo-btn-primary text-xs uppercase tracking-wider font-extrabold px-8 py-3.5"
          >
            <span>Meet All 30+ Core Board Members</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
