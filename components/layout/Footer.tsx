'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#040619] text-[#DDE0FF] border-t-2 border-[#1F2766] pt-16 pb-12">
      <div className="max-w-[1272px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 lg:gap-14 mb-14">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 no-underline group" aria-label="UIET E-Cell Home">
              <div className="w-10 h-10 rounded-xl bg-[#863DFF] border-2 border-[#DDE0FF] p-1 shadow-[2px_2px_0px_#CBFF2E] flex items-center justify-center shrink-0">
                <Image
                  src="/logo-icon.png"
                  alt="UIET E-Cell"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain brightness-110"
                  unoptimized
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-lg leading-tight tracking-tight text-white">
                  UIET E-Cell
                </span>
                <span className="text-[11px] font-semibold tracking-wider text-[#DDE0FF]/70 uppercase">
                  MDU Rohtak
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm leading-relaxed text-[#DDE0FF]/75 max-w-sm">
              Empowering student innovators, incubating campus ventures, and fostering startup leadership at Maharshi Dayanand University, Rohtak.
            </p>

            {/* Social Icons in Purple/Green Circles */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://linkedin.com/company/mdu-ecell"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#863DFF] text-white border-2 border-[#DDE0FF] flex items-center justify-center shadow-[2px_2px_0px_#CBFF2E] hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-[#CBFF2E] hover:text-[#070A26] transition-all"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.63-1.4 1.4-1.4s1.4.63 1.4 1.4v4.93h2.79m-13.26-7.66c.92 0 1.67.75 1.67 1.67s-.75 1.67-1.67 1.67-1.67-.75-1.67-1.67.75-1.67 1.67-1.67M6.8 18.5h2.79V10.13H6.8V18.5Z" />
                </svg>
              </a>

              <a
                href="https://instagram.com/ecell_mdu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#863DFF] text-white border-2 border-[#DDE0FF] flex items-center justify-center shadow-[2px_2px_0px_#CBFF2E] hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-[#CBFF2E] hover:text-[#070A26] transition-all"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              <a
                href="mailto:ecelluietfs@gmail.com"
                className="w-9 h-9 rounded-full bg-[#863DFF] text-white border-2 border-[#DDE0FF] flex items-center justify-center shadow-[2px_2px_0px_#CBFF2E] hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-[#CBFF2E] hover:text-[#070A26] transition-all"
                aria-label="Email"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="font-sans text-xs font-black uppercase tracking-wider text-[#CBFF2E]">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-[#DDE0FF]/75 hover:text-[#CBFF2E] transition-colors no-underline font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="flex flex-col gap-3">
            <h4 className="font-sans text-xs font-black uppercase tracking-wider text-[#CBFF2E]">
              Ecosystem
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="https://mdu.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-[#DDE0FF]/75 hover:text-[#CBFF2E] transition-colors no-underline font-medium"
                >
                  MDU Rohtak Portal
                </a>
              </li>
              <li>
                <a
                  href="https://startupindia.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-[#DDE0FF]/75 hover:text-[#CBFF2E] transition-colors no-underline font-medium"
                >
                  Startup India
                </a>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-xs sm:text-sm text-[#DDE0FF]/75 hover:text-[#CBFF2E] transition-colors no-underline font-medium"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-xs sm:text-sm text-[#DDE0FF]/75 hover:text-[#CBFF2E] transition-colors no-underline font-medium"
                >
                  Terms &amp; Code of Conduct
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="text-xs sm:text-sm text-[#DDE0FF]/75 hover:text-[#CBFF2E] transition-colors no-underline font-medium"
                >
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Recruitment Action */}
          <div className="flex flex-col gap-3">
            <h4 className="font-sans text-xs font-black uppercase tracking-wider text-[#CBFF2E]">
              Join the Movement
            </h4>
            <p className="text-xs text-[#DDE0FF]/70 leading-relaxed">
              Open to students from all departments. Build ventures, lead event operations, and gain real experience.
            </p>
            <div className="mt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#CBFF2E] text-[#070A26] font-extrabold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl border-2 border-[#070A26] shadow-[2px_2px_0px_#863DFF] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all no-underline"
              >
                <span>Recruitment 2026-27</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1F2766] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-[#DDE0FF]/60">
          <p>© {new Date().getFullYear()} UIET E-Cell, Maharshi Dayanand University. 100% Student-Run.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#CBFF2E] shadow-[0_0_8px_#CBFF2E]" />
            <span className="text-white">Batch 2026-27 Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
