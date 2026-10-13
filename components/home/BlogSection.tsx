'use client';

import React from 'react';
import Link from 'next/link';
import BlogCard from '@/components/blog/BlogCard';
import { blogs as defaultBlogs } from '@/data/blogs';
import { useData } from '@/context/DataProvider';

export default function BlogSection() {
  const { blogs } = useData();
  const allBlogs = blogs && blogs.length > 0 ? blogs : defaultBlogs;
  const recentPosts = allBlogs.slice(0, 3);

  return (
    <section id="blog" className="py-20 sm:py-26 bg-white dark:bg-[#0B0C0E] border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#FF6600] font-bold mb-2">
              ARTICLES &amp; INSIGHTS
            </div>
            <h2 className="font-serif font-normal text-3xl sm:text-4xl text-zinc-900 dark:text-white mb-2">
              Insights &amp; founder stories.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-xl leading-relaxed">
              Reflections, event recaps, and practical articles shared by E-Cell student leaders and alumni.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF6600] hover:underline uppercase font-mono tracking-wider shrink-0"
          >
            <span>View All Articles</span>
            <span>→</span>
          </Link>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
