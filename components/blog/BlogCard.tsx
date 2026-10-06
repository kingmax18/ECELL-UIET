import React from 'react';
import Link from 'next/link';
import type { BlogPost } from '@/lib/types';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="reveal group flex flex-col bg-[#0B0F33] border-2 border-[#863DFF]/40 rounded-panel overflow-hidden transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-[#CBFF2E] hover:shadow-[0_12px_36px_rgba(7,10,38,0.7)]">
      {/* Cover Image */}
      <Link href={`/blog/${post.slug}`} className="relative block w-full h-[220px] sm:h-[240px] overflow-hidden bg-[#070A26]">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3.5 left-3.5">
          <span className="bg-[#863DFF] text-white border border-[#CBFF2E]/40 text-[12px] font-bold tracking-wider py-1 px-3 rounded-pill shadow-[2px_2px_0px_#070A26]">
            {post.category}
          </span>
        </div>
      </Link>

      {/* Body */}
      <div className="flex-1 flex flex-col justify-between p-6 sm:p-7 gap-4">
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#DDE0FF]/60">
            <span>{post.publishedAt}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h3 className="font-sans font-bold text-[20px] sm:text-[22px] leading-[1.3] tracking-tight text-white transition-colors duration-200 group-hover:text-[#CBFF2E]">
            <Link href={`/blog/${post.slug}`} className="no-underline text-inherit">
              {post.title}
            </Link>
          </h3>

          <p className="text-[14px] sm:text-[15px] font-normal leading-[1.6] text-[#DDE0FF]/80 line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        {/* Footer: Author & Read Link */}
        <div className="pt-4 border-t border-[#1F2766] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            {post.author.avatar ? (
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-7 h-7 rounded-full object-cover shrink-0 border border-[#863DFF]/40"
              />
            ) : (
              <div className="w-7 h-7 rounded-full bg-[#101648] text-[#CBFF2E] font-bold text-xs flex items-center justify-center shrink-0">
                {post.author.name.charAt(0)}
              </div>
            )}
            <div className="leading-tight min-w-0">
              <div className="text-[13px] font-semibold text-white truncate">{post.author.name}</div>
              <div className="text-[11px] text-[#DDE0FF]/60 truncate">{post.author.role}</div>
            </div>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="text-xs font-bold text-[#CBFF2E] group-hover:text-white flex items-center gap-1 shrink-0 no-underline"
            aria-label={`Read ${post.title}`}
          >
            <span>Read</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
