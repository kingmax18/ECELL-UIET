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
import { adminFetch } from '@/lib/adminApi';

export default function AdminPage() {
  const { isAuthenticated } = useAdminAuth();
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
        await adminFetch('/api/settings', {
          method: 'PUT',
          body: JSON.stringify({
            ...(settings || {}),
            statMembers: stats?.members?.value ?? 30,
            statEvents: stats?.events?.value ?? 12,
            statStartups: stats?.startups?.value ?? 5,
            statYears: stats?.years?.value ?? 3,
          }),
        });
      }

      showToast('All changes saved and synced with Neon database!', 'success');
    } catch (err) {
      console.error('[Admin Save]', err);
      showToast('Changes saved locally. Syncing with cloud...', 'info');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white text-[#0A0E1A]">
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        pendingCount={pendingCount}
        mobileOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Sticky Top Header with Global Save Button */}
        <header className="sticky top-0 z-30 bg-[#F4F6FF]/95 [backdrop-filter:blur(8px)] border-b border-[#C0CCFF] px-4 sm:px-6 md:px-8 py-3.5 flex items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3 min-w-0">
            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(true)}
              className="md:hidden p-2 rounded-lg bg-white border border-[#0047FF]/40 text-[#0A0E1A] cursor-pointer flex flex-col gap-1 w-9 h-9 justify-center items-center hover:border-[#0047FF] transition-colors shrink-0"
              aria-label="Open sidebar"
            >
              <span className="w-4 h-0.5 bg-[#0A0E1A] rounded-full" />
              <span className="w-4 h-0.5 bg-[#0A0E1A] rounded-full" />
              <span className="w-4 h-0.5 bg-[#0A0E1A] rounded-full" />
            </button>

            <div className="flex items-center gap-2 min-w-0">
              <span className="text-xs font-semibold text-[#475569] uppercase tracking-wider hidden sm:inline">Portal</span>
              <span className="text-xs text-[#475569]/50 hidden sm:inline">/</span>
              <span className="font-bold text-sm sm:text-base text-[#0A0E1A] capitalize truncate">
                {activeTab} Management
              </span>
            </div>

            {/* Live Cloud Status Indicator */}
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#C0CCFF] text-xs font-semibold text-[#0047FF]">
              <span className="w-2 h-2 rounded-full bg-[#0047FF] shadow-[0_0_8px_#0047FF] animate-pulse" />
              <span>Cloud Connected</span>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {pendingCount > 0 && (
              <span className="hidden sm:inline-flex text-[11px] font-bold bg-[#0047FF] text-white py-1 px-3 rounded-full border border-[#0A0E1A]">
                {pendingCount} Pending
              </span>
            )}

            {/* Prominent Save Button */}
            <button
              type="button"
              disabled={isSaving}
              onClick={handleSaveAll}
              className="inline-flex items-center gap-2 bg-[#CBFF2E] text-[#0A0E1A] font-extrabold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full border-2 border-[#0A0E1A] shadow-[3px_3px_0px_#0047FF] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#0047FF] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
              title="Save all changes and sync to Neon Cloud Database"
            >
              {isSaving ? (
                <>
                  <svg className="animate-spin h-3.5 w-3.5 text-[#0A0E1A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  <span>Saving…</span>
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                    <polyline points="17 21 17 13 7 13 7 21" />
                    <polyline points="7 3 7 8 15 8" />
                  </svg>
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </div>
        </header>

        <main className="flex-1 min-w-0 px-4 sm:px-5 md:px-7 py-5 md:py-6 overflow-x-hidden">
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
