'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[var(--surface)] pt-14 sm:pt-20 pb-10 sm:pb-12 border-t border-[var(--line)]">
      <div className="max-w-[1272px] mx-auto px-5 sm:px-[clamp(16px,4vw,24px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-8 md:gap-12 lg:gap-16 mb-12 sm:mb-16">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="logo flex items-center gap-2.5 no-underline">
              <Image src="/logo.png" alt="UIET E-Cell Logo" width={34} height={34} className="rounded-lg" />
              <span className="font-['Space_Grotesk'] font-bold text-lg tracking-[-0.01em] text-[var(--ink)]">
                E-Cell<b className="text-[var(--orange)]">.</b>UIET
              </span>
            </Link>
            <p className="text-sm leading-[1.6] text-[var(--mute)] max-w-[360px]">
              The entrepreneurship cell of UIET, Maharshi Dayanand University. Empowering student innovators,
              founders, and makers across campus.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://linkedin.com/company/mdu-ecell"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--line)] bg-white text-[var(--mute)] transition-all duration-200 hover:bg-[var(--orange)] hover:border-[var(--orange)] hover:text-white shadow-2xs"
                aria-label="LinkedIn"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.63-1.4 1.4-1.4s1.4.63 1.4 1.4v4.93h2.79m-13.26-7.66c.92 0 1.67.75 1.67 1.67s-.75 1.67-1.67 1.67-1.67-.75-1.67-1.67.75-1.67 1.67-1.67M6.8 18.5h2.79V10.13H6.8V18.5Z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/ecell_mdu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--line)] bg-white text-[var(--mute)] transition-all duration-200 hover:bg-[var(--orange)] hover:border-[var(--orange)] hover:text-white shadow-2xs"
                aria-label="Instagram"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--line)] bg-white text-[var(--mute)] transition-all duration-200 hover:bg-[var(--orange)] hover:border-[var(--orange)] hover:text-white shadow-2xs"
                aria-label="Email"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Wrapper: 2 cols on mobile, separate on desktop */}
          <div className="grid grid-cols-2 gap-8 md:contents">
            {/* Col 2: Sitemap */}
            <div className="flex flex-col gap-3.5">
              <h4 className="font-['Space_Grotesk'] text-xs font-bold text-[var(--ink)] tracking-wider uppercase">
                Sitemap
              </h4>
              <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--mute)] no-underline transition-colors duration-200 hover:text-[var(--orange)] font-medium font-['Space_Grotesk'] inline-block py-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Resources */}
            <div className="flex flex-col gap-3.5">
              <h4 className="font-['Space_Grotesk'] text-xs font-bold text-[var(--ink)] tracking-wider uppercase">
                Resources
              </h4>
              <ul className="flex flex-col gap-2.5 list-none p-0 m-0 font-['Space_Grotesk']">
                <li>
                  <a
                    href="https://startupindia.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--mute)] no-underline transition-colors duration-200 hover:text-[var(--orange)] inline-block py-0.5"
                  >
                    Startup India
                  </a>
                </li>
                <li>
                  <a
                    href="https://mdu.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--mute)] no-underline transition-colors duration-200 hover:text-[var(--orange)] inline-block py-0.5"
                  >
                    MDU Rohtak
                  </a>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-[var(--mute)] no-underline transition-colors duration-200 hover:text-[var(--orange)] inline-block py-0.5"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-[var(--mute)] no-underline transition-colors duration-200 hover:text-[var(--orange)] inline-block py-0.5"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin"
                    className="text-sm text-[var(--mute)] no-underline transition-colors duration-200 hover:text-[var(--orange)] inline-block py-0.5"
                  >
                    Admin Panel
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 4: Contact Details */}
          <div className="flex flex-col gap-3.5 font-['Space_Grotesk'] pt-4 md:pt-0 border-t border-[var(--line)] md:border-t-0">
            <h4 className="text-xs font-bold text-[var(--ink)] tracking-wider uppercase">
              Contact Details
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-[var(--mute)] leading-[1.5]">
              <p className="m-0">UIET Building, MDU Campus, Rohtak, Haryana - 124001</p>
              <p className="m-0">
                <a href={`mailto:${SITE.email}`} className="text-[var(--ink)] font-semibold no-underline hover:text-[var(--orange)]">
                  {SITE.email}
                </a>
              </p>
              <p className="m-0">{SITE.phone}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--line)] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-[var(--mute)] font-['Space_Grotesk'] text-center sm:text-left">
          <p className="m-0">© {new Date().getFullYear()} E-Cell UIET, Maharshi Dayanand University. All rights reserved.</p>
          <p className="m-0">Built by Tech Team E-Cell</p>
        </div>
      </div>
    </footer>
  );
}
