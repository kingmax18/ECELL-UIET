'use client';

import React, { useEffect, useRef, useState } from 'react';

const ROTATING_WORDS = ['Thoughtful Innovation.', 'Real Capital.', 'Actionable Execution.'];

function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const cycle = setInterval(() => {
      setLeaving(true);
      timer = setTimeout(() => {
        setIndex((i) => (i + 1) % ROTATING_WORDS.length);
        setLeaving(false);
      }, 450);
    }, 2800);
    return () => {
      clearInterval(cycle);
      clearTimeout(timer);
    };
  }, []);

  return (
    <span className="inline-block relative whitespace-nowrap">
      <span className={`inline-block marker-yellow text-[0.9em] ml-1.5 ${leaving ? 'word-out' : 'word-in'}`}>
        {ROTATING_WORDS[index]}
      </span>
    </span>
  );
}

function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf: number;
    let observer: IntersectionObserver;

    const animate = () => {
      const duration = 1800;
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
    { value: stats?.members?.value || 30, label: 'Active Student Leaders', bg: 'bg-[#863DFF] text-white border-2 border-[#DDE0FF] shadow-[5px_5px_0px_#CBFF2E]', numColor: 'text-white', labelColor: 'text-[#DDE0FF]' },
    { value: stats?.events?.value || 15, label: 'Flagship Summits & Ideathons', bg: 'bg-[#CBFF2E] text-[#070A26] border-2 border-[#070A26] shadow-[5px_5px_0px_#863DFF]', numColor: 'text-[#070A26]', labelColor: 'text-[#070A26]' },
    { value: stats?.startups?.value || 12, label: 'Student Ventures Incubated', bg: 'bg-[#DDE0FF] text-[#070A26] border-2 border-[#863DFF] shadow-[5px_5px_0px_#CBFF2E]', numColor: 'text-[#070A26]', labelColor: 'text-[#070A26]' },
    { value: stats?.years?.value || 3, label: 'Years Driving MDU Startups', bg: 'bg-[#0B0F33] text-white border-2 border-[#863DFF] shadow-[5px_5px_0px_#040619]', numColor: 'text-[#CBFF2E]', labelColor: 'text-[#DDE0FF]' },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#070A26] border-b-2 border-[#1F2766]">
      <div className="max-w-[1272px] mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="font-sans font-extrabold text-[clamp(24px,4vw,44px)] leading-[1.25] tracking-tight text-white text-center max-w-[960px] mx-auto mb-14 [text-wrap:balance]">
          Empowering the next generation of builders with
          <RotatingWord />
        </h2>

        {/* 4 Neo-Brutalist Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statList.map((stat, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 text-center rounded-[20px] transition-all duration-200 hover:-translate-y-1 ${stat.bg} flex flex-col items-center justify-center`}
            >
              <div className={`font-sans font-black text-[clamp(44px,6vw,72px)] leading-none mb-2 ${stat.numColor}`}>
                +<CountUp value={stat.value} />
              </div>
              <div className={`text-xs sm:text-sm font-extrabold uppercase tracking-wider ${stat.labelColor}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
