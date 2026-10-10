'use client';

import React from 'react';
import Link from 'next/link';
import type { BlogPost } from '@/lib/types';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="yc-card overflow-hidden flex flex-col justify-between group hover:border-zinc-400 dark:hover:border-zinc-600">
      {/* Cover Image */}
      <Link href={`/blog/${post.slug}`} className="relative block w-full h-[200px] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-102"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="text-[11px] font-mono font-medium text-[#FF6600] bg-white/95 dark:bg-zinc-900/95 py-0.5 px-2 rounded border border-zinc-200 dark:border-zinc-700 shadow-2xs">
            {post.category}
          </span>
        </div>
      </Link>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
            <span>{post.publishedAt}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h3 className="font-serif font-normal text-xl leading-snug text-zinc-950 dark:text-white transition-colors group-hover:text-[#FF6600] mb-2">
            <Link href={`/blog/${post.slug}`} className="no-underline text-inherit">
              {post.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Footer: Author & Read */}
        <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 min-w-0">
            {post.author.avatar ? (
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-6 h-6 rounded-full object-cover shrink-0 border border-zinc-200 dark:border-zinc-700"
              />
            ) : (
              <div className="w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-bold text-xs flex items-center justify-center shrink-0">
                {post.author.name.charAt(0)}
              </div>
            )}
            <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200 truncate">
              {post.author.name}
            </span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="text-xs font-medium text-[#FF6600] hover:underline"
          >
            Read Essay →
          </Link>
        </div>
      </div>
    </article>
  );
}
