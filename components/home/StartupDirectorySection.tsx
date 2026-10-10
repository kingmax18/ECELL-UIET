'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Startup {
  name: string;
  batch: string;
  category: string;
  description: string;
  status: string;
  founders: string;
  accent: string;
}

const STARTUPS: Startup[] = [
  {
    name: 'BytePulse AI',
    batch: 'Cohort S24',
    category: 'AI & DevTools',
    description: 'Autonomous synthetic data generation and fine-tuning pipelines for enterprise vision models.',
    status: 'Raised ₹45L Seed',
    founders: 'Aman Sharma & Ritik Rao (CSE 2024)',
    accent: '#FF6600',
  },
  {
    name: 'CampuzFlow',
    batch: 'Batch W24',
    category: 'SaaS & Productivity',
    description: 'Unified administrative, fee remittance, and student document workflow engine adopted by 6 universities.',
    status: '12,000+ Active Users',
    founders: 'Sneha Patel & Vikas Gill (ECE 2025)',
    accent: '#2563EB',
  },
  {
    name: 'AeroLink Drones',
    batch: 'Cohort S23',
    category: 'Hardware & Robotics',
    description: 'Autonomous crop-monitoring and thermal inspection drones built specifically for Indian agricultural belts.',
    status: '2 Utility Patents Filed',
    founders: 'Vikram Malhotra & Gaurav (ME 2023)',
    accent: '#059669',
  },
  {
    name: 'PayNest',
    batch: 'Batch W25',
    category: 'FinTech & Commerce',
    description: 'Micro-escrow and instant settlement SDK for student freelance talent and university club sponsorships.',
    status: 'Processed ₹18L Volume',
    founders: 'Harsh Vardhan (CSE 2025)',
    accent: '#7C3AED',
  },
  {
    name: 'SkillForge XR',
    batch: 'Cohort S25',
    category: 'EdTech & Career',
    description: 'WebXR simulations and spatial CAD modules for vocational engineering and mechanical lab training.',
    status: 'MDU Innovation Grant',
    founders: 'Ananya Gupta & Rohit S. (IT 2026)',
    accent: '#DB2777',
  },
  {
    name: 'EcoGrid Dynamics',
    batch: 'Batch W24',
    category: 'CleanTech & Energy',
    description: 'Smart campus energy auditing sensors reducing institutional electricity waste by 22%.',
    status: 'Campus Pilot Active',
    founders: 'Kavita Singh (EE 2024)',
    accent: '#D97706',
  },
];

const CATEGORIES = [
  'All Sectors',
  'AI & DevTools',
  'SaaS & Productivity',
  'Hardware & Robotics',
  'FinTech & Commerce',
  'EdTech & Career',
];

export default function StartupDirectorySection() {
  const [selectedCat, setSelectedCat] = useState('All Sectors');

  const filtered =
    selectedCat === 'All Sectors'
      ? STARTUPS
      : STARTUPS.filter((s) => s.category.includes(selectedCat) || selectedCat.includes(s.category));

  return (
    <section id="startups" className="py-20 sm:py-26 bg-white dark:bg-[#0B0C0E] border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#FF6600] font-bold mb-2">
              PORTFOLIO DIRECTORY
            </div>
            <h2 className="font-serif font-normal text-3xl sm:text-4xl text-zinc-900 dark:text-white mb-2">
              Startups built at UIET E-Cell.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-xl">
              Meet our cohort graduates. Companies solving hard technical and commercial problems from university labs.
            </p>
          </div>

          <Link
            href="/contact"
            className="yc-btn-secondary text-xs self-start md:self-auto"
          >
            Submit Your Startup →
          </Link>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedCat === cat
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-semibold'
                  : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Directory Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="yc-card p-6 flex flex-col justify-between group hover:border-zinc-400 dark:hover:border-zinc-600"
            >
              <div>
                {/* Monogram, Name & Batch */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-md flex items-center justify-center font-sans font-bold text-white text-base shadow-2xs shrink-0"
                      style={{ backgroundColor: item.accent }}
                    >
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-900 dark:text-white text-base group-hover:text-[#FF6600] transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono font-medium text-[#FF6600] bg-orange-50 dark:bg-orange-950/40 px-2 py-0.5 rounded border border-orange-200 dark:border-orange-900/60 shrink-0">
                    {item.batch}
                  </span>
                </div>

                {/* One-Liner Description */}
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              {/* Footer Specs: Founders & Traction */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs">
                <span className="text-zinc-500 dark:text-zinc-400 text-[11px] truncate max-w-[170px]" title={item.founders}>
                  {item.founders}
                </span>

                <span className="font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded text-[10px] font-mono border border-emerald-200 dark:border-emerald-900/60">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
