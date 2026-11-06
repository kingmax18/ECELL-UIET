'use client';

import React from 'react';
import Link from 'next/link';

export default function EventsPreview() {
  return (
    <section className="py-[clamp(72px,8vw,110px)] px-[5vw]" id="eureka">
      <div className="max-w-[1272px] mx-auto">
        <div className="ev">
          <div className="rv">
            <h2 className="d text-[clamp(34px,6vw,72px)] mb-6 text-[var(--ink)]">Eureka 2026</h2>
            <p className="big" style={{ fontSize: 'clamp(18px,2vw,24px)' }}>
              Our pitching competition: bring an idea, sharpen it, and present it to people who will challenge it.
            </p>
            <p style={{ marginTop: '28px' }}>
              <Link className="btn" href="/events">
                Explore All Events
              </Link>
            </p>
          </div>
          <div className="poster rv">
            <span className="s" style={{ fontWeight: 700 }}>E-Cell UIET MDU</span>
            <div className="d">
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
