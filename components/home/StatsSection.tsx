'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Users, Calendar, Rocket, Layers } from 'lucide-react';
import { useData } from '@/context/DataProvider';

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

interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function StatsSection({ stats: propsStats }: StatsSectionProps) {
  const { stats: ctxStats } = useData();
  const currentStats = propsStats || ctxStats;

  const statList: StatItem[] = [
    {
      value: 1500,
      suffix: '+',
      label: 'Students Reached',
      description: 'Active participants across technical workshops, ideathons, and summits.',
      icon: Users,
    },
    {
      value: currentStats?.events?.value || 15,
      suffix: '+',
      label: 'Events & Workshops',
      description: 'Hands-on bootcamps, guest lectures, and networking conclaves.',
      icon: Calendar,
    },
    {
      value: currentStats?.startups?.value || 10,
      suffix: '+',
      label: 'Student Startups',
      description: 'Campus ventures and student-led projects nurtured from idea to prototype.',
      icon: Rocket,
    },
    {
      value: 5,
      suffix: '',
      label: 'Core Departments',
      description: 'Social Media, Design & Tech, Research & Content, Events, and Documentation.',
      icon: Layers,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-[#0B0C0E] border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 dark:bg-orange-500/20 border border-orange-500/20 text-[#FF6600] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Community Impact</span>
            </div>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-zinc-950 dark:text-white tracking-tight">
              E-Cell by the numbers<span className="text-[#FF6600]">.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
            Connecting students across departments to learn practical skills, collaborate on ideas, and gain mentorship.
          </p>
        </div>

        {/* 4 Clean Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statList.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 p-6 sm:p-7 hover:border-[#FF6600]/40 hover:bg-white dark:hover:bg-zinc-850 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle ambient corner glow on hover */}
                <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-[#FF6600]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 dark:bg-orange-500/20 text-[#FF6600] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-sans">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <div className="font-sans font-black text-4xl sm:text-5xl text-zinc-950 dark:text-white tracking-tight group-hover:text-[#FF6600] transition-colors mb-2">
                    {stat.prefix}
                    <CountUp value={stat.value} />
                    {stat.suffix}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1.5">
                    {stat.label}
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Bottom decorative accent line */}
                <div className="absolute inset-x-6 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF6600] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
