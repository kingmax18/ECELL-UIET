'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TopBanner from '@/components/layout/TopBanner';

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    founderName: '',
    email: '',
    phone: '',
    companyName: '',
    website: '',
    batchChoice: 'Summer 2026',
    stage: 'Idea stage',
    description: '',
    whyYou: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <TopBanner />
      <Navbar />
      <main className="min-h-screen bg-[#FDFCF7] dark:bg-[#0B0C0E] text-[#16140f] dark:text-zinc-100 py-12 md:py-20 transition-colors">
        <div className="max-w-[840px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block font-['Outfit',sans-serif] text-xs uppercase tracking-widest font-semibold text-[#FF6600] mb-3">
              Cohort Admissions
            </span>
            <h1 className="font-['Source_Serif_4',serif] text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#16140f] dark:text-white leading-[1.15]">
              Apply to UIET E-Cell
            </h1>
            <p className="mt-4 font-['Outfit',sans-serif] font-light text-base sm:text-lg text-[#16140f]/80 dark:text-zinc-300 max-w-xl mx-auto leading-relaxed">
              We back builders at the earliest stage. No revenue or finished product needed—just ambition and relentless drive.
            </p>
          </div>

          {/* Key Batch Stats / Deadlines Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#13151A] shadow-xs">
              <span className="text-xs uppercase tracking-wider text-zinc-500 font-['Outfit',sans-serif]">Upcoming Batch</span>
              <p className="text-xl font-semibold mt-1 font-['Outfit',sans-serif] text-[#16140f] dark:text-white">Summer 2026</p>
              <p className="text-xs text-zinc-500 mt-1">June – August 2026</p>
            </div>
            <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#13151A] shadow-xs">
              <span className="text-xs uppercase tracking-wider text-zinc-500 font-['Outfit',sans-serif]">Deadline</span>
              <p className="text-xl font-semibold mt-1 font-['Outfit',sans-serif] text-[#FF6600]">April 30, 2026</p>
              <p className="text-xs text-zinc-500 mt-1">8:00 PM IST</p>
            </div>
            <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#13151A] shadow-xs">
              <span className="text-xs uppercase tracking-wider text-zinc-500 font-['Outfit',sans-serif]">Seed Support</span>
              <p className="text-xl font-semibold mt-1 font-['Outfit',sans-serif] text-[#16140f] dark:text-white">₹10 Lakhs Grants</p>
              <p className="text-xs text-zinc-500 mt-1">+ Mentorship & Demo Day</p>
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-white dark:bg-[#13151A] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#FF6600]/10 text-[#FF6600] rounded-full flex items-center justify-center text-3xl mx-auto mb-4 font-bold">
                  ✓
                </div>
                <h3 className="font-['Source_Serif_4',serif] text-3xl font-normal text-[#16140f] dark:text-white">
                  Application Received!
                </h3>
                <p className="mt-3 font-['Outfit',sans-serif] text-base text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
                  Thank you for applying, {formData.founderName}. Our admissions committee reviews applications on a rolling basis. You will hear back within 10 days.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                  <Link
                    href="/"
                    className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#16140f] text-white dark:bg-white dark:text-black font-['Outfit',sans-serif] text-sm font-medium hover:opacity-85 transition-opacity"
                  >
                    Back to Home
                  </Link>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center px-6 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 font-['Outfit',sans-serif] text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    Submit Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <h2 className="font-['Source_Serif_4',serif] text-2xl font-normal text-[#16140f] dark:text-white mb-2">
                    Founder Information
                  </h2>
                  <p className="font-['Outfit',sans-serif] text-xs text-zinc-500 mb-6">
                    Tell us about yourself and who is leading the project.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 font-['Outfit',sans-serif] mb-1.5">
                        Founder Name *
                      </label>
                      <input
                        type="text"
                        name="founderName"
                        required
                        value={formData.founderName}
                        onChange={handleChange}
                        placeholder="e.g. Alex Sharma"
                        className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-[#FDFCF7] dark:bg-[#0B0C0E] text-[#16140f] dark:text-white focus:outline-none focus:border-[#FF6600] font-['Outfit',sans-serif] text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 font-['Outfit',sans-serif] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="founder@example.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-[#FDFCF7] dark:bg-[#0B0C0E] text-[#16140f] dark:text-white focus:outline-none focus:border-[#FF6600] font-['Outfit',sans-serif] text-sm transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <h2 className="font-['Source_Serif_4',serif] text-2xl font-normal text-[#16140f] dark:text-white mb-2">
                    Company / Idea
                  </h2>
                  <p className="font-['Outfit',sans-serif] text-xs text-zinc-500 mb-6">
                    What are you building? Keep it direct and specific.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 font-['Outfit',sans-serif] mb-1.5">
                        Company / Project Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. HyperScale AI"
                        className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-[#FDFCF7] dark:bg-[#0B0C0E] text-[#16140f] dark:text-white focus:outline-none focus:border-[#FF6600] font-['Outfit',sans-serif] text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 font-['Outfit',sans-serif] mb-1.5">
                        Current Stage
                      </label>
                      <select
                        name="stage"
                        value={formData.stage}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-[#FDFCF7] dark:bg-[#0B0C0E] text-[#16140f] dark:text-white focus:outline-none focus:border-[#FF6600] font-['Outfit',sans-serif] text-sm transition-colors"
                      >
                        <option>Idea stage / Concept</option>
                        <option>Prototype / MVP in development</option>
                        <option>Live product with pilot users</option>
                        <option>Generating revenue</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 font-['Outfit',sans-serif] mb-1.5">
                      Website / GitHub / Demo Link (Optional)
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yourstartup.com or github repo"
                      className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-[#FDFCF7] dark:bg-[#0B0C0E] text-[#16140f] dark:text-white focus:outline-none focus:border-[#FF6600] font-['Outfit',sans-serif] text-sm transition-colors"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 font-['Outfit',sans-serif] mb-1.5">
                      What does your company do? *
                    </label>
                    <textarea
                      name="description"
                      required
                      rows={3}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="In 1-2 clear sentences: What problem are you solving and how? (Avoid jargon)"
                      className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-[#FDFCF7] dark:bg-[#0B0C0E] text-[#16140f] dark:text-white focus:outline-none focus:border-[#FF6600] font-['Outfit',sans-serif] text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 font-['Outfit',sans-serif] mb-1.5">
                      Why are you the right team to build this? *
                    </label>
                    <textarea
                      name="whyYou"
                      required
                      rows={3}
                      value={formData.whyYou}
                      onChange={handleChange}
                      placeholder="Share a unique insight, unfair advantage, or prior obsession with this problem."
                      className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-[#FDFCF7] dark:bg-[#0B0C0E] text-[#16140f] dark:text-white focus:outline-none focus:border-[#FF6600] font-['Outfit',sans-serif] text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-zinc-500 font-['Outfit',sans-serif]">
                    We treat all application materials as strictly confidential.
                  </p>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-['Source_Serif_4',serif] text-base italic font-normal hover:opacity-85 active:scale-98 transition-all shadow-md cursor-pointer"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
