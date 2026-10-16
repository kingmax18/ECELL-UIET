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
      className="relative bg-[#FAFAF8] dark:bg-[#07080A] text-zinc-900 dark:text-[#FDFCF7] border-t border-black/[0.08] dark:border-white/[0.08] transition-colors duration-200"
    >
      <h2 id="footer-heading" className="sr-only">
        E-Cell UIET Footer
      </h2>

      {/* Top Banner / Call-to-Action Strip */}
      <div className="border-b border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.015]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="font-serif text-2xl sm:text-3xl text-zinc-950 dark:text-white font-normal tracking-tight">
                Building campus ventures. Empowering student founders.
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
                Whether you have a pitch deck, want to join our organizing cohort, or seek mentorship from alumni founders, our doors at UIET MDU are always open.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF6600] hover:bg-[#E65C00] text-white font-medium text-sm px-6 py-3 transition-transform duration-150 hover:scale-[1.02] shadow-sm whitespace-nowrap cursor-pointer"
              >
                <span>Join E-Cell Cohort</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-[#14161C] hover:bg-black/5 dark:hover:bg-white/5 text-zinc-900 dark:text-white font-medium text-sm px-5 py-3 transition-colors shadow-xs whitespace-nowrap cursor-pointer"
              >
                <span>Pitch or Connect</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Info & Address */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link
              href="/"
              title="E-Cell UIET MDU"
              className="flex items-center gap-3 group shrink-0 no-underline"
            >
              <div className="relative w-10 h-10 rounded-xl bg-white dark:bg-white/10 border border-black/10 dark:border-white/10 flex items-center justify-center p-1.5 transition-transform group-hover:scale-105 shadow-sm">
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

            <blockquote className="mt-4 font-serif italic text-base text-zinc-800 dark:text-zinc-200">
              &ldquo;Make something people want.&rdquo;
            </blockquote>

            <p className="mt-2.5 text-xs text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed max-w-sm">
              Entrepreneurship Cell of University Institute of Engineering &amp; Technology, Maharshi Dayanand University. Fostering deep-tech research, grassroots innovation, and venture incubation.
            </p>

            <div className="mt-5 flex flex-col gap-2.5 text-xs text-zinc-600 dark:text-zinc-400 font-mono">
              <a
                href={`mailto:${siteInfo.email || 'ecelluietfs@gmail.com'}`}
                className="inline-flex items-center gap-2 hover:text-[#FF6600] transition-colors"
                title="Send official email"
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
          </div>

          {/* Links Column 1: Ecosystem */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6600] mb-4">
              Ecosystem &amp; Programs
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Incubation &amp; Guidance
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Workshops &amp; Masterclasses
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Hackathons &amp; Ideathons
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Campus Demo Days
                </Link>
              </li>
              <li>
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-1.5 text-zinc-950 dark:text-white font-medium hover:text-[#FF6600] transition-colors"
                >
                  <span>Student Application Portal</span>
                  <span className="text-[10px] bg-[#FF6600]/10 text-[#FF6600] px-1.5 py-0.5 rounded font-mono font-bold">
                    OPEN
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Resources & Media */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6600] mb-4">
              Insights &amp; Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/blog"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Founder Library &amp; Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Mission &amp; Core Pillars
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
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <a
                  href="https://mdu.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  <span>MDU Official Website</span>
                  <RiExternalLinkLine size={13} className="text-zinc-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Team & Administration */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6600] mb-4">
              Organization
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/team"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Executive Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Founders &amp; Pioneers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Contact &amp; Grievance
                </Link>
              </li>
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
                  Terms &amp; Guidelines
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-[#FF6600] hover:text-white hover:border-[#FF6600] text-zinc-700 dark:text-zinc-300 text-xs font-mono transition-colors"
                  title="Admin Portal Login"
                >
                  <RiLockLine size={12} />
                  <span>Admin Portal</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-black/[0.08] dark:border-white/[0.08] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex flex-col gap-1 text-xs text-zinc-500 dark:text-zinc-400 font-sans">
            <p>
              &copy; {currentYear} Entrepreneurship Cell, UIET MDU Rohtak. All rights reserved.
            </p>
            <p className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
              Affiliated with Maharshi Dayanand University (NAAC A+ Grade State University) · Rohtak, Haryana
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Social Links */}
            {siteInfo.linkedin && (
              <a
                href={siteInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#14161C] hover:bg-[#FF6600] hover:text-white hover:border-[#FF6600] text-zinc-700 dark:text-zinc-300 flex items-center justify-center transition-colors shadow-xs"
                aria-label="E-Cell UIET LinkedIn"
                title="LinkedIn"
              >
                <RiLinkedinFill size={16} />
              </a>
            )}

            {siteInfo.instagram && (
              <a
                href={siteInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#14161C] hover:bg-[#FF6600] hover:text-white hover:border-[#FF6600] text-zinc-700 dark:text-zinc-300 flex items-center justify-center transition-colors shadow-xs"
                aria-label="E-Cell UIET Instagram"
                title="Instagram"
              >
                <RiInstagramLine size={16} />
              </a>
            )}

            {siteInfo.twitter && (
              <a
                href={siteInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#14161C] hover:bg-[#FF6600] hover:text-white hover:border-[#FF6600] text-zinc-700 dark:text-zinc-300 flex items-center justify-center transition-colors shadow-xs"
                aria-label="E-Cell UIET Twitter / X"
                title="Twitter / X"
              >
                <RiTwitterXFill size={15} />
              </a>
            )}

            {siteInfo.youtube && (
              <a
                href={siteInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#14161C] hover:bg-[#FF6600] hover:text-white hover:border-[#FF6600] text-zinc-700 dark:text-zinc-300 flex items-center justify-center transition-colors shadow-xs"
                aria-label="E-Cell UIET YouTube"
                title="YouTube"
              >
                <RiYoutubeFill size={16} />
              </a>
            )}

            {siteInfo.email && (
              <a
                href={`mailto:${siteInfo.email}`}
                className="w-9 h-9 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#14161C] hover:bg-[#FF6600] hover:text-white hover:border-[#FF6600] text-zinc-700 dark:text-zinc-300 flex items-center justify-center transition-colors shadow-xs"
                aria-label="Email E-Cell UIET"
                title="Email Us"
              >
                <RiMailLine size={16} />
              </a>
            )}

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="ml-2 w-9 h-9 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#14161C] hover:bg-black/5 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 flex items-center justify-center transition-colors shadow-xs cursor-pointer"
              title="Back to top"
              aria-label="Scroll back to top"
            >
              <RiArrowUpLine size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
