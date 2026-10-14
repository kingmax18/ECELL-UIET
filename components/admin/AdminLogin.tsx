'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { RiEyeLine, RiEyeOffLine, RiLockPasswordLine, RiMailLine, RiShieldCheckLine, RiArrowRightLine } from 'react-icons/ri';
import { useAdminAuth } from '@/context/AdminAuthProvider';
import { useToast } from '@/context/ToastProvider';

export default function AdminLogin() {
  const { login } = useAdminAuth();
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const res = await login(email, password);
    setLoading(false);

    if (res.success) {
      showToast('Signed into Admin Portal', 'success');
    } else {
      setError(res.error || 'Invalid credentials.');
      showToast('Login failed', 'error');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-[#090A0F] text-zinc-100 relative overflow-hidden selection:bg-[#FF6600]/30 selection:text-white">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#FF6600]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="w-full max-w-md bg-[#12151D]/90 backdrop-blur-xl border border-zinc-800/90 rounded-2xl p-7 sm:p-9 shadow-[0_24px_70px_rgba(0,0,0,0.6)] relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 mb-4 shadow-inner">
            <Image
              src="/logo-full.png"
              alt="UIET E-Cell Logo"
              width={160}
              height={60}
              className="object-contain brightness-110"
              unoptimized
              priority
            />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/25 text-[#FF6600] text-[11px] font-mono font-semibold tracking-wider uppercase mb-2">
            <RiShieldCheckLine size={13} />
            <span>Executive Portal</span>
          </div>

          <h1 className="text-xl font-sans font-bold text-white tracking-tight">
            Administrator Sign In
          </h1>
          <p className="text-xs text-zinc-400 mt-1 max-w-xs">
            Manage events, recruitment pipeline, roster, and editorial content.
          </p>
        </div>

        {error && (
          <div className="bg-rose-950/40 border border-rose-800/60 text-rose-300 text-xs rounded-xl px-4 py-3 mb-6 flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1.5" htmlFor="admin-email">
              Admin Email
            </label>
            <div className="relative">
              <RiMailLine size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
              <input
                type="email"
                id="admin-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ecelluietfs@gmail.com"
                className="w-full bg-[#181C26] border border-zinc-700/80 rounded-xl pl-10 pr-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-hidden focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600]/20 transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1.5" htmlFor="admin-password">
              Password
            </label>
            <div className="relative">
              <RiLockPasswordLine size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="admin-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-[#181C26] border border-zinc-700/80 rounded-xl pl-10 pr-11 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-hidden focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600]/20 transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-200 p-1 rounded-md transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <RiEyeOffLine size={16} /> : <RiEyeLine size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FF6600] hover:bg-[#ff771a] active:bg-[#e65c00] text-white font-sans font-bold text-sm shadow-[0_8px_20px_-4px_rgba(255,102,0,0.4)] transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Authenticating…
              </span>
            ) : (
              <>
                <span>Sign In to Dashboard</span>
                <RiArrowRightLine size={16} />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 pt-5 border-t border-zinc-800/80 text-center">
          <p className="text-[11px] text-zinc-500 flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
            256-bit SSL encrypted · Authorized E-Cell personnel only
          </p>
        </div>
      </div>
    </div>
  );
}
