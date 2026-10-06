'use client';

import React from 'react';
import Link from 'next/link';

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 sm:py-28 bg-white border-b-2 border-[#C0CCFF] relative overflow-hidden">
      <div className="max-w-[1272px] mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#0047FF] text-white border-2 border-[#0A0E1A] rounded-full px-3.5 py-1 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_#CBFF2E] mb-4">
            The Campus Reality
          </div>
          <h2 className="font-sans font-extrabold text-[clamp(30px,4.8vw,52px)] leading-[1.12] tracking-tight text-[#0A0E1A] mb-4 [text-wrap:balance]">
            You have a great idea.
            <br />
            <span className="marker-yellow mt-1 inline-block">
              Then it stays in your notes.
            </span>
          </h2>
          <p className="text-[clamp(15px,1.8vw,18px)] font-medium leading-[1.6] text-[#3A4A7A]">
            That 2 AM hostel whiteboard sketch. The pitch deck waiting in Google Drive. The startup idea you texted yourself. Great student projects end up scattered everywhere — and never get shipped.
          </p>
        </div>

        {/* The Dilemma Body: Scattered Cards + Real Founder Quotes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          {/* Left: Scattered Pile of Unfinished Ideas */}
          <div className="lg:col-span-6 relative flex flex-col gap-3">
            {/* Card 1 */}
            <div className="neo-card p-5 bg-[#F4F6FF] border-2 border-[#0047FF] rotate-[-1.5deg] hover:rotate-0 transition-transform">
              <div className="flex items-center justify-between text-[11px] font-bold text-[#475569] uppercase tracking-wider mb-1">
                <span>Hostel Brainstorm · 2:15 AM</span>
                <span>3 months ago</span>
              </div>
              <h3 className="font-sans font-black text-base text-[#0A0E1A] mb-1">
                “Campus Ride-Sharing App for MDU”
              </h3>
              <p className="text-xs text-[#3A4A7A] font-medium">
                Stuck because I couldn’t find an Android developer who wants to build together.
              </p>
            </div>

            {/* Card 2 with Green Stamp */}
            <div className="neo-card p-5 bg-[#EEF2FF] border-2 border-[#0047FF] relative rotate-[1.5deg] hover:rotate-0 transition-transform">
              {/* NEVER LAUNCHED STAMP */}
              <div className="absolute top-3 right-3 bg-[#CBFF2E] border-2 border-[#0A0E1A] text-[#0A0E1A] font-black text-xs px-2.5 py-1 rounded rotate-12 tracking-widest uppercase shadow-[2px_2px_0px_#0047FF]">
                NEVER LAUNCHED
              </div>
              <div className="text-[11px] font-bold text-[#475569] uppercase tracking-wider mb-1">
                GitHub Repo · 0 Commits Recently
              </div>
              <h3 className="font-sans font-black text-base text-[#0A0E1A] mb-1">
                “AI Resume Parser for College Placements”
              </h3>
              <p className="text-xs text-[#3A4A7A] font-medium">
                Backend code is 80% complete, but 0 users and no idea how to pitch to companies.
              </p>
            </div>

            {/* Card 3 */}
            <div className="neo-card p-5 bg-[#F4F6FF] border-2 border-[#0047FF] rotate-[-2deg] hover:rotate-0 transition-transform">
              <div className="flex items-center justify-between text-[11px] font-bold text-[#475569] uppercase tracking-wider mb-1">
                <span>WhatsApp Starred Message</span>
                <span>Sent to yourself</span>
              </div>
              <h3 className="font-sans font-black text-base text-[#0A0E1A] mb-1">
                “Where do student startups get patents & legal help?”
              </h3>
              <p className="text-xs text-[#3A4A7A] font-medium">
                Scared of legal costs and registering a private limited entity without mentorship.
              </p>
            </div>

            {/* Sound Familiar Sticker Note */}
            <div className="absolute -bottom-8 right-6 font-hand text-3xl font-bold text-[#0A0E1A] rotate-6 bg-[#CBFF2E] border-2 border-[#0A0E1A] px-4 py-1 rounded-xl shadow-[3px_3px_0px_#0047FF]">
              sound familiar? 👇
            </div>
          </div>

          {/* Right: Things Students Say */}
          <div className="lg:col-span-6 flex flex-col gap-3.5">
            <h3 className="text-xs font-black uppercase tracking-wider text-[#475569] mb-1">
              What student builders tell us:
            </h3>

            <div className="neo-card-flat p-4 bg-[#F4F6FF] border-2 border-[#C0CCFF] flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-[#CBFF2E] text-[#0A0E1A] border-2 border-[#0A0E1A] flex items-center justify-center font-black text-xs shrink-0">
                01
              </span>
              <div>
                <strong className="block text-sm font-extrabold text-[#0A0E1A]">No co-founder network</strong>
                <p className="text-xs text-[#3A4A7A] mt-0.5 font-medium">
                  “I have the tech skills, but I don’t know anyone from business or design to handle outreach.”
                </p>
              </div>
            </div>

            <div className="neo-card-flat p-4 bg-[#F4F6FF] border-2 border-[#C0CCFF] flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-[#0047FF] text-white border-2 border-[#0A0E1A] flex items-center justify-center font-black text-xs shrink-0">
                02
              </span>
              <div>
                <strong className="block text-sm font-extrabold text-[#0A0E1A]">No access to seed capital</strong>
                <p className="text-xs text-[#3A4A7A] mt-0.5 font-medium">
                  “I needed ₹20,000 for cloud servers and hardware testing, but had nowhere on campus to apply.”
                </p>
              </div>
            </div>

            <div className="neo-card-flat p-4 bg-[#F4F6FF] border-2 border-[#C0CCFF] flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-[#CBFF2E] text-[#0A0E1A] border-2 border-[#0A0E1A] flex items-center justify-center font-black text-xs shrink-0">
                03
              </span>
              <div>
                <strong className="block text-sm font-extrabold text-[#0A0E1A]">Pitching in isolation</strong>
                <p className="text-xs text-[#3A4A7A] mt-0.5 font-medium">
                  “My friends told me my idea was cool, but I had never pitched to a real angel investor or venture mentor.”
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Agitation Close & Themed button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 bg-[#F4F6FF] border-2 border-[#0047FF] rounded-2xl shadow-[5px_5px_0px_#0A0E1A]">
          <div>
            <h3 className="font-sans font-black text-xl sm:text-2xl text-[#0A0E1A] mb-1">
              Having an idea isn’t the same as <span className="marker-yellow">building it.</span>
            </h3>
            <p className="text-sm text-[#3A4A7A] font-medium">
              We built UIET E-Cell to give you the co-founders, seed grants, and stage to actually launch.
            </p>
          </div>

          <a
            href="#pillars"
            className="neo-btn-primary shrink-0 text-xs uppercase tracking-wider py-3 px-6"
          >
            <span>That’s me — show me the E-Cell fix</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
