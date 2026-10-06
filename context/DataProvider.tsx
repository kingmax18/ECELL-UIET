'use client';

import React, { createContext, useContext, useState, useEffect, type Dispatch, type SetStateAction, type ReactNode } from 'react';
import { events as defaultEvents } from '@/data/events';
import { team as defaultTeam, founders as defaultFounders } from '@/data/team';
import { sponsors as defaultSponsors } from '@/data/sponsors';
import { stats as defaultStats } from '@/data/stats';
import { gallery as defaultGallery } from '@/data/gallery';
import { faculty as defaultFaculty } from '@/data/faculty';
import { settings as defaultSettings } from '@/data/settings';
import { blogs as defaultBlogs } from '@/data/blogs';
import type {
  EventItem,
  TeamMember,
  Founder,
  Sponsor,
  SiteStats,
  GalleryItem,
  Faculty,
  SiteSettings,
  Application,
  BlogPost,
} from '@/lib/types';

interface DataContextValue {
  events: EventItem[];
  setEvents: Dispatch<SetStateAction<EventItem[]>>;
  team: TeamMember[];
  setTeam: Dispatch<SetStateAction<TeamMember[]>>;
  founders: Founder[];
  setFounders: Dispatch<SetStateAction<Founder[]>>;
  sponsors: Sponsor[];
  setSponsors: Dispatch<SetStateAction<Sponsor[]>>;
  stats: SiteStats;
  setStats: Dispatch<SetStateAction<SiteStats>>;
  gallery: GalleryItem[];
  setGallery: Dispatch<SetStateAction<GalleryItem[]>>;
  faculty: Faculty;
  setFaculty: Dispatch<SetStateAction<Faculty>>;
  settings: SiteSettings;
  setSettings: Dispatch<SetStateAction<SiteSettings>>;
  applications: Application[];
  setApplications: Dispatch<SetStateAction<Application[]>>;
  blogs: BlogPost[];
  setBlogs: Dispatch<SetStateAction<BlogPost[]>>;
  isLoading: boolean;
  refreshData: () => void;
  resetToDefaults: () => void;
  exportDataJson: () => string;
  importDataJson: (json: string) => boolean;
}

const DataContext = createContext<DataContextValue>({
  events: defaultEvents,
  setEvents: () => {},
  team: defaultTeam,
  setTeam: () => {},
  founders: defaultFounders,
  setFounders: () => {},
  sponsors: defaultSponsors,
  setSponsors: () => {},
  stats: defaultStats,
  setStats: () => {},
  gallery: defaultGallery,
  setGallery: () => {},
  faculty: defaultFaculty,
  setFaculty: () => {},
  settings: defaultSettings,
  setSettings: () => {},
  applications: [],
  setApplications: () => {},
  blogs: defaultBlogs,
  setBlogs: () => {},
  isLoading: false,
  refreshData: () => {},
  resetToDefaults: () => {},
  exportDataJson: () => '',
  importDataJson: () => false,
});

export function DataProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<EventItem[]>(defaultEvents);
  const [team, setTeam] = useState<TeamMember[]>(defaultTeam);
  const [founders, setFounders] = useState<Founder[]>(defaultFounders);
  const [sponsors, setSponsors] = useState<Sponsor[]>(defaultSponsors);
  const [stats, setStats] = useState<SiteStats>(defaultStats);
  const [gallery, setGallery] = useState<GalleryItem[]>(defaultGallery);
  const [faculty, setFaculty] = useState<Faculty>(defaultFaculty);
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);
  const [applications, setApplications] = useState<Application[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>(defaultBlogs);
  const [isLoading, setIsLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);

  // 1. Initial load: Load from localStorage first, then sync with Neon database via API
  useEffect(() => {
    try {
      const savedEvents = localStorage.getItem('ECELL_EVENTS');
      if (savedEvents) setEvents(JSON.parse(savedEvents));

      const savedTeam = localStorage.getItem('ECELL_TEAM');
      if (savedTeam) setTeam(JSON.parse(savedTeam));

      const savedFounders = localStorage.getItem('ECELL_FOUNDERS');
      if (savedFounders) setFounders(JSON.parse(savedFounders));

      const savedSponsors = localStorage.getItem('ECELL_SPONSORS');
      if (savedSponsors) setSponsors(JSON.parse(savedSponsors));

      const savedStats = localStorage.getItem('ECELL_STATS');
      if (savedStats) setStats(JSON.parse(savedStats));

      const savedGallery = localStorage.getItem('ECELL_GALLERY');
      if (savedGallery) {
        try {
          const parsed = JSON.parse(savedGallery);
          if (Array.isArray(parsed) && parsed.length >= defaultGallery.length) {
            setGallery(parsed);
          } else {
            setGallery(defaultGallery);
          }
        } catch {
          setGallery(defaultGallery);
        }
      }

      const savedFaculty = localStorage.getItem('ECELL_FACULTY');
      if (savedFaculty) setFaculty(JSON.parse(savedFaculty));

      const savedSettings = localStorage.getItem('ECELL_SETTINGS');
      if (savedSettings) setSettings(JSON.parse(savedSettings));

      const savedApps = localStorage.getItem('ECELL_APPLICATIONS');
      if (savedApps) setApplications(JSON.parse(savedApps));

      const savedBlogs = localStorage.getItem('ECELL_BLOGS');
      if (savedBlogs) {
        try {
          const parsed = JSON.parse(savedBlogs);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setBlogs(parsed);
          }
        } catch {
          setBlogs(defaultBlogs);
        }
      }
    } catch (e) {
      console.warn('[DataProvider] LocalStorage load note:', e);
    } finally {
      setInitialized(true);
    }
  }, []);

  // 2. Persist to localStorage on updates (after initial load)
  useEffect(() => {
    if (!initialized) return;
    try {
      localStorage.setItem('ECELL_EVENTS', JSON.stringify(events));
      localStorage.setItem('ECELL_TEAM', JSON.stringify(team));
      localStorage.setItem('ECELL_FOUNDERS', JSON.stringify(founders));
      localStorage.setItem('ECELL_SPONSORS', JSON.stringify(sponsors));
      localStorage.setItem('ECELL_STATS', JSON.stringify(stats));
      localStorage.setItem('ECELL_GALLERY', JSON.stringify(gallery));
      localStorage.setItem('ECELL_FACULTY', JSON.stringify(faculty));
      localStorage.setItem('ECELL_SETTINGS', JSON.stringify(settings));
      localStorage.setItem('ECELL_APPLICATIONS', JSON.stringify(applications));
      localStorage.setItem('ECELL_BLOGS', JSON.stringify(blogs));
    } catch (e) {
      console.warn('[DataProvider] LocalStorage save note:', e);
    }
  }, [events, team, founders, sponsors, stats, gallery, faculty, settings, applications, blogs, initialized]);

  const fetchLiveAPI = async () => {
    try {
      setIsLoading(true);

      const [eventsRes, blogsRes, teamRes, sponsorsRes, galleryRes, settingsRes, appsRes] = await Promise.allSettled([
        fetch('/api/events').then((r) => r.json()),
        fetch('/api/blogs').then((r) => r.json()),
        fetch('/api/team').then((r) => r.json()),
        fetch('/api/sponsors').then((r) => r.json()),
        fetch('/api/gallery').then((r) => r.json()),
        fetch('/api/settings').then((r) => r.json()),
        fetch('/api/applications').then((r) => r.json()),
      ]);

      if (eventsRes.status === 'fulfilled' && eventsRes.value?.success && eventsRes.value.data?.length > 0) {
        setEvents(eventsRes.value.data);
      }
      if (blogsRes.status === 'fulfilled' && blogsRes.value?.success && blogsRes.value.data?.length > 0) {
        setBlogs(blogsRes.value.data);
      }
      if (teamRes.status === 'fulfilled' && teamRes.value?.success) {
        if (teamRes.value.data?.team?.length > 0) setTeam(teamRes.value.data.team);
        if (teamRes.value.data?.founders?.length > 0) setFounders(teamRes.value.data.founders);
      }
      if (sponsorsRes.status === 'fulfilled' && sponsorsRes.value?.success && sponsorsRes.value.data?.length > 0) {
        setSponsors(sponsorsRes.value.data);
      }
      if (galleryRes.status === 'fulfilled' && galleryRes.value?.success && galleryRes.value.data?.length > 0) {
        setGallery(galleryRes.value.data);
      }
      if (settingsRes.status === 'fulfilled' && settingsRes.value?.success && settingsRes.value.data) {
        const s = settingsRes.value.data;
        setSettings((prev) => ({
          ...prev,
          announcementBanner: {
            enabled: s.bannerEnabled ?? prev.announcementBanner.enabled,
            text: s.bannerText ?? prev.announcementBanner.text,
            linkText: s.bannerLinkText ?? prev.announcementBanner.linkText,
            linkUrl: s.bannerLinkUrl ?? prev.announcementBanner.linkUrl,
          },
          siteInfo: {
            email: s.email ?? prev.siteInfo.email,
            phone: s.phone ?? prev.siteInfo.phone,
            address: s.address ?? prev.siteInfo.address,
            instagram: s.instagram ?? prev.siteInfo.instagram,
            linkedin: s.linkedin ?? prev.siteInfo.linkedin,
            twitter: s.twitter ?? prev.siteInfo.twitter,
            youtube: s.youtube ?? prev.siteInfo.youtube,
          },
        }));
        setStats({
          members: { value: s.statMembers ?? 30, label: 'Active Student Members', suffix: '+' },
          events: { value: s.statEvents ?? 12, label: 'Events & Workshops', suffix: '+' },
          startups: { value: s.statStartups ?? 5, label: 'Student Startups', suffix: '+' },
          years: { value: s.statYears ?? 3, label: 'Years of Activity', suffix: '+' },
        });
      }
      if (appsRes.status === 'fulfilled' && appsRes.value?.success && appsRes.value.data) {
        setApplications(appsRes.value.data);
      }
    } catch (err) {
      console.warn('[DataProvider] Neon API fetch note:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveAPI();
  }, []);

  const resetToDefaults = () => {
    try {
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
        'ECELL_BLOGS',
      ];
      keys.forEach((k) => localStorage.removeItem(k));
      setEvents(defaultEvents);
      setTeam(defaultTeam);
      setFounders(defaultFounders);
      setSponsors(defaultSponsors);
      setStats(defaultStats);
      setGallery(defaultGallery);
      setFaculty(defaultFaculty);
      setSettings(defaultSettings);
      setApplications([]);
      setBlogs(defaultBlogs);
    } catch (e) {
      console.warn('[DataProvider] reset error:', e);
    }
  };

  const exportDataJson = () => {
    const payload = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      events,
      team,
      founders,
      sponsors,
      stats,
      gallery,
      faculty,
      settings,
      applications,
      blogs,
    };
    return JSON.stringify(payload, null, 2);
  };

  const importDataJson = (jsonString: string): boolean => {
    try {
      const data = JSON.parse(jsonString);
      if (data.events && Array.isArray(data.events)) setEvents(data.events);
      if (data.team && Array.isArray(data.team)) setTeam(data.team);
      if (data.founders && Array.isArray(data.founders)) setFounders(data.founders);
      if (data.sponsors && Array.isArray(data.sponsors)) setSponsors(data.sponsors);
      if (data.stats) setStats(data.stats);
      if (data.gallery && Array.isArray(data.gallery)) setGallery(data.gallery);
      if (data.faculty) setFaculty(data.faculty);
      if (data.settings) setSettings(data.settings);
      if (data.applications && Array.isArray(data.applications)) setApplications(data.applications);
      if (data.blogs && Array.isArray(data.blogs)) setBlogs(data.blogs);
      return true;
    } catch (e) {
      console.error('[DataProvider] importDataJson error:', e);
      return false;
    }
  };

  return (
    <DataContext.Provider
      value={{
        events,
        setEvents,
        team,
        setTeam,
        founders,
        setFounders,
        sponsors,
        setSponsors,
        stats,
        setStats,
        gallery,
        setGallery,
        faculty,
        setFaculty,
        settings,
        setSettings,
        applications,
        setApplications,
        blogs,
        setBlogs,
        isLoading,
        refreshData: fetchLiveAPI,
        resetToDefaults,
        exportDataJson,
        importDataJson,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}

