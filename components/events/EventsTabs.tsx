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
    { key: 'upcoming', label: `Upcoming Events (${events.filter((e) => e.status === 'upcoming').length})` },
    { key: 'past', label: `Past Events (${events.filter((e) => e.status === 'past').length})` },
    { key: 'all', label: `All (${events.length})` },
  ];

  return (
    <div>
      {/* Tabs pill */}
      <div className="flex items-center gap-1 bg-[#F4F6FF] border border-[#0047FF]/40 rounded-cta p-[5px] w-fit mx-auto mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`py-2 px-4 md:px-[18px] text-[13px] md:text-sm font-bold rounded-cta whitespace-nowrap transition-all duration-200 ${
              activeTab === tab.key
                ? 'bg-[#0047FF] text-white shadow-[0_2px_12px_rgba(0,71,255,0.35)]'
                : 'text-[#0A0E1A] hover:text-[#0047FF] hover:bg-[#0047FF]/10'
            } ${tab.key === 'all' ? 'hidden sm:inline-flex' : ''}`}
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
        <div className="bg-soft border border-bordersubtle rounded-card py-16 px-6 text-center">
          <p className="text-secondary">No {activeTab} events scheduled at the moment.</p>
        </div>
      )}
    </div>
  );
}
