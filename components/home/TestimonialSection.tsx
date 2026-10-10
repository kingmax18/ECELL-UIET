'use client';

import React from 'react';

interface FacultyMember {
  name?: string;
  designation?: string;
}

export default function TestimonialSection({ faculty }: { faculty?: FacultyMember }) {
  const testimonials = [
    {
      name: faculty?.name || 'Dr. Rajesh Kumar',
      role: faculty?.designation || 'Faculty Advisor, UIET E-Cell',
      batch: 'Advisory Board',
      image: '/gallery/page_10.jpg',
      quote:
        'UIET E-Cell has eliminated the disconnect between engineering coursework and real-world commercial execution. Students learn how to build defensible businesses before graduating.',
    },
    {
      name: 'Ritik Rao',
      role: 'Co-Founder, BytePulse AI',
      batch: 'Cohort S24',
      image: '/gallery/page_12.jpg',
      quote:
        'The weekly office hours forced us to confront our lack of user interviews. Instead of writing more backend code, we closed 15 enterprise pilots within two months.',
    },
    {
      name: 'Sneha Patel',
      role: 'Founder, CampuzFlow',
      batch: 'Batch W24',
      image: '/gallery/page_20.jpg',
      quote:
        'Having ₹1.5L in non-dilutive prototype capital and server credits gave us the runway to test without asking our parents for money. It was the catalyst for our seed round.',
    },
  ];

  return (
    <section className="py-20 sm:py-26 bg-white dark:bg-[#0B0C0E] border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-14">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#FF6600] font-bold mb-2">
            FOUNDER VOICES
          </div>
          <h2 className="font-serif font-normal text-3xl sm:text-4xl text-zinc-900 dark:text-white mb-2">
            What builders say about the incubator.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            Unvarnished reflections from founders who built products and raised capital through UIET E-Cell.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="yc-card p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 shrink-0 border border-zinc-200 dark:border-zinc-700">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-zinc-900 dark:text-white">
                      {t.name}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      {t.role}
                    </p>
                  </div>
                </div>

                <blockquote className="font-serif text-base sm:text-lg text-zinc-800 dark:text-zinc-200 leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs">
                <span className="text-zinc-400 font-mono text-[11px]">VERIFIED COHORT</span>
                <span className="font-mono text-[#FF6600] text-xs font-semibold bg-orange-50 dark:bg-orange-950/40 px-2 py-0.5 rounded border border-orange-200 dark:border-orange-900/60">
                  {t.batch}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
