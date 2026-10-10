'use client';

import React from 'react';
import Link from 'next/link';
import type { BlogPost } from '@/lib/types';

export default function BlogFeatured({ post }: { post: BlogPost }) {
  return (
    <div className="yc-card overflow-hidden mb-12 group hover:border-zinc-400 dark:hover:border-zinc-600">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
        {/* Image Column */}
        <Link
          href={`/blog/${post.slug}`}
          className="lg:col-span-7 relative h-[260px] sm:h-[340px] lg:h-auto min-h-[280px] overflow-hidden bg-zinc-100 dark:bg-zinc-800 block"
        >
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-102"
            loading="eager"
          />
          <div className="absolute top-4 left-4 flex gap-2 items-center">
            <span className="bg-[#FF6600] text-white text-[11px] font-mono font-semibold uppercase tracking-wider py-0.5 px-2.5 rounded shadow-2xs">
              Featured Essay
            </span>
            <span className="bg-white/95 dark:bg-zinc-900/95 text-zinc-900 dark:text-zinc-100 text-[11px] font-mono py-0.5 px-2 rounded border border-zinc-200 dark:border-zinc-700 shadow-2xs">
              {post.category}
            </span>
          </div>
        </Link>

        {/* Content Column */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6 bg-white dark:bg-[#14161C]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span>{post.publishedAt}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>

            <h2 className="font-serif font-normal text-2xl sm:text-3xl text-zinc-950 dark:text-white leading-tight group-hover:text-[#FF6600] transition-colors">
              <Link href={`/blog/${post.slug}`} className="no-underline text-inherit">
                {post.title}
              </Link>
            </h2>

            <p className="text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {post.excerpt}
            </p>
          </div>

          <div className="pt-5 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {post.author.avatar ? (
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-9 h-9 rounded-full object-cover border border-zinc-200 dark:border-zinc-700"
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 font-bold text-xs flex items-center justify-center">
                  {post.author.name.charAt(0)}
                </div>
              )}
              <div className="leading-tight">
                <div className="text-xs font-semibold text-zinc-900 dark:text-white">{post.author.name}</div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400">{post.author.role}</div>
              </div>
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="yc-btn-primary text-xs py-2 px-3.5 font-semibold"
            >
              Read Article →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
