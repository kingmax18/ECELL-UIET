'use client';

import React, { use, useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTABanner from '@/components/home/CTABanner';
import BlogCard from '@/components/blog/BlogCard';
import { blogs as defaultBlogs } from '@/data/blogs';
import { useData } from '@/context/DataProvider';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const { blogs } = useData();
  const allBlogs = blogs && blogs.length > 0 ? blogs : defaultBlogs;
  const post = allBlogs.find((b) => b.slug === slug);
  const [copied, setCopied] = useState(false);
  useScrollReveal();

  if (!post) {
    notFound();
  }

  const relatedPosts = allBlogs.filter((b) => b.id !== post.id).slice(0, 3);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-[#0B0C0E] min-h-screen text-zinc-900 dark:text-zinc-100">
        {/* Article Header & Hero */}
        <article className="pt-12 pb-16">
          <div className="max-w-[760px] mx-auto px-4 sm:px-6">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-6">
              <Link href="/" className="hover:text-zinc-900 dark:hover:text-white transition-colors no-underline">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-zinc-900 dark:hover:text-white transition-colors no-underline">
                Library
              </Link>
              <span>/</span>
              <span className="text-[#FF6600] truncate max-w-[200px]">{post.category}</span>
            </nav>

            {/* Category & Read Time */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="text-[11px] font-mono font-medium text-[#FF6600] bg-orange-50 dark:bg-orange-950/40 px-2 py-0.5 rounded border border-orange-200 dark:border-orange-900/60 uppercase">
                {post.category}
              </span>
              <span className="text-xs font-mono text-zinc-400">
                {post.publishedAt} · {post.readTime}
              </span>
            </div>

            {/* Article Headline */}
            <h1 className="font-serif font-normal text-[clamp(28px,4.5vw,48px)] leading-[1.15] tracking-tight text-zinc-950 dark:text-white mb-5 [text-wrap:balance]">
              {post.title}
            </h1>

            {/* Excerpt Lead */}
            <p className="text-[clamp(16px,1.8vw,19px)] leading-relaxed text-zinc-600 dark:text-zinc-350 font-normal mb-8">
              {post.excerpt}
            </p>

            {/* Author Byline */}
            <div className="flex items-center justify-between py-4 border-y border-zinc-200 dark:border-zinc-800 gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                {post.author.avatar ? (
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-zinc-200 dark:border-zinc-700"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 font-bold flex items-center justify-center text-sm">
                    {post.author.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-semibold text-sm text-zinc-900 dark:text-white">{post.author.name}</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">{post.author.role}</div>
                </div>
              </div>

              {/* Share Controls */}
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 text-xs font-mono text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 text-[#FF6600]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span>{copied ? 'Link Copied' : 'Share'}</span>
              </button>
            </div>
          </div>

          {/* Hero Cover Image */}
          <div className="max-w-[960px] mx-auto px-4 sm:px-6 my-10">
            <div className="relative w-full h-[300px] sm:h-[440px] rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Article Body Content */}
          <div className="max-w-[760px] mx-auto px-4 sm:px-6">
            <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 font-normal leading-[1.8] space-y-6 text-[16px] sm:text-[17px]">
              {post.content.split('\n\n').map((paragraph, index) => {
                const trimmed = paragraph.trim();

                // Heading 2
                if (trimmed.startsWith('## ')) {
                  return (
                    <h2
                      key={index}
                      className="font-serif font-normal text-2xl sm:text-3xl text-zinc-950 dark:text-white pt-6 pb-2 border-b border-zinc-200 dark:border-zinc-800"
                    >
                      {trimmed.replace('## ', '')}
                    </h2>
                  );
                }

                // Heading 3
                if (trimmed.startsWith('### ')) {
                  return (
                    <h3
                      key={index}
                      className="font-sans font-bold text-lg sm:text-xl text-[#FF6600] pt-3"
                    >
                      {trimmed.replace('### ', '')}
                    </h3>
                  );
                }

                // Blockquote
                if (trimmed.startsWith('> ')) {
                  const quoteLines = trimmed
                    .split('\n')
                    .map((l) => l.replace(/^>\s*/, ''))
                    .join(' ');
                  return (
                    <blockquote
                      key={index}
                      className="border-l-2 border-[#FF6600] py-3 pl-5 text-lg font-serif italic text-zinc-900 dark:text-zinc-100 my-6 bg-orange-50/30 dark:bg-orange-950/20 rounded-r"
                    >
                      {quoteLines}
                    </blockquote>
                  );
                }

                // Bullet List
                if (trimmed.startsWith('- ') || trimmed.startsWith('1. ')) {
                  const items = trimmed.split('\n');
                  return (
                    <ul key={index} className="space-y-2 my-4 pl-5 list-disc text-zinc-700 dark:text-zinc-300 marker:text-[#FF6600]">
                      {items.map((it, idx) => (
                        <li key={idx} className="leading-relaxed">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: it
                                .replace(/^(\d+\.|\-)\s*/, '')
                                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-zinc-950 dark:text-white font-semibold">$1</strong>')
                                .replace(/\*(.*?)\*/g, '<em class="text-[#FF6600]">$1</em>'),
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  );
                }

                // Horizontal Rule
                if (trimmed === '---') {
                  return <hr key={index} className="my-8 border-zinc-200 dark:border-zinc-800" />;
                }

                // Standard Paragraph
                return (
                  <p
                    key={index}
                    className="leading-relaxed text-zinc-700 dark:text-zinc-300"
                    dangerouslySetInnerHTML={{
                      __html: trimmed
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-zinc-950 dark:text-white font-semibold">$1</strong>')
                        .replace(/\*(.*?)\*/g, '<em class="italic text-[#FF6600]">$1</em>'),
                    }}
                  />
                );
              })}
            </div>

            {/* Tags Strip */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-zinc-400 uppercase mr-2">
                  Tagged in:
                </span>
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-mono py-1 px-2.5 rounded border border-zinc-200 dark:border-zinc-700"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}

            {/* Author Box Bio Card */}
            <div className="mt-10 bg-[#FAFAF8] dark:bg-[#14161C] border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
              <div className="flex items-center gap-4">
                {post.author.avatar ? (
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover border border-zinc-200 dark:border-zinc-700 shrink-0"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 font-bold flex items-center justify-center shrink-0">
                    {post.author.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-semibold text-sm text-zinc-950 dark:text-white">{post.author.name}</div>
                  <div className="text-xs font-mono text-[#FF6600] mb-0.5">{post.author.role}</div>
                  <div className="text-xs text-zinc-500">
                    UIET E-Cell Incubator Network · Maharshi Dayanand University
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="yc-btn-secondary text-xs shrink-0 py-1.5 px-3"
              >
                Connect with Author
              </Link>
            </div>
          </div>
        </article>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-[#FAFAF8] dark:bg-[#0E1015] border-t border-zinc-200 dark:border-zinc-800">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-[#FF6600] font-bold mb-1">
                    MORE ESSAYS
                  </div>
                  <h2 className="font-serif font-normal text-2xl text-zinc-950 dark:text-white">
                    Continue reading from the incubator.
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="yc-btn-secondary text-xs"
                >
                  View All Essays →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((p) => (
                  <BlogCard key={p.id} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
