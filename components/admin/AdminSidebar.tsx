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
    <div className="flex flex-col h-full bg-[#F4F6FF] text-[#0A0E1A]">
      {/* Brand & Mobile Close */}
      <div className="px-5 pt-6 pb-5 border-b border-[#C0CCFF] md:border-b-0 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-card bg-white border-2 border-[#0047FF] flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#CBFF2E]">
            <Image src="/logo.png" alt="UIET E-Cell" width={28} height={28} className="rounded-md" />
          </div>
          <div className="leading-tight min-w-0">
            <div className="font-sans font-bold text-[16px] tracking-tight text-[#0A0E1A]">E-Cell Admin</div>
            <div className="text-xs text-[#475569] mt-0.5 font-medium">UIET · MDU Rohtak</div>
          </div>
        </div>
        {onCloseMobile && (
          <button
            type="button"
            onClick={onCloseMobile}
            className="md:hidden p-2 rounded-full text-[#0A0E1A] hover:text-[#0047FF] hover:bg-[#EEF2FF] text-sm font-semibold"
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
            <div className="text-[11px] font-black uppercase tracking-[0.08em] text-[#0047FF] px-3 mb-1">
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
                  className={`flex items-center gap-2.5 py-2.5 px-3.5 rounded-full text-sm font-semibold text-left transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-[#0047FF] text-white font-bold shadow-[2px_2px_0px_#0A0E1A]'
                      : 'text-[#0A0E1A] hover:text-[#0047FF] hover:bg-[#EEF2FF]'
                  }`}
                >
                  <Icon size={18} className="shrink-0" />
                  <span className="flex-1">{tab.label}</span>
                  {tab.id === 'applications' && pendingCount > 0 && (
                    <span
                      className={`text-[11px] font-extrabold py-0.5 px-2 rounded-full ${
                        active ? 'bg-[#CBFF2E] text-[#0A0E1A]' : 'bg-[#0047FF] text-white'
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
      <div className="px-4 pb-5 pt-3 flex flex-col gap-3 border-t border-[#C0CCFF]">
        <div className="flex items-center gap-3 bg-white border border-[#C0CCFF] rounded-xl p-3">
          <div className="w-9 h-9 rounded-full bg-[#0047FF] text-white border border-[#0A0E1A] flex items-center justify-center text-xs font-bold uppercase shrink-0">
            {(user?.name || 'A').charAt(0)}
          </div>
          <div className="leading-tight min-w-0">
            <div className="text-sm font-bold text-[#0A0E1A] truncate">{user?.name || 'Admin'}</div>
            <div className="text-xs text-[#0047FF] font-semibold truncate">{user?.role || 'Super Admin'}</div>
          </div>
        </div>

        <div className="flex gap-2">
          <Link
            href="/"
            target="_blank"
            className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#0A0E1A] bg-white border border-[#0047FF]/40 py-2 rounded-full hover:border-[#0047FF] hover:text-[#0047FF] transition-all no-underline"
          >
            <RiExternalLinkLine size={14} /> View Site
          </Link>
          <button
            type="button"
            onClick={logout}
            className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-[#0047FF] hover:bg-[#003acc] py-2 rounded-full transition-all cursor-pointer shadow-[2px_2px_0px_#0A0E1A]"
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
      <aside className="hidden md:flex w-[272px] shrink-0 h-screen sticky top-0 flex-col bg-[#F4F6FF] border-r border-[#C0CCFF]">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-[1100] bg-white/80 [backdrop-filter:blur(4px)] flex"
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
