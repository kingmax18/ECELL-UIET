'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '[data-hero="copy"]',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          '[data-hero="visual"]',
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.8 },
          '-=0.4'
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative block w-full overflow-hidden bg-white pt-12 pb-16 sm:pt-16 sm:pb-24 border-b-2 border-[#C0CCFF]"
    >
      {/* Background Grid Pattern (Themed style) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(#0047FF 1.5px, transparent 1.5px), radial-gradient(#0047FF 1.5px, #0A0E1A 1.5px)',
          backgroundSize: '32px 32px',
          backgroundPosition: '0 0, 16px 16px',
        }}
      />

      <div className="relative z-10 max-w-[1272px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline & Action */}
          <div data-hero="copy" className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-[#0047FF] border-2 border-[#C8D8FF] rounded-full px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-white shadow-[2px_2px_0px_#CBFF2E] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#CBFF2E] animate-ping" />
              <span>UIET E-Cell · MDU Rohtak</span>
            </div>

            {/* Display Title with Marker Highlight */}
            <h1 className="font-sans font-extrabold text-[clamp(36px,5.8vw,72px)] leading-[1.08] tracking-tight text-[#0A0E1A] mb-6 [text-wrap:balance]">
              Build your startup.
              <br />
              <span className="marker-yellow mt-2 inline-block">
                Launch on campus.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-[clamp(16px,1.8vw,19px)] font-medium leading-[1.6] text-[#3A4A7A] max-w-[620px] mb-8">
              The official Entrepreneurship Cell of UIET, Maharshi Dayanand University. We turn student ideas into funded ventures with equity-free grants, 1-on-1 founder mentorship, and national ideathons.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <Link
                href="/contact"
                className="neo-btn-primary text-sm uppercase tracking-wider font-extrabold px-7 py-3.5"
              >
                <span>Join UIET E-Cell 2026-27</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/events"
                className="neo-btn-secondary text-sm uppercase tracking-wider font-extrabold px-6 py-3.5"
              >
                <span>Explore Events & Summits</span>
              </Link>
            </div>

            {/* Tuckii Checkmarks */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-bold text-[#0A0E1A]">
              <span className="inline-flex items-center gap-1.5">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0047FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                100% Student-Run
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0047FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                ₹0 Fee to Join
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0047FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Real Grants & Incubation
              </span>
            </div>
          </div>

          {/* Right Column: Neo-Brutalist Interactive Visual & Floating Cards */}
          <div data-hero="visual" className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0">
            {/* Ambient Purple/Green Backing Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-[#0047FF]/15 blur-3xl -z-10" />

            {/* Central Phone Mockup Card */}
            <div className="relative w-full max-w-[340px] bg-[#F4F6FF] border-2 border-[#0047FF] rounded-[28px] p-5 shadow-[8px_8px_0px_#0A0E1A]">
              {/* Phone Speaker Notch */}
              <div className="w-20 h-3.5 bg-[#0047FF] rounded-full mx-auto mb-4" />

              {/* Header inside phone */}
              <div className="flex items-center justify-between border-b-2 border-[#C0CCFF] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#0047FF] border border-[#0A0E1A] text-white flex items-center justify-center font-black text-xs">
                    EC
                  </div>
                  <div>
                    <p className="text-xs font-bold leading-tight text-[#0A0E1A]">UIET Founder Hub</p>
                    <p className="text-[10px] text-[#475569] font-semibold">Batch 2026-27 Active</p>
                  </div>
                </div>
                <span className="bg-[#CBFF2E] text-[#0A0E1A] text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full border border-[#0A0E1A]">
                  Live
                </span>
              </div>

              {/* Main Phone Content: Startup Card */}
              <div className="bg-white border-2 border-[#0047FF] rounded-2xl p-3.5 mb-3.5 shadow-[2px_2px_0px_#D0D8FF]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0047FF]">
                    Flagship Event
                  </span>
                  <span className="text-[10px] font-bold bg-[#CBFF2E] text-[#0A0E1A] px-1.5 py-0.5 rounded border border-[#0A0E1A]">
                    Oct 2026
                  </span>
                </div>
                <h4 className="font-sans font-bold text-sm text-[#0A0E1A] leading-snug mb-1">
                  National Ideathon & Pitch
                </h4>
                <p className="text-[11px] text-[#475569] font-medium line-clamp-2">
                  ₹1,00,000 in equity-free venture prizes + incubation passes.
                </p>
              </div>

              {/* Stat row inside phone */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-white border-2 border-[#0047FF] rounded-xl p-2.5 text-center">
                  <span className="block font-black text-base text-[#0047FF]">12+</span>
                  <span className="text-[9px] font-bold text-[#475569] uppercase">Startups Funded</span>
                </div>
                <div className="bg-white border-2 border-[#0047FF] rounded-xl p-2.5 text-center">
                  <span className="block font-black text-base text-[#0A0E1A]">600+</span>
                  <span className="text-[9px] font-bold text-[#475569] uppercase">Innovators</span>
                </div>
              </div>

              {/* Phone CTA button */}
              <Link
                href="/contact"
                className="w-full bg-[#CBFF2E] text-[#0A0E1A] font-extrabold text-xs py-2.5 rounded-xl border-2 border-[#0A0E1A] flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_#0047FF] no-underline hover:bg-[#d8ff4f]"
              >
                <span>Apply as a Founder</span>
                <span>→</span>
              </Link>
            </div>

            {/* Floating Themed Pill / Chip 1 (Top-Right) */}
            <div className="absolute -top-4 -right-4 sm:-right-8 bg-[#CBFF2E] text-[#0A0E1A] border-2 border-[#0A0E1A] rounded-2xl p-3 shadow-[4px_4px_0px_#0047FF] max-w-[200px] animate-bounce [animation-duration:4s]">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0A0E1A]">
                  Eureka Pitching
                </span>
              </div>
              <p className="text-xs font-black text-[#0A0E1A] leading-tight">
                Cash Awards &amp; Grants Live
              </p>
            </div>

            {/* Floating Themed Pill / Chip 2 (Bottom-Left) */}
            <div className="absolute -bottom-5 -left-4 sm:-left-8 bg-[#0047FF] text-white border-2 border-[#0A0E1A] rounded-2xl p-3 shadow-[4px_4px_0px_#CBFF2E] max-w-[190px]">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#CBFF2E] block mb-0.5">
                Co-Founder Match
              </span>
              <p className="text-xs font-black text-white leading-tight">
                Matched 35+ Co-founders!
              </p>
            </div>

            {/* Found It / Stamp Badge */}
            <div className="absolute -top-6 left-6 font-hand text-2xl font-bold text-[#0A0E1A] -rotate-12 bg-[#CBFF2E] border-2 border-[#0A0E1A] px-3 py-0.5 rounded-lg shadow-[2px_2px_0px_#0047FF]">
              Student-built! ✨
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
