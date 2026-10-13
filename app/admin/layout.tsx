import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { AdminAuthProvider } from '@/context/AdminAuthProvider';

export const metadata: Metadata = {
  title: 'Admin Board | E-Cell',
  description: 'Protected Administration Board for E-Cell',
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <AdminAuthProvider>{children}</AdminAuthProvider>;
}
