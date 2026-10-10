'use client';

import React, { useEffect, useRef, useState } from 'react';

function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf: number;
    let observer: IntersectionObserver;

    const animate = () => {
      const duration = 1600;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(Math.round(eased * value));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [value]);

  return <span ref={ref}>{display}</span>;
}

interface StatsSectionProps {
  stats?: {
    members?: { value?: number };
    events?: { value?: number };
    startups?: { value?: number };
    years?: { value?: number };
  };
}

export default function StatsSection({ stats }: StatsSectionProps) {
  const statList = [
    {
      value: stats?.startups?.value || 50,
      suffix: '+',
      label: 'Startups Incubated & Mentored',
      description: 'Campus ventures across AI, SaaS, deep-tech, and consumer.',
    },
    {
      value: 25,
      prefix: '₹',
      suffix: 'L+',
      label: 'Direct Seed Grants Deployed',
      description: '100% non-dilutive university prototype funding.',
    },
    {
      value: 12000,
      suffix: '+',
      label: 'Student Innovators Reached',
      description: 'Participants across workshops, ideathons, and summits.',
    },
    {
      value: 45,
      suffix: '+',
      label: 'Mentors & Angel Advisors',
      description: 'Founders from unicorn companies and alumni investors.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-[#0B0C0E] border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header - Understated, Authoritative */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#FF6600] font-bold mb-2">
              TRACK RECORD &amp; IMPACT
            </div>
            <h2 className="font-serif font-normal text-2xl sm:text-3xl text-zinc-900 dark:text-white">
              The numbers behind the incubator.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-md">
            We measure ourselves solely by the traction, survival rate, and capital raised by our student founders.
          </p>
        </div>

        {/* 4 Clean Columns Separated by Hairline Borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-zinc-200 dark:divide-zinc-800">
          {statList.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between ${
                idx === 0 ? 'lg:pr-8' : idx === 3 ? 'lg:pl-8' : 'lg:px-8'
              }`}
            >
              <div>
                <div className="font-sans font-bold text-4xl sm:text-5xl text-zinc-950 dark:text-white tracking-tight mb-2">
                  {stat.prefix}
                  <CountUp value={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-1.5">
                  {stat.label}
                </div>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
