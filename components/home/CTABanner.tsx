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
    <section className="end" id="join">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="d rv text-[clamp(40px,9vw,130px)] leading-[0.92] text-[#F3F1EA] mb-6">
          Let’s start<br />from <em>nothin’</em>
        </h2>

        <p className="font-['Space_Grotesk'] text-[clamp(16px,2vw,20px)] text-[#9aa0b8] max-w-[580px] mx-auto mb-10">
          Open to every student across UIET and MDU. Bring your boldest ideas, build real prototypes, and lead on campus.
        </p>

        {submitted ? (
          <div className="rv" style={{ maxWidth: '480px', margin: '30px auto 0', padding: '30px', background: 'rgba(255,255,255,0.08)', borderRadius: '24px', border: '1px solid var(--orange)' }}>
            <div style={{ color: 'var(--orange)', fontSize: '32px', marginBottom: '12px' }}>✓</div>
            <h3 className="s" style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 8px', color: '#fff' }}>
              Welcome aboard!
            </h3>
            <p style={{ color: 'var(--mute)', fontSize: '15px', margin: 0 }}>
              Your application has been received. Our team will get in touch with you shortly.
            </p>
            <button
              type="button"
              className="btn o"
              onClick={() => setSubmitted(false)}
              style={{ marginTop: '20px', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}
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
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Branch / Department (e.g. CSE, ECE)"
                value={formData.branch}
                onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
              />
            </div>
            <div>
              <select
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
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

            <button type="submit" className="btn" disabled={submitting}>
              {submitting ? 'Submitting…' : 'Join E-Cell'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
