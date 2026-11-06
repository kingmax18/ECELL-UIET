import './globals.css';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { DataProvider } from '@/context/DataProvider';
import { ToastProvider } from '@/context/ToastProvider';

export const metadata: Metadata = {
  title: {
    default: 'E-Cell UIET MDU — Start from an idea',
    template: '%s | E-Cell UIET MDU',
  },
  description:
    'The entrepreneurship cell of UIET, Maharshi Dayanand University. Open to every student, every branch, every college on campus.',
  keywords: ['E-Cell', 'UIET', 'MDU', 'Rohtak', 'Entrepreneurship', 'Startups', 'Innovation', 'Eureka 2026'],
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <DataProvider>
          <ToastProvider>{children}</ToastProvider>
        </DataProvider>
      </body>
    </html>
  );
}
