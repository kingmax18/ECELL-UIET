'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  RiDashboard3Line,
  RiFileList3Line,
  RiCalendarEventLine,
  RiArticleLine,
  RiTeamLine,
  RiImage2Line,
  RiBarChartBoxLine,
  RiHandHeartLine,
  RiSettings4Line,
  RiLogoutBoxRLine,
  RiExternalLinkLine,
  RiShieldCheckLine,
} from 'react-icons/ri';
import { useAdminAuth } from '@/context/AdminAuthProvider';

export const NAV_GROUPS = [
  {
    label: 'Overview',
    items: [{ id: 'dashboard', label: 'Dashboard', icon: RiDashboard3Line }],
  },
  {
    label: 'Recruitment & Content',
    items: [
      { id: 'applications', label: 'Applications', icon: RiFileList3Line },
      { id: 'events', label: 'Events', icon: RiCalendarEventLine },
      { id: 'blogs', label: 'Blogs & Articles', icon: RiArticleLine },
      { id: 'team', label: 'Team Roster', icon: RiTeamLine },
      { id: 'gallery', label: 'Campus Gallery', icon: RiImage2Line },
      { id: 'partners', label: 'Partners & Sponsors', icon: RiHandHeartLine },
    ],
  },
  {
    label: 'Configuration',
    items: [
      { id: 'stats', label: 'Platform Stats', icon: RiBarChartBoxLine },
      { id: 'settings', label: 'Site Settings', icon: RiSettings4Line },
    ],
  },
];

export default function AdminSidebar({
  activeTab,
  setActiveTab,
  pendingCount = 0,
  mobileOpen = false,
  onCloseMobile,
}: {
  activeTab: string;
  setActiveTab: (t: string) => void;
  pendingCount?: number;
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}) {
  const { user, logout } = useAdminAuth();

  const handleSelectTab = (tabId: string) => {
    setActiveTab(tabId);
    if (onCloseMobile) onCloseMobile();
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-white dark:bg-[#0B0C0E] text-zinc-900 dark:text-zinc-100 transition-colors">
      {/* Brand Header */}
      <div className="px-5 py-5 border-b border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-white/10 border border-zinc-200 dark:border-white/10 flex items-center justify-center p-1.5 shadow-xs shrink-0">
            <Image src="/logo.png" alt="UIET E-Cell" width={30} height={30} className="w-full h-full object-contain" />
          </div>
          <div className="leading-tight min-w-0">
            <div className="font-sans font-bold text-base tracking-tight text-zinc-950 dark:text-white flex items-center gap-1.5">
              <span>E-Cell Admin</span>
            </div>
            <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 font-medium">UIET · MDU Rohtak</div>
          </div>
        </div>

        {onCloseMobile && (
          <button
            type="button"
            onClick={onCloseMobile}
            className="md:hidden w-8 h-8 rounded-lg text-zinc-500 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-center transition-colors"
            aria-label="Close sidebar"
          >
            ✕
          </button>
        )}
      </div>

      {/* Navigation Groups */}
      <nav className="flex-1 overflow-y-auto px-3.5 py-5 flex flex-col gap-6" aria-label="Admin Navigation">
        {NAV_GROUPS.map((group) => (
          <div key={group.label} className="flex flex-col gap-1">
            <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 px-3 mb-1.5">
              {group.label}
            </div>
            {group.items.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleSelectTab(tab.id)}
                  className={`flex items-center gap-2.5 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-medium text-left transition-all duration-150 cursor-pointer ${
                    active
                      ? 'bg-[#FF6600]/10 dark:bg-[#FF6600]/15 text-[#FF6600] font-semibold border-l-2 border-[#FF6600]'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100/70 dark:hover:bg-zinc-800/50'
                  }`}
                >
                  <Icon size={17} className={active ? 'text-[#FF6600]' : 'text-zinc-400 dark:text-zinc-500'} />
                  <span className="flex-1 truncate">{tab.label}</span>
                  {tab.id === 'applications' && pendingCount > 0 && (
                    <span
                      className={`text-[10px] font-mono font-bold py-0.5 px-2 rounded-full ${
                        active
                          ? 'bg-[#FF6600] text-white'
                          : 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-800'
                      }`}
                    >
                      {pendingCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </nav>

      {/* User Card & Quick Links */}
      <div className="p-3.5 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-col gap-2.5 bg-zinc-50/50 dark:bg-[#07080A]">
        <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white dark:bg-[#12141A] border border-zinc-200/80 dark:border-zinc-800 shadow-xs">
          <div className="w-8 h-8 rounded-md bg-[#FF6600] text-white flex items-center justify-center text-xs font-mono font-bold uppercase shrink-0">
            {(user?.name || 'A').charAt(0)}
          </div>
          <div className="leading-tight min-w-0 flex-1">
            <div className="text-xs font-bold text-zinc-900 dark:text-white truncate">{user?.name || 'Admin'}</div>
            <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mt-0.5">
              <RiShieldCheckLine size={11} />
              <span>Super Admin</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            target="_blank"
            className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white bg-white dark:bg-[#14161E] border border-zinc-200 dark:border-zinc-800 py-2 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors no-underline shadow-2xs"
          >
            <RiExternalLinkLine size={13} />
            <span>Live Site</span>
          </Link>
          <button
            type="button"
            onClick={logout}
            className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-medium text-red-600 dark:text-red-400 hover:text-red-700 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 py-2 rounded-md hover:bg-red-100 dark:hover:bg-red-950/40 transition-colors cursor-pointer shadow-2xs"
          >
            <RiLogoutBoxRLine size={13} />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden md:flex w-[260px] shrink-0 h-screen sticky top-0 flex-col border-r border-zinc-200/80 dark:border-zinc-800/80">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-[1100] bg-black/50 backdrop-blur-xs flex"
          onClick={onCloseMobile}
        >
          <div
            className="w-[280px] max-w-[85vw] h-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
