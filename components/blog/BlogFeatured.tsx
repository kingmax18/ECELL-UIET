import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import type { BlogPost } from '@/lib/types';

export default function BlogFeatured({ post }: { post: BlogPost }) {
  return (
    <div className="reveal relative bg-[#F4F6FF] border-2 border-[#0047FF]/50 rounded-panel overflow-hidden transition-all duration-300 hover:border-[#CBFF2E] hover:shadow-[0_16px_48px_rgba(7,10,38,0.8)] mb-12 lg:mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
        {/* Image Column */}
        <Link
          href={`/blog/${post.slug}`}
          className="lg:col-span-7 relative h-[280px] sm:h-[360px] lg:h-auto min-h-[300px] overflow-hidden bg-white block group"
        >
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover object-center transition-transform duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            loading="eager"
          />
          <div className="absolute top-4 left-4 flex gap-2 items-center">
            <span className="bg-[#CBFF2E] text-[#0A0E1A] text-[11px] font-bold uppercase tracking-[0.06em] py-1 px-3 rounded-pill shadow-[2px_2px_0px_#0A0E1A]">
              Featured Story
            </span>
            <span className="bg-[#0047FF] text-white text-[12px] font-bold py-1 px-3 rounded-pill shadow-[2px_2px_0px_#0A0E1A]">
              {post.category}
            </span>
          </div>
        </Link>

        {/* Content Column */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6 bg-[#F4F6FF]">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#475569]">
              <span>{post.publishedAt}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>

            <h2 className="font-sans font-bold text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.2] tracking-tight text-[#0A0E1A] hover:text-[#0047FF] transition-colors">
              <Link href={`/blog/${post.slug}`} className="no-underline text-inherit">
                {post.title}
              </Link>
            </h2>

            <p className="text-[15px] sm:text-[16px] leading-[1.6] text-[#3A4A7A]">
              {post.excerpt}
            </p>
          </div>

          <div className="pt-6 border-t border-[#C0CCFF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {post.author.avatar ? (
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#0047FF]/40"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-[#EEF2FF] text-[#0047FF] font-bold flex items-center justify-center">
                  {post.author.name.charAt(0)}
                </div>
              )}
              <div className="leading-tight">
                <div className="text-sm font-bold text-[#0A0E1A]">{post.author.name}</div>
                <div className="text-xs text-[#475569] mt-0.5">{post.author.role}</div>
              </div>
            </div>

            <Button href={`/blog/${post.slug}`} variant="primary" size="sm" arrow>
              Read Article
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
