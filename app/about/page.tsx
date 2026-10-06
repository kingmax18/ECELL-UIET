'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import VisionMission from '@/components/about/VisionMission';
import OurStory from '@/components/about/OurStory';
import CoreValues from '@/components/about/CoreValues';
import GalleryGrid from '@/components/about/GalleryGrid';
import CTABanner from '@/components/home/CTABanner';
import { useData } from '@/context/DataProvider';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function AboutPage() {
  const { gallery } = useData();
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className="relative overflow-hidden bg-[#070A26] border-b-2 border-[#1F2766] py-16 sm:py-24">
          <div className="relative max-w-[1272px] mx-auto px-4 sm:px-6 text-center">
            <h1 className="font-sans font-extrabold text-[clamp(36px,5.5vw,64px)] leading-[1.12] tracking-tight text-white mb-5 [text-wrap:balance]">
              Inspiring a generation of{' '}
              <span className="marker-yellow">changemakers.</span>
            </h1>
            <p className="text-[clamp(16px,1.8vw,19px)] font-medium leading-[1.6] text-[#DDE0FF]/80 max-w-[720px] mx-auto">
              Learn. Collaborate. Showcase. The official Entrepreneurship Cell of UIET, Maharshi Dayanand
              University, Rohtak — building a high-impact founder culture on campus.
            </p>
          </div>
        </section>

        <VisionMission />
        <OurStory />
        <CoreValues />
        <GalleryGrid gallery={gallery} />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
