'use client';

import React from 'react';
import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1272px] mx-auto px-4 sm:px-6">
        <div className="bg-[#0047FF] border-2 border-[#C8D8FF] rounded-3xl p-8 sm:p-14 md:p-16 shadow-[8px_8px_0px_#CBFF2E] text-center relative overflow-hidden">
          {/* Subtle Grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.08]"
            style={{
              backgroundImage:
                'radial-gradient(#C8D8FF 1.5px, transparent 1.5px), radial-gradient(#C8D8FF 1.5px, #0047FF 1.5px)',
              backgroundSize: '24px 24px',
              backgroundPosition: '0 0, 12px 12px',
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="inline-block bg-[#CBFF2E] text-[#0A0E1A] font-black text-xs px-3.5 py-1 rounded-full border-2 border-[#0A0E1A] uppercase tracking-wider shadow-[2px_2px_0px_#0A0E1A] mb-6">
              Batch 2026-27 Applications Active
            </span>

            <h2 className="font-sans font-extrabold text-[clamp(32px,5.5vw,60px)] leading-[1.08] tracking-tight text-white mb-5 [text-wrap:balance]">
              Your ideas deserve a real launchpad.
            </h2>

            <p className="text-[clamp(15px,1.8vw,18px)] font-medium leading-[1.6] text-white/90 max-w-xl mb-9">
              Stop waiting for the &ldquo;right time&rdquo;. Join 6 functional departments, get paired with passionate builders, and turn your concepts into viable ventures at MDU Rohtak.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="bg-[#CBFF2E] text-[#0A0E1A] font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-full border-2 border-[#0A0E1A] shadow-[4px_4px_0px_#0A0E1A] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#0A0E1A] transition-all no-underline text-center w-full sm:w-auto"
              >
                <span>Apply for Recruitment 2026-27 →</span>
              </Link>

              <Link
                href="/blog"
                className="bg-white text-[#0047FF] font-extrabold text-xs uppercase tracking-wider py-4 px-7 rounded-full border-2 border-[#0A0E1A] shadow-[4px_4px_0px_#CBFF2E] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#CBFF2E] transition-all no-underline text-center w-full sm:w-auto"
              >
                <span>Read Startup Playbooks</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
