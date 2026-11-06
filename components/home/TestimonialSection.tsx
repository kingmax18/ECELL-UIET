'use client';

import React from 'react';

interface FacultyMember {
  name?: string;
  designation?: string;
}

export default function TestimonialSection({ faculty }: { faculty?: FacultyMember }) {
  return (
    <section className="py-[clamp(56px,7vw,110px)] px-5 sm:px-[5vw]">
      <div className="max-w-[1272px] mx-auto">
        <h2 className="d rv text-[clamp(32px,6vw,72px)] mb-8 sm:mb-10 text-[var(--ink)]">
          What mentors &amp; founders say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* Card 1: Faculty Advisor */}
          <div className="reveal bg-[var(--surface)] border border-[var(--line)] rounded-[18px] p-6 sm:p-8 min-h-auto sm:min-h-[360px] flex flex-col justify-between gap-5 sm:gap-6 transition-all duration-200 hover:-translate-y-1">
            <p className="font-['Space_Grotesk'] text-[16px] sm:text-[18px] font-medium leading-[1.6] text-[var(--ink)] flex-1">
              &ldquo;UIET E-Cell provides a vital platform for students to learn real-world execution,
              collaborate across engineering and management disciplines, and cultivate innovation on campus.&rdquo;
            </p>
            <div className="border-t border-[var(--line)] pt-4">
              <div className="font-['Space_Grotesk'] font-bold text-base text-[var(--ink)]">
                {faculty?.name || 'Er. Anil Sangwan'}
              </div>
              <div className="text-sm text-[var(--mute)]">
                {faculty?.designation || 'Faculty Advisor, UIET E-Cell'}
              </div>
            </div>
          </div>

          {/* Card 2: Signature Orange Metric Card */}
          <div className="reveal bg-[var(--orange)] rounded-[18px] p-6 sm:p-8 min-h-auto sm:min-h-[360px] flex flex-col justify-between gap-5 sm:gap-6 text-white transition-transform duration-200 hover:-translate-y-1 shadow-[0_16px_40px_rgba(255,107,0,0.2)]">
            <div className="d text-[clamp(56px,7.5vw,88px)] leading-none text-white">
              100%
            </div>
            <p className="font-['Space_Grotesk'] text-[16px] sm:text-[18px] font-medium leading-[1.6] text-white">
              Student-led campus ecosystem offering free access to workshops, mentorship, and pitch showcases for all MDU innovators.
            </p>
          </div>

          {/* Card 3: Student Winner Dark Card */}
          <div className="reveal bg-[#0A0E1A] rounded-[18px] p-6 sm:p-8 min-h-auto sm:min-h-[360px] flex flex-col justify-between gap-5 sm:gap-6 text-[#F3F1EA] transition-transform duration-200 hover:-translate-y-1 shadow-[0_16px_40px_rgba(10,14,26,0.18)]">
            <p className="font-['Space_Grotesk'] text-[16px] sm:text-[18px] font-medium leading-[1.6] text-[#F3F1EA] flex-1">
              &ldquo;Participating in Eureka Pitching gave our team the initial validation, mentorship, and confidence to take our prototype to state and national entrepreneurship forums.&rdquo;
            </p>
            <div className="border-t border-white/15 pt-4">
              <div className="font-['Space_Grotesk'] font-bold text-base text-white">
                Student Innovator
              </div>
              <div className="text-sm text-zinc-400">
                Eureka Pitching Finalist
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
