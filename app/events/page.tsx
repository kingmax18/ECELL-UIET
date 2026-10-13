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
      <main className="bg-white dark:bg-[#0B0C0E] min-h-screen text-zinc-900 dark:text-zinc-100">
        {/* Page Hero - YC Editorial Style */}
        <section className="relative overflow-hidden bg-[#FAFAF8] dark:bg-[#0E1015] border-b border-zinc-200 dark:border-zinc-800 py-16 sm:py-22">
          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 dark:bg-orange-500/20 border border-orange-500/20 text-[#FF6600] text-xs font-bold uppercase tracking-wider mb-3">
                Schedule &amp; Gatherings
              </div>
              <h1 className="font-sans font-extrabold text-3xl sm:text-5xl text-zinc-950 dark:text-white mb-4 [text-wrap:balance] tracking-tight">
                Demo Days, masterclasses, and{' '}
                <span className="italic text-[#FF6600]">annual summits.</span>
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                Explore pitching competitions, technical founder clinics, speaker sessions, and our flagship annual entrepreneurship conclaves at MDU Rohtak.
              </p>
            </div>
          </div>
        </section>

        {/* Events Tabs Section */}
        <section className="py-16 sm:py-22">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <EventsTabs events={events} />
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
