'use client';

import React, { useState } from 'react';
import { useToast } from '@/context/ToastProvider';

interface AppSettings {
  web3formsKey?: string;
}

interface FormData {
  fullName: string;
  enrollment: string;
  email: string;
  phone: string;
  branch: string;
  year: string;
  department: string;
  linkedin: string;
  whyJoin: string;
}

const inputClass =
  'w-full bg-white dark:bg-[#0D0E12] border border-zinc-200 dark:border-zinc-700 rounded-md px-3.5 py-2.5 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 outline-none transition-colors focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]';

const labelClass = 'block text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 font-semibold mb-1.5';

export default function ApplicationForm({ settings }: { settings?: AppSettings }) {
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    enrollment: '',
    email: '',
    phone: '',
    branch: '',
    year: '',
    department: '',
    linkedin: '',
    whyJoin: '',
  });

  const [charCount, setCharCount] = useState(0);
  const MAX_CHARS = 300;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'whyJoin' && value.length > MAX_CHARS) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'whyJoin') setCharCount(value.length);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.enrollment ||
      !formData.email ||
      !formData.phone ||
      !formData.branch ||
      !formData.year ||
      !formData.department ||
      !formData.whyJoin
    ) {
      showToast('Please fill in all required fields marked with *', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const branchYear = `${formData.year}, ${formData.branch}`;
      const submittedOn = new Date().toISOString();

      // 1. Persist to API
      try {
        await fetch('/api/applications', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.fullName,
            enrollment: formData.enrollment,
            branchYear: branchYear,
            deptInterest: formData.department,
            email: formData.email,
            phone: formData.phone,
            whyJoin: formData.whyJoin,
            linkedin: formData.linkedin || null,
          }),
        });
      } catch (dbErr) {
        console.warn('[Application] API submission warning:', dbErr);
      }

      // 2. Web3Forms email forwarding
      try {
        const web3Key = settings?.web3formsKey || process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'ca0b970d-2396-4be4-96d0-f4f2697acddc';
        const web3Body = new FormData();
        web3Body.append('access_key', web3Key);
        web3Body.append('subject', `New UIET E-Cell Application: ${formData.fullName} (${formData.department})`);
        web3Body.append('name', formData.fullName);
        web3Body.append('email', formData.email);
        web3Body.append('phone', formData.phone);
        web3Body.append('enrollment', formData.enrollment);
        web3Body.append('branch_year', branchYear);
        web3Body.append('department', formData.department);
        web3Body.append('linkedin', formData.linkedin || 'N/A');
        web3Body.append('message', formData.whyJoin);

        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: web3Body,
          headers: { Accept: 'application/json' },
        });
      } catch (w3Err) {
        console.warn('[Application] Web3Forms forward warning:', w3Err);
      }

      setIsSuccess(true);
      showToast('Application submitted successfully!', 'success');
      setFormData({
        fullName: '',
        enrollment: '',
        email: '',
        phone: '',
        branch: '',
        year: '',
        department: '',
        linkedin: '',
        whyJoin: '',
      });
      setCharCount(0);
    } catch (err) {
      console.error('[Application Submission Error]:', err);
      showToast('Submission failed. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-[#14161C] border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 sm:p-10 max-w-[840px] mx-auto shadow-sm">
      {isSuccess && (
        <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 rounded-md p-5 mb-8 text-emerald-900 dark:text-emerald-100">
          <h3 className="font-sans font-bold text-base mb-1">Application Received</h3>
          <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200 leading-relaxed">
            Thank you for applying to UIET E-Cell. Applications are reviewed on a rolling basis. Our executive board will reach out via email within 5-7 business days.
          </p>
        </div>
      )}

      <div className="mb-8 pb-5 border-b border-zinc-100 dark:border-zinc-800">
        <h2 className="font-serif font-normal text-2xl text-zinc-950 dark:text-white mb-1.5">
          Founder &amp; Operator Intake Form
        </h2>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          We evaluate candidates based on drive, execution capability, and passion for building companies.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        {/* Row 1: Name & Enrollment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className={labelClass} htmlFor="fullName">
              Full Name <span className="text-[#FF6600]">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Ananya Sharma"
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="enrollment">
              Enrollment Number <span className="text-[#FF6600]">*</span>
            </label>
            <input
              type="text"
              id="enrollment"
              name="enrollment"
              value={formData.enrollment}
              onChange={handleChange}
              placeholder="e.g. 22MDU001234"
              className={inputClass}
              required
            />
          </div>
        </div>

        {/* Row 2: Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className={labelClass} htmlFor="email">
              Email Address <span className="text-[#FF6600]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="phone">
              Phone Number <span className="text-[#FF6600]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className={inputClass}
              required
            />
          </div>
        </div>

        {/* Row 3: Branch & Year */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className={labelClass} htmlFor="branch">
              Branch &amp; Course <span className="text-[#FF6600]">*</span>
            </label>
            <input
              type="text"
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              placeholder="e.g. B.Tech CSE"
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="year">
              Year of Study <span className="text-[#FF6600]">*</span>
            </label>
            <select
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className={`${inputClass} ${!formData.year ? 'text-zinc-400' : 'text-zinc-900 dark:text-white'}`}
              required
            >
              <option value="" disabled>Select Year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </div>
        </div>

        {/* Row 4: Preferred Department */}
        <div>
          <label className={labelClass} htmlFor="department">
            Functional Department <span className="text-[#FF6600]">*</span>
          </label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className={`${inputClass} ${!formData.department ? 'text-zinc-400' : 'text-zinc-900 dark:text-white'}`}
            required
          >
            <option value="" disabled>Select Department</option>
            <option value="Social Media">Social Media &amp; Brand Outreach</option>
            <option value="Design and Tech">Design &amp; Engineering (Web, UI/UX, Fullstack)</option>
            <option value="Research and Content">Research &amp; Venture Content</option>
            <option value="Event Management">Event Management &amp; Demo Day Operations</option>
            <option value="Documentation">Documentation &amp; Reporting</option>
          </select>
        </div>

        {/* Row 5: LinkedIn URL */}
        <div>
          <label className={labelClass} htmlFor="linkedin">
            LinkedIn Profile or GitHub URL (Optional)
          </label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/your-profile"
            className={inputClass}
          />
        </div>

        {/* Row 6: Statement of Purpose */}
        <div>
          <label className={labelClass} htmlFor="whyJoin">
            Why do you want to build with UIET E-Cell? <span className="text-[#FF6600]">*</span>
          </label>
          <textarea
            id="whyJoin"
            name="whyJoin"
            value={formData.whyJoin}
            onChange={handleChange}
            placeholder="Tell us what project, idea, or domain excites you and what technical or operational skills you bring (max 300 characters)..."
            rows={4}
            className={`${inputClass} resize-none`}
            required
          />
          <div className="text-right text-[11px] font-mono text-zinc-400 mt-1">
            {charCount} / {MAX_CHARS}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="yc-btn-primary w-full sm:w-auto text-sm py-2.5 px-6 font-semibold cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting Application...' : 'Submit Application →'}
          </button>
        </div>
      </form>
    </div>
  );
}
