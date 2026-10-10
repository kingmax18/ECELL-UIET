'use client';

import React from 'react';
import Link from 'next/link';
import {
  KNOWLEDGE_THUMBNAILS,
  KNOWLEDGE_MAIN_FEATURE,
  STARTUP_NEWS,
  PG_ESSAYS,
} from '@/data/ycHomepageData';

export default function KnowledgeNewsSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-[100px] bg-[#FDFCF7] dark:bg-[#0B0C0E] border-t border-zinc-200/60 dark:border-zinc-800/60 transition-colors">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 xl:px-12">
        <h2 className="mx-auto mb-10 md:mb-[60px] text-center font-['Source_Serif_4',serif] text-3xl sm:text-4xl md:text-5xl font-normal italic leading-[1.2] text-[#16140f] dark:text-zinc-100">
          Knowledge & News
        </h2>

        {/* 3-Column Asymmetric Layout on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_300px] xl:grid-cols-[300px_1fr_320px] gap-8 xl:gap-12 items-start">
          {/* ========================================================= */}
          {/* COLUMN 1 (LEFT): 3 Video / Workshop Thumbnails            */}
          {/* ========================================================= */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {KNOWLEDGE_THUMBNAILS.map((item, idx) => (
              <article key={idx} className="group flex flex-col gap-2">
                <Link
                  href={item.href}
                  className="block text-inherit no-underline"
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/10 dark:bg-zinc-800 border border-zinc-200/50 dark:border-zinc-800">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Read overlay */}
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold uppercase tracking-wider font-['Outfit',sans-serif]">
                      {item.linkText}
                    </div>
                  </div>
                  <h3 className="mt-2.5 font-['Outfit',sans-serif] font-normal text-sm sm:text-base leading-snug text-[#16140f] dark:text-zinc-200 group-hover:text-[#FF6600] transition-colors">
                    {item.title}
                  </h3>
                </Link>
              </article>
            ))}
          </div>

          {/* ========================================================= */}
          {/* COLUMN 2 (CENTER): Large Featured Showcase / Guide        */}
          {/* ========================================================= */}
          <div className="flex flex-col order-1 lg:order-2">
            <article className="group">
              <Link
                href={KNOWLEDGE_MAIN_FEATURE.href}
                className="block text-inherit no-underline"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black/10 dark:bg-zinc-800 border border-zinc-200/50 dark:border-zinc-800 shadow-md">
                  <img
                    src={KNOWLEDGE_MAIN_FEATURE.image}
                    alt={KNOWLEDGE_MAIN_FEATURE.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Big Read Feature Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="rounded-full bg-white/90 dark:bg-[#13151A]/90 text-black dark:text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider shadow-lg group-hover:scale-105 transition-transform font-['Outfit',sans-serif]">
                      Featured Story ›
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="inline-block bg-black dark:bg-white text-white dark:text-black px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider font-['Outfit',sans-serif] mb-2.5">
                    {KNOWLEDGE_MAIN_FEATURE.tag}
                  </span>
                  <h3 className="font-['Source_Serif_4',serif] text-xl sm:text-2xl font-normal leading-tight text-[#16140f] dark:text-zinc-100 group-hover:text-[#FF6600] transition-colors">
                    {KNOWLEDGE_MAIN_FEATURE.title}
                  </h3>
                  <p className="mt-2 font-['Outfit',sans-serif] font-light text-sm sm:text-base leading-relaxed text-[#16140f]/80 dark:text-zinc-400">
                    {KNOWLEDGE_MAIN_FEATURE.description}
                  </p>
                </div>
              </Link>
            </article>
          </div>

          {/* ========================================================= */}
          {/* COLUMN 3 (RIGHT): News & Founder Essays                   */}
          {/* ========================================================= */}
          <div className="flex flex-col gap-8 order-3">
            {/* Campus & Startup News List */}
            <div>
              <h4 className="mb-4 font-['Source_Serif_4',serif] text-lg font-semibold italic text-[#16140f] dark:text-zinc-100 border-b border-zinc-200/60 dark:border-zinc-800/60 pb-2">
                Campus & Startup News
              </h4>
              <div className="flex flex-col gap-3">
                {STARTUP_NEWS.map((news, idx) => {
                  const isExternal = news.href.startsWith('http');
                  return isExternal ? (
                    <a
                      key={idx}
                      href={news.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block text-inherit no-underline transition-opacity hover:opacity-80"
                    >
                      <p className="m-0 font-['Outfit',sans-serif] font-light text-sm leading-[1.4] text-[#16140f] dark:text-zinc-300 group-hover:text-[#FF6600] transition-colors">
                        {news.title}
                        <span className="ml-1.5 text-[#FF6600] font-semibold inline-block transition-transform group-hover:translate-x-0.5">
                          ›
                        </span>
                      </p>
                    </a>
                  ) : (
                    <Link
                      key={idx}
                      href={news.href}
                      className="group block text-inherit no-underline transition-opacity hover:opacity-80"
                    >
                      <p className="m-0 font-['Outfit',sans-serif] font-light text-sm leading-[1.4] text-[#16140f] dark:text-zinc-300 group-hover:text-[#FF6600] transition-colors">
                        {news.title}
                        <span className="ml-1.5 text-[#FF6600] font-semibold inline-block transition-transform group-hover:translate-x-0.5">
                          ›
                        </span>
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Founder Library & Essays List */}
            <div>
              <h4 className="mb-4 font-['Source_Serif_4',serif] text-lg font-semibold italic text-[#16140f] dark:text-zinc-100 border-b border-zinc-200/60 dark:border-zinc-800/60 pb-2">
                Founder Library & Essays
              </h4>
              <div className="flex flex-col gap-3">
                {PG_ESSAYS.map((essay, idx) => {
                  const isExternal = essay.href.startsWith('http');
                  return isExternal ? (
                    <a
                      key={idx}
                      href={essay.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block text-inherit no-underline transition-opacity hover:opacity-80"
                    >
                      <p className="m-0 font-['Outfit',sans-serif] font-light text-sm leading-[1.4] text-[#16140f] dark:text-zinc-300 group-hover:text-[#FF6600] transition-colors">
                        {essay.title}
                        <span className="ml-1.5 text-[#FF6600] font-semibold inline-block transition-transform group-hover:translate-x-0.5">
                          ›
                        </span>
                      </p>
                    </a>
                  ) : (
                    <Link
                      key={idx}
                      href={essay.href}
                      className="group block text-inherit no-underline transition-opacity hover:opacity-80"
                    >
                      <p className="m-0 font-['Outfit',sans-serif] font-light text-sm leading-[1.4] text-[#16140f] dark:text-zinc-300 group-hover:text-[#FF6600] transition-colors">
                        {essay.title}
                        <span className="ml-1.5 text-[#FF6600] font-semibold inline-block transition-transform group-hover:translate-x-0.5">
                          ›
                        </span>
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
