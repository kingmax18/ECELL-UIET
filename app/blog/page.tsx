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
  const allBlogs = useMemo(() => {
    const list = [...(blogs || [])];
    defaultBlogs.forEach((def) => {
      if (!list.some((b) => b.slug.toLowerCase() === def.slug.toLowerCase() || b.id === def.id)) {
        list.push(def);
      }
    });
    return list.length > 0 ? list : defaultBlogs;
  }, [blogs]);

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
      <main className="bg-white min-h-screen text-ink">
        {/* Page Hero — matching Awake layout */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[linear-gradient(71deg,rgba(217,243,252,0.38)_11%,rgba(235,248,253,0.45)_45.7%,rgba(255,255,255,0.54)_64.5%,rgba(253,241,211,0.66)_100%)] [mask-image:linear-gradient(to_bottom,black_55%,transparent_92%)] [-webkit-mask-image:linear-gradient(to_bottom,black_55%,transparent_92%)]">
            <img
              src="/assets/images/ntUDPbezGATca4W8ayYcVbeQbM.svg"
              alt=""
              className="w-full h-full object-cover opacity-90"
            />
          </div>
          <div className="relative max-w-[1272px] mx-auto px-6 pt-[160px] pb-[72px] text-center">
            <h1 className="font-sans font-medium text-[clamp(36px,5.5vw,64px)] leading-[1.08] tracking-[-0.04em] text-ink mb-5 [text-wrap:balance]">
              Strategies, essays, and notes on{' '}
              <span className="font-serif italic font-normal text-[1.05em]">building startups</span>
            </h1>
            <p className="text-[clamp(16px,1.8vw,18px)] leading-[1.6] text-secondary max-w-[720px] mx-auto mb-8">
              Execution frameworks, product validation post-mortems, and venture tactics authored by student founders, mentors, and the E-Cell leadership team.
            </p>

            {/* Search Input - Clean Awake Pill */}
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                placeholder="Search articles by title, topic, or author…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-border rounded-pill py-3 pl-11 pr-5 text-sm text-ink placeholder:text-muted outline-none transition-colors duration-200 focus:border-ink shadow-[0_2px_8px_rgba(27,29,30,0.04)]"
              />
              <svg
                className="w-4 h-4 text-muted absolute left-4 top-1/2 -translate-y-1/2"
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
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-secondary hover:text-ink cursor-pointer"
                >
                  Clear
                </button>
              )}
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
                  className="inline-flex items-center gap-1.5 bg-[#1b1d1e] text-white text-xs font-semibold py-2 px-4 rounded-full hover:bg-[#4928fd] transition-colors cursor-pointer"
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
