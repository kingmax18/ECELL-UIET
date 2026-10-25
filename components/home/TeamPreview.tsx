import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';

import { useData } from '@/context/DataProvider';

const fallbackTeam = [
  { id: '1', name: 'Shubhkamna', role: 'President', year: '2nd Year, B.Tech ECE', image: '/gallery/page_10.jpg', badge: 'Leadership' },
  { id: '2', name: 'Saloni Jha', role: 'Vice President', year: '2nd Year, B.Tech ECE', image: '/gallery/page_12.jpg', badge: 'Leadership' },
  { id: '3', name: 'Lakshay', role: 'General Secretary', year: '2nd Year, B.Tech ECE', image: '/gallery/page_20.jpg', badge: 'Leadership' },
  { id: '4', name: 'Rimpi', role: 'Joint Secretary', year: '2nd Year, B.Tech Biotech', image: '/gallery/page_6.jpg', badge: 'Operations' },
];

const FOUNDERS = ['Nitigya', 'Shashwat Thakur', 'Deepanshu', 'Azriel'];

export default function TeamPreview() {
  const { team } = useData();
  const displayTeam = team && team.length > 0 ? team.slice(0, 4).map((m, idx) => ({
    id: m.id || String(idx),
    name: m.name,
    role: m.role,
    year: m.year || '',
    image: m.photo || fallbackTeam[idx % fallbackTeam.length].image,
    badge: m.department || 'Council',
  })) : fallbackTeam;
  return (
    <section className="py-[clamp(56px,7vw,80px)]">
      <div className="max-w-[1272px] mx-auto px-6">
        <SectionHeader
          title="Meet the creative minds behind"
          italicTitle="our success"
          subtitle="A dedicated group of student leaders, developers, and operators driving entrepreneurship across MDU."
        />

        {/* Big photo cards — reference: large portrait imagery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {displayTeam.map((m) => (
            <div
              key={m.id}
              className="reveal group flex flex-col bg-white border border-border rounded-panel overflow-hidden transition-all duration-200 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-borderstrong"
            >
              <div className="relative w-full h-[clamp(260px,22vw,340px)] overflow-hidden bg-[#f8fafc]">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover object-[center_25%] transition-transform duration-400 group-hover:scale-[1.05]"
                />
                <span className="absolute bottom-3 left-3 bg-white/90 [backdrop-filter:blur(8px)] text-ink text-[11px] font-medium py-1 px-3 rounded-pill whitespace-nowrap">
                  {m.badge}
                </span>
              </div>

              <div className="flex flex-col items-start gap-0.5 p-5">
                <h3 className="font-sans font-medium text-xl tracking-[-0.02em] text-ink">{m.name}</h3>
                <p className="text-sm font-normal text-secondary">{m.role}</p>
                <p className="text-xs text-muted mt-0.5">{m.year}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center">
          <Button href="/team" variant="outline" size="lg" arrow>
            Meet the Full Team
          </Button>
        </div>
      </div>
    </section>
  );
}
