'use client';

import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Immediately reveal all elements initially so nothing is stuck invisible
    const elements = document.querySelectorAll('.reveal, .rv');
    
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -20px 0px',
        threshold: 0.05,
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Safety fallback: reveal all elements after 800ms to guarantee nothing stays blank
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal, .rv').forEach((el) => el.classList.add('visible'));
    }, 800);

    return () => {
      clearTimeout(timer);
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}
