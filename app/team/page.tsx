'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TeamCard from '@/components/team/TeamCard';
import FacultySection from '@/components/team/FacultySection';
import CTABanner from '@/components/home/CTABanner';
import { useData } from '@/context/DataProvider';
import { departments } from '@/data/team';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function TeamPage() {
  const { team, faculty } = useData();
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-[#0B0C0E] min-h-screen text-zinc-900 dark:text-zinc-100">
        {/* Page Hero - YC Editorial Style */}
        <section className="relative overflow-hidden bg-[#FAFAF8] dark:bg-[#0E1015] border-b border-zinc-200 dark:border-zinc-800 py-16 sm:py-22">
          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#FF6600] font-bold mb-2">
                PEOPLE &amp; LEADERSHIP
              </div>
              <h1 className="font-serif font-normal text-3xl sm:text-5xl text-zinc-950 dark:text-white mb-4 [text-wrap:balance]">
                The operators behind the ecosystem.
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                Meet the executive directors, department heads, and engineering builders who run cohort admissions, mentor office hours, and university venture relationships.
              </p>
            </div>
          </div>
        </section>

        {/* Core Team by Department */}
        <section className="py-16 sm:py-22">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            {departments.map((dept) => {
              const deptMembers = team
                .filter((m) => m.department === dept)
                .sort((a, b) => (a.order || 99) - (b.order || 99));

              if (deptMembers.length === 0) return null;

              return (
                <div key={dept} className="mb-16 last:mb-0">
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800 mb-8">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF6600]" />
                      <h2 className="font-serif font-normal text-2xl text-zinc-900 dark:text-white">
                        {dept}
                      </h2>
                    </div>
                    <span className="text-xs font-mono text-zinc-400">
                      {deptMembers.length} {deptMembers.length === 1 ? 'MEMBER' : 'MEMBERS'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {deptMembers.map((member) => (
                      <TeamCard key={member.id} member={member} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Faculty Advisor Section */}
        <FacultySection faculty={faculty} />

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
