'use client';

import React, { use, useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTABanner from '@/components/home/CTABanner';
import BlogCard from '@/components/blog/BlogCard';
import Button from '@/components/ui/Button';
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
      <main className="bg-white min-h-screen text-[#0A0E1A]">
        {/* Article Header & Hero */}
        <article className="pt-[140px] pb-16">
          <div className="max-w-[840px] mx-auto px-4 sm:px-6">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[#475569] mb-6">
              <Link href="/" className="hover:text-[#0047FF] transition-colors no-underline">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#0047FF] transition-colors no-underline">
                Blog
              </Link>
              <span>/</span>
              <span className="text-[#0A0E1A] font-bold truncate max-w-[200px]">{post.category}</span>
            </nav>

            {/* Category & Read Time */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="bg-[#0047FF] text-white text-[12px] font-bold py-1 px-3 rounded-pill shadow-[2px_2px_0px_#0A0E1A]">
                {post.category}
              </span>
              <span className="text-xs font-semibold text-[#475569]">
                {post.publishedAt} · {post.readTime}
              </span>
            </div>

            {/* Article Headline */}
            <h1 className="font-sans font-extrabold text-[clamp(30px,4.5vw,52px)] leading-[1.12] tracking-tight text-[#0A0E1A] mb-6 [text-wrap:balance]">
              {post.title}
            </h1>

            {/* Excerpt Lead */}
            <p className="text-[clamp(17px,1.9vw,20px)] leading-[1.6] text-[#3A4A7A] font-medium mb-8">
              {post.excerpt}
            </p>

            {/* Author Byline */}
            <div className="flex items-center justify-between py-4 border-y border-[#C0CCFF] gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                {post.author.avatar ? (
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#0047FF]/40"
                  />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-[#EEF2FF] text-[#0047FF] font-bold flex items-center justify-center">
                    {post.author.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-sans font-semibold text-base text-[#0A0E1A]">{post.author.name}</div>
                  <div className="text-xs text-[#475569]">{post.author.role}</div>
                </div>
              </div>

              {/* Share Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-pill bg-[#F4F6FF] border-2 border-[#0047FF]/50 hover:bg-[#EEF2FF] text-xs font-bold text-[#0A0E1A] transition-colors cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 text-[#0047FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Hero Cover Image */}
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 my-10 sm:my-12">
            <div className="relative w-full h-[320px] sm:h-[480px] rounded-panel overflow-hidden bg-white border-2 border-[#0047FF]/40 shadow-[0_12px_40px_rgba(7,10,38,0.7)]">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Article Body Content */}
          <div className="max-w-[760px] mx-auto px-4 sm:px-6">
            <div className="prose prose-lg max-w-none text-[#3A4A7A] font-normal leading-[1.8] space-y-6 text-[16px] sm:text-[18px]">
              {post.content.split('\n\n').map((paragraph, index) => {
                const trimmed = paragraph.trim();

                // Heading 2
                if (trimmed.startsWith('## ')) {
                  return (
                    <h2
                      key={index}
                      className="font-sans font-bold text-[24px] sm:text-[28px] leading-[1.25] tracking-tight text-[#0A0E1A] pt-6 pb-2 border-b border-[#C0CCFF]"
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
                      className="font-sans font-bold text-[20px] sm:text-[22px] tracking-tight text-[#0047FF] pt-3"
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
                      className="bg-[#F4F6FF] border-l-4 border-[#0047FF] py-4 px-6 rounded-r-card text-[17px] italic text-[#0A0E1A] my-6 shadow-[2px_2px_0px_#0047FF]"
                    >
                      {quoteLines}
                    </blockquote>
                  );
                }

                // Bullet List
                if (trimmed.startsWith('- ') || trimmed.startsWith('1. ')) {
                  const items = trimmed.split('\n');
                  return (
                    <ul key={index} className="space-y-2.5 my-4 pl-5 list-disc text-[#3A4A7A] marker:text-[#0047FF]">
                      {items.map((it, idx) => (
                        <li key={idx} className="leading-relaxed">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: it
                                .replace(/^(\d+\.|\-)\s*/, '')
                                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#0A0E1A] font-bold">$1</strong>')
                                .replace(/\*(.*?)\*/g, '<em class="text-[#0047FF]">$1</em>'),
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  );
                }

                // Checklist
                if (trimmed.startsWith('- [ ]')) {
                  const items = trimmed.split('\n');
                  return (
                    <div key={index} className="space-y-2 bg-[#F4F6FF] border-2 border-[#0047FF]/40 rounded-card p-5 my-4">
                      {items.map((it, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-[#0A0E1A]">
                          <input type="checkbox" readOnly checked className="rounded-xs accent-[#0047FF]" />
                          <span>{it.replace('- [ ] ', '')}</span>
                        </div>
                      ))}
                    </div>
                  );
                }

                // Horizontal Rule
                if (trimmed === '---') {
                  return <hr key={index} className="my-8 border-[#C0CCFF]" />;
                }

                // Standard Paragraph
                return (
                  <p
                    key={index}
                    className="text-[#3A4A7A] leading-[1.8]"
                    dangerouslySetInnerHTML={{
                      __html: trimmed
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#0A0E1A] font-bold">$1</strong>')
                        .replace(/\*(.*?)\*/g, '<em class="italic text-[#0047FF]">$1</em>'),
                    }}
                  />
                );
              })}
            </div>

            {/* Tags Strip */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-6 border-t border-[#C0CCFF] flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-[#475569] uppercase tracking-wider mr-2">
                  Tagged in:
                </span>
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="bg-[#F4F6FF] border border-[#C0CCFF] text-[#0A0E1A] hover:border-[#0047FF] hover:bg-[#EEF2FF] text-xs font-semibold py-1 px-3 rounded-pill transition-colors"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}

            {/* Author Box Bio Card */}
            <div className="mt-10 bg-[#F4F6FF] border-2 border-[#0047FF] rounded-panel p-6 sm:p-8 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between shadow-[4px_4px_0px_#0047FF]">
              <div className="flex items-center gap-4">
                {post.author.avatar ? (
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-14 h-14 rounded-full object-cover border border-[#0047FF]/40"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-[#EEF2FF] text-[#0047FF] font-bold text-lg flex items-center justify-center">
                    {post.author.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-sans font-bold text-lg text-[#0A0E1A]">{post.author.name}</div>
                  <div className="text-sm text-[#0047FF] mb-1 font-semibold">{post.author.role}</div>
                  <div className="text-xs text-[#3A4A7A]">
                    Writing for the UIET E-Cell community at Maharshi Dayanand University.
                  </div>
                </div>
              </div>

              <Button href="/contact" variant="outline" size="sm" arrow>
                Connect
              </Button>
            </div>
          </div>
        </article>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-[#F4F6FF]/60 border-t border-[#C0CCFF]">
            <div className="max-w-[1272px] mx-auto px-4 sm:px-6">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.06em] text-[#0047FF] block mb-1">
                    Continue Reading
                  </span>
                  <h2 className="font-sans font-bold text-2xl tracking-tight text-[#0A0E1A]">
                    More articles from UIET E-Cell
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="hidden sm:inline-flex text-sm font-bold text-[#0047FF] hover:text-[#0A0E1A] items-center gap-1 no-underline"
                >
                  <span>View all posts</span>
                  <span>→</span>
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
