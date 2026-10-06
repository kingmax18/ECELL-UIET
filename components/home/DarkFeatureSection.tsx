'use client';

import React from 'react';
import Link from 'next/link';

export default function DarkFeatureSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#040619] text-white border-y-2 border-[#1F2766] relative overflow-hidden">
      {/* Subtle Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(#863DFF 1.5px, transparent 1.5px), radial-gradient(#863DFF 1.5px, #040619 1.5px)',
          backgroundSize: '32px 32px',
          backgroundPosition: '0 0, 16px 16px',
        }}
      />

      <div className="relative z-10 max-w-[1272px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Punchy Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="inline-block border-2 border-[#CBFF2E] text-[#CBFF2E] font-black text-xs px-3 py-1 rounded-md uppercase tracking-widest mb-6">
              FLAGSHIP INITIATIVES
            </span>

            <h2 className="font-sans font-extrabold text-[clamp(30px,4.5vw,52px)] leading-[1.12] tracking-tight text-white mb-5 [text-wrap:balance]">
              Not just talk.{' '}
              <br />
              <span className="text-[#CBFF2E] underline decoration-[#863DFF] decoration-4 underline-offset-8">
                High-impact campus events.
              </span>
            </h2>

            <p className="text-[clamp(15px,1.8vw,18px)] font-medium leading-[1.6] text-[#DDE0FF]/80 mb-8 max-w-xl">
              UIET E-Cell organizes state-recognized entrepreneurship summits, 24-hour ideathons, and investor pitching competitions across Maharshi Dayanand University.
            </p>

            <ul className="flex flex-col gap-4 w-full mb-8">
              <li className="flex items-start gap-4 p-4 rounded-2xl bg-[#0B0F33] border border-[#1F2766] hover:border-[#863DFF] transition-colors">
                <span className="w-10 h-10 rounded-xl bg-[#CBFF2E] text-[#070A26] flex items-center justify-center font-black text-lg shrink-0">
                  🎯
                </span>
                <div>
                  <strong className="block text-base font-extrabold text-white">Eureka Pitching Competition</strong>
                  <span className="text-xs text-[#DDE0FF]/70">
                    Live pitch showcases before venture capitalists, angel mentors, and university evaluators with cash awards.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-4 p-4 rounded-2xl bg-[#0B0F33] border border-[#1F2766] hover:border-[#863DFF] transition-colors">
                <span className="w-10 h-10 rounded-xl bg-[#863DFF] text-white flex items-center justify-center font-black text-lg shrink-0">
                  ⚡
                </span>
                <div>
                  <strong className="block text-base font-extrabold text-white">24-Hour Campus Ideathon</strong>
                  <span className="text-xs text-[#DDE0FF]/70">
                    Rapid prototype sprints tackling real campus, healthcare, and education problems with mentorship clinics.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-4 p-4 rounded-2xl bg-[#0B0F33] border border-[#1F2766] hover:border-[#863DFF] transition-colors">
                <span className="w-10 h-10 rounded-xl bg-[#DDE0FF] text-[#070A26] flex items-center justify-center font-black text-lg shrink-0">
                  🔥
                </span>
                <div>
                  <strong className="block text-base font-extrabold text-white">Annual E-Summit Conclave</strong>
                  <span className="text-xs text-[#DDE0FF]/70">
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
            <div className="w-full max-w-[420px] bg-[#0B0F33] border-2 border-[#863DFF] rounded-3xl p-6 sm:p-7 shadow-[8px_8px_0px_#CBFF2E] relative">
              {/* Header inside Focus card */}
              <div className="flex items-center justify-between border-b border-[#1F2766] pb-4 mb-5">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#CBFF2E] block">
                    FLAGSHIP EVENT SPOTLIGHT
                  </span>
                  <span className="text-sm font-black text-white">01 / 03</span>
                </div>
                <span className="w-6 h-6 rounded-full bg-[#1F2766] flex items-center justify-center text-xs font-bold text-[#CBFF2E]">
                  ✓
                </span>
              </div>

              {/* Progress segments */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="h-1.5 rounded-full bg-[#CBFF2E]" />
                <div className="h-1.5 rounded-full bg-white/20" />
                <div className="h-1.5 rounded-full bg-white/20" />
              </div>

              {/* Card Body */}
              <div className="bg-[#070A26] border-2 border-[#1F2766] rounded-2xl p-5 mb-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#DDE0FF]/60">Pitch Challenge · UIET MDU</span>
                  <span className="bg-[#CBFF2E] text-[#070A26] font-extrabold text-[10px] uppercase px-2 py-0.5 rounded-full">
                    Upcoming Event
                  </span>
                </div>

                <h3 className="font-sans font-black text-xl text-white mb-2">
                  Eureka Pitching Competition 2026
                </h3>

                <p className="text-xs text-[#DDE0FF]/70 leading-relaxed mb-4">
                  Present your startup concept or prototype to fellow students, mentors, and faculty judges. Receive constructive feedback, certificates, and cash prizes.
                </p>

                <div className="flex items-center gap-3 pt-3 border-t border-[#1F2766] text-xs">
                  <span className="text-[#CBFF2E] font-bold">UIET Main Auditorium</span>
                  <span className="text-white/40">•</span>
                  <span className="text-[#DDE0FF]/70">Cash Prizes &amp; Grants</span>
                </div>
              </div>

              {/* Notification bubble overlay */}
              <div className="bg-[#DDE0FF] text-[#070A26] border-2 border-[#863DFF] rounded-2xl p-4 shadow-[4px_4px_0px_#CBFF2E] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#863DFF] text-white border border-[#070A26] flex items-center justify-center font-black text-sm shrink-0">
                    🏆
                  </div>
                  <div>
                    <strong className="block text-xs font-black text-[#070A26]">Official Registrations Open</strong>
                    <span className="text-[11px] text-[#070A26]/80">Pitch your project at UIET Auditorium.</span>
                  </div>
                </div>
                <Link
                  href="/events#1"
                  className="bg-[#070A26] text-white text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-lg shrink-0 no-underline hover:bg-[#863DFF] transition-colors"
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
