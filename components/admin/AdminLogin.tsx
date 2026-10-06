'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useAdminAuth } from '@/context/AdminAuthProvider';
import { useToast } from '@/context/ToastProvider';
import { adminInput, adminLabel } from './ui';

export default function AdminLogin() {
  const { login } = useAdminAuth();
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const res = await login(email, password);
    setLoading(false);

    if (res.success) {
      showToast('Signed into Admin Board', 'success');
    } else {
      setError(res.error || 'Invalid credentials.');
      showToast('Login failed', 'error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0047FF22,transparent_70%)] pointer-events-none" />
      <div className="w-full max-w-md bg-[#F4F6FF] border-2 border-[#0047FF]/50 rounded-panel p-8 shadow-[0_16px_50px_rgba(7,10,38,0.8)] relative z-1">
        <div className="flex flex-col items-center text-center mb-8">
          <Image src="/logo-full.png" alt="UIET E-Cell Logo" width={220} height={90} className="object-contain mb-2 brightness-110" unoptimized priority />
          <p className="text-sm text-[#3A4A7A] mt-1 font-medium">Protected Management Board &amp; Application CMS</p>
        </div>

        {error && (
          <div className="bg-[#fde7eb]/10 border border-[#f4889a]/50 text-[#ff8ba7] text-sm rounded-card px-4 py-3 mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className={adminLabel} htmlFor="admin-email">
              Admin Email
            </label>
            <input
              type="email"
              id="admin-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@ecell.in"
              className={adminInput}
              required
            />
          </div>

          <div>
            <label className={adminLabel} htmlFor="admin-password">
              Password
            </label>
            <input
              type="password"
              id="admin-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••"
              className={adminInput}
              required
            />
          </div>

          <Button type="submit" variant="primary" size="lg" arrow disabled={loading} className="justify-center">
            {loading ? 'Signing in…' : 'Sign In to Dashboard'}
          </Button>
        </form>

        <p className="text-xs text-[#475569] text-center mt-6">
          Access restricted to the E-Cell executive board · Unauthorized access is logged.
        </p>
      </div>
    </div>
  );
}
