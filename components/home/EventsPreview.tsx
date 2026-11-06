'use client';

import React from 'react';
import Link from 'next/link';

export default function EventsPreview() {
  return (
    <section className="py-[clamp(56px,7vw,110px)] px-5 sm:px-[5vw]" id="eureka">
      <div className="max-w-[1272px] mx-auto">
        <div className="ev">
          <div className="rv">
            <h2 className="d text-[clamp(32px,6vw,72px)] mb-4 sm:mb-6 text-[var(--ink)]">Eureka 2026</h2>
            <p className="big" style={{ fontSize: 'clamp(17px,2vw,24px)' }}>
              Our pitching competition: bring an idea, sharpen it, and present it to people who will challenge it.
            </p>
            <div className="mt-6 sm:mt-7">
              <Link className="btn w-full sm:w-auto text-center block sm:inline-block py-3.5 sm:py-3" href="/events">
                Explore All Events →
              </Link>
            </div>
          </div>
          <div className="poster rv mt-8 sm:mt-0">
            <span className="s font-bold text-xs sm:text-sm tracking-wider uppercase text-zinc-400">
              E-Cell UIET MDU
            </span>
            <div className="d text-[clamp(36px,6vw,76px)]">
              Pitch.<br />
              Prove.<br />
              Launch.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
