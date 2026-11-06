'use client';

import React from 'react';
import Link from 'next/link';
import { useData } from '@/context/DataProvider';

const fallbackTeam = [
  { id: '1', name: 'Shubhkamna', role: 'President', year: '2nd Year · B.Tech ECE' },
  { id: '2', name: 'Saloni Jha', role: 'Vice President', year: '2nd Year · B.Tech ECE' },
  { id: '3', name: 'Lakshay', role: 'General Secretary', year: '2nd Year · B.Tech ECE' },
  { id: '4', name: 'Rimpi', role: 'Joint Secretary', year: '2nd Year · B.Tech Biotech' },
];

export default function TeamPreview() {
  const { team } = useData();
  const displayTeam =
    team && team.length > 0
      ? team.slice(0, 4).map((m, idx) => ({
          id: m.id || String(idx),
          name: m.name,
          role: m.role,
          year: m.year || '',
        }))
      : fallbackTeam;

  return (
    <section className="py-[clamp(56px,7vw,110px)] px-5 sm:px-[5vw]" id="team">
      <div className="max-w-[1272px] mx-auto">
        <div className="flex items-end justify-between mb-8 sm:mb-10 flex-wrap gap-4">
          <div>
            <h2 className="d rv text-[clamp(32px,6vw,84px)] mb-0 text-[var(--ink)]">
              The Team
            </h2>
          </div>
          <Link href="/team" className="btn o text-xs py-2 px-5 hidden sm:inline-block">
            View All Members →
          </Link>
        </div>

        <div className="team-grid rv mb-6 sm:mb-8 rounded-2xl overflow-hidden shadow-xs">
          {displayTeam.map((member) => (
            <div className="team-card p-5 sm:p-7" key={member.id}>
              <div>
                <div className="role">{member.role}</div>
                <h3>{member.name}</h3>
              </div>
              <p className="dept">{member.year}</p>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="sm:hidden text-center">
          <Link href="/team" className="btn o w-full text-center block py-3.5 text-sm font-semibold">
            View All Team Members →
          </Link>
        </div>
      </div>
    </section>
  );
}
