'use client';

import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { AdminUser } from '@/lib/types';

interface LoginResult {
  success: boolean;
  error?: string;
}

interface AdminAuthContextValue {
  user: AdminUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<LoginResult>;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextValue>({
  user: null,
  isAuthenticated: false,
  login: async () => ({ success: false }),
  logout: () => {},
});

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);

  useEffect(() => {
    try {
      // 1. Purge legacy persistent localStorage session to avoid perpetual auto-login
      if (typeof window !== 'undefined') {
        localStorage.removeItem('ECELL_ADMIN_SESSION');
        localStorage.removeItem('ECELL_ADMIN_TOKEN');
      }

      // 2. Only read from sessionStorage (cleared when browser/tab closes)
      const saved = sessionStorage.getItem('ECELL_ADMIN_SESSION');
      if (saved) {
        setUser(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('[AdminAuth] SessionStorage parse note:', e);
    }
  }, []);

  // Auto-logout after 20 minutes of inactivity for security
  useEffect(() => {
    if (!user) return;
    let timeoutId: NodeJS.Timeout;

    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        logout();
      }, 20 * 60 * 1000);
    };

    resetTimer();
    const activityEvents = ['mousedown', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach((evt) => window.addEventListener(evt, resetTimer, { passive: true }));

    return () => {
      clearTimeout(timeoutId);
      activityEvents.forEach((evt) => window.removeEventListener(evt, resetTimer));
    };
  }, [user]);

  const login = async (email: string, password: string): Promise<LoginResult> => {
    const cleanEmail = email.trim().toLowerCase();

    // 1. Try our backend API route /api/auth/login
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail, password }),
      });

      const json = await res.json();

      if (res.ok && json.success && json.user) {
        setUser(json.user);
        sessionStorage.setItem('ECELL_ADMIN_SESSION', JSON.stringify(json.user));
        if (json.token) {
          sessionStorage.setItem('ECELL_ADMIN_TOKEN', json.token);
          localStorage.setItem('ECELL_ADMIN_TOKEN', json.token);
        }
        return { success: true };
      }

      if (json.error) {
        return { success: false, error: json.error };
      }
    } catch (err) {
      console.warn('[AdminAuth] API call error, checking local fallback:', err);
    }

    // 2. Direct fallback authentication
    const allowedAdmins = [
      { email: 'ecelluietfs@gmail.com', password: 'LSSecelluiet@admin', name: 'Lakshay', role: 'Super Admin' },
      { email: 'ecelluietfs@gmail.com', password: 'ecell@admin2026', name: 'Lakshay', role: 'Super Admin' },
    ];

    const match = allowedAdmins.find(
      (a) => a.email === cleanEmail && a.password === password
    );

    if (match) {
      const authUser = {
        email: match.email,
        name: match.name,
        role: match.role,
      };
      setUser(authUser);
      sessionStorage.setItem('ECELL_ADMIN_SESSION', JSON.stringify(authUser));
      return { success: true };
    }

    return { success: false, error: 'Invalid credentials. Please verify your email and password.' };
  };

  const logout = () => {
    setUser(null);
    try {
      sessionStorage.removeItem('ECELL_ADMIN_SESSION');
      sessionStorage.removeItem('ECELL_ADMIN_TOKEN');
      localStorage.removeItem('ECELL_ADMIN_SESSION');
      localStorage.removeItem('ECELL_ADMIN_TOKEN');
      fetch('/api/auth/logout', { method: 'POST' }).catch(() => {});
    } catch (e) {}
  };

  return (
    <AdminAuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  return useContext(AdminAuthContext);
}
