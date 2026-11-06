'use client';

import React from 'react';

const FAQ_LIST = [
  {
    q: 'Who can join E-Cell?',
    a: 'Any student, from any discipline or college across the university. You don’t need a startup idea to begin.',
  },
  {
    q: 'Do I need prior experience?',
    a: 'No. We run beginner-friendly sessions, and you learn alongside people building real things.',
  },
  {
    q: 'How do I take part in Eureka 2026?',
    a: 'Follow our channels for registration details, then submit your idea and prepare to pitch.',
  },
  {
    q: 'Can I contribute skills instead of an idea?',
    a: 'Yes. Design, development, content and event management teams are always open to new members.',
  },
];

export default function FAQSection() {
  return (
    <section className="py-[clamp(72px,8vw,110px)] px-[5vw]" id="faq">
      <div className="max-w-[1272px] mx-auto">
        <h2 className="d rv text-[clamp(34px,6vw,84px)] mb-10 text-[var(--ink)]">
          Good to know
        </h2>

        <div className="rv">
          {FAQ_LIST.map((item, idx) => (
            <details key={idx}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
