'use client';

import React from 'react';
import {
  RiFileList3Line,
  RiTimeLine,
  RiTeamLine,
  RiCalendarEventLine,
  RiArticleLine,
} from 'react-icons/ri';
import { StatusBadge, EmptyState, adminTd, adminTh } from './ui';

interface AppRow {
  id: number;
  name: string;
  email?: string;
  deptInterest?: string;
  deptinterest?: string;
  branchYear?: string;
  branchyear?: string;
  status?: string;
}

interface Props {
  events?: Array<{ id: number; title: string; date: string; status?: string }>;
  team?: Array<{ id: number }>;
  blogs?: Array<{ id: number }>;
  applications: AppRow[];
  stats?: { members?: { value?: number }; events?: { value?: number }; startups?: { value?: number }; years?: { value?: number } };
  onNavigate: (tab: string) => void;
}

export default function AdminDashboard({ events = [], team = [], blogs = [], applications, stats, onNavigate }: Props) {
  const pending = applications.filter((a) => (a.status || 'Pending') === 'Pending').length;
  const accepted = applications.filter((a) => a.status === 'Accepted').length;
  const shortlisted = applications.filter((a) => a.status === 'Shortlisted').length;

  const kpis = [
    { label: 'Applications', value: applications.length, icon: RiFileList3Line, tint: 'bg-[#0047FF] text-white border border-[#0A0E1A]' },
    { label: 'Pending Review', value: pending, icon: RiTimeLine, tint: 'bg-[#CBFF2E] text-[#0A0E1A] border border-[#0A0E1A]' },
    { label: 'Blog Articles', value: blogs.length, icon: RiArticleLine, tint: 'bg-[#CBFF2E] text-[#0A0E1A] border border-[#0A0E1A]' },
    { label: 'Team Members', value: team.length || stats?.members?.value || 0, icon: RiTeamLine, tint: 'bg-[#0047FF] text-white border border-[#0A0E1A]' },
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
    { label: 'Pending', value: pending, cls: 'bg-[#ffefda] text-[#b3661d]' },
    { label: 'Shortlisted', value: shortlisted, cls: 'bg-[#e2f0ff] text-[#1d6fb3]' },
    { label: 'Accepted', value: accepted, cls: 'bg-[#e4f6df] text-[#2f7a1d]' },
  ];

  const upcoming = events
    .filter((e) => e.status === 'upcoming')
    .sort((a, b) => (a.date > b.date ? 1 : -1))
    .slice(0, 3);

  return (
    <div>
      <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
        <div>
          <h1 className="font-sans font-bold text-[28px] leading-tight tracking-tight text-[#0A0E1A]">
            Overview &amp; Analytics
          </h1>
          <p className="text-sm text-[#3A4A7A] mt-1 font-medium">
            Real-time portal activity and recruitment pipeline.
          </p>
        </div>
        {pending > 0 && (
          <button
            type="button"
            onClick={() => onNavigate('applications')}
            className="text-xs font-bold text-[#0A0E1A] bg-[#CBFF2E] py-2 px-4 rounded-full border-2 border-[#0A0E1A] shadow-[2px_2px_0px_#0047FF] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
          >
            {pending} awaiting review
          </button>
        )}
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        {kpis.map((k) => {
          const Icon = k.icon;
          return (
            <div
              key={k.label}
              className="bg-[#F4F6FF] border-2 border-[#C0CCFF] hover:border-[#0047FF] rounded-panel p-5 flex flex-col gap-3 shadow-[4px_4px_0px_#0A0E1A] transition-all"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${k.tint}`}>
                <Icon size={20} />
              </div>
              <div>
                <div className="font-sans font-bold text-[36px] leading-none tracking-tight text-[#0A0E1A] [font-variant-numeric:tabular-nums]">
                  {k.value}
                </div>
                <div className="text-[13px] font-semibold text-[#475569] mt-2">{k.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-5">
        {/* Recruitment pipeline + upcoming */}
        <div className="bg-[#F4F6FF] border-2 border-[#C0CCFF] rounded-panel p-6 lg:col-span-2 shadow-[4px_4px_0px_#0A0E1A]">
          <h2 className="font-sans font-bold text-base tracking-tight text-[#0A0E1A] mb-4">
            Recruitment Pipeline
          </h2>
          <div className="flex flex-col gap-3.5">
            {pipeline.map((p) => (
              <div key={p.label} className="flex items-center gap-2.5">
                <span className={`py-0.5 px-2.5 rounded-full text-[11px] font-bold ${p.cls} w-[84px] text-center`}>
                  {p.label}
                </span>
                <div className="flex-1 h-2 bg-white border border-[#C0CCFF] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#0047FF] rounded-full transition-all duration-700"
                    style={{ width: `${applications.length ? (p.value / applications.length) * 100 : 0}%` }}
                  />
                </div>
                <span className="text-xs font-bold text-[#0A0E1A] w-6 text-right [font-variant-numeric:tabular-nums]">
                  {p.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-5 border-t border-[#C0CCFF]">
            <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-[#0047FF] mb-3">
              Upcoming Events
            </h3>
            {upcoming.length > 0 ? (
              <ul className="flex flex-col gap-2.5">
                {upcoming.map((e) => (
                  <li key={e.id} className="flex items-center justify-between gap-2 text-[13px]">
                    <span className="text-[#0A0E1A] font-bold truncate">{e.title}</span>
                    <span className="text-[#475569] whitespace-nowrap text-xs font-medium">{e.date}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[13px] text-[#475569]">No upcoming events scheduled.</p>
            )}
          </div>
        </div>

        {/* Applications by department */}
        <div className="bg-[#F4F6FF] border-2 border-[#C0CCFF] rounded-panel p-6 lg:col-span-3 shadow-[4px_4px_0px_#0A0E1A]">
          <h2 className="font-sans font-bold text-base tracking-tight text-[#0A0E1A] mb-4">
            Applications by Department
          </h2>
          {deptEntries.length > 0 ? (
            <div className="flex flex-col gap-3">
              {deptEntries.map(([dept, count]) => (
                <div key={dept} className="flex items-center gap-2.5">
                  <span className="text-xs font-bold text-[#0A0E1A] w-36 shrink-0 truncate">{dept}</span>
                  <div className="flex-1 h-2 bg-white border border-[#C0CCFF] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#0047FF] rounded-full transition-all duration-700 min-w-[8px]"
                      style={{ width: `${(count / maxDept) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-bold text-[#0A0E1A] w-6 text-right [font-variant-numeric:tabular-nums]">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState text="No application data yet — department analytics appear after the first submission." />
          )}
        </div>
      </div>

      {/* Recent applications */}
      <div className="bg-[#F4F6FF] border-2 border-[#C0CCFF] rounded-panel shadow-[4px_4px_0px_#0A0E1A] overflow-hidden">
        <div className="px-6 py-4 border-b border-[#C0CCFF] flex items-center justify-between">
          <h2 className="font-sans font-bold text-base tracking-tight text-[#0A0E1A]">Recent Applications</h2>
          <button
            type="button"
            onClick={() => onNavigate('applications')}
            className="text-xs font-bold text-[#0047FF] border-2 border-[#0047FF] py-1.5 px-4 rounded-full hover:bg-[#0047FF] hover:text-white transition-all cursor-pointer"
          >
            View all →
          </button>
        </div>
        {applications.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className={adminTh}>Name</th>
                  <th className={adminTh}>Department</th>
                  <th className={adminTh}>Branch &amp; Year</th>
                  <th className={adminTh}>Status</th>
                </tr>
              </thead>
              <tbody>
                {applications.slice(0, 5).map((app) => (
                  <tr key={app.id} className="transition-colors duration-150 hover:bg-[#EEF2FF]">
                    <td className={adminTd}>
                      <div className="font-bold text-[#0A0E1A]">{app.name}</div>
                      <div className="text-[11px] text-[#475569]">{app.email}</div>
                    </td>
                    <td className={adminTd}>{app.deptInterest || app.deptinterest}</td>
                    <td className={adminTd}>{app.branchYear || app.branchyear}</td>
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
