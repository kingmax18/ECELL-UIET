'use client';

import React from 'react';
import Link from 'next/link';
import type { BlogPost } from '@/lib/types';

export default function BlogFeatured({ post }: { post: BlogPost }) {
  return (
    <div className="bg-[#fafaf9] border border-[rgba(27,29,30,0.1)] rounded-2xl overflow-hidden mb-12 p-6 sm:p-10 hover:border-[rgba(27,29,30,0.22)] hover:shadow-[0_12px_48px_rgba(27,29,30,0.07)] transition-all duration-300">
      <div className="flex flex-col gap-6">
        {/* Header badges & metadata */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="bg-[#1b1d1e] text-white text-[11px] font-mono font-semibold uppercase tracking-wider py-1 px-3 rounded-full">
              Featured
            </span>
            <span className="bg-[#fff3ea] text-[#b85507] text-[11px] font-mono py-1 px-2.5 rounded-full border border-[#ffcb56]/40">
              {post.category}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[rgba(27,29,30,0.4)]">
            <span>{post.publishedAt}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Headline */}
        <div>
          <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-[#1b1d1e] leading-tight hover:text-[#ff933e] transition-colors mb-4">
            <Link href={`/blog/${post.slug}`} className="no-underline text-inherit">
              {post.title}
            </Link>
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-[rgba(27,29,30,0.6)] max-w-4xl">
            {post.excerpt}
          </p>
        </div>

        {/* Footer: Author & CTA */}
        <div className="pt-6 border-t border-[rgba(27,29,30,0.08)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#ebf3f8] text-[#2c5e83] border border-[#73a5ca]/20 font-bold text-sm flex items-center justify-center">
              {post.author.name.charAt(0)}
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-[#1b1d1e]">{post.author.name}</div>
              <div className="text-xs text-[rgba(27,29,30,0.4)]">{post.author.role}</div>
            </div>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 bg-[#1b1d1e] text-white text-xs font-semibold py-2.5 px-5 rounded-full hover:bg-[#ff933e] transition-colors"
          >
            Read Article →
          </Link>
        </div>
      </div>
    </div>
  );
}
