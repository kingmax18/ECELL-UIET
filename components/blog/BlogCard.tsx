'use client';

import React from 'react';
import Link from 'next/link';
import type { BlogPost } from '@/lib/types';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white border border-[rgba(27,29,30,0.1)] rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-[rgba(27,29,30,0.25)] hover:shadow-[0_8px_32px_rgba(27,29,30,0.08)] transition-all duration-300">
      {/* Category & Meta Header */}
      <div className="p-5 pb-0 flex items-center justify-between gap-3">
        <span className="text-[11px] font-mono font-medium text-[#b85507] bg-[#fff3ea] py-1 px-2.5 rounded-full border border-[#ffcb56]/40">
          {post.category}
        </span>
        <div className="flex items-center gap-2 text-xs font-mono text-[rgba(27,29,30,0.4)]">
          <span>{post.publishedAt}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div>
          <h3 className="font-sans font-semibold text-base leading-snug text-[#1b1d1e] transition-colors group-hover:text-[#ff933e] mb-2.5">
            <Link href={`/blog/${post.slug}`} className="no-underline text-inherit">
              {post.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-[rgba(27,29,30,0.6)] line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Footer: Author Initials & Read CTA */}
        <div className="pt-4 border-t border-[rgba(27,29,30,0.08)] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-full bg-[#ebf3f8] text-[#2c5e83] border border-[#73a5ca]/20 font-bold text-xs flex items-center justify-center shrink-0">
              {post.author.name.charAt(0)}
            </div>
            <span className="text-xs font-medium text-[#1b1d1e] truncate">
              {post.author.name}
            </span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="text-xs font-semibold text-[#ff933e] hover:text-[#e87e2a] transition-colors"
          >
            Read →
          </Link>
        </div>
      </div>
    </article>
  );
}
