'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ApplicationForm from '@/components/contact/ApplicationForm';
import { useData } from '@/context/DataProvider';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ContactPage() {
  const { settings } = useData();
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className="relative overflow-hidden bg-white border-b border-[#C0CCFF] py-16 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0047FF18,transparent_70%)] pointer-events-none" />
          <div className="relative max-w-[1272px] mx-auto px-4 sm:px-6 text-center">
            <h1 className="font-sans font-extrabold text-[clamp(36px,5.5vw,64px)] leading-[1.12] tracking-tight text-[#0A0E1A] mb-5 [text-wrap:balance]">
              Love to have you with us —{' '}
              <span className="marker-yellow">join UIET E-Cell.</span>
            </h1>
            <p className="text-[clamp(16px,1.8vw,19px)] font-medium leading-[1.6] text-[#3A4A7A] max-w-[720px] mx-auto">
              Fill out your details below. Join 6 active departments and help build the premier student
              entrepreneurial ecosystem at MDU Rohtak.
            </p>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-[clamp(56px,7vw,80px)] bg-white">
          <div className="max-w-[1272px] mx-auto px-6">
            <ApplicationForm settings={settings} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
