'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { useToast } from '@/context/ToastProvider';
import { PageHeader, adminInput, adminLabel, adminCard } from './ui';

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

  const handleSave = (e: React.FormEvent) => {
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
    showToast('Settings saved successfully!', 'success');
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

          <label className="flex items-center justify-between gap-4 bg-soft border border-bordersubtle rounded-card px-4 py-3.5 cursor-pointer">
            <div>
              <div className="text-sm font-medium text-ink">Show banner on site</div>
              <div className="text-xs text-muted mt-0.5">Displays a recruitment banner above the homepage</div>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={form.bannerEnabled}
              onClick={() => setForm({ ...form, bannerEnabled: !form.bannerEnabled })}
              className={`relative w-11 h-6 rounded-pill transition-colors duration-200 shrink-0 ${
                form.bannerEnabled ? 'bg-ink' : 'bg-[rgba(27,29,30,0.2)]'
              }`}
            >
              <span
                className={`absolute top-[3px] w-[18px] h-[18px] rounded-full bg-white transition-all duration-200 ${
                  form.bannerEnabled ? 'left-[24px]' : 'left-[3px]'
                }`}
              />
            </button>
          </label>

          <div className="bg-[linear-gradient(71deg,rgba(217,243,252,0.5)_11%,rgba(235,248,253,0.6)_45.7%,rgba(255,255,255,0.6)_64.5%,rgba(253,241,211,0.7)_100%)] border border-border rounded-card px-5 py-4 text-center">
            <div className="text-xs font-medium uppercase tracking-[0.06em] text-muted mb-1">Preview</div>
            <div className="text-sm font-medium text-ink">
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
          <h2 className="font-sans font-medium text-lg tracking-[-0.015em] text-ink">
            Data Backup &amp; Synchronization
          </h2>
          <p className="text-sm text-secondary mt-1">
            All edits you make in the Admin panel are automatically saved and synced to your browser storage. You can also download a complete JSON backup to transfer data to other devices or restore the site.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Export JSON */}
          <div className="bg-soft border border-border rounded-card p-5 flex flex-col justify-between gap-4">
            <div>
              <div className="font-semibold text-sm text-ink mb-1">Export JSON Backup</div>
              <p className="text-xs text-secondary leading-relaxed">
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
              className="w-full py-2 px-3 text-xs font-medium text-white bg-ink rounded-pill hover:bg-black transition-colors cursor-pointer"
            >
              Download Backup (.json)
            </button>
          </div>

          {/* Import JSON */}
          <div className="bg-soft border border-border rounded-card p-5 flex flex-col justify-between gap-4">
            <div>
              <div className="font-semibold text-sm text-ink mb-1">Import JSON Backup</div>
              <p className="text-xs text-secondary leading-relaxed">
                Restore data from a previously downloaded .json backup file.
              </p>
            </div>
            <label className="w-full py-2 px-3 text-xs font-bold text-[#0047FF] bg-white border-2 border-[#0047FF] rounded-full hover:bg-[#0047FF] hover:text-white text-center transition-colors cursor-pointer">
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
          <div className="bg-white border border-[#ff4d6d]/30 rounded-card p-5 flex flex-col justify-between gap-4">
            <div>
              <div className="font-bold text-sm text-[#ff4d6d] mb-1">Reset to Defaults</div>
              <p className="text-xs text-[#3A4A7A] leading-relaxed">
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
              className="w-full py-2 px-3 text-xs font-bold text-[#ff4d6d] bg-[#F4F6FF] border border-[#ff4d6d]/40 rounded-full hover:bg-[#ff4d6d]/20 transition-colors cursor-pointer"
            >
              Reset All to Defaults
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
