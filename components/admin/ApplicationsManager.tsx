'use client';

import React, { useState } from 'react';
import { RiSearchLine, RiFileDownloadLine, RiCloseLine, RiCheckLine, RiCloseCircleLine, RiTimeLine } from 'react-icons/ri';
import Button from '@/components/ui/Button';
import { useToast } from '@/context/ToastProvider';
import { PageHeader, StatusBadge, EmptyState, FilterPills, adminCard, adminTd, adminTh } from './ui';
import { adminFetch } from '@/lib/adminApi';
import type { Application } from '@/lib/types';
import type { Dispatch, SetStateAction } from 'react';

const FILTERS = ['All', 'Pending', 'Shortlisted', 'Accepted', 'Rejected'];

export default function ApplicationsManager({
  applications,
  setApplications,
}: {
  applications: Application[];
  setApplications?: Dispatch<SetStateAction<Application[]>>;
}) {
  const { showToast } = useToast();
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string | number | null>(null);

  const filtered = applications.filter((a) => {
    if (filter !== 'All' && (a.status || 'Pending') !== filter) return false;
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      a.name?.toLowerCase().includes(q) ||
      a.email?.toLowerCase().includes(q) ||
      a.enrollment?.toLowerCase().includes(q) ||
      (a.deptInterest || a.deptinterest || '').toLowerCase().includes(q)
    );
  });

  const selectedApp = applications.find((a) => a.id === selectedId) || null;

  const updateStatus = async (appId: string | number, newStatus: string) => {
    const updated = applications.map((a) => (a.id === appId ? { ...a, status: newStatus } : a));
    if (setApplications) setApplications(updated);

    try {
      await adminFetch(`/api/applications/${appId}`, {
        method: 'PATCH',
        body: JSON.stringify({ status: newStatus }),
      });
    } catch (e) {
      console.warn('[Admin] API status update warning:', e);
    }

    showToast(`Application marked as "${newStatus}"`, 'success');
  };

  const exportCSV = () => {
    if (!applications.length) {
      showToast('No applications to export', 'error');
      return;
    }
    const headers = ['ID,Name,Enrollment,Email,Phone,Branch & Year,Department,Status,Submitted On'];
    const rows = applications.map((a) =>
      `"${a.id}","${a.name}","${a.enrollment || ''}","${a.email}","${a.phone}","${a.branchYear || a.branchyear || ''}","${a.deptInterest || a.deptinterest || ''}","${a.status || 'Pending'}","${a.submittedOn || a.submittedon || ''}"`
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const link = document.createElement('a');
    link.setAttribute('href', encodeURI(csvContent));
    link.setAttribute('download', `ecell_applications_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    showToast('CSV exported successfully', 'success');
  };

  return (
    <div>
      <PageHeader
        title="Recruitment Intake & Review"
        subtitle="Evaluate prospective members, filter by department, and track applicant decisions."
        action={
          <button
            type="button"
            onClick={exportCSV}
            className="inline-flex items-center gap-2 py-2 px-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#141720] text-zinc-800 dark:text-zinc-200 hover:border-[#FF6600]/50 hover:text-[#FF6600] text-xs font-semibold shadow-xs transition-all cursor-pointer"
          >
            <RiFileDownloadLine size={15} />
            <span>Export CSV</span>
          </button>
        }
      />

      {/* Filters + search */}
      <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
        <FilterPills options={FILTERS} active={filter} onChange={setFilter} />

        <div className="relative">
          <RiSearchLine size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search candidate, email, roll…"
            className="w-64 sm:w-72 pl-9 pr-3.5 py-1.5 bg-white dark:bg-[#14161D] border border-zinc-200 dark:border-zinc-700/80 rounded-lg text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-hidden focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600]/15 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-5 gap-5">
        {/* Table */}
        <div className={`${adminCard} overflow-hidden xl:col-span-3`}>
          {filtered.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className={adminTh}>Candidate</th>
                    <th className={adminTh}>Department</th>
                    <th className={adminTh}>Branch &amp; Year</th>
                    <th className={adminTh}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((app) => (
                    <tr
                      key={app.id}
                      onClick={() => setSelectedId(app.id)}
                      className={`cursor-pointer transition-colors duration-150 border-b border-zinc-100 dark:border-zinc-800/80 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 ${
                        selectedId === app.id
                          ? 'bg-[#FF6600]/5 dark:bg-[#FF6600]/10 border-l-2 border-l-[#FF6600]'
                          : ''
                      }`}
                    >
                      <td className={adminTd}>
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-xs flex items-center justify-center font-bold shrink-0">
                            {app.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="font-semibold text-zinc-900 dark:text-zinc-100 text-xs sm:text-sm">
                              {app.name}
                            </div>
                            <div className="text-[11px] text-zinc-500 dark:text-zinc-400">{app.email}</div>
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
            <div className="p-5">
              <EmptyState text={`No applications matching "${filter}"${query ? ` and "${query}"` : ''}.`} />
            </div>
          )}
        </div>

        {/* Candidate Detail panel */}
        <div className="xl:col-span-2">
          {selectedApp ? (
            <div className={`${adminCard} p-6 xl:sticky xl:top-24 space-y-5 shadow-lg`}>
              <div className="flex items-start justify-between gap-3 pb-4 border-b border-zinc-100 dark:border-zinc-800/80">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="font-sans font-bold text-lg text-zinc-950 dark:text-white tracking-tight">
                      {selectedApp.name}
                    </h2>
                    <StatusBadge status={selectedApp.status || 'Pending'} />
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    {selectedApp.email}
                    {selectedApp.phone ? ` · ${selectedApp.phone}` : ''}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedId(null)}
                  className="w-8 h-8 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center shrink-0 cursor-pointer"
                  aria-label="Close details"
                >
                  <RiCloseLine size={18} />
                </button>
              </div>

              <div className="space-y-3">
                <Detail label="Enrollment Roll" value={selectedApp.enrollment || 'N/A'} />
                <Detail label="Branch & Year" value={selectedApp.branchYear || selectedApp.branchyear || 'N/A'} />
                <Detail label="Preferred Dept" value={selectedApp.deptInterest || selectedApp.deptinterest || 'N/A'} />
                <Detail
                  label="Submitted On"
                  value={new Date(selectedApp.submittedOn || selectedApp.submittedon || Date.now()).toLocaleString('en-IN', {
                    dateStyle: 'medium',
                    timeStyle: 'short',
                  })}
                />
                {selectedApp.linkedin && (
                  <Detail
                    label="LinkedIn"
                    value={
                      <a
                        href={selectedApp.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FF6600] font-semibold hover:underline inline-flex items-center gap-1"
                      >
                        Profile Link ↗
                      </a>
                    }
                  />
                )}

                <div className="pt-2">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                    Candidate Statement of Purpose
                  </div>
                  <div className="bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 rounded-xl p-3.5 text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed max-h-48 overflow-y-auto">
                    &ldquo;{selectedApp.whyJoin || selectedApp.whyjoin || 'No statement provided.'}&rdquo;
                  </div>
                </div>
              </div>

              {/* Status Update Actions */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2.5">
                  Update Candidate Decision
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => updateStatus(selectedApp.id, 'Shortlisted')}
                    className="py-2 px-2.5 rounded-lg text-xs font-semibold bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <RiTimeLine size={13} />
                    <span>Shortlist</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => updateStatus(selectedApp.id, 'Accepted')}
                    className="py-2 px-2.5 rounded-lg text-xs font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <RiCheckLine size={13} />
                    <span>Accept</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => updateStatus(selectedApp.id, 'Rejected')}
                    className="py-2 px-2.5 rounded-lg text-xs font-semibold bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <RiCloseCircleLine size={13} />
                    <span>Reject</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="xl:sticky xl:top-24">
              <EmptyState text="Click any candidate row in the table to review their credentials, profile, and statement." />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-3 text-xs">
      <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
        {label}
      </span>
      <span className="text-zinc-900 dark:text-zinc-100 font-medium text-right truncate">{value}</span>
    </div>
  );
}
