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
      <main className="bg-white min-h-screen">
        {/* Page Hero */}
        <section className="relative overflow-hidden bg-white border-b border-[#C0CCFF] py-16 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0047FF18,transparent_70%)] pointer-events-none" />
          <div className="relative max-w-[1272px] mx-auto px-4 sm:px-6 text-center">
            <h1 className="font-sans font-extrabold text-[clamp(34px,5vw,60px)] leading-[1.12] tracking-tight text-[#0A0E1A] mb-5 [text-wrap:balance]">
              Insights, strategies &amp; founder playbooks from{' '}
              <span className="marker-yellow">our campus.</span>
            </h1>
            <p className="text-[clamp(15px,1.7vw,18px)] font-medium leading-[1.6] text-[#3A4A7A] max-w-[700px] mx-auto mb-8">
              Real-world execution guides, event retrospectives, and incubation strategies authored by student founders, mentors, and the UIET E-Cell team.
            </p>

            {/* Search Input */}
            <div className="max-w-[480px] mx-auto relative">
              <input
                type="text"
                placeholder="Search articles by title, topic, or author…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F4F6FF] border-2 border-[#0047FF]/60 rounded-full py-3.5 pl-11 pr-5 text-sm font-semibold text-[#0A0E1A] placeholder:text-[#475569]/60 focus:outline-hidden focus:border-[#0047FF] shadow-[3px_3px_0px_#0047FF] transition-all"
              />
              <svg
                className="w-4 h-4 text-[#0047FF] absolute left-4 top-1/2 -translate-y-1/2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
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
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#475569] hover:text-[#0A0E1A] px-1.5 py-0.5 rounded-full"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Categories & Listing Section */}
        <section className="py-[clamp(48px,6vw,72px)] bg-white">
          <div className="max-w-[1272px] mx-auto px-4 sm:px-6">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
              {categories.map((category) => {
                const isActive = selectedCategory.toLowerCase() === category.toLowerCase();
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`py-2 px-4 rounded-pill text-[13px] sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#CBFF2E] text-[#0A0E1A] shadow-[2px_2px_0px_#0047FF]'
                        : 'bg-[#F4F6FF] border border-[#C0CCFF] text-[#0A0E1A] hover:border-[#0047FF] hover:bg-[#EEF2FF]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* If no articles match */}
            {filteredBlogs.length === 0 ? (
              <div className="bg-[#F4F6FF] border-2 border-[#0047FF]/40 rounded-panel p-12 text-center max-w-lg mx-auto">
                <div className="w-12 h-12 rounded-full bg-[#EEF2FF] text-[#0047FF] flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                  🔍
                </div>
                <h3 className="font-sans font-bold text-lg text-[#0A0E1A] mb-1">No articles found</h3>
                <p className="text-sm text-[#3A4A7A] mb-5">
                  We couldn&apos;t find any posts matching &ldquo;{searchQuery}&rdquo;. Try another term or reset filters.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="text-xs font-bold text-[#0A0E1A] bg-[#CBFF2E] py-2 px-4 rounded-pill hover:bg-white transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <>
                {/* Featured Headline Post (when no search query is active) */}
                {!searchQuery && selectedCategory === 'All' && featuredPost && (
                  <BlogFeatured post={featuredPost} />
                )}

                {/* Grid of articles */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                  {(!searchQuery && selectedCategory === 'All' ? restPosts : filteredBlogs).map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </>
            )}

            {/* Newsletter Dispatch Card */}
            <div className="reveal mt-16 sm:mt-20 bg-[#F4F6FF] border-2 border-[#0047FF] text-[#0A0E1A] rounded-panel p-8 sm:p-12 relative overflow-hidden shadow-[4px_4px_0px_#0047FF]">
              <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#0047FF]/10 blur-3xl pointer-events-none" />
              <div className="relative z-1 max-w-[640px]">
                <span className="text-[#0047FF] font-bold text-xs uppercase tracking-[0.08em] mb-3 block">
                  Stay Informed · E-Cell Dispatch
                </span>
                <h2 className="font-sans font-bold text-[26px] sm:text-[34px] leading-[1.2] tracking-tight mb-3 text-[#0A0E1A]">
                  Get semester playbooks and workshop invites in your inbox.
                </h2>
                <p className="text-[#3A4A7A] text-sm sm:text-base leading-[1.6] mb-6">
                  Join 1,200+ MDU students, engineering peers, and startup enthusiasts who read our monthly innovation digest. Zero spam, unsubscribe anytime.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Thank you for subscribing to the UIET E-Cell Dispatch!');
                  }}
                  className="flex flex-col sm:flex-row gap-3 max-w-md"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your student or personal email…"
                    className="flex-1 bg-white border-2 border-[#0047FF]/50 rounded-pill px-4 py-3 text-sm font-medium text-[#0A0E1A] placeholder:text-[#475569]/60 focus:outline-hidden focus:border-[#0047FF] transition-all"
                  />
                  <button
                    type="submit"
                    className="bg-[#CBFF2E] text-[#0A0E1A] hover:bg-[#0047FF] hover:text-white transition-colors font-bold text-sm py-3 px-6 rounded-pill shrink-0 cursor-pointer shadow-[2px_2px_0px_#0047FF]"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
