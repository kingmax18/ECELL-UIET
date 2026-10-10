'use client';

import React from 'react';
import TopBanner from '@/components/layout/TopBanner';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroBeforeVsNow from '@/components/home/HeroBeforeVsNow';
import EditorialMissionSection from '@/components/home/EditorialMissionSection';
import InTheRoomSection from '@/components/home/InTheRoomSection';
import FeaturedQuoteSection from '@/components/home/FeaturedQuoteSection';
import PartnersSection from '@/components/home/PartnersSection';
import KnowledgeNewsSection from '@/components/home/KnowledgeNewsSection';
import CTABanner from '@/components/home/CTABanner';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HomePage() {
  useScrollReveal();

  return (
    <>
      <TopBanner />
      <Navbar />
      <main className="bg-[#FDFCF7] dark:bg-[#0B0C0E] min-h-screen text-[#16140f] dark:text-zinc-100 font-['DM_Sans',sans-serif] transition-colors selection:bg-[#FF6600] selection:text-white">
        {/* Section 1: Hero with Interactive "Before vs. Now" Showcase */}
        <HeroBeforeVsNow />

        {/* Section 2: "In 2005..." Editorial Narrative & "In Founders' Words" */}
        <EditorialMissionSection />

        {/* Section 3: "Be in the room with …" 9-Person Video Reel */}
        <InTheRoomSection />

        {/* Section 4: Jensen Huang Featured Quote */}
        <FeaturedQuoteSection />

        {/* Section 5: "All partners were YC founders first" Interactive Partner Showcase */}
        <PartnersSection />

        {/* Section 6: "Knowledge & News" 3-Column Video, News & PG Essays Grid */}
        <KnowledgeNewsSection />

        {/* Section 7: "It's never too early to apply" CTA Strip */}
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
