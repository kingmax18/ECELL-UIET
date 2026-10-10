'use client';

import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-white dark:bg-[#0B0C0E] pt-12 pb-16 sm:pt-18 sm:pb-22 border-b border-zinc-200 dark:border-zinc-800"
    >
      {/* Subtle institutional grid lines - understated like YC */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Direct, Confident Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow - Iconic YC Question Format */}
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
              <span className="text-[12px] font-bold tracking-widest text-[#FF6600] uppercase font-mono">
                WHY UIET E-CELL?
              </span>
            </div>

            {/* Editorial Serif Display Headline */}
            <h1 className="font-serif font-normal text-[clamp(34px,5.2vw,66px)] leading-[1.1] tracking-[-0.02em] text-[#0D0E12] dark:text-white mb-6 [text-wrap:balance]">
              We help student founders build the next generation of{' '}
              <span className="italic text-[#FF6600] dark:text-[#FF8533]">
                industry-defining companies.
              </span>
            </h1>

            {/* Subtitle - Crisp, concise, professional */}
            <p className="text-[clamp(16px,1.6vw,19px)] font-normal leading-[1.65] text-zinc-600 dark:text-zinc-350 max-w-[620px] mb-8">
              UIET E-Cell is Maharshi Dayanand University&apos;s premier startup incubator and venture launchpad. We back campus builders with non-dilutive seed capital, 1-on-1 mentorship from exited operators, and direct access to India&apos;s top angel networks.
            </p>

            {/* Action Buttons - Clean YC Orange & Bordered secondary */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-9">
              <Link
                href="/contact"
                className="yc-btn-primary text-sm px-6 py-3 font-semibold rounded-md shadow-xs"
              >
                <span>Apply for Cohort 2026</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="#startups"
                className="yc-btn-secondary text-sm px-5 py-3 font-medium rounded-md"
              >
                <span>Explore Startup Directory</span>
              </Link>
            </div>

            {/* Trust Marks - Understated, Institutional */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-600 dark:text-zinc-400 font-medium pt-4 border-t border-zinc-200 dark:border-zinc-800/80 w-full">
              <span className="inline-flex items-center gap-1.5">
                <svg className="text-[#FF6600]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                100% Equity-Free University Incubation
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="text-[#FF6600]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                ₹2.5L - ₹10L Prototyping Grants
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="text-[#FF6600]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                National Demo Day Access
              </span>
            </div>
          </div>

          {/* Right Column: YC-Style Live Batch Card & Terminal Snapshot */}
          <div className="lg:col-span-5 relative flex justify-center mt-4 lg:mt-0">
            <div className="w-full max-w-[460px] bg-white dark:bg-[#14161C] border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 shadow-md transition-all">
              {/* Header with Batch Status */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800/80 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF6600] animate-pulse" />
                  <span className="font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                    BATCH S26 RECRUITMENT
                  </span>
                </div>
                <span className="text-[11px] font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/60">
                  Applications Open
                </span>
              </div>

              {/* High-Value Information Specs */}
              <div className="space-y-4 text-xs">
                <div className="flex items-start justify-between py-1 border-b border-zinc-100 dark:border-zinc-800/50">
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium">Cohort Batch</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">Summer 2026 (12 Weeks)</span>
                </div>

                <div className="flex items-start justify-between py-1 border-b border-zinc-100 dark:border-zinc-800/50">
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium">Application Deadline</span>
                  <span className="font-semibold text-[#FF6600]">April 30, 2026 · 11:59 PM IST</span>
                </div>

                <div className="flex items-start justify-between py-1 border-b border-zinc-100 dark:border-zinc-800/50">
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium">Stage Accepted</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">Idea, MVP, or Early Traction</span>
                </div>

                <div className="flex items-start justify-between py-1 border-b border-zinc-100 dark:border-zinc-800/50">
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium">Grant Capital</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">₹2,50,000 Equity-Free Seed</span>
                </div>

                <div className="flex items-start justify-between py-1 border-b border-zinc-100 dark:border-zinc-800/50">
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium">Cloud Credits</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">$25,000 AWS &amp; Google Cloud</span>
                </div>

                <div className="flex items-start justify-between py-1">
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium">Culmination</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">Annual Demo Day (VC Arena)</span>
                </div>
              </div>

              {/* Founder quote box */}
              <div className="mt-5 p-3.5 bg-zinc-50 dark:bg-[#1A1D24] rounded-md border border-zinc-200 dark:border-zinc-800">
                <p className="text-[12px] italic text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  &ldquo;We don&apos;t look for polished pitch decks. We look for obsessed builders who understand their users.&rdquo;
                </p>
                <div className="mt-2 flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400">
                  <span className="font-medium text-zinc-800 dark:text-zinc-200">— UIET Incubator Committee</span>
                  <span className="font-mono text-[#FF6600]">Batch S25</span>
                </div>
              </div>

              {/* Direct Card Action */}
              <div className="mt-5">
                <Link
                  href="/contact"
                  className="w-full yc-btn-primary justify-center text-xs py-2.5 font-semibold rounded"
                >
                  Start Your Founder Application →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
