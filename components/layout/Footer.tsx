'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-black text-[#FDFCF7] border-t border-zinc-900">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-[1400px] px-6 py-12 lg:py-16">
        <div className="flex flex-col space-y-8 md:flex-row md:items-start md:justify-between md:space-y-0">
          {/* Logo & Slogan */}
          <div className="flex flex-col items-start md:max-w-xs md:shrink-0">
            <div className="flex flex-row items-center gap-3">
              <Link href="/" title="E-Cell UIET MDU" className="flex items-center gap-3 group shrink-0">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center p-1.5 transition-transform group-hover:scale-105 shadow-sm">
                  <Image
                    src="/logo.png"
                    alt="UIET E-Cell Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain brightness-110"
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-sans font-bold text-lg text-white tracking-tight">
                    E-Cell
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                    UIET MDU Rohtak
                  </span>
                </div>
              </Link>
            </div>
            <h3 className="font-['Outfit',sans-serif] font-light text-base text-[#FDFCF7]/90 tracking-wide mt-3">
              Make something people want.
            </h3>
            <p className="mt-2 text-xs text-zinc-400 font-['Outfit',sans-serif] font-light max-w-xs leading-relaxed">
              Entrepreneurship Cell, UIET MDU Rohtak. Nurturing student founders, deep-tech research, and venture-backed companies.
            </p>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 items-start gap-8 sm:grid-cols-3 md:ml-16 md:gap-16 lg:ml-24 lg:gap-20">
            {/* Programs */}
            <div>
              <h4 className="font-medium tracking-wider text-sm text-[#FDFCF7] font-['Outfit',sans-serif]">
                Programs
              </h4>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/about" className="font-light text-sm text-[#FDFCF7]/70 hover:text-white transition-colors font-['Outfit',sans-serif]">
                    Incubation &amp; Guidance
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="font-light text-sm text-[#FDFCF7]/70 hover:text-white transition-colors font-['Outfit',sans-serif]">
                    Workshops & Masterclasses
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="font-light text-sm text-[#FDFCF7]/70 hover:text-white transition-colors font-['Outfit',sans-serif]">
                    Mentorship Network
                  </Link>
                </li>
                <li>
                  <Link href="/apply" className="font-light text-sm text-[#FDFCF7]/70 hover:text-white transition-colors font-['Outfit',sans-serif]">
                    Join E-Cell / Register
                  </Link>
                </li>
              </ul>
            </div>

            {/* Initiatives */}
            <div>
              <h4 className="font-medium tracking-wider text-sm text-[#FDFCF7] font-['Outfit',sans-serif]">
                Initiatives
              </h4>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/about" className="font-light text-sm text-[#FDFCF7]/70 hover:text-white transition-colors font-['Outfit',sans-serif]">
                    E-Cell Mission
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="font-light text-sm text-[#FDFCF7]/70 hover:text-white transition-colors font-['Outfit',sans-serif]">
                    Hackathons & Summits
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="font-light text-sm text-[#FDFCF7]/70 hover:text-white transition-colors font-['Outfit',sans-serif]">
                    Campus Demo Day
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="font-light text-sm text-[#FDFCF7]/70 hover:text-white transition-colors font-['Outfit',sans-serif]">
                    Founder Library
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-medium tracking-wider text-sm text-[#FDFCF7] font-['Outfit',sans-serif]">
                Company
              </h4>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/blog" className="font-light text-sm text-[#FDFCF7]/70 hover:text-white transition-colors font-['Outfit',sans-serif]">
                    E-Cell Library & Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="font-light text-sm text-[#FDFCF7]/70 hover:text-white transition-colors font-['Outfit',sans-serif]">
                    Contact Team
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="font-light text-sm text-[#FDFCF7]/70 hover:text-white transition-colors font-['Outfit',sans-serif]">
                    Team & Mentors
                  </Link>
                </li>
                <li>
                  <Link href="/admin" className="font-light text-sm text-[#FDFCF7]/70 hover:text-white transition-colors font-['Outfit',sans-serif]">
                    Admin Portal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Socials & Copyright */}
        <div className="mt-12 border-t border-zinc-800/80 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-['Outfit',sans-serif] font-light text-xs text-zinc-400">
            © 2026 E-Cell · Built with Y Combinator design language.
          </p>
          <div className="flex items-center space-x-6 text-zinc-400">
            <a
              href="https://twitter.com/ycombinator"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              <span className="sr-only">Twitter / X</span>
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/school/y-combinator/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/c/ycombinator"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              <span className="sr-only">YouTube</span>
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
