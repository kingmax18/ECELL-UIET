'use client';

import React from 'react';
import Link from 'next/link';
import AccordionItem from '@/components/ui/AccordionItem';
import { FAQ_ITEMS } from '@/lib/constants';

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#070A26] border-b-2 border-[#1F2766]">
      <div className="max-w-[1272px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Panel: Themed FAQ Aside */}
          <aside className="lg:col-span-4 bg-[#863DFF] border-2 border-[#DDE0FF] rounded-3xl p-7 shadow-[6px_6px_0px_#CBFF2E] flex flex-col justify-between gap-6 sticky top-24">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-[#070A26] border-2 border-[#CBFF2E] shadow-[3px_3px_0px_#040619] flex items-center justify-center font-black text-2xl mb-5">
                💡
              </div>
              <h3 className="font-sans font-black text-2xl text-white mb-2 leading-tight">
                Still curious?
              </h3>
              <p className="text-xs sm:text-sm font-medium leading-[1.6] text-[#DDE0FF]/90 mb-6">
                Short answers on the right. In-depth founder guides, playbooks, and advice clinics on our blog.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 pt-4 border-t-2 border-[#DDE0FF]/25">
              <Link
                href="/blog"
                className="bg-[#CBFF2E] text-[#070A26] font-extrabold text-xs uppercase tracking-wider py-3 px-4 rounded-xl border-2 border-[#070A26] shadow-[2px_2px_0px_#070A26] flex items-center justify-between no-underline hover:bg-[#d8ff4f]"
              >
                <span>Read Founder Playbooks</span>
                <span>→</span>
              </Link>
              <Link
                href="/contact"
                className="bg-[#070A26] text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl border-2 border-white shadow-[2px_2px_0px_#CBFF2E] flex items-center justify-between no-underline hover:bg-[#101648]"
              >
                <span>Ask Leadership Team</span>
                <span>→</span>
              </Link>
            </div>
          </aside>

          {/* Right Content: FAQ Questions Accordion */}
          <div className="lg:col-span-8">
            <div className="mb-8">
              <h2 className="font-sans font-extrabold text-[clamp(28px,4vw,44px)] leading-tight text-white mb-2">
                Questions before you join?
              </h2>
              <p className="text-xs sm:text-sm font-medium text-[#DDE0FF]/70">
                Everything to know about applying, departments, pitch competitions, and funding.
              </p>
            </div>

            <div className="w-full">
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
