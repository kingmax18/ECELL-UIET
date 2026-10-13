'use client';

import React from 'react';
import Link from 'next/link';
import {
  RiCodeSSlashLine,
  RiCompass3Line,
  RiMoneyDollarCircleLine,
  RiPresentationLine,
} from 'react-icons/ri';

const pillars = [
  {
    icon: RiCodeSSlashLine,
    phase: '01',
    title: 'Focus Relentlessly on Product',
    subtitle: 'Build What People Want',
    description:
      'We strip away campus bureaucracy. In the first 4 weeks, teams focus entirely on talking to users, validating willingness-to-pay, and shipping a bare-bones working MVP.',
    bulletPoints: [
      'Weekly user feedback review',
      'Feature subtraction & ICP definition',
      'No vanity pitch decks',
    ],
  },
  {
    icon: RiCompass3Line,
    phase: '02',
    title: 'Private Founder Office Hours',
    subtitle: 'Unfiltered Operator Feedback',
    description:
      'Direct, 30-minute private strategy clinics with alumni who have raised venture rounds or built bootstrapped software companies. We diagnose your specific growth bottlenecks.',
    bulletPoints: [
      'GTM & customer acquisition tactics',
      'Technical architecture audits',
      'Pricing & contract negotiations',
    ],
  },
  {
    icon: RiMoneyDollarCircleLine,
    phase: '03',
    title: 'Prototyping Labs & Campus Resources',
    subtitle: 'Zero Fees · 100% Student-Run',
    description:
      'Access university lab facilities, compute stations, and collaborative student workspaces to build and iterate on your MVP.',
    bulletPoints: [
      'UIET lab & technical workspace access',
      'Hardware prototyping facilities',
      '100% student founder ownership',
    ],
  },
  {
    icon: RiPresentationLine,
    phase: '04',
    title: 'Flagship Demo Day & Showcase',
    subtitle: 'Present to Mentors, Alumni & Faculty',
    description:
      'The program culminates in Demo Day at the university auditorium, attended by industry mentors, alumni entrepreneurs, and faculty advisors.',
    bulletPoints: [
      'Direct mentor feedback & office hours',
      'Pitch deck & storytelling clinics',
      'Campus-wide innovation recognition',
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="pillars" className="py-20 sm:py-26 bg-white dark:bg-[#0B0C0E] border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#FF6600] font-bold mb-2">
            STUDENT INNOVATION FRAMEWORK
          </div>
          <h2 className="font-serif font-normal text-3xl sm:text-4xl text-zinc-900 dark:text-white mb-4 [text-wrap:balance]">
            From raw campus idea to validated prototype.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            Our framework is engineered to support student builders from initial concept validation to functional prototypes and campus demo day showcases.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="yc-card p-7 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800/80 mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded bg-orange-50 dark:bg-orange-950/40 text-[#FF6600] flex items-center justify-center">
                        <Icon size={18} />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                        PHASE {pillar.phase}
                      </span>
                    </div>

                    <span className="text-xs font-mono font-medium text-[#FF6600]">
                      {pillar.subtitle}
                    </span>
                  </div>

                  <h3 className="font-serif font-normal text-2xl text-zinc-900 dark:text-white mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                  <ul className="space-y-1.5">
                    {pillar.bulletPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                        <span className="text-[#FF6600] font-bold">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Action Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-[#FAFAF8] dark:bg-[#14161C] border border-zinc-200 dark:border-zinc-800 rounded-lg">
          <div>
            <h4 className="font-semibold text-sm text-zinc-900 dark:text-white">
              Student registrations are open for Session 2025–26
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Student innovators, developers, and aspiring founders from any year or branch are welcome.
            </p>
          </div>
          <Link
            href="/apply"
            className="yc-btn-primary text-xs py-2.5 px-5 font-semibold shrink-0"
          >
            Connect with E-Cell / Register →
          </Link>
        </div>
      </div>
    </section>
  );
}
