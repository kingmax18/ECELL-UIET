import './globals.css';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { DataProvider } from '@/context/DataProvider';
import { ToastProvider } from '@/context/ToastProvider';

export const metadata: Metadata = {
  title: {
    default: 'UIET E-Cell | Entrepreneurship Cell, MDU Rohtak',
    template: '%s | UIET E-Cell',
  },
  description:
    'Official Entrepreneurship Cell of Maharshi Dayanand University (MDU), Rohtak. Fostering student startups, innovation workshops, seed grants, and mentorship.',
  keywords: ['E-Cell', 'UIET', 'MDU', 'Rohtak', 'Entrepreneurship', 'Startups', 'Innovation'],
  icons: {
    icon: '/favicon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
};

import { ThemeProvider } from '@/context/ThemeProvider';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="referrer" content="no-referrer" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('ecell_theme');if(t==='dark'){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <DataProvider>
            <ToastProvider>{children}</ToastProvider>
          </DataProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
