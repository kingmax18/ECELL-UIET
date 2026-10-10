'use client';

import React from 'react';
import Link from 'next/link';
import AccordionItem from '@/components/ui/AccordionItem';
import { FAQ_ITEMS } from '@/lib/constants';

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 sm:py-26 bg-[#FAFAF8] dark:bg-[#0D0E12] border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Panel */}
          <div className="lg:col-span-4 static lg:sticky lg:top-24">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#FF6600] font-bold mb-2">
              FOUNDER FAQS
            </div>
            <h2 className="font-serif font-normal text-3xl sm:text-4xl text-zinc-900 dark:text-white mb-4">
              Frequently asked questions.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
              Everything you need to know about the cohort timeline, grant eligibility, student IP ownership, and recruitment.
            </p>

            <div className="p-5 bg-white dark:bg-[#14161C] border border-zinc-200 dark:border-zinc-800 rounded-lg space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
                STILL HAVE QUESTIONS?
              </span>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                Reach out to the executive director or drop by the incubator room at the UIET building.
              </p>
              <Link
                href="/contact"
                className="yc-btn-primary w-full text-xs justify-center py-2 font-semibold"
              >
                Contact Admissions Team →
              </Link>
            </div>
          </div>

          {/* Right Content: FAQ Questions Accordion */}
          <div className="lg:col-span-8 bg-white dark:bg-[#14161C] border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 sm:p-8 shadow-2xs">
            <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {FAQ_ITEMS.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  question={item.question}
                  answer={item.answer}
                  defaultOpen={idx === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
