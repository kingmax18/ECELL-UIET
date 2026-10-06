'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EventsTabs from '@/components/events/EventsTabs';
import CTABanner from '@/components/home/CTABanner';
import { useData } from '@/context/DataProvider';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function EventsPage() {
  const { events } = useData();
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className="relative overflow-hidden bg-[#070A26] border-b-2 border-[#1F2766] py-16 sm:py-24">
          <div className="relative max-w-[1272px] mx-auto px-4 sm:px-6 text-center">
            <h1 className="font-sans font-extrabold text-[clamp(36px,5.5vw,64px)] leading-[1.12] tracking-tight text-white mb-5 [text-wrap:balance]">
              Where student innovators{' '}
              <span className="marker-yellow">take center stage.</span>
            </h1>
            <p className="text-[clamp(16px,1.8vw,19px)] font-medium leading-[1.6] text-[#DDE0FF]/80 max-w-[720px] mx-auto">
              Explore upcoming pitching competitions, technical masterclasses, speaker sessions, and annual
              entrepreneurship summits at MDU Rohtak.
            </p>
          </div>
        </section>

        {/* Events Tabs */}
        <section className="py-[clamp(56px,7vw,80px)]">
          <div className="max-w-[1272px] mx-auto px-6">
            <EventsTabs events={events} />
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
