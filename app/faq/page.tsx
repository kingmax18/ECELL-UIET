'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TopBanner from '@/components/layout/TopBanner';
import Link from 'next/link';

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: { category: string; items: FAQItem[] }[] = [
  {
    category: 'Applying & Eligibility',
    items: [
      {
        q: 'Do I need a business plan, revenue, or a working product to apply?',
        a: 'No. Most companies apply to YC and UIET E-Cell when they are just an idea or a bare-bones prototype. What matters most is the founders: are you smart, determined, and technical enough to build what you envision?',
      },
      {
        q: 'Can solo founders apply?',
        a: 'Yes, solo founders can and do get accepted. However, starting a company is extremely tough, so we also provide a Co-Founder Matching program if you are looking for complementary technical or business partners.',
      },
      {
        q: 'Are these cohorts only open to college students?',
        a: 'While UIET E-Cell is anchored in MDU Rohtak, our cohorts welcome university students, recent alumni, dropouts, and external technical teams across India.',
      },
    ],
  },
  {
    category: 'The Cohort Experience',
    items: [
      {
        q: 'What actually happens during the 3-month cohort?',
        a: 'Founders focus on just two things: talking to users and writing code. Every week you meet with Group Partners for 1-on-1 office hours, attend Tuesday dinners with world-class guest founders, and test your product with peer founders in the batch.',
      },
      {
        q: 'What is Demo Day?',
        a: 'Demo Day is the culmination of the program where founders pitch to an invite-only audience of top angel investors, VCs, and sovereign fund managers to raise their seed and Series A rounds.',
      },
    ],
  },
  {
    category: 'Funding & Grants',
    items: [
      {
        q: 'How does seed funding and grant capital work?',
        a: 'Selected cohort startups receive seed micro-grants up to ₹10 Lakhs, cloud credits (AWS, Google Cloud, Azure totaling over $100k), zero-cost incubation space at UIET, legal support, and standard SAFE note assistance.',
      },
      {
        q: 'Does UIET E-Cell take equity?',
        a: 'For university grant tracks, funding is 100% non-dilutive grant capital. For venture-backed incubation tracks, we use standardized open-source SAFE notes aligned with international founder-friendly terms.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    '0-0': true,
    '1-0': true,
  });

  const toggle = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <TopBanner />
      <Navbar />
      <main className="min-h-screen bg-[#FDFCF7] dark:bg-[#0B0C0E] text-[#16140f] dark:text-zinc-100 py-12 md:py-20 transition-colors">
        <div className="max-w-[800px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block font-['Outfit',sans-serif] text-xs uppercase tracking-widest font-semibold text-[#FF6600] mb-3">
              FAQ & Guidance
            </span>
            <h1 className="font-['Source_Serif_4',serif] text-4xl sm:text-5xl font-normal tracking-tight text-[#16140f] dark:text-white leading-[1.15]">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 font-['Outfit',sans-serif] font-light text-base sm:text-lg text-[#16140f]/80 dark:text-zinc-300 max-w-xl mx-auto leading-relaxed">
              Everything you need to know about the admissions cycle, cohort mentorship, funding, and Demo Day.
            </p>
          </div>

          {/* Grouped Accordions */}
          <div className="flex flex-col gap-10">
            {FAQS.map((cat, catIdx) => (
              <div key={cat.category}>
                <h2 className="font-['Source_Serif_4',serif] text-2xl font-normal text-[#16140f] dark:text-white pb-3 border-b border-zinc-200 dark:border-zinc-800 mb-4">
                  {cat.category}
                </h2>
                <div className="flex flex-col gap-3">
                  {cat.items.map((item, itemIdx) => {
                    const id = `${catIdx}-${itemIdx}`;
                    const isOpen = !!openItems[id];
                    return (
                      <div
                        key={item.q}
                        className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#13151A] overflow-hidden transition-all"
                      >
                        <button
                          onClick={() => toggle(id)}
                          className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-['Outfit',sans-serif] font-medium text-base text-[#16140f] dark:text-white hover:text-[#FF6600] transition-colors"
                        >
                          <span>{item.q}</span>
                          <span className="text-[#FF6600] font-bold text-lg shrink-0">
                            {isOpen ? '−' : '+'}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 text-sm text-zinc-600 dark:text-zinc-400 font-['Outfit',sans-serif] font-light leading-relaxed border-t border-zinc-100 dark:border-zinc-800/80">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Help Box */}
          <div className="mt-14 p-8 rounded-2xl bg-[#FFF4ED] dark:bg-[#1D1612] border border-[#FFD8BE] dark:border-[#52290E] text-center">
            <h3 className="font-['Source_Serif_4',serif] text-2xl font-normal text-[#16140f] dark:text-white">
              Still have questions?
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 font-['Outfit',sans-serif] max-w-md mx-auto">
              Our partner team and student mentors are happy to help you with your application.
            </p>
            <div className="mt-5 flex justify-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full bg-[#16140f] dark:bg-white text-white dark:text-black font-['Outfit',sans-serif] text-sm font-medium hover:opacity-85 transition-opacity"
              >
                Contact Admissions
              </Link>
              <Link
                href="/apply"
                className="px-6 py-2.5 rounded-full bg-[#FF6600] text-white font-['Outfit',sans-serif] text-sm font-medium hover:bg-[#E65C00] transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
