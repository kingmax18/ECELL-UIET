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
      <main className="bg-white dark:bg-[#0B0C0E] min-h-screen text-zinc-900 dark:text-zinc-100">
        {/* Page Hero - YC Editorial Style */}
        <section className="relative overflow-hidden bg-[#FAFAF8] dark:bg-[#0E1015] border-b border-zinc-200 dark:border-zinc-800 py-16 sm:py-22">
          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#FF6600] font-bold mb-2">
                COHORT ADMISSIONS &amp; RECRUITMENT
              </div>
              <h1 className="font-serif font-normal text-3xl sm:text-5xl text-zinc-950 dark:text-white mb-4 [text-wrap:balance]">
                Apply to join{' '}
                <span className="italic text-[#FF6600]">UIET E-Cell.</span>
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                We accept ambitious student founders, engineers, researchers, and operators across all departments at Maharshi Dayanand University. Applications are reviewed on a rolling basis.
              </p>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-16 sm:py-22">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <ApplicationForm settings={settings} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
