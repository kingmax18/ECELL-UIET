'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { YC_COMPANIES, YC_LOGOS, BeforeVsNowCompany } from '@/data/ycHomepageData';

export default function HeroBeforeVsNow() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isValuationSelected, setIsValuationSelected] = useState<boolean>(false);
  const [mobileStates, setMobileStates] = useState<Record<number, 'young' | 'now'>>({});
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Cycle automatically if user is not hovering
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev >= YC_COMPANIES.length - 1) {
          setIsValuationSelected(true);
          return 0;
        } else {
          setIsValuationSelected(false);
          return prev + 1;
        }
      });
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const activeCompany = YC_COMPANIES[activeIndex] || YC_COMPANIES[0];

  const handleSelectCompany = (idx: number) => {
    setIsValuationSelected(false);
    setActiveIndex(idx);
    setIsPaused(true);
  };

  const handleSelectValuation = () => {
    setIsValuationSelected(true);
    setIsPaused(true);
  };

  const toggleMobileCardState = (idx: number) => {
    setMobileStates((prev) => ({
      ...prev,
      [idx]: prev[idx] === 'now' ? 'young' : 'now',
    }));
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#FDFCF7] dark:bg-[#0B0C0E] pt-8 md:pt-16 pb-12 md:pb-24 transition-colors">
      {/* Title & Footnote Quote */}
      <div className="mx-auto max-w-[1200px] px-4 text-center mb-10 md:mb-16">
        <h1 className="m-0 font-['Source_Serif_4',serif] text-[clamp(2.4rem,5.5vw,5.2rem)] font-normal leading-[1.1] text-[#16140f] dark:text-zinc-100 tracking-tight">
          <span>UIET E-Cell turns students</span>
          <br />
          <span className="align-baseline">into </span>
          <span className="relative italic font-serif">
            formidable founders
            <sup className="ml-1 align-super text-[clamp(0.875rem,2vw,1.15rem)] font-normal not-italic text-[#16140f] dark:text-zinc-400">
              [1]
            </sup>
          </span>
        </h1>

        <div className="max-w-[460px] mx-auto mt-6 text-center">
          <p className="m-0 mb-1 text-left font-['Source_Serif_4',serif] text-[15px] md:text-[17px] font-normal italic leading-[1.6] text-[#16140f]/90 dark:text-zinc-300">
            <span className="font-normal not-italic mr-1 text-[#FF6600]">[1]</span>
            “A formidable student builder is one who seems like they’ll bring their venture to life, regardless of whatever obstacles are in the way.”
          </p>
          <cite className="block pr-2 text-right font-['Source_Serif_4',serif] text-sm font-normal text-[#16140f]/75 dark:text-zinc-400">
            — Dr. Rajesh Kumar & Paul Graham
          </cite>
        </div>
      </div>

      {/* ========================================================= */}
      {/* DESKTOP 3-COLUMN INTERACTIVE SHOWCASE (>= 1024px)        */}
      {/* ========================================================= */}
      <div
        className="hidden lg:block relative max-w-[1400px] mx-auto px-6 xl:px-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="grid grid-cols-[1fr_minmax(280px,360px)_1fr] items-center gap-8 xl:gap-14 min-h-[580px]">
          {/* LEFT COLUMN: Day 1 on Campus (or Left Logos Grid) */}
          <div className="flex flex-col items-center justify-center">
            {isValuationSelected ? (
              <div className="w-full max-w-[420px] aspect-square rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#13151A] p-6 shadow-sm flex flex-col justify-center">
                <span className="text-xs uppercase font-['Outfit',sans-serif] tracking-widest text-[#FF6600] font-semibold mb-4 text-center block">
                  UIET & State Ecosystem
                </span>
                <div className="grid grid-cols-4 gap-4 items-center">
                  {YC_LOGOS.slice(0, 12).map((item) => (
                    <div key={item.name} className="h-12 flex items-center justify-center p-1" title={item.name}>
                      <img
                        src={item.logo}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="max-h-8 max-w-full object-contain grayscale dark:invert opacity-80 hover:opacity-100 hover:grayscale-0 transition-all"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="w-full max-w-[380px] flex flex-col items-center">
                <div className="mb-2 text-center font-['Source_Serif_4',serif] text-xl font-normal italic text-[#16140f] dark:text-zinc-300">
                  Day 1 on Campus
                </div>
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
                  <img
                    key={`young-${activeCompany.key}`}
                    src={activeCompany.images[0]}
                    alt={`${activeCompany.name} Day 1`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3.5 text-center font-['Outfit',sans-serif] font-light text-sm leading-[1.5] text-[#16140f]/85 dark:text-zinc-300 min-h-[44px]">
                  {activeCompany.descriptions.young}
                </p>
              </div>
            )}
          </div>

          {/* CENTER COLUMN: Vertical Company List with Hover Trigger */}
          <div className="flex flex-col items-center text-center py-4">
            <div className="flex flex-col gap-1 w-full max-h-[500px] overflow-y-auto scrollbar-none py-2">
              {YC_COMPANIES.map((company, idx) => {
                const isCurrent = !isValuationSelected && activeIndex === idx;
                return (
                  <button
                    key={company.key}
                    onClick={() => handleSelectCompany(idx)}
                    onMouseEnter={() => handleSelectCompany(idx)}
                    className={`cursor-pointer border-0 bg-transparent py-1.5 font-['Source_Serif_4',serif] text-[2rem] xl:text-[2.6rem] leading-tight tracking-tight transition-all duration-300 ${
                    isCurrent
                        ? 'font-normal text-[#16140f] dark:text-white scale-105 opacity-100'
                        : 'font-normal text-[#8a8575] dark:text-zinc-500 opacity-25 hover:opacity-75'
                    }`}
                  >
                    <span>{company.name}</span>
                  </button>
                );
              })}

              {/* Combined Impact Stat Button */}
              <button
                onClick={handleSelectValuation}
                onMouseEnter={handleSelectValuation}
                className={`cursor-pointer border-0 bg-transparent mt-6 py-2 transition-all duration-300 ${
                  isValuationSelected
                    ? 'scale-105 opacity-100 text-[#16140f] dark:text-white'
                    : 'text-[#8a8575] dark:text-zinc-500 opacity-30 hover:opacity-85'
                }`}
              >
                <span className="block font-['Source_Serif_4',serif] text-[2.2rem] xl:text-[2.8rem] leading-none">
                  ₹10 Lakhs+
                </span>
                <span className="block font-['Source_Serif_4',serif] text-sm xl:text-base italic tracking-normal mt-1 text-[#FF6600]">
                  in student grants & impact
                </span>
              </button>
            </div>

            <div className="mt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 font-['Source_Serif_4',serif] text-[17px] font-normal italic text-[#16140F] dark:text-zinc-200 underline underline-offset-4 decoration-[#16140f]/20 hover:decoration-[#FF6600] transition-colors"
              >
                <span>Learn about our model</span>
                <span className="text-[#FF6600] text-sm">›</span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Now / Scaled (or Right Logos Grid) */}
          <div className="flex flex-col items-center justify-center">
            {isValuationSelected ? (
              <div className="w-full max-w-[420px] aspect-square rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#13151A] p-6 shadow-sm flex flex-col justify-center">
                <span className="text-xs uppercase font-['Outfit',sans-serif] tracking-widest text-[#FF6600] font-semibold mb-4 text-center block">
                  Campus-Incubated Ventures
                </span>
                <div className="grid grid-cols-4 gap-4 items-center">
                  {YC_LOGOS.slice(12, 24).map((item) => (
                    <div key={item.name} className="h-12 flex items-center justify-center p-1" title={item.name}>
                      <img
                        src={item.logo}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="max-h-8 max-w-full object-contain grayscale dark:invert opacity-80 hover:opacity-100 hover:grayscale-0 transition-all"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="w-full max-w-[380px] flex flex-col items-center">
                <div className="mb-2 text-center font-['Source_Serif_4',serif] text-xl font-normal italic text-[#16140f] dark:text-zinc-300">
                  Now / Scaled
                </div>
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
                  <img
                    key={`now-${activeCompany.key}`}
                    src={activeCompany.images[1]}
                    alt={`${activeCompany.name} now`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3.5 text-center font-['Outfit',sans-serif] font-light text-sm leading-[1.5] text-[#16140f]/85 dark:text-zinc-300 min-h-[44px]">
                  {activeCompany.descriptions.now}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MOBILE SNAP CAROUSEL (< 1024px)                          */}
      {/* ========================================================= */}
      <div className="block lg:hidden w-full">
        <div className="scrollbar-none flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 [-webkit-overflow-scrolling:touch]">
          {YC_COMPANIES.map((company, idx) => {
            const isNow = mobileStates[idx] === 'now';
            return (
              <div
                key={company.key}
                onClick={() => toggleMobileCardState(idx)}
                className="relative aspect-[4/5] w-[85vw] max-w-[340px] shrink-0 snap-center overflow-hidden rounded-2xl shadow-md border border-zinc-200 dark:border-zinc-800 cursor-pointer"
              >
                {/* Background Image (smooth crossfade) */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                  style={{
                    backgroundImage: `url(${isNow ? company.images[1] : company.images[0]})`,
                  }}
                />

                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Card Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-10">
                  <span className="font-['Outfit',sans-serif] text-2xl font-bold tracking-tight text-white mb-1">
                    {company.name}
                  </span>

                  <p className="m-0 font-['Outfit',sans-serif] font-light text-sm leading-[1.4] text-white/95 min-h-[42px]">
                    {isNow ? company.descriptions.now : company.descriptions.young}
                  </p>

                  {/* Day 1 / Now interactive toggle bar */}
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-white/80 tracking-wider">
                      Day 1
                    </span>
                    <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-[#FF6600] transition-all duration-300 ${
                          !isNow ? 'w-full' : 'w-0'
                        }`}
                      />
                    </div>
                    <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-white transition-all duration-300 ${
                          isNow ? 'w-full' : 'w-0'
                        }`}
                      />
                    </div>
                    <span className="text-[11px] font-semibold text-white/80 tracking-wider">
                      Now
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* End Stat Card in Mobile Carousel */}
          <div className="relative aspect-[4/5] w-[85vw] max-w-[340px] shrink-0 snap-center overflow-hidden rounded-2xl bg-black text-white p-6 flex flex-col justify-between border border-zinc-800">
            <div>
              <span className="text-xs uppercase font-['Outfit',sans-serif] tracking-widest text-[#FF6600] font-semibold">
                Ecosystem Impact
              </span>
              <h3 className="font-['Source_Serif_4',serif] text-4xl font-normal mt-2 leading-tight">
                600+ Students
              </h3>
              <p className="text-sm text-zinc-400 mt-2 font-['Outfit',sans-serif]">
                Over ₹10 Lakhs in non-dilutive grants, prototyping kits, and venture mentorship across MDU Rohtak.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full bg-[#FF6600] text-white px-5 py-2.5 font-['Source_Serif_4',serif] text-sm italic font-normal"
            >
              Explore our model ›
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
