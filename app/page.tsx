'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import EventsPreview from '@/components/home/EventsPreview';
import BlogSection from '@/components/home/BlogSection';
import CTABanner from '@/components/home/CTABanner';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HomePage() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main className="bg-[#FDFCF7] dark:bg-[#0B0C0E] min-h-screen text-[#16140f] dark:text-zinc-100 font-['DM_Sans',sans-serif] transition-colors selection:bg-[#FF6600] selection:text-white">
        {/* Core Hero Section */}
        <HeroSection />

        {/* Track Record & Impact Numbers */}
        <StatsSection />

        {/* Flagship Gatherings, Demo Days & Hackathons */}
        <EventsPreview />

        {/* Founder Essays & Playbooks */}
        <BlogSection />

        {/* Community Application CTA */}
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
