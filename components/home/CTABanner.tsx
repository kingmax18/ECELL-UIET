'use client';

import React, { useState } from 'react';

export default function CTABanner() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    branch: '',
    year: '1st Year',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleJoinSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMsg('Please enter your name and email address.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          branchYear: `${formData.branch || 'UIET'} (${formData.year})`,
          deptInterest: 'General Membership',
          whyJoin: 'Joined via homepage banner form',
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit application');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', branch: '', year: '1st Year' });
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="end py-16 sm:py-28 px-5 sm:px-[5vw]" id="join">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="d rv text-[clamp(34px,8vw,120px)] leading-[0.98] sm:leading-[0.92] text-[#F3F1EA] mb-5 sm:mb-6">
          Let’s start<br />from <em>nothin’</em>
        </h2>

        <p className="font-['Space_Grotesk'] text-[clamp(15px,2vw,20px)] text-[#9aa0b8] max-w-[580px] mx-auto mb-8 sm:mb-10 leading-[1.6]">
          Open to every student across UIET and MDU. Bring your boldest ideas, build real prototypes, and lead on campus.
        </p>

        {submitted ? (
          <div className="rv max-w-[480px] mx-auto my-6 p-6 sm:p-8 bg-white/10 rounded-2xl sm:rounded-3xl border border-[var(--orange)]">
            <div className="text-[var(--orange)] text-3xl mb-3">✓</div>
            <h3 className="s text-xl font-bold mb-2 text-white">
              Welcome aboard!
            </h3>
            <p className="text-[var(--mute)] text-sm m-0">
              Your application has been received. Our team will get in touch with you shortly.
            </p>
            <button
              type="button"
              className="btn o mt-5 text-white border-white/30 hover:bg-white/10 w-full sm:w-auto"
              onClick={() => setSubmitted(false)}
            >
              Submit another response
            </button>
          </div>
        ) : (
          <form className="join-form rv" onSubmit={handleJoinSubmit}>
            <div>
              <input
                type="text"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="text-base"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="text-base"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Branch / Department (e.g. CSE, ECE)"
                value={formData.branch}
                onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                className="text-base"
              />
            </div>
            <div>
              <select
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                className="text-base"
              >
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
                <option value="Postgraduate">Postgraduate</option>
              </select>
            </div>

            {errorMsg && (
              <div style={{ gridColumn: '1 / -1', color: '#FF4D4D', fontSize: '13px', textAlign: 'center' }}>
                {errorMsg}
              </div>
            )}

            <button type="submit" className="btn w-full py-4 text-sm font-bold" disabled={submitting}>
              {submitting ? 'Submitting…' : 'Join E-Cell'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
