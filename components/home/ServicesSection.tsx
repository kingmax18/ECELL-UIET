'use client';

import React from 'react';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import {
  RiLightbulbFlashLine,
  RiSlideshow3Line,
  RiTrophyLine,
  RiRocket2Line,
} from 'react-icons/ri';

const pillars = [
  {
    icon: RiLightbulbFlashLine,
    title: 'Entrepreneurial Mindset',
    description: 'Inspiring students to think creatively, embrace innovation, and explore new ideas beyond traditional career paths.',
    iconClass: 'bg-porangebg text-porangedeep',
    link: '/about',
    linkText: 'Learn About E-Cell',
  },
  {
    icon: RiSlideshow3Line,
    title: 'Workshops & Masterclasses',
    description: 'Hands-on workshops, technical frameworks, and actionable skills to empower students across campus.',
    iconClass: 'bg-pbluebg text-pbluedeep',
    link: '/events',
    linkText: 'Explore Workshops',
  },
  {
    icon: RiTrophyLine,
    title: 'Ideathons & Competitions',
    description: 'Student ideathons, pitch showcases, and speaker sessions designed to share knowledge and inspire.',
    iconClass: 'bg-ppinkbg text-ppinkdeep',
    link: '/events',
    linkText: 'See Events',
  },
  {
    icon: RiRocket2Line,
    title: 'Startup Incubation & Mentorship',
    description: 'Bringing together students across engineering, management, and science streams to build ventures together.',
    iconClass: 'bg-plilacbg text-plilacdeep',
    link: '/contact',
    linkText: 'Get Mentorship',
  },
];

export default function ServicesSection() {
  return (
    <section id="pillars" className="py-20 sm:py-28 bg-white border-b-2 border-[#C0CCFF]">
      <div className="max-w-[1272px] mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0047FF] border-2 border-[#0A0E1A] rounded-full px-3.5 py-1 text-xs font-black uppercase tracking-wider text-white shadow-[2px_2px_0px_#CBFF2E] mb-4">
            The E-Cell Framework
          </div>
          <h2 className="font-sans font-extrabold text-[clamp(30px,4.5vw,52px)] leading-[1.12] tracking-tight text-[#0A0E1A] mb-4 [text-wrap:balance]">
            Meet UIET E-Cell.{' '}
            <span className="marker-yellow">One home for student founders.</span>
          </h2>
          <p className="text-[clamp(15px,1.8vw,18px)] font-medium leading-[1.6] text-[#3A4A7A]">
            From first brainstorm to official launch — an end-to-end founder incubator right here at MDU Rohtak.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {/* Card 01 */}
          <div className="neo-card p-6 sm:p-7 flex flex-col justify-between bg-[#F4F6FF] border-2 border-[#0047FF]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#CBFF2E] text-[#0A0E1A] font-black text-sm px-3 py-1 rounded-lg border-2 border-[#0A0E1A] shadow-[2px_2px_0px_#0047FF]">
                  01
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#475569]">
                  Ideation & Validation
                </span>
              </div>
              <h3 className="font-sans font-black text-xl text-[#0A0E1A] mb-2.5">
                Validate without the guesswork
              </h3>
              <p className="text-xs sm:text-sm font-medium leading-[1.6] text-[#3A4A7A] mb-6">
                Turn dorm room discussions into defensible business models with design sprints, customer discovery, and rapid prototype validation.
              </p>
            </div>

            {/* Visual Box */}
            <div className="bg-white border-2 border-[#0047FF] rounded-xl p-4 shadow-[2px_2px_0px_#D0D8FF]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0047FF]" />
                <span className="text-xs font-bold text-[#0A0E1A]">Weekly Founder Sprint</span>
              </div>
              <div className="bg-[#F4F6FF] border border-[#C0CCFF] rounded-lg p-2.5 text-[11px] font-semibold text-[#3A4A7A] leading-relaxed">
                ✓ Problem-Solution Fit Matrix<br />
                ✓ Competitor Breakdown<br />
                ✓ Target User Interviews
              </div>
            </div>
          </div>

          {/* Card 02 */}
          <div className="neo-card p-6 sm:p-7 flex flex-col justify-between bg-[#F4F6FF] border-2 border-[#0047FF]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#0047FF] text-white font-black text-sm px-3 py-1 rounded-lg border-2 border-[#0A0E1A] shadow-[2px_2px_0px_#CBFF2E]">
                  02
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#475569]">
                  Co-Founder Matching
                </span>
              </div>
              <h3 className="font-sans font-black text-xl text-[#0A0E1A] mb-2.5">
                Find your complementary partner
              </h3>
              <p className="text-xs sm:text-sm font-medium leading-[1.6] text-[#3A4A7A] mb-6">
                Developers get paired with strategists, UI designers, and marketers across all MDU departments — building complete teams.
              </p>
            </div>

            {/* Visual Box */}
            <div className="bg-white border-2 border-[#0047FF] rounded-xl p-4 shadow-[2px_2px_0px_#D0D8FF]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#0A0E1A]">Active Matchmaking</span>
                <span className="text-[10px] font-extrabold bg-[#0047FF] text-white px-2 py-0.5 rounded border border-[#0A0E1A]">35+ Pairs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-[#F4F6FF] border border-[#0047FF] text-[#0A0E1A] text-[10px] font-bold px-2.5 py-1 rounded">CSE Hacker</span>
                <span className="font-black text-[#0047FF]">+</span>
                <span className="bg-[#CBFF2E] border border-[#0A0E1A] text-[#0A0E1A] text-[10px] font-bold px-2.5 py-1 rounded">MBA Hustler</span>
              </div>
            </div>
          </div>

          {/* Card 03 */}
          <div className="neo-card p-6 sm:p-7 flex flex-col justify-between bg-[#F4F6FF] border-2 border-[#0047FF]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#CBFF2E] text-[#0A0E1A] font-black text-sm px-3 py-1 rounded-lg border-2 border-[#0A0E1A] shadow-[2px_2px_0px_#0047FF]">
                  03
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#475569]">
                  Pitch & Seed Grants
                </span>
              </div>
              <h3 className="font-sans font-black text-xl text-[#0A0E1A] mb-2.5">
                Pitch live, win capital
              </h3>
              <p className="text-xs sm:text-sm font-medium leading-[1.6] text-[#3A4A7A] mb-6">
                Compete in flagship campus ideathons and pitch directly to angels and university panels for non-dilutive startup grants.
              </p>
            </div>

            {/* Visual Box */}
            <div className="bg-white border-2 border-[#0047FF] rounded-xl p-4 shadow-[2px_2px_0px_#D0D8FF]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-[#0A0E1A]">Venture Grant Pool</span>
                <span className="font-black text-sm text-[#0047FF]">₹1,00,000</span>
              </div>
              <p className="text-[11px] text-[#475569] font-medium">
                100% non-dilutive university & sponsor seed capital for prototypes.
              </p>
            </div>
          </div>
        </div>

        {/* Themed Mid Shell Card */}
        <div className="bg-[#0047FF] border-2 border-[#0A0E1A] rounded-3xl p-6 sm:p-10 shadow-[6px_6px_0px_#CBFF2E] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-sans font-black text-2xl sm:text-3xl text-white mb-1.5">
              Try it with the next idea you build.
            </h3>
            <p className="text-sm sm:text-base font-semibold text-[#E0E8FF]">
              Takes 2 minutes to apply. Zero fees, no gatekeeping, open to all MDU students.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/contact"
              className="bg-[#CBFF2E] text-[#0A0E1A] font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full border-2 border-[#0A0E1A] shadow-[3px_3px_0px_#0A0E1A] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all text-center no-underline"
            >
              <span>Join E-Cell Batch 2026-27 →</span>
            </Link>
            <Link
              href="/events"
              className="bg-white text-[#0047FF] font-extrabold text-xs uppercase tracking-wider px-5 py-3.5 rounded-full border-2 border-[#0A0E1A] shadow-[3px_3px_0px_#CBFF2E] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all text-center no-underline"
            >
              <span>View Summits</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
