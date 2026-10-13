'use client';

import React from 'react';
import Link from 'next/link';
import type { BlogPost } from '@/lib/types';

export default function BlogFeatured({ post }: { post: BlogPost }) {
  return (
    <div className="yc-card overflow-hidden mb-12 p-6 sm:p-10 border border-zinc-200 dark:border-zinc-800 hover:border-[#FF6600]/40 dark:hover:border-[#FF6600]/40 transition-all bg-[#FAFAF8] dark:bg-[#14161C]">
      <div className="flex flex-col gap-6">
        {/* Header badges & metadata */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="bg-[#FF6600] text-white text-[11px] font-mono font-semibold uppercase tracking-wider py-1 px-3 rounded shadow-2xs">
              Featured Essay
            </span>
            <span className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 text-[11px] font-mono py-1 px-2.5 rounded border border-zinc-200 dark:border-zinc-700">
              {post.category}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
            <span>{post.publishedAt}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Headline */}
        <div>
          <h2 className="font-serif font-normal text-2xl sm:text-4xl text-zinc-950 dark:text-white leading-tight hover:text-[#FF6600] transition-colors mb-4">
            <Link href={`/blog/${post.slug}`} className="no-underline text-inherit">
              {post.title}
            </Link>
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-4xl">
            {post.excerpt}
          </p>
        </div>

        {/* Footer: Author & CTA */}
        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 text-[#FF6600] border border-zinc-200 dark:border-zinc-700 font-bold text-sm flex items-center justify-center">
              {post.author.name.charAt(0)}
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-zinc-900 dark:text-white">{post.author.name}</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">{post.author.role}</div>
            </div>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="yc-btn-primary text-xs py-2.5 px-5 font-semibold"
          >
            Read Article →
          </Link>
        </div>
      </div>
    </div>
  );
}
