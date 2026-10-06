'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import LogoStrip from '@/components/home/LogoStrip';
import ProblemSection from '@/components/home/ProblemSection';
import ServicesSection from '@/components/home/ServicesSection';
import StatsSection from '@/components/home/StatsSection';
import EventsPreview from '@/components/home/EventsPreview';
import TeamPreview from '@/components/home/TeamPreview';
import AccoladesSection from '@/components/home/AccoladesSection';
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
      <main className="bg-white min-h-screen">
        <HeroSection />
        <LogoStrip />
        <ProblemSection />
        <ServicesSection />
        <StatsSection stats={stats} />
        <EventsPreview />
        <TeamPreview />
        <AccoladesSection />
        <TestimonialSection faculty={faculty} />
        <FAQSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
