'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TeamCard from '@/components/team/TeamCard';
import FacultySection from '@/components/team/FacultySection';
import SectionHeader from '@/components/ui/SectionHeader';
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
      <main>
        {/* Page Hero */}
        <section className="relative overflow-hidden bg-white border-b-2 border-[#C0CCFF] py-16 sm:py-24">
          <div className="relative max-w-[1272px] mx-auto px-4 sm:px-6 text-center">
            <h1 className="font-sans font-extrabold text-[clamp(36px,5.5vw,64px)] leading-[1.12] tracking-tight text-[#0A0E1A] mb-5 [text-wrap:balance]">
              The drivers behind{' '}
              <span className="marker-yellow">our ecosystem.</span>
            </h1>
            <p className="text-[clamp(16px,1.8vw,19px)] font-medium leading-[1.6] text-[#3A4A7A] max-w-[720px] mx-auto">
              Meet the student leaders, engineers, and department heads building UIET E-Cell at MDU Rohtak.
            </p>
          </div>
        </section>

        {/* Core Team by Department */}
        <section className="py-[clamp(56px,7vw,80px)]">
          <div className="max-w-[1272px] mx-auto px-6">
            <SectionHeader
              title="Active student leadership by"
              italicTitle="department"
              subtitle="Organized across 6 core functional areas to deliver campus-wide impact."
            />

            {departments.map((dept) => {
              const deptMembers = team
                .filter((m) => m.department === dept)
                .sort((a, b) => (a.order || 99) - (b.order || 99));

              if (deptMembers.length === 0) return null;

              return (
                <div key={dept} className="mb-12 last:mb-0">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="h-[7px] w-[7px] rounded-full bg-[#CBFF2E]" />
                    <h3 className="font-sans font-medium text-[clamp(19px,2.2vw,24px)] tracking-[-0.02em] text-ink">
                      {dept}
                    </h3>
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
