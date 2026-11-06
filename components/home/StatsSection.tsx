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
    members?: { value?: number; label?: string };
    events?: { value?: number; label?: string };
    startups?: { value?: number; label?: string };
    years?: { value?: number; label?: string };
  };
}

export default function StatsSection({ stats }: StatsSectionProps) {
  const statList = [
    { value: stats?.members?.value || 250, label: stats?.members?.label || 'Students Engaged', suffix: '+' },
    { value: stats?.events?.value || 2, label: stats?.events?.label || 'Eureka Editions', suffix: '' },
    { value: stats?.startups?.value || 20, label: stats?.startups?.label || 'Pitch Submissions', suffix: '+' },
    { value: stats?.years?.value || 6, label: stats?.years?.label || 'Active Departments', suffix: '' },
  ];

  return (
    <section className="py-[clamp(72px,8vw,110px)] px-[5vw]" id="about">
      <div className="max-w-[1272px] mx-auto">
        <p className="big rv mb-16">
          Entrepreneurship isn’t a department.{' '}
          <span>It’s a way of looking at problems, and it belongs to every student, whatever they study.</span>
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-[var(--line)]">
          {statList.map((stat, idx) => (
            <div key={idx} className="reveal">
              <div className="font-['Space_Grotesk'] font-bold text-[clamp(48px,6vw,84px)] leading-none tracking-[-0.03em] text-[var(--ink)] mb-3 [font-variant-numeric:tabular-nums]">
                <CountUp value={stat.value} />
                {stat.suffix && <span className="text-[var(--orange)] ml-0.5">{stat.suffix}</span>}
              </div>
              <div className="font-['Space_Grotesk'] text-sm sm:text-base font-medium text-[var(--mute)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
