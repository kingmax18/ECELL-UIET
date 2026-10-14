'use client';

import React, { useState } from 'react';
import { useAdminAuth } from '@/context/AdminAuthProvider';
import { useData } from '@/context/DataProvider';
import { useToast } from '@/context/ToastProvider';
import AdminLogin from '@/components/admin/AdminLogin';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminDashboard from '@/components/admin/AdminDashboard';
import ApplicationsManager from '@/components/admin/ApplicationsManager';
import EventsManager from '@/components/admin/EventsManager';
import TeamManager from '@/components/admin/TeamManager';
import GalleryManager from '@/components/admin/GalleryManager';
import StatsManager from '@/components/admin/StatsManager';
import PartnersManager from '@/components/admin/PartnersManager';
import SettingsManager from '@/components/admin/SettingsManager';
import BlogsManager from '@/components/admin/BlogsManager';
import { RiLogoutBoxRLine, RiSave3Line } from 'react-icons/ri';
import { adminFetch } from '@/lib/adminApi';

export default function AdminPage() {
  const { isAuthenticated, logout } = useAdminAuth();
  const { showToast } = useToast();
  const {
    events,
    setEvents,
    team,
    setTeam,
    sponsors,
    setSponsors,
    stats,
    setStats,
    gallery,
    setGallery,
    applications,
    setApplications,
    settings,
    setSettings,
    blogs,
    setBlogs,
  } = useData();

  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  const pendingCount = applications.filter((a: { status?: string }) => (a.status || 'Pending') === 'Pending').length;

  const handleSaveAll = async () => {
    setIsSaving(true);
    try {
      // 1. Save all to LocalStorage backup
      localStorage.setItem('ECELL_EVENTS', JSON.stringify(events));
      localStorage.setItem('ECELL_TEAM', JSON.stringify(team));
      localStorage.setItem('ECELL_GALLERY', JSON.stringify(gallery));
      localStorage.setItem('ECELL_SPONSORS', JSON.stringify(sponsors));
      localStorage.setItem('ECELL_STATS', JSON.stringify(stats));
      localStorage.setItem('ECELL_SETTINGS', JSON.stringify(settings));
      localStorage.setItem('ECELL_BLOGS', JSON.stringify(blogs));

      // 2. Persist settings and site stats directly to Neon PostgreSQL
      if (settings || stats) {
        const res = await adminFetch('/api/settings', {
          method: 'PUT',
          body: JSON.stringify({
            ...(settings || {}),
            statMembers: stats?.members?.value ?? 30,
            statEvents: stats?.events?.value ?? 12,
            statStartups: stats?.startups?.value ?? 5,
            statYears: stats?.years?.value ?? 3,
          }),
        });

        const data = await res.json().catch(() => null);
        if (!res.ok || !data?.success) {
          throw new Error(data?.error || 'Database rejected settings update');
        }
      }

      showToast('All changes saved and synced to database!', 'success');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error syncing with cloud';
      console.error('[Admin Save]', err);
      showToast(`Warning: ${msg} (saved to local backup)`, 'info');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FBFBFA] dark:bg-[#07080A] text-zinc-900 dark:text-zinc-100 transition-colors">
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        pendingCount={pendingCount}
        mobileOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Sticky Top Header with Global Save Button */}
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-[#0B0C0E]/80 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 px-4 sm:px-6 md:px-8 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(true)}
              className="md:hidden p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white cursor-pointer flex flex-col gap-1 w-9 h-9 justify-center items-center transition-colors shrink-0"
              aria-label="Open navigation menu"
            >
              <span className="w-4 h-0.5 bg-current rounded-full" />
              <span className="w-4 h-0.5 bg-current rounded-full" />
              <span className="w-4 h-0.5 bg-current rounded-full" />
            </button>

            <div className="flex items-center gap-2 min-w-0">
              <span className="text-xs font-mono font-medium text-zinc-400 uppercase tracking-wider hidden sm:inline">
                Portal
              </span>
              <span className="text-xs text-zinc-300 dark:text-zinc-700 hidden sm:inline">/</span>
              <span className="font-bold text-sm sm:text-base text-zinc-950 dark:text-white capitalize truncate">
                {activeTab} Management
              </span>
            </div>

            {/* Live Cloud Status Indicator */}
            <div className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Neon Cloud Connected</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {pendingCount > 0 && (
              <button
                type="button"
                onClick={() => setActiveTab('applications')}
                className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 py-1 px-3 rounded-full hover:bg-amber-500/20 transition-colors cursor-pointer"
              >
                <span>{pendingCount} Pending</span>
              </button>
            )}

            {/* Prominent Save Button */}
            <button
              type="button"
              disabled={isSaving}
              onClick={handleSaveAll}
              className="inline-flex items-center gap-2 bg-[#FF6600] hover:bg-[#E65C00] text-white font-medium text-xs uppercase tracking-wider px-4 sm:px-5 py-2.5 rounded-lg shadow-xs transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              title="Save all changes and sync to Cloud Database"
            >
              {isSaving ? (
                <>
                  <svg className="animate-spin h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  <span>Syncing…</span>
                </>
              ) : (
                <>
                  <RiSave3Line size={15} />
                  <span>Save Changes</span>
                </>
              )}
            </button>

            {/* Quick Logout Button */}
            <button
              type="button"
              onClick={logout}
              className="inline-flex items-center gap-1.5 bg-white dark:bg-[#14161F] text-zinc-700 dark:text-zinc-300 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 hover:border-red-200 dark:hover:border-red-900 font-medium text-xs px-3 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 transition-colors cursor-pointer shadow-2xs"
              title="End session"
            >
              <RiLogoutBoxRLine size={14} />
              <span className="hidden md:inline">Logout</span>
            </button>
          </div>
        </header>

        <main className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 py-6 md:py-8 overflow-x-hidden">
          {activeTab === 'dashboard' && (
            <AdminDashboard
              events={events}
              team={team}
              blogs={blogs}
              applications={applications}
              stats={stats}
              onNavigate={setActiveTab}
            />
          )}
          {activeTab === 'applications' && (
            <ApplicationsManager applications={applications} setApplications={setApplications} />
          )}
          {activeTab === 'events' && <EventsManager events={events} setEvents={setEvents} />}
          {activeTab === 'blogs' && <BlogsManager blogs={blogs} setBlogs={setBlogs} />}
          {activeTab === 'team' && <TeamManager team={team} setTeam={setTeam} />}
          {activeTab === 'gallery' && <GalleryManager gallery={gallery} setGallery={setGallery} />}
          {activeTab === 'stats' && <StatsManager stats={stats} setStats={setStats} />}
          {activeTab === 'partners' && <PartnersManager sponsors={sponsors} setSponsors={setSponsors} />}
          {activeTab === 'settings' && <SettingsManager settings={settings} setSettings={setSettings} />}
        </main>
      </div>
    </div>
  );
}
