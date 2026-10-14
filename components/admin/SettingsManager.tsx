'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { useToast } from '@/context/ToastProvider';
import { PageHeader, adminInput, adminLabel, adminCard } from './ui';
import { adminFetch } from '@/lib/adminApi';

interface AdminSettings {
  web3formsKey?: string;
  siteInfo?: { email?: string; phone?: string; address?: string };
  announcementBanner?: { text?: string; enabled?: boolean };
}

export default function SettingsManager({
  settings,
  setSettings,
}: {
  settings?: AdminSettings;
  setSettings?: React.Dispatch<React.SetStateAction<AdminSettings>>;
}) {
  const { showToast } = useToast();
  const [form, setForm] = useState({
    web3formsKey: settings?.web3formsKey || '',
    email: settings?.siteInfo?.email || 'ecelluietfs@gmail.com',
    phone: settings?.siteInfo?.phone || '+91 9812345678',
    address: settings?.siteInfo?.address || 'MDU Campus, UIET Building, Rohtak, Haryana',
    bannerText: settings?.announcementBanner?.text || 'Applications Open for Batch 2026-27',
    bannerEnabled: settings?.announcementBanner?.enabled ?? true,
  });

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (setSettings) {
      setSettings((prev: AdminSettings) => ({
        ...prev,
        web3formsKey: form.web3formsKey,
        siteInfo: {
          ...prev.siteInfo,
          email: form.email,
          phone: form.phone,
          address: form.address,
        },
        announcementBanner: {
          ...prev.announcementBanner,
          text: form.bannerText,
          enabled: form.bannerEnabled,
        },
      }));
    }

    try {
      const res = await adminFetch('/api/settings', {
        method: 'PUT',
        body: JSON.stringify({
          bannerEnabled: form.bannerEnabled,
          bannerText: form.bannerText,
          email: form.email,
          phone: form.phone,
          address: form.address,
        }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success) {
        showToast(data?.error || 'Settings saved locally; sync pending', 'info');
      } else {
        showToast('Settings saved and synced to database!', 'success');
      }
    } catch (err) {
      console.warn('[SettingsManager] Save warning:', err);
      showToast('Settings saved locally', 'info');
    }
  };

  return (
    <div>
      <PageHeader title="Portal Settings" subtitle="Configure form API keys, campus contact info, and announcements." />

      <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`${adminCard} p-6 md:p-8 flex flex-col gap-6`}>
          <h2 className="font-sans font-medium text-base tracking-[-0.015em] text-ink">Form Integrations</h2>

          <div>
            <label className={adminLabel}>Web3Forms Access Key</label>
            <input
              type="text"
              value={form.web3formsKey}
              onChange={(e) => setForm({ ...form, web3formsKey: e.target.value })}
              className={adminInput}
              placeholder="ca0b970d-2396-4be4-96d0-f4f2697acddc"
            />
            <p className="text-xs text-muted mt-1.5">
              Used for unlimited free forwarding to ecelluietfs@gmail.com
            </p>
          </div>

          <div className="h-px bg-border" />

          <h2 className="font-sans font-medium text-base tracking-[-0.015em] text-ink">Contact &amp; Campus Info</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={adminLabel}>Official Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={adminInput}
              />
            </div>
            <div>
              <label className={adminLabel}>Phone Number</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={adminInput}
              />
            </div>
          </div>

          <div>
            <label className={adminLabel}>Campus Address</label>
            <input
              type="text"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className={adminInput}
            />
          </div>
        </div>

        <div className={`${adminCard} p-6 md:p-8 flex flex-col gap-6 h-fit`}>
          <h2 className="font-sans font-medium text-base tracking-[-0.015em] text-ink">Announcement Banner</h2>

          <div>
            <label className={adminLabel}>Banner Text</label>
            <input
              type="text"
              value={form.bannerText}
              onChange={(e) => setForm({ ...form, bannerText: e.target.value })}
              className={adminInput}
            />
          </div>

          <label className="flex items-center justify-between gap-4 bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 cursor-pointer">
            <div>
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Show banner on site</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Displays a recruitment banner above the homepage</div>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={form.bannerEnabled}
              onClick={() => setForm({ ...form, bannerEnabled: !form.bannerEnabled })}
              className={`relative w-11 h-6 rounded-full transition-colors duration-200 shrink-0 cursor-pointer ${
                form.bannerEnabled ? 'bg-[#FF6600]' : 'bg-zinc-300 dark:bg-zinc-700'
              }`}
            >
              <span
                className={`absolute top-[3px] w-[18px] h-[18px] rounded-full bg-white transition-all duration-200 shadow-xs ${
                  form.bannerEnabled ? 'left-[24px]' : 'left-[3px]'
                }`}
              />
            </button>
          </label>

          <div className="bg-[#FF6600]/5 border border-[#FF6600]/20 rounded-xl px-5 py-4 text-center">
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1">Preview</div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {form.bannerEnabled ? form.bannerText : 'Banner hidden'}
            </div>
          </div>

          <Button type="submit" variant="primary" size="md" arrow className="w-fit">
            Save Settings
          </Button>
        </div>
      </form>

      {/* Data Backup & Reset Card */}
      <div className={`${adminCard} p-6 md:p-8 mt-6 flex flex-col gap-6`}>
        <div>
          <h2 className="font-sans font-bold text-lg text-zinc-950 dark:text-white tracking-tight">
            Data Backup &amp; Synchronization
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            All edits you make in the Admin panel are automatically saved and synced to your database and local storage. You can also export a complete JSON snapshot to archive or restore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Export JSON */}
          <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 rounded-xl p-5 flex flex-col justify-between gap-4">
            <div>
              <div className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">Export JSON Backup</div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Download a complete snapshot of all events, team members, gallery, and settings.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                try {
                  const json = localStorage.getItem('ECELL_EVENTS') ? JSON.stringify({
                    events: JSON.parse(localStorage.getItem('ECELL_EVENTS') || '[]'),
                    team: JSON.parse(localStorage.getItem('ECELL_TEAM') || '[]'),
                    sponsors: JSON.parse(localStorage.getItem('ECELL_SPONSORS') || '[]'),
                    stats: JSON.parse(localStorage.getItem('ECELL_STATS') || '{}'),
                    gallery: JSON.parse(localStorage.getItem('ECELL_GALLERY') || '[]'),
                    settings: JSON.parse(localStorage.getItem('ECELL_SETTINGS') || '{}'),
                    applications: JSON.parse(localStorage.getItem('ECELL_APPLICATIONS') || '[]'),
                    exportedAt: new Date().toISOString(),
                  }, null, 2) : '{}';

                  const blob = new Blob([json], { type: 'application/json' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `ecell-backup-${new Date().toISOString().slice(0, 10)}.json`;
                  a.click();
                  URL.revokeObjectURL(url);
                  showToast('Backup downloaded!', 'success');
                } catch (e) {
                  showToast('Export failed', 'error');
                }
              }}
              className="w-full py-2 px-3 text-xs font-semibold text-white bg-zinc-900 dark:bg-zinc-800 hover:bg-zinc-800 dark:hover:bg-zinc-700 rounded-lg transition-colors cursor-pointer"
            >
              Download Backup (.json)
            </button>
          </div>

          {/* Import JSON */}
          <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 rounded-xl p-5 flex flex-col justify-between gap-4">
            <div>
              <div className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">Import JSON Backup</div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Restore data from a previously downloaded .json backup file.
              </p>
            </div>
            <label className="w-full py-2 px-3 text-xs font-semibold text-[#FF6600] bg-[#FF6600]/10 border border-[#FF6600]/30 rounded-lg hover:bg-[#FF6600]/15 text-center transition-colors cursor-pointer">
              <span>Choose Backup File</span>
              <input
                type="file"
                accept=".json"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  const reader = new FileReader();
                  reader.onload = (evt) => {
                    try {
                      const data = JSON.parse(evt.target?.result as string);
                      if (data.events) localStorage.setItem('ECELL_EVENTS', JSON.stringify(data.events));
                      if (data.team) localStorage.setItem('ECELL_TEAM', JSON.stringify(data.team));
                      if (data.sponsors) localStorage.setItem('ECELL_SPONSORS', JSON.stringify(data.sponsors));
                      if (data.stats) localStorage.setItem('ECELL_STATS', JSON.stringify(data.stats));
                      if (data.gallery) localStorage.setItem('ECELL_GALLERY', JSON.stringify(data.gallery));
                      if (data.settings) localStorage.setItem('ECELL_SETTINGS', JSON.stringify(data.settings));
                      if (data.applications) localStorage.setItem('ECELL_APPLICATIONS', JSON.stringify(data.applications));
                      showToast('Backup loaded! Reloading site...', 'success');
                      setTimeout(() => window.location.reload(), 1000);
                    } catch (err) {
                      showToast('Invalid backup file format', 'error');
                    }
                  };
                  reader.readAsText(file);
                }}
              />
            </label>
          </div>

          {/* Reset to Defaults */}
          <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-rose-500/20 rounded-xl p-5 flex flex-col justify-between gap-4">
            <div>
              <div className="font-bold text-sm text-rose-600 dark:text-rose-400 mb-1">Reset to Defaults</div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Clear all custom edits and restore the official seed content for all pages.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                if (confirm('Are you sure you want to reset all site data to initial defaults?')) {
                  const keys = [
                    'ECELL_EVENTS',
                    'ECELL_TEAM',
                    'ECELL_FOUNDERS',
                    'ECELL_SPONSORS',
                    'ECELL_STATS',
                    'ECELL_GALLERY',
                    'ECELL_FACULTY',
                    'ECELL_SETTINGS',
                    'ECELL_APPLICATIONS',
                  ];
                  keys.forEach((k) => localStorage.removeItem(k));
                  showToast('Resetting data...', 'info');
                  setTimeout(() => window.location.reload(), 800);
                }
              }}
              className="w-full py-2 px-3 text-xs font-semibold text-rose-600 dark:text-rose-400 bg-rose-500/10 border border-rose-500/30 rounded-lg hover:bg-rose-500/20 transition-colors cursor-pointer"
            >
              Reset All to Defaults
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
