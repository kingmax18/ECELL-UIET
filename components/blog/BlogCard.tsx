'use client';

import React from 'react';
import Link from 'next/link';
import type { BlogPost } from '@/lib/types';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="yc-card overflow-hidden flex flex-col justify-between group hover:border-[#FF6600]/40 dark:hover:border-[#FF6600]/40 transition-all">
      {/* Category & Meta Header */}
      <div className="p-5 pb-0 flex items-center justify-between gap-3">
        <span className="text-[11px] font-mono font-medium text-[#FF6600] bg-[#FF6600]/10 py-1 px-2.5 rounded border border-[#FF6600]/20">
          {post.category}
        </span>
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
          <span>{post.publishedAt}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div>
          <h3 className="font-serif font-normal text-xl leading-snug text-zinc-950 dark:text-white transition-colors group-hover:text-[#FF6600] mb-2.5">
            <Link href={`/blog/${post.slug}`} className="no-underline text-inherit">
              {post.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Footer: Author Initials & Read CTA */}
        <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[#FF6600] border border-zinc-200 dark:border-zinc-700 font-bold text-xs flex items-center justify-center shrink-0">
              {post.author.name.charAt(0)}
            </div>
            <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200 truncate">
              {post.author.name}
            </span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="text-xs font-semibold text-[#FF6600] hover:underline"
          >
            Read Essay →
          </Link>
        </div>
      </div>
    </article>
  );
}
