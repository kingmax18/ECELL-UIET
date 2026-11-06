'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      // Floating animation on shapes
      gsap.utils.toArray<HTMLElement>('.sh').forEach((shape, idx) => {
        gsap.to(shape, {
          y: idx % 2 ? -26 : 26,
          rotation: idx * 18 + 14,
          duration: 3 + idx,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });

      // Initial reveal with fromTo & clearProps so opacity is guaranteed 100%
      gsap.fromTo(
        '[data-hero="headline"]',
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          clearProps: 'all',
        }
      );

      gsap.fromTo(
        '[data-hero="subtitle"], [data-hero="actions"]',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.2,
          ease: 'power3.out',
          clearProps: 'all',
        }
      );
    }, containerRef);

    // Mouse parallax
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      gsap.to('.sh.a', { x: x * -50, duration: 0.8, ease: 'power2.out' });
      gsap.to('.sh.b', { x: x * 70, duration: 0.8, ease: 'power2.out' });
      gsap.to('.sh.c', { x: x * -90, duration: 0.8, ease: 'power2.out' });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="top"
      className="hero relative block w-full overflow-hidden bg-[var(--bg)] min-h-[90vh] flex flex-col justify-center px-[5vw] pt-[150px] pb-[80px]"
    >
      {/* Floating geometric shapes */}
      <div className="sh a" aria-hidden="true" />
      <div className="sh b" aria-hidden="true" />
      <div className="sh c" aria-hidden="true" />

      <div className="relative z-[2] max-w-[1100px]">
        {/* Archivo Black display headline with orange emphasis */}
        <h1
          data-hero="headline"
          className="d text-[clamp(46px,9vw,130px)] text-[var(--ink)] mb-[24px] tracking-[-0.02em] leading-[0.92]"
        >
          Start from<br />
          an <em>idea.</em>
        </h1>

        {/* Subtitle */}
        <p
          data-hero="subtitle"
          className="text-[clamp(16px,2vw,19px)] font-normal leading-[1.6] text-[var(--mute)] max-w-[540px] mb-[36px]"
        >
          The entrepreneurship cell of UIET, Maharshi Dayanand University. Open to every student,
          every branch, every college on campus.
        </p>

        {/* Action CTAs */}
        <div data-hero="actions" className="cta flex items-center gap-3.5 flex-wrap">
          <Link href="/contact" className="btn">
            Become a member
          </Link>
          <Link href="/events" className="btn o">
            See Eureka 2026
          </Link>
        </div>
      </div>
    </section>
  );
}
