'use client';

import React, { useState } from 'react';
import EventCard, { type EventData } from './EventCard';

type TabKey = 'upcoming' | 'past' | 'all';

export default function EventsTabs({ events = [] }: { events?: EventData[] }) {
  const [activeTab, setActiveTab] = useState<TabKey>('upcoming');

  const filteredEvents = events.filter((ev) => {
    if (activeTab === 'all') return true;
    return ev.status === activeTab;
  });

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'upcoming', label: `Upcoming (${events.filter((e) => e.status === 'upcoming').length})` },
    { key: 'past', label: `Past Events (${events.filter((e) => e.status === 'past').length})` },
    { key: 'all', label: `All (${events.length})` },
  ];

  return (
    <div>
      {/* Clean Tabs Pill Bar */}
      <div className="flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-800/80 p-1 rounded-md w-fit mx-auto mb-10 border border-zinc-200 dark:border-zinc-700">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`py-1.5 px-3.5 text-xs font-medium rounded transition-colors cursor-pointer ${
              activeTab === tab.key
                ? 'bg-white dark:bg-[#14161C] text-zinc-950 dark:text-white font-semibold shadow-2xs'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map((ev) => (
            <EventCard key={ev.id} event={ev} />
          ))}
        </div>
      ) : (
        <div className="bg-[#FAFAF8] dark:bg-[#14161C] border border-zinc-200 dark:border-zinc-800 rounded-lg py-16 px-6 text-center">
          <p className="text-zinc-500 text-sm">No {activeTab} events scheduled at the moment.</p>
        </div>
      )}
    </div>
  );
}
