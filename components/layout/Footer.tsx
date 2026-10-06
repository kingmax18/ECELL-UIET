'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#F4F6FF] text-[#0A0E1A] border-t-2 border-[#C0CCFF] pt-16 pb-12">
      <div className="max-w-[1272px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 lg:gap-14 mb-14">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 no-underline group" aria-label="UIET E-Cell Home">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#C0CCFF] p-1.5 shadow-sm flex items-center justify-center shrink-0 group-hover:border-[#0047FF] transition-all">
                <Image
                  src="/logo-icon.png"
                  alt="UIET E-Cell"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-lg leading-tight tracking-tight text-[#0A0E1A]">
                  UIET E-Cell
                </span>
                <span className="text-[11px] font-semibold tracking-wider text-[#475569] uppercase">
                  MDU Rohtak
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm leading-relaxed text-[#3A4A7A] max-w-sm">
              Empowering student innovators, incubating campus ventures, and fostering startup leadership at Maharshi Dayanand University, Rohtak.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 mt-2">
              <a
                href="https://linkedin.com/company/mdu-ecell"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white text-[#3A4A7A] border border-[#C0CCFF] shadow-xs flex items-center justify-center hover:bg-[#0047FF] hover:text-white hover:border-[#0047FF] hover:-translate-y-0.5 transition-all"
                aria-label="LinkedIn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.63-1.4 1.4-1.4s1.4.63 1.4 1.4v4.93h2.79m-13.26-7.66c.92 0 1.67.75 1.67 1.67s-.75 1.67-1.67 1.67-1.67-.75-1.67-1.67.75-1.67 1.67-1.67M6.8 18.5h2.79V10.13H6.8V18.5Z" />
                </svg>
              </a>

              <a
                href="https://instagram.com/ecell_mdu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white text-[#3A4A7A] border border-[#C0CCFF] shadow-xs flex items-center justify-center hover:bg-[#0047FF] hover:text-white hover:border-[#0047FF] hover:-translate-y-0.5 transition-all"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              <a
                href="mailto:ecelluietfs@gmail.com"
                className="w-9 h-9 rounded-full bg-white text-[#3A4A7A] border border-[#C0CCFF] shadow-xs flex items-center justify-center hover:bg-[#0047FF] hover:text-white hover:border-[#0047FF] hover:-translate-y-0.5 transition-all"
                aria-label="Email"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="font-sans text-xs font-black uppercase tracking-wider text-[#0047FF]">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-[#0A0E1A] hover:text-[#0047FF] transition-colors no-underline font-semibold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="flex flex-col gap-3">
            <h4 className="font-sans text-xs font-black uppercase tracking-wider text-[#0047FF]">
              Ecosystem
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="https://mdu.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-[#0A0E1A] hover:text-[#0047FF] transition-colors no-underline font-semibold"
                >
                  MDU Rohtak Portal
                </a>
              </li>
              <li>
                <a
                  href="https://startupindia.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-[#0A0E1A] hover:text-[#0047FF] transition-colors no-underline font-semibold"
                >
                  Startup India
                </a>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-xs sm:text-sm text-[#0A0E1A] hover:text-[#0047FF] transition-colors no-underline font-semibold"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-xs sm:text-sm text-[#0A0E1A] hover:text-[#0047FF] transition-colors no-underline font-semibold"
                >
                  Terms &amp; Code of Conduct
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="text-xs sm:text-sm text-[#0A0E1A] hover:text-[#0047FF] transition-colors no-underline font-semibold"
                >
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Recruitment Action */}
          <div className="flex flex-col gap-3">
            <h4 className="font-sans text-xs font-black uppercase tracking-wider text-[#0047FF]">
              Join the Movement
            </h4>
            <p className="text-xs text-[#3A4A7A] font-medium leading-relaxed">
              Open to students from all departments. Build ventures, lead event operations, and gain real experience.
            </p>
            <div className="mt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#CBFF2E] text-[#0A0E1A] font-extrabold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl border-2 border-[#0A0E1A] shadow-[2px_2px_0px_#0047FF] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all no-underline"
              >
                <span>Recruitment 2026-27</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#C0CCFF] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-[#475569]">
          <p>© {new Date().getFullYear()} UIET E-Cell, Maharshi Dayanand University. 100% Student-Run.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0047FF]" />
            <span className="text-[#0A0E1A] font-bold">Batch 2026-27 Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
