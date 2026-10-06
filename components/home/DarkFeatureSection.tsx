'use client';

import React from 'react';
import Link from 'next/link';

export default function DarkFeatureSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#F4F6FF] border-y-2 border-[#C0CCFF] relative overflow-hidden">
      {/* Subtle Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(#0047FF 1.5px, transparent 1.5px), radial-gradient(#0047FF 1.5px, #020818 1.5px)',
          backgroundSize: '32px 32px',
          backgroundPosition: '0 0, 16px 16px',
        }}
      />

      <div className="relative z-10 max-w-[1272px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Punchy Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="inline-block bg-[#0047FF] text-white border-2 border-[#0A0E1A] font-black text-xs px-3 py-1 rounded-md uppercase tracking-widest mb-6 shadow-[2px_2px_0px_#CBFF2E]">
              FLAGSHIP INITIATIVES
            </span>

            <h2 className="font-sans font-extrabold text-[clamp(30px,4.5vw,52px)] leading-[1.12] tracking-tight text-[#0A0E1A] mb-5 [text-wrap:balance]">
              Not just talk.{' '}
              <br />
              <span className="text-[#0047FF] underline decoration-[#CBFF2E] decoration-4 underline-offset-8">
                High-impact campus events.
              </span>
            </h2>

            <p className="text-[clamp(15px,1.8vw,18px)] font-medium leading-[1.6] text-[#3A4A7A] mb-8 max-w-xl">
              UIET E-Cell organizes state-recognized entrepreneurship summits, 24-hour ideathons, and investor pitching competitions across Maharshi Dayanand University.
            </p>

            <ul className="flex flex-col gap-4 w-full mb-8">
              <li className="flex items-start gap-4 p-4 rounded-2xl bg-white border-2 border-[#0047FF] shadow-[3px_3px_0px_#D0D8FF] hover:border-[#0A0E1A] transition-colors">
                <span className="w-10 h-10 rounded-xl bg-[#CBFF2E] text-[#0A0E1A] border-2 border-[#0A0E1A] flex items-center justify-center font-black text-lg shrink-0">
                  🎯
                </span>
                <div>
                  <strong className="block text-base font-extrabold text-[#0A0E1A]">Eureka Pitching Competition</strong>
                  <span className="text-xs text-[#3A4A7A] font-medium">
                    Live pitch showcases before venture capitalists, angel mentors, and university evaluators with cash awards.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-4 p-4 rounded-2xl bg-white border-2 border-[#0047FF] shadow-[3px_3px_0px_#D0D8FF] hover:border-[#0A0E1A] transition-colors">
                <span className="w-10 h-10 rounded-xl bg-[#0047FF] text-white border-2 border-[#0A0E1A] flex items-center justify-center font-black text-lg shrink-0">
                  ⚡
                </span>
                <div>
                  <strong className="block text-base font-extrabold text-[#0A0E1A]">24-Hour Campus Ideathon</strong>
                  <span className="text-xs text-[#3A4A7A] font-medium">
                    Rapid prototype sprints tackling real campus, healthcare, and education problems with mentorship clinics.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-4 p-4 rounded-2xl bg-white border-2 border-[#0047FF] shadow-[3px_3px_0px_#D0D8FF] hover:border-[#0A0E1A] transition-colors">
                <span className="w-10 h-10 rounded-xl bg-[#CBFF2E] text-[#0A0E1A] border-2 border-[#0A0E1A] flex items-center justify-center font-black text-lg shrink-0">
                  🔥
                </span>
                <div>
                  <strong className="block text-base font-extrabold text-[#0A0E1A]">Annual E-Summit Conclave</strong>
                  <span className="text-xs text-[#3A4A7A] font-medium">
                    Over 600+ student attendees, keynote speaker discussions, and networking with prominent industry leaders.
                  </span>
                </div>
              </li>
            </ul>

            <Link
              href="/events"
              className="neo-btn-primary text-xs uppercase tracking-wider py-3.5 px-6"
            >
              <span>Explore All Events &amp; Summits →</span>
            </Link>
          </div>

          {/* Right: Interactive Event Focus Card */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[420px] bg-white border-2 border-[#0047FF] rounded-3xl p-6 sm:p-7 shadow-[8px_8px_0px_#0A0E1A] relative">
              {/* Header inside Focus card */}
              <div className="flex items-center justify-between border-b border-[#C0CCFF] pb-4 mb-5">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#0047FF] block">
                    FLAGSHIP EVENT SPOTLIGHT
                  </span>
                  <span className="text-sm font-black text-[#0A0E1A]">01 / 03</span>
                </div>
                <span className="w-6 h-6 rounded-full bg-[#CBFF2E] border border-[#0A0E1A] flex items-center justify-center text-xs font-bold text-[#0A0E1A]">
                  ✓
                </span>
              </div>

              {/* Progress segments */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="h-1.5 rounded-full bg-[#0047FF]" />
                <div className="h-1.5 rounded-full bg-[#D0D8FF]" />
                <div className="h-1.5 rounded-full bg-[#D0D8FF]" />
              </div>

              {/* Card Body */}
              <div className="bg-[#F4F6FF] border-2 border-[#0047FF] rounded-2xl p-5 mb-5 shadow-[2px_2px_0px_#D0D8FF]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#475569]">Pitch Challenge · UIET MDU</span>
                  <span className="bg-[#CBFF2E] text-[#0A0E1A] font-extrabold text-[10px] uppercase px-2 py-0.5 rounded-full border border-[#0A0E1A]">
                    Upcoming Event
                  </span>
                </div>

                <h3 className="font-sans font-black text-xl text-[#0A0E1A] mb-2">
                  Eureka Pitching Competition 2026
                </h3>

                <p className="text-xs text-[#3A4A7A] leading-relaxed mb-4 font-medium">
                  Present your startup concept or prototype to fellow students, mentors, and faculty judges. Receive constructive feedback, certificates, and cash prizes.
                </p>

                <div className="flex items-center gap-3 pt-3 border-t border-[#C0CCFF] text-xs">
                  <span className="text-[#0047FF] font-bold">UIET Main Auditorium</span>
                  <span className="text-[#475569]">•</span>
                  <span className="text-[#475569] font-medium">Cash Prizes &amp; Grants</span>
                </div>
              </div>

              {/* Notification bubble overlay */}
              <div className="bg-[#CBFF2E] text-[#0A0E1A] border-2 border-[#0A0E1A] rounded-2xl p-4 shadow-[4px_4px_0px_#0047FF] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0047FF] text-white border border-[#0A0E1A] flex items-center justify-center font-black text-sm shrink-0">
                    🏆
                  </div>
                  <div>
                    <strong className="block text-xs font-black text-[#0A0E1A]">Official Registrations Open</strong>
                    <span className="text-[11px] text-[#0A0E1A]/80 font-medium">Pitch your project at UIET Auditorium.</span>
                  </div>
                </div>
                <Link
                  href="/events#1"
                  className="bg-[#0047FF] text-white text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-lg border border-[#0A0E1A] shrink-0 no-underline hover:bg-[#003acc] transition-colors"
                >
                  Register →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
