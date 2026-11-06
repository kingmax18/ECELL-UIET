'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import MarqueeStrip from '@/components/home/MarqueeStrip';
import StatsSection from '@/components/home/StatsSection';
import ServicesSection from '@/components/home/ServicesSection';
import EventsPreview from '@/components/home/EventsPreview';
import TeamPreview from '@/components/home/TeamPreview';
import TestimonialSection from '@/components/home/TestimonialSection';
import FAQSection from '@/components/home/FAQSection';
import CTABanner from '@/components/home/CTABanner';
import { useData } from '@/context/DataProvider';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HomePage() {
  const { faculty, stats } = useData();
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <StatsSection stats={stats} />
        <ServicesSection />
        <EventsPreview />
        <TeamPreview />
        <TestimonialSection faculty={faculty} />
        <FAQSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
