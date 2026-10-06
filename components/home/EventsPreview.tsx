'use client';

import React from 'react';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';

const showcaseEvents = [
  {
    id: 1,
    title: 'Eureka Pitching Competition 2026',
    tagline: 'Present Your Idea. Pitch to Win.',
    tags: ['Pitching', 'Competition', 'Startup'],
    date: '28 Oct 2026',
    venue: 'UIET Auditorium',
    image: '/gallery/page_3.jpg',
    isUpcoming: true,
  },
  {
    id: 2,
    title: 'Design Thinking & Startup Masterclass',
    tagline: 'Building products users actually love.',
    tags: ['Workshop', 'Product', 'Design'],
    date: '15 Nov 2026',
    venue: 'Seminar Hall 2',
    image: '/gallery/page_43.jpg',
    isUpcoming: true,
  },
  {
    id: 3,
    title: 'Annual E-Summit & Keynote Conclave',
    tagline: 'Connect. Innovate. Disrupt.',
    tags: ['Summit', 'Conference', 'Networking'],
    date: '12 Dec 2026',
    venue: 'Radhakrishnan Auditorium, MDU',
    image: '/gallery/page_12.jpg',
    isUpcoming: false,
  },
  {
    id: 4,
    title: '24-Hour Campus Ideathon Sprint',
    tagline: 'Code, Design & Ship in 24 Hours.',
    tags: ['Ideathon', 'Hackathon', 'Grants'],
    date: '05 Jan 2027',
    venue: 'UIET Computer Center',
    image: '/gallery/page_25.jpg',
    isUpcoming: false,
  },
];

export default function EventsPreview() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b-2 border-[#C0CCFF]">
      <div className="max-w-[1272px] mx-auto px-4 sm:px-6">
        <SectionHeader
          title="See our flagship work in"
          italicTitle="campus action"
          subtitle="From campus pitch competitions and 24-hour ideathons to interactive masterclasses and industry summits."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {showcaseEvents.map((item) => (
            <article
              key={item.id}
              className="neo-card flex flex-col overflow-hidden bg-[#F4F6FF] border-2 border-[#0047FF] shadow-[6px_6px_0px_#0A0E1A]"
            >
              <div className="relative w-full h-[260px] sm:h-[300px] overflow-hidden border-b-2 border-[#C0CCFF] bg-white">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-[1.03]"
                />
                {item.isUpcoming && (
                  <span className="absolute top-4 right-4 bg-[#CBFF2E] text-[#0A0E1A] text-xs font-black py-1 px-3.5 rounded-full border-2 border-[#0A0E1A] uppercase tracking-wider shadow-[2px_2px_0px_#0047FF]">
                    Upcoming
                  </span>
                )}
                <span className="absolute bottom-4 left-4 bg-white text-[#0A0E1A] text-xs font-bold py-1 px-3 rounded-lg border-2 border-[#0A0E1A] shadow-[2px_2px_0px_#0047FF]">
                  {item.venue}
                </span>
              </div>

              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#475569] mb-2">
                    <span>📅 {item.date}</span>
                    <span>•</span>
                    <span className="text-[#0047FF] font-extrabold">Registration Open</span>
                  </div>

                  <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-[#0A0E1A] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium leading-[1.6] text-[#3A4A7A] mb-4">
                    {item.tagline}
                  </p>

                  <div className="flex gap-2 flex-wrap mb-6">
                    {item.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-bold text-[#0A0E1A] bg-white border border-[#0047FF] py-0.5 px-2.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-[#C0CCFF] flex items-center justify-between">
                  <Link
                    href={`/events#${item.id}`}
                    className="text-xs font-extrabold text-[#0047FF] uppercase tracking-wider inline-flex items-center gap-1.5 hover:underline"
                  >
                    <span>View Event Details</span>
                    <span>→</span>
                  </Link>
                  <span className="text-[11px] font-bold text-[#475569]">UIET Rohtak</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/events"
            className="neo-btn-primary text-xs uppercase tracking-wider font-extrabold px-8 py-3.5"
          >
            <span>Explore All Events &amp; Summits</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
