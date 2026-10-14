'use client';

import React from 'react';
import {
  RiFileList3Line,
  RiTimeLine,
  RiTeamLine,
  RiArticleLine,
  RiArrowRightLine,
  RiCalendarEventLine,
  RiCheckDoubleLine,
  RiPieChartLine,
} from 'react-icons/ri';
import { StatusBadge, EmptyState, adminTd, adminTh, adminCard } from './ui';

interface AppRow {
  id: number | string;
  name: string;
  email?: string;
  deptInterest?: string;
  deptinterest?: string;
  branchYear?: string;
  branchyear?: string;
  status?: string;
}

interface Props {
  events?: Array<{ id: number; title: string; date: string; status?: string; mode?: string }>;
  team?: Array<{ id: number }>;
  blogs?: Array<{ id: number }>;
  applications: AppRow[];
  stats?: { members?: { value?: number }; events?: { value?: number }; startups?: { value?: number }; years?: { value?: number } };
  onNavigate: (tab: string) => void;
}

export default function AdminDashboard({
  events = [],
  team = [],
  blogs = [],
  applications,
  stats,
  onNavigate,
}: Props) {
  const pending = applications.filter((a) => (a.status || 'Pending') === 'Pending').length;
  const accepted = applications.filter((a) => a.status === 'Accepted').length;
  const shortlisted = applications.filter((a) => a.status === 'Shortlisted').length;
  const rejected = applications.filter((a) => a.status === 'Rejected').length;

  const kpis = [
    {
      label: 'Total Applications',
      value: applications.length,
      icon: RiFileList3Line,
      change: `${pending} pending review`,
      iconBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
      actionTab: 'applications',
    },
    {
      label: 'Awaiting Review',
      value: pending,
      icon: RiTimeLine,
      change: applications.length ? `${Math.round((pending / applications.length) * 100)}% of candidate pool` : 'Queue clear',
      iconBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
      actionTab: 'applications',
    },
    {
      label: 'Active Team Roster',
      value: team.length || stats?.members?.value || 0,
      icon: RiTeamLine,
      change: 'Core & executive members',
      iconBg: 'bg-[#FF6600]/10 text-[#FF6600] border-[#FF6600]/20',
      actionTab: 'team',
    },
    {
      label: 'Published Articles',
      value: blogs.length,
      icon: RiArticleLine,
      change: 'Insights & community blogs',
      iconBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      actionTab: 'blogs',
    },
  ];

  // Department-wise breakdown
  const deptCount: Record<string, number> = {};
  applications.forEach((a) => {
    const d = a.deptInterest || a.deptinterest || 'Unspecified';
    deptCount[d] = (deptCount[d] || 0) + 1;
  });
  const deptEntries = Object.entries(deptCount).sort((a, b) => b[1] - a[1]);
  const maxDept = deptEntries[0]?.[1] || 1;

  const pipeline = [
    {
      label: 'Pending',
      value: pending,
      barCls: 'bg-amber-500',
      badgeCls: 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/60',
    },
    {
      label: 'Shortlisted',
      value: shortlisted,
      barCls: 'bg-blue-500',
      badgeCls: 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/60',
    },
    {
      label: 'Accepted',
      value: accepted,
      barCls: 'bg-emerald-500',
      badgeCls: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60',
    },
    {
      label: 'Rejected',
      value: rejected,
      barCls: 'bg-rose-500',
      badgeCls: 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/60',
    },
  ];

  const upcoming = events
    .filter((e) => (e.status || 'upcoming').toLowerCase() === 'upcoming')
    .sort((a, b) => (a.date > b.date ? 1 : -1))
    .slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Overview Top bar */}
      <div className="flex items-center justify-between gap-4 flex-wrap pb-4 border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div>
          <h1 className="font-sans font-bold text-2xl sm:text-3xl text-zinc-950 dark:text-white tracking-tight">
            Executive Overview
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Real-time telemetry, recruitment funnel analytics, and quick managerial shortcuts.
          </p>
        </div>

        {pending > 0 && (
          <button
            type="button"
            onClick={() => onNavigate('applications')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#FF6600] bg-[#FF6600]/10 hover:bg-[#FF6600]/15 border border-[#FF6600]/30 py-2 px-3.5 rounded-lg transition-all cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF6600] animate-pulse" />
            <span>{pending} candidates awaiting review</span>
            <RiArrowRightLine size={14} />
          </button>
        )}
      </div>

      {/* Modern KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k) => {
          const Icon = k.icon;
          return (
            <div
              key={k.label}
              onClick={() => onNavigate(k.actionTab)}
              className={`${adminCard} p-5 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md cursor-pointer group`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {k.label}
                </span>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${k.iconBg}`}>
                  <Icon size={18} />
                </div>
              </div>

              <div>
                <div className="font-sans font-bold text-3xl sm:text-4xl text-zinc-950 dark:text-white tracking-tight [font-variant-numeric:tabular-nums]">
                  {k.value}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 flex items-center justify-between">
                  <span>{k.change}</span>
                  <RiArrowRightLine
                    size={14}
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#FF6600]"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Grid: Recruitment Pipeline & Upcoming Events */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {/* Recruitment pipeline */}
        <div className={`${adminCard} p-6 lg:col-span-2 flex flex-col justify-between`}>
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <RiCheckDoubleLine className="text-[#FF6600]" size={18} />
                <h2 className="font-sans font-bold text-base text-zinc-900 dark:text-zinc-100 tracking-tight">
                  Recruitment Funnel
                </h2>
              </div>
              <span className="text-xs font-mono text-zinc-400">{applications.length} Total</span>
            </div>

            <div className="space-y-4">
              {pipeline.map((p) => {
                const percent = applications.length ? Math.round((p.value / applications.length) * 100) : 0;
                return (
                  <div key={p.label} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className={`px-2 py-0.5 rounded-md font-mono font-semibold border ${p.badgeCls}`}>
                        {p.label}
                      </span>
                      <div className="flex items-center gap-2 font-mono">
                        <span className="font-bold text-zinc-900 dark:text-zinc-100">{p.value}</span>
                        <span className="text-zinc-400">({percent}%)</span>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800/80 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${p.barCls} rounded-full transition-all duration-700`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Upcoming Events Box */}
          <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/80">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                <RiCalendarEventLine size={14} className="text-[#FF6600]" />
                <span>Upcoming Milestones</span>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('events')}
                className="text-[11px] font-semibold text-[#FF6600] hover:underline cursor-pointer"
              >
                Manage
              </button>
            </div>

            {upcoming.length > 0 ? (
              <div className="space-y-2">
                {upcoming.map((e) => (
                  <div
                    key={e.id}
                    className="p-2.5 rounded-lg bg-zinc-50 dark:bg-[#141720] border border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="truncate">
                      <div className="font-semibold text-zinc-900 dark:text-zinc-100 truncate">{e.title}</div>
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400">{e.date}</div>
                    </div>
                    {e.mode && (
                      <span className="shrink-0 px-2 py-0.5 rounded bg-zinc-200/60 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-[10px] font-mono">
                        {e.mode}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-zinc-500 dark:text-zinc-400 py-2">No upcoming events scheduled.</p>
            )}
          </div>
        </div>

        {/* Applications by Department */}
        <div className={`${adminCard} p-6 lg:col-span-3 flex flex-col justify-between`}>
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <RiPieChartLine className="text-[#FF6600]" size={18} />
                <h2 className="font-sans font-bold text-base text-zinc-900 dark:text-zinc-100 tracking-tight">
                  Application Department Breakdown
                </h2>
              </div>
              <span className="text-xs font-mono text-zinc-400">{deptEntries.length} Divisions</span>
            </div>

            {deptEntries.length > 0 ? (
              <div className="space-y-3.5">
                {deptEntries.map(([dept, count]) => {
                  const percent = Math.round((count / (applications.length || 1)) * 100);
                  const barWidth = Math.round((count / maxDept) * 100);
                  return (
                    <div key={dept} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-zinc-800 dark:text-zinc-200 truncate max-w-[200px] sm:max-w-xs">
                          {dept}
                        </span>
                        <div className="flex items-center gap-2 font-mono text-xs">
                          <span className="font-bold text-zinc-900 dark:text-zinc-100">{count}</span>
                          <span className="text-zinc-400">({percent}%)</span>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800/80 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#FF6600] rounded-full transition-all duration-700 min-w-[6px]"
                          style={{ width: `${barWidth}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="py-8">
                <EmptyState text="No applications submitted yet. Candidate breakdown will appear once candidates apply." />
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500">
            <span>Aggregated across all active application cycles</span>
            <button
              type="button"
              onClick={() => onNavigate('applications')}
              className="font-semibold text-[#FF6600] hover:underline cursor-pointer"
            >
              Export CSV →
            </button>
          </div>
        </div>
      </div>

      {/* Recent Applications Table */}
      <div className={`${adminCard} overflow-hidden`}>
        <div className="px-6 py-4 border-b border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between">
          <div>
            <h2 className="font-sans font-bold text-base text-zinc-950 dark:text-white tracking-tight">
              Recent Application Intake
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              Latest candidate submissions across campus departments.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('applications')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 dark:text-zinc-200 hover:text-[#FF6600] dark:hover:text-[#FF6600] py-1.5 px-3 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700/80 transition-colors cursor-pointer"
          >
            <span>View All ({applications.length})</span>
            <RiArrowRightLine size={13} />
          </button>
        </div>

        {applications.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className={adminTh}>Candidate</th>
                  <th className={adminTh}>Target Department</th>
                  <th className={adminTh}>Branch &amp; Year</th>
                  <th className={adminTh}>Status</th>
                </tr>
              </thead>
              <tbody>
                {applications.slice(0, 5).map((app) => (
                  <tr
                    key={app.id}
                    onClick={() => onNavigate('applications')}
                    className="transition-colors duration-150 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 cursor-pointer"
                  >
                    <td className={adminTd}>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#FF6600]/10 text-[#FF6600] font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-[#FF6600]/20">
                          {app.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-semibold text-zinc-900 dark:text-zinc-100">{app.name}</div>
                          <div className="text-xs text-zinc-500 dark:text-zinc-400">{app.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className={adminTd}>
                      <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                        {app.deptInterest || app.deptinterest || 'General'}
                      </span>
                    </td>
                    <td className={adminTd}>
                      <span className="text-xs text-zinc-600 dark:text-zinc-400">
                        {app.branchYear || app.branchyear || '—'}
                      </span>
                    </td>
                    <td className={adminTd}>
                      <StatusBadge status={app.status || 'Pending'} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-6">
            <EmptyState text="No applications submitted yet." />
          </div>
        )}
      </div>
    </div>
  );
}
