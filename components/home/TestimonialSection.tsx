'use client';

import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';

interface FacultyMember {
  name?: string;
  designation?: string;
}

export default function TestimonialSection({ faculty }: { faculty?: FacultyMember }) {
  return (
    <section className="py-20 sm:py-28 bg-white border-b-2 border-[#C0CCFF]">
      <div className="max-w-[1272px] mx-auto px-4 sm:px-6">
        <SectionHeader
          title="What our mentors & student founders say"
          italicTitle="about us"
          subtitle="Hear from our faculty advisors, industry mentors, and student innovators who have built and launched with UIET E-Cell."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Faculty Advisor */}
          <div className="neo-card p-7 sm:p-8 flex flex-col justify-between gap-6 bg-[#F4F6FF] border-2 border-[#0047FF] shadow-[6px_6px_0px_#0A0E1A]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 bg-white border-2 border-[#0047FF] shadow-[2px_2px_0px_#CBFF2E]">
                <img src="/assets/gallery/page_10.jpg" alt="Faculty Advisor" className="w-full h-full object-cover object-center" />
              </div>
              <div>
                <div className="font-sans font-black text-base text-[#0A0E1A]">
                  {faculty?.name || 'Dr. Rajesh Kumar'}
                </div>
                <div className="text-xs font-bold text-[#475569]">
                  {faculty?.designation || 'Faculty Advisor, UIET E-Cell'}
                </div>
              </div>
            </div>

            <p className="text-base sm:text-lg font-medium leading-[1.6] text-[#0A0E1A] flex-1">
              &ldquo;UIET E-Cell provides a vital platform for students to learn real-world execution, collaborate across departments, and cultivate genuine founder culture on campus.&rdquo;
            </p>

            <div className="pt-4 border-t-2 border-[#C0CCFF] text-xs font-bold text-[#475569] uppercase tracking-wider">
              Faculty Endorsement
            </div>
          </div>

          {/* Card 2: Campus Impact Metric Card */}
          <div className="neo-card p-7 sm:p-8 flex flex-col justify-between gap-6 bg-[#CBFF2E] border-2 border-[#0A0E1A] shadow-[6px_6px_0px_#0047FF] relative overflow-hidden">
            <div className="relative z-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#0A0E1A] bg-white border border-[#0A0E1A] px-3 py-1 rounded-full mb-3 shadow-[1.5px_1.5px_0px_#0047FF]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0047FF] animate-pulse" />
                CAMPUS IMPACT
              </span>
              <div className="font-sans font-black text-[clamp(60px,7vw,88px)] leading-none text-[#0A0E1A] mb-3 tracking-tight">
                100%
              </div>
              <h3 className="font-sans font-black text-xl text-[#0A0E1A] mb-2">
                Free for every MDU student
              </h3>
            </div>

            <p className="text-sm font-semibold leading-[1.6] text-[#0A0E1A]/90 relative z-1">
              Zero joining fees, zero equity taken. We exist purely to empower student builders to prototype, pitch, and create viable companies.
            </p>

            <div className="pt-4 border-t-2 border-[#0A0E1A]/20 flex items-center justify-between text-xs font-black text-[#0A0E1A] uppercase tracking-wider relative z-1">
              <span>Zero Gatekeeping</span>
              <span className="text-sm">✦</span>
            </div>
          </div>

          {/* Card 3: Student Winner */}
          <div className="neo-card p-7 sm:p-8 flex flex-col justify-between gap-6 bg-[#F4F6FF] border-2 border-[#0047FF] shadow-[6px_6px_0px_#0A0E1A]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 bg-white border-2 border-[#0047FF] shadow-[2px_2px_0px_#CBFF2E]">
                <img src="/assets/gallery/page_12.jpg" alt="Student Founder" className="w-full h-full object-cover object-center" />
              </div>
              <div>
                <div className="font-sans font-black text-base text-[#0A0E1A]">
                  Eureka Pitch Winner
                </div>
                <div className="text-xs font-bold text-[#475569]">
                  Student Founder · Batch 2025
                </div>
              </div>
            </div>

            <p className="text-base sm:text-lg font-medium leading-[1.6] text-[#0A0E1A] flex-1">
              &ldquo;Participating in the pitching competition gave our team the seed funding, critique, and validation to take our prototype to national state hackathons.&rdquo;
            </p>

            <div className="pt-4 border-t-2 border-[#C0CCFF] text-xs font-bold text-[#475569] uppercase tracking-wider">
              Alumni Success
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
