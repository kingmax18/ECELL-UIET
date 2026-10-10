'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTABanner from '@/components/home/CTABanner';
import BlogCard from '@/components/blog/BlogCard';
import BlogFeatured from '@/components/blog/BlogFeatured';
import { blogs as defaultBlogs, blogCategories } from '@/data/blogs';
import { useData } from '@/context/DataProvider';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function BlogPage() {
  const { blogs } = useData();
  const allBlogs = blogs && blogs.length > 0 ? blogs : defaultBlogs;

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  useScrollReveal();

  const categories = useMemo(() => {
    const set = new Set<string>(blogCategories);
    allBlogs.forEach((b) => {
      if (b.category) set.add(b.category);
    });
    return Array.from(set);
  }, [allBlogs]);

  const filteredBlogs = useMemo(() => {
    return allBlogs.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category.toLowerCase() === selectedCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.author?.name?.toLowerCase().includes(q) ||
        (post.tags && post.tags.some((t) => t.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [allBlogs, selectedCategory, searchQuery]);

  const featuredPost = useMemo(() => {
    return filteredBlogs.find((b) => b.featured) || filteredBlogs[0];
  }, [filteredBlogs]);

  const restPosts = useMemo(() => {
    if (!featuredPost) return filteredBlogs;
    return filteredBlogs.filter((b) => b.id !== featuredPost.id);
  }, [filteredBlogs, featuredPost]);

  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-[#0B0C0E] min-h-screen text-zinc-900 dark:text-zinc-100">
        {/* Page Hero - YC Library Style */}
        <section className="relative overflow-hidden bg-[#FAFAF8] dark:bg-[#0E1015] border-b border-zinc-200 dark:border-zinc-800 py-16 sm:py-22">
          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#FF6600] font-bold mb-2">
                FOUNDER PLAYBOOKS &amp; LIBRARY
              </div>
              <h1 className="font-serif font-normal text-3xl sm:text-5xl text-zinc-950 dark:text-white mb-4 [text-wrap:balance]">
                Strategies, essays, and notes on{' '}
                <span className="italic text-[#FF6600]">building startups.</span>
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
                Execution frameworks, product validation post-mortems, and venture tactics authored by student founders, mentors, and the UIET E-Cell leadership team.
              </p>

              {/* Search Input - Clean YC style */}
              <div className="max-w-md relative">
                <input
                  type="text"
                  placeholder="Search articles by title, topic, or author…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white dark:bg-[#14161C] border border-zinc-200 dark:border-zinc-700 rounded-md py-2.5 pl-9 pr-4 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#FF6600] transition-colors"
                />
                <svg
                  className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-zinc-400 hover:text-zinc-900"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Categories & Listing Section */}
        <section className="py-14 sm:py-20">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
              {categories.map((category) => {
                const isActive = selectedCategory.toLowerCase() === category.toLowerCase();
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`py-1.5 px-3.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-semibold'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* If no articles match */}
            {filteredBlogs.length === 0 ? (
              <div className="bg-[#FAFAF8] dark:bg-[#14161C] border border-zinc-200 dark:border-zinc-800 rounded-lg p-12 text-center max-w-md mx-auto">
                <h3 className="font-serif font-normal text-xl text-zinc-900 dark:text-white mb-2">No articles found</h3>
                <p className="text-xs text-zinc-500 mb-4">
                  No essays found matching &ldquo;{searchQuery}&rdquo;.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="yc-btn-secondary text-xs"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <>
                {/* Featured Post (only when not actively searching) */}
                {!searchQuery && selectedCategory === 'All' && featuredPost && (
                  <BlogFeatured post={featuredPost} />
                )}

                {/* Rest of Posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(!searchQuery && selectedCategory === 'All' ? restPosts : filteredBlogs).map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
