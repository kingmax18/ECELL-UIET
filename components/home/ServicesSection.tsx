'use client';

import React from 'react';

const pillars = [
  {
    num: '01',
    title: 'Inclusive by design',
    description: 'No gatekeeping by branch or year. If you have curiosity, there’s a seat.',
  },
  {
    num: '02',
    title: 'Learn by doing',
    description: 'Workshops, sprints and real projects over passive lectures.',
  },
  {
    num: '03',
    title: 'Pitch and prove',
    description: 'Stages where ideas meet feedback, mentors and funding conversations.',
  },
  {
    num: '04',
    title: 'Community first',
    description: 'Designers, developers, marketers and makers building together.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-[clamp(72px,8vw,110px)] px-[5vw]" id="pillars">
      <div className="max-w-[1272px] mx-auto">
        <h2 className="d rv text-[clamp(34px,6vw,84px)] mb-10 text-[var(--ink)]">
          What we build
        </h2>

        <div className="pillars-grid rv">
          {pillars.map((item, idx) => (
            <div key={idx} className="card">
              <span className="n">{item.num}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
