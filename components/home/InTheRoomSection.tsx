'use client';

import React from 'react';
import { IN_THE_ROOM } from '@/data/ycHomepageData';

export default function InTheRoomSection() {
  return (
    <section
      id="in-the-room-photos"
      className="m-0 w-full max-w-full overflow-visible py-16 md:py-[100px] bg-[#FDFCF7] dark:bg-[#0B0C0E] transition-colors"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 xl:px-12">
        <h2 className="mx-auto mb-10 md:mb-[60px] max-w-full px-4 text-center font-['Source_Serif_4',serif] text-3xl sm:text-4xl md:text-5xl font-normal italic leading-[1.2] text-[#16140f] dark:text-zinc-100">
          Be in the room with …
        </h2>

        {/* 3x3 Grid on Desktop / Scrollable Snap Strip on Mobile */}
        <div className="group/grid scrollbar-none flex w-full snap-x snap-mandatory flex-row gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8 sm:overflow-visible sm:pb-0">
          {IN_THE_ROOM.map((person) => {
            const initials = person.name
              .split(' ')
              .map((n) => n[0])
              .slice(0, 2)
              .join('');

            return (
              <div
                key={person.name}
                className="group relative z-[1] p-6 rounded-2xl bg-white dark:bg-[#13151A] border border-zinc-200/60 dark:border-zinc-800 transition-all duration-300 hover:border-[#FF6600] flex flex-col justify-between min-h-[160px]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-orange-50 dark:bg-orange-950/40 border border-[#FF6600]/30 flex items-center justify-center font-mono font-bold text-sm text-[#FF6600]">
                    {initials}
                  </div>
                  <span className="text-[10px] font-mono uppercase text-zinc-400">Mentor</span>
                </div>
                <div>
                  <h3 className="font-['Outfit',sans-serif] text-lg font-medium leading-tight text-zinc-950 dark:text-white mb-1">
                    {person.name}
                  </h3>
                  <p className="font-['Outfit',sans-serif] text-xs font-mono text-[#FF6600]">
                    {person.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
