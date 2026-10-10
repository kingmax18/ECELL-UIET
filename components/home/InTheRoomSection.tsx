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
          {IN_THE_ROOM.map((person) => (
            <div
              key={person.name}
              className="group relative z-[1] h-[240px] sm:h-[260px] md:h-[300px] w-[85vw] max-w-[340px] sm:w-full sm:max-w-none shrink-0 snap-center rounded-2xl overflow-hidden bg-black/10 dark:bg-black/40 border border-zinc-200/50 dark:border-zinc-800 transition-all duration-300 hover:z-10 hover:shadow-xl cursor-pointer"
            >
              <img
                src={person.poster}
                alt={person.name}
                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:filter-none lg:filter lg:grayscale group-hover:grayscale-0"
                loading="lazy"
              />

              {/* Gradient Bottom Overlay */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[130px] bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300" />

              {/* Label */}
              <div className="pointer-events-none absolute bottom-5 left-5 right-5 z-10 flex flex-col items-start gap-0.5 text-left text-white">
                <span className="font-['Outfit',sans-serif] text-lg sm:text-xl font-medium leading-tight text-white drop-shadow-md">
                  {person.name}
                </span>
                <span className="font-['Outfit',sans-serif] text-xs sm:text-sm font-light text-white/80 drop-shadow-sm">
                  {person.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
