'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXFill,
  RiYoutubeFill,
  RiMailLine,
  RiMapPinLine,
  RiArrowUpLine,
  RiLockLine,
  RiExternalLinkLine,
} from 'react-icons/ri';
import { useData } from '@/context/DataProvider';

export default function Footer() {
  const { settings } = useData();

  const siteInfo = settings?.siteInfo || {
    email: 'ecelluietfs@gmail.com',
    phone: '+91 9812345678',
    address: 'UIET Building, Maharshi Dayanand University, Rohtak, Haryana 124001',
    instagram: 'https://instagram.com/ecell_uiet_mdu',
    linkedin: 'https://linkedin.com/company/ecell-uiet-mdu',
    twitter: 'https://x.com/ecell_mdu',
    youtube: 'https://youtube.com/@ecellmdu',
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-labelledby="footer-heading"
      className="relative bg-[#FAFAF8] dark:bg-[#07080A] text-zinc-900 dark:text-zinc-100 border-t border-black/[0.08] dark:border-white/[0.08] transition-colors"
    >
      <h2 id="footer-heading" className="sr-only">
        E-Cell UIET Footer
      </h2>

      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Brand, Mission & Contact Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link
              href="/"
              title="E-Cell UIET MDU"
              className="flex items-center gap-3 group shrink-0 no-underline"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white dark:bg-white/[0.08] border border-black/[0.08] dark:border-white/[0.1] flex items-center justify-center p-1.5 transition-transform duration-200 group-hover:scale-105 shadow-2xs">
                <Image
                  src="/logo.png"
                  alt="UIET E-Cell Logo"
                  width={34}
                  height={34}
                  className="w-full h-full object-contain dark:brightness-110"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-sans font-bold text-lg text-zinc-950 dark:text-white tracking-tight">
                  E-Cell
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF6600] font-semibold">
                  UIET MDU Rohtak
                </span>
              </div>
            </Link>

            <p className="mt-4 text-xs sm:text-[13px] text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed max-w-sm">
              Official Entrepreneurship Cell of University Institute of Engineering &amp; Technology, Maharshi Dayanand University. Fostering campus builders, early-stage validation, and student venture incubation.
            </p>

            {/* Quick Contact Lines */}
            <div className="mt-5 flex flex-col gap-2.5 text-xs text-zinc-600 dark:text-zinc-400 font-mono">
              <a
                href={`mailto:${siteInfo.email || 'ecelluietfs@gmail.com'}`}
                className="inline-flex items-center gap-2 hover:text-[#FF6600] transition-colors"
                title="Official Email"
              >
                <RiMailLine size={15} className="text-[#FF6600] shrink-0" />
                <span className="truncate">{siteInfo.email || 'ecelluietfs@gmail.com'}</span>
              </a>

              <div className="inline-flex items-start gap-2">
                <RiMapPinLine size={15} className="text-[#FF6600] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {siteInfo.address || 'UIET Building, MDU Rohtak, Haryana 124001'}
                </span>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="mt-6 flex items-center gap-2">
              {siteInfo.linkedin && (
                <a
                  href={siteInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#13151A] hover:bg-[#FF6600] hover:text-white hover:border-[#FF6600] text-zinc-600 dark:text-zinc-400 flex items-center justify-center transition-all duration-150 shadow-2xs"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <RiLinkedinFill size={15} />
                </a>
              )}
              {siteInfo.instagram && (
                <a
                  href={siteInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#13151A] hover:bg-[#FF6600] hover:text-white hover:border-[#FF6600] text-zinc-600 dark:text-zinc-400 flex items-center justify-center transition-all duration-150 shadow-2xs"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <RiInstagramLine size={15} />
                </a>
              )}
              {siteInfo.twitter && (
                <a
                  href={siteInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#13151A] hover:bg-[#FF6600] hover:text-white hover:border-[#FF6600] text-zinc-600 dark:text-zinc-400 flex items-center justify-center transition-all duration-150 shadow-2xs"
                  aria-label="Twitter / X"
                  title="Twitter / X"
                >
                  <RiTwitterXFill size={14} />
                </a>
              )}
              {siteInfo.youtube && (
                <a
                  href={siteInfo.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#13151A] hover:bg-[#FF6600] hover:text-white hover:border-[#FF6600] text-zinc-600 dark:text-zinc-400 flex items-center justify-center transition-all duration-150 shadow-2xs"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <RiYoutubeFill size={15} />
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-950 dark:text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13.5px]">
              <li>
                <Link
                  href="/"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Events &amp; Summits
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Team &amp; Council
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Founder Library
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Flagship Gatherings (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-950 dark:text-white mb-4">
              Flagship
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13.5px]">
              <li>
                <Link
                  href="/events"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Eureka Pitch Showcase
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Campus Ideathons
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Skill Masterclasses
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Founders Talk Series
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Annual E-Summit
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Community & Resources (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-950 dark:text-white mb-4">
              Community
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13.5px]">
              <li>
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-1.5 text-zinc-900 dark:text-white font-medium hover:text-[#FF6600] transition-colors"
                >
                  <span>Join E-Cell</span>
                  <span className="text-[9.5px] bg-[#FF6600]/10 border border-[#FF6600]/25 text-[#FF6600] px-1.5 py-0.5 rounded font-mono font-semibold">
                    OPEN
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Playbooks &amp; Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Campus Life &amp; Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <a
                  href="https://mdu.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  <span>MDU Rohtak</span>
                  <RiExternalLinkLine size={12} className="text-zinc-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Governance & Portal (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-950 dark:text-white mb-4">
              Portal
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13.5px]">
              <li>
                <Link
                  href="/privacy"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Terms &amp; Code
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#13151A] hover:bg-[#FF6600] hover:text-white hover:border-[#FF6600] text-zinc-700 dark:text-zinc-300 text-xs font-mono transition-colors shadow-2xs"
                  title="Admin Portal Login"
                >
                  <RiLockLine size={12} />
                  <span>Admin Portal</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Bottom Sub-footer Bar */}
        <div className="mt-12 pt-8 border-t border-black/[0.06] dark:border-white/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-col gap-1 text-xs text-zinc-500 dark:text-zinc-400 font-sans">
            <p>
              &copy; {currentYear} Entrepreneurship Cell, UIET MDU Rohtak. All rights reserved.
            </p>
            <p className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
              Maharshi Dayanand University (NAAC A+ Grade State University) · Rohtak, Haryana
            </p>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            {/* Live Status Indicator */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Campus Innovation Cohort</span>
            </div>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#13151A] hover:bg-[#FF6600] hover:text-white hover:border-[#FF6600] text-zinc-600 dark:text-zinc-400 flex items-center justify-center transition-all duration-150 shadow-2xs cursor-pointer"
              title="Back to top"
              aria-label="Scroll back to top"
            >
              <RiArrowUpLine size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
