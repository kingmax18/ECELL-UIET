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
} from 'react-icons/ri';
import { useAdminAuth } from '@/context/AdminAuthProvider';

export const NAV_GROUPS = [
  {
    label: 'Overview',
    items: [{ id: 'dashboard', label: 'Dashboard', icon: RiDashboard3Line }],
  },
  {
    label: 'Manage',
    items: [
      { id: 'applications', label: 'Applications', icon: RiFileList3Line },
      { id: 'events', label: 'Events', icon: RiCalendarEventLine },
      { id: 'blogs', label: 'Blogs', icon: RiArticleLine },
      { id: 'team', label: 'Team', icon: RiTeamLine },
      { id: 'gallery', label: 'Gallery', icon: RiImage2Line },
      { id: 'partners', label: 'Partners', icon: RiHandHeartLine },
    ],
  },
  {
    label: 'Site',
    items: [
      { id: 'stats', label: 'Site Stats', icon: RiBarChartBoxLine },
      { id: 'settings', label: 'Settings', icon: RiSettings4Line },
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
    <div className="flex flex-col h-full bg-[#0B0F33] text-white">
      {/* Brand & Mobile Close */}
      <div className="px-5 pt-6 pb-5 border-b border-[#1F2766] md:border-b-0 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-card bg-[#070A26] border-2 border-[#863DFF] flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#CBFF2E]">
            <Image src="/logo.png" alt="UIET E-Cell" width={28} height={28} className="rounded-md" />
          </div>
          <div className="leading-tight min-w-0">
            <div className="font-sans font-bold text-[16px] tracking-tight text-white">E-Cell Admin</div>
            <div className="text-xs text-[#DDE0FF]/70 mt-0.5">UIET · MDU Rohtak</div>
          </div>
        </div>
        {onCloseMobile && (
          <button
            type="button"
            onClick={onCloseMobile}
            className="md:hidden p-2 rounded-full text-[#DDE0FF] hover:text-white hover:bg-[#101648] text-sm font-semibold"
            aria-label="Close sidebar"
          >
            ✕
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-5">
        {NAV_GROUPS.map((group) => (
          <div key={group.label} className="flex flex-col gap-1">
            <div className="text-[11px] font-black uppercase tracking-[0.08em] text-[#CBFF2E] px-3 mb-1">
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
                  className={`flex items-center gap-2.5 py-2.5 px-3.5 rounded-full text-sm font-medium text-left transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-[#863DFF] text-white font-bold shadow-[2px_2px_0px_#CBFF2E]'
                      : 'text-[#DDE0FF]/80 hover:text-white hover:bg-[#863DFF]/20'
                  }`}
                >
                  <Icon size={18} className="shrink-0" />
                  <span className="flex-1">{tab.label}</span>
                  {tab.id === 'applications' && pendingCount > 0 && (
                    <span
                      className={`text-[11px] font-extrabold py-0.5 px-2 rounded-full ${
                        active ? 'bg-[#CBFF2E] text-[#070A26]' : 'bg-[#863DFF] text-white'
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

      {/* User & actions */}
      <div className="px-4 pb-5 pt-3 flex flex-col gap-3 border-t border-[#1F2766]">
        <div className="flex items-center gap-3 bg-[#070A26] border border-[#1F2766] rounded-xl p-3">
          <div className="w-9 h-9 rounded-full bg-[#863DFF] text-white border border-[#DDE0FF]/40 flex items-center justify-center text-xs font-bold uppercase shrink-0">
            {(user?.name || 'A').charAt(0)}
          </div>
          <div className="leading-tight min-w-0">
            <div className="text-sm font-bold text-white truncate">{user?.name || 'Admin'}</div>
            <div className="text-xs text-[#CBFF2E] font-medium truncate">{user?.role || 'Super Admin'}</div>
          </div>
        </div>

        <div className="flex gap-2">
          <Link
            href="/"
            target="_blank"
            className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#DDE0FF] bg-[#070A26] border border-[#863DFF]/40 py-2 rounded-full hover:border-[#CBFF2E] hover:text-white transition-all no-underline"
          >
            <RiExternalLinkLine size={14} /> View Site
          </Link>
          <button
            type="button"
            onClick={logout}
            className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-[#863DFF] hover:bg-[#7229e6] py-2 rounded-full transition-all cursor-pointer shadow-[2px_2px_0px_#070A26]"
          >
            <RiLogoutBoxRLine size={14} /> Logout
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden md:flex w-[272px] shrink-0 h-screen sticky top-0 flex-col bg-[#0B0F33] border-r border-[#1F2766]">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-[1100] bg-[#070A26]/80 [backdrop-filter:blur(4px)] flex"
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
