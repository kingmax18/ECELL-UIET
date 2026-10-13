'use client';

import React from 'react';
import Link from 'next/link';
import { Lightbulb, Compass, Globe, Rocket } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-white dark:bg-[#0B0C0E] pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-zinc-200 dark:border-zinc-800"
    >
      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 text-center">
        {/* Display Headline */}
        <h1 className="font-sans font-extrabold text-[clamp(36px,5.5vw,68px)] leading-[1.12] tracking-[-0.025em] text-[#0D0E12] dark:text-white mb-6 [text-wrap:balance]">
          Empowering Student Innovators &amp;{' '}
          <span className="italic text-[#FF6600]">Future Founders.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[clamp(16px,1.6vw,19px)] font-normal leading-[1.65] text-zinc-600 dark:text-zinc-350 max-w-[720px] mx-auto mb-10 [text-wrap:balance]">
          The official entrepreneurship hub of University Institute of Engineering &amp; Technology, Maharshi Dayanand University. Fostering campus innovation, hands-on mentorship, and student ventures from idea to execution.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
          <Link
            href="/apply"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-black dark:bg-white text-white dark:text-black px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition-all shadow-sm"
          >
            <span>Apply to Join</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>

          <Link
            href="/events"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-800 dark:text-zinc-200 px-6 py-3.5 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <span>Explore Events</span>
          </Link>
        </div>

        {/* Core Pillars Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-10 border-t border-zinc-200/80 dark:border-zinc-800/80 text-left">
          {[
            {
              step: '01',
              title: 'Ideation',
              heading: 'Campus Hackathons',
              desc: 'Hands-on ideation sprints and pitch challenges.',
              icon: Lightbulb,
            },
            {
              step: '02',
              title: 'Mentorship',
              heading: 'Industry Guidance',
              desc: 'Direct 1-on-1 advisory with alumni operators.',
              icon: Compass,
            },
            {
              step: '03',
              title: 'Ecosystem',
              heading: 'Annual E-Summit',
              desc: 'Keynotes, panels, and networking conclaves.',
              icon: Globe,
            },
            {
              step: '04',
              title: 'Incubation',
              heading: 'Startup Support',
              desc: 'Prototyping resources and institutional backing.',
              icon: Rocket,
            },
          ].map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.step}
                className="group relative p-4.5 sm:p-5 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/60 hover:bg-white dark:hover:bg-zinc-850 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-[#FF6600]/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-500/10 dark:bg-orange-500/20 text-[#FF6600] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-[11px] font-bold font-sans text-zinc-500 dark:text-zinc-400 group-hover:text-[#FF6600] px-2 py-0.5 rounded-full bg-zinc-200/50 dark:bg-zinc-800 transition-colors">
                    {pillar.step} · {pillar.title}
                  </span>
                </div>
                <div className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white group-hover:text-[#FF6600] transition-colors">
                  {pillar.heading}
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                  {pillar.desc}
                </p>
                <div className="absolute inset-x-4 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF6600] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
