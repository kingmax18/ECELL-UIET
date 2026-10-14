'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { useToast } from '@/context/ToastProvider';
import { PageHeader, adminInput, adminLabel, adminCard } from './ui';
import { adminFetch } from '@/lib/adminApi';
import type { SiteStats } from '@/lib/types';
import type { Dispatch, SetStateAction } from 'react';

interface StatField {
  key: 'members' | 'events' | 'startups' | 'years';
  label: string;
  hint: string;
}

const FIELDS: StatField[] = [
  { key: 'members', label: 'Active Student Members', hint: 'Shown as +N on the homepage counters' },
  { key: 'events', label: 'Events & Workshops', hint: 'Total events and masterclasses hosted' },
  { key: 'startups', label: 'Student Startups', hint: 'Student ventures incubated' },
  { key: 'years', label: 'Years of Activity', hint: 'Since E-Cell was founded' },
];

export default function StatsManager({
  stats,
  setStats,
}: {
  stats: SiteStats;
  setStats?: Dispatch<SetStateAction<SiteStats>>;
}) {
  const { showToast } = useToast();
  const [form, setForm] = useState({
    members: stats?.members?.value ?? 15,
    events: stats?.events?.value ?? 5,
    startups: stats?.startups?.value ?? 2,
    years: stats?.years?.value ?? 2,
  });

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    const next = {
      members: { value: Number(form.members) || 0, label: 'Active Student Members', suffix: '+' },
      events: { value: Number(form.events) || 0, label: 'Events & Workshops', suffix: '+' },
      startups: { value: Number(form.startups) || 0, label: 'Student Startups', suffix: '+' },
      years: { value: Number(form.years) || 0, label: 'Years of Activity', suffix: '+' },
    };

    if (setStats) setStats(next);

    try {
      await adminFetch('/api/settings', {
        method: 'PUT',
        body: JSON.stringify({
          statMembers: next.members.value,
          statEvents: next.events.value,
          statStartups: next.startups.value,
          statYears: next.years.value,
        }),
      });
    } catch (err) {
      console.warn('[Admin] Stats API persist warning:', err);
    }

    showToast('Homepage counters updated!', 'success');
  };

  return (
    <div>
      <PageHeader
        title="Homepage Counters & Statistics"
        subtitle="Configure the high-impact proof metrics featured on the homepage hero section."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <form onSubmit={handleSave} className={`${adminCard} p-6 md:p-8 flex flex-col gap-6`}>
          {FIELDS.map((f) => (
            <div key={f.key}>
              <label className={adminLabel} htmlFor={`stat-${f.key}`}>
                {f.label}
              </label>
              <input
                id={`stat-${f.key}`}
                type="number"
                min={0}
                value={form[f.key]}
                onChange={(e) => setForm({ ...form, [f.key]: Number(e.target.value) })}
                className={`${adminInput} max-w-[160px] [font-variant-numeric:tabular-nums]`}
              />
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5">{f.hint}</p>
            </div>
          ))}

          <Button type="submit" variant="primary" size="md" arrow className="w-fit">
            Save Counters
          </Button>
        </form>

        {/* Live preview */}
        <div className={`${adminCard} p-6 md:p-8`}>
          <h2 className="font-sans font-bold text-base text-zinc-950 dark:text-white tracking-tight mb-6">
            Live Homepage Counter Preview
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {FIELDS.map((f) => (
              <div
                key={f.key}
                className="text-center bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 rounded-xl py-6 px-3"
              >
                <div className="font-sans font-bold text-3xl sm:text-4xl leading-none tracking-tight text-zinc-950 dark:text-white [font-variant-numeric:tabular-nums]">
                  +{form[f.key]}
                </div>
                <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-2">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
