import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTABanner from '@/components/home/CTABanner';
import BlogCard from '@/components/blog/BlogCard';
import ShareButton from '@/components/blog/ShareButton';
import Button from '@/components/ui/Button';
import ScrollRevealEffect from '@/components/ui/ScrollRevealEffect';
import { blogs as defaultBlogs } from '@/data/blogs';
import { prisma } from '@/lib/prisma';
import type { BlogPost } from '@/lib/types';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getBlogPost(rawSlug: string): Promise<{ post: BlogPost | null; allPosts: BlogPost[] }> {
  const decodedSlug = decodeURIComponent(rawSlug).trim();
  const lowerSlug = decodedSlug.toLowerCase();

  let dbBlogs: BlogPost[] = [];
  try {
    const rawDbBlogs = await prisma.blog.findMany({
      orderBy: { createdAt: 'desc' },
    });

    dbBlogs = rawDbBlogs.map((b) => ({
      ...b,
      author: {
        name: b.authorName,
        role: b.authorRole,
        avatar: b.authorAvatar || undefined,
      },
      tags: b.tags ? b.tags.split(',').map((t) => t.trim()) : [],
    }));
  } catch (error) {
    console.warn('[BlogPostPage] Database query fallback:', error);
  }

  // Merge dbBlogs and defaultBlogs without duplicates
  const allPosts = [...dbBlogs];
  defaultBlogs.forEach((def) => {
    if (!allPosts.some((b) => b.slug.toLowerCase() === def.slug.toLowerCase() || b.id === def.id)) {
      allPosts.push(def);
    }
  });

  // Find post by raw slug, decoded slug, or case-insensitive slug
  const post =
    allPosts.find(
      (b) =>
        b.slug === rawSlug ||
        b.slug === decodedSlug ||
        b.slug.toLowerCase().trim() === lowerSlug ||
        b.slug.toLowerCase().trim() === rawSlug.toLowerCase().trim()
    ) || null;

  return { post, allPosts };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { post } = await getBlogPost(slug);

  if (!post) {
    return {
      title: 'Article Not Found | E-Cell UIET MDU',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: `${post.title} | E-Cell UIET MDU`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { post, allPosts } = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = allPosts.filter((b) => b.id !== post.id && b.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <ScrollRevealEffect />
      <main className="bg-white min-h-screen text-ink">
        {/* Article Header & Ambient Hero */}
        <header className="relative overflow-hidden bg-white pt-[140px] pb-10 border-b border-border">
          <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[linear-gradient(71deg,rgba(115,165,202,0.18)_11%,rgba(255,233,169,0.3)_45.7%,rgba(255,255,255,0.6)_64.5%,rgba(255,147,62,0.18)_100%)] [mask-image:linear-gradient(to_bottom,black_60%,transparent_96%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_96%)]">
            <img
              src="/assets/images/ntUDPbezGATca4W8ayYcVbeQbM.svg"
              alt=""
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          <div className="relative max-w-[820px] mx-auto px-6">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-muted mb-6">
              <Link href="/" className="hover:text-ink transition-colors no-underline">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-ink transition-colors no-underline">
                Library
              </Link>
              <span>/</span>
              <span className="text-[#FF933E] font-medium truncate max-w-[200px]">{post.category}</span>
            </nav>

            {/* Category & Read Time */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-[11px] font-mono font-medium text-[#B85507] bg-[#FFF3EA] py-1 px-3 rounded-pill border border-[#FFCB56]/40 uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-xs font-mono text-muted">
                {post.publishedAt} · {post.readTime}
              </span>
            </div>

            {/* Article Headline */}
            <h1 className="font-sans font-medium text-[clamp(32px,5vw,52px)] leading-[1.12] tracking-[-0.04em] text-ink mb-6 [text-wrap:balance]">
              {post.title}
            </h1>

            {/* Excerpt Lead */}
            <p className="text-[clamp(17px,2vw,20px)] leading-[1.6] text-secondary font-normal mb-8 max-w-[760px]">
              {post.excerpt}
            </p>

            {/* Author Byline & Share Button */}
            <div className="flex items-center justify-between py-4 border-t border-border gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EBF3F8] text-[#2C5E83] border border-[#73A5CA]/25 font-bold flex items-center justify-center text-sm">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <div className="font-sans font-semibold text-sm text-ink">{post.author.name}</div>
                  <div className="text-xs text-secondary">{post.author.role}</div>
                </div>
              </div>

              {/* Share Controls */}
              <ShareButton />
            </div>

            {/* Cover Image Banner (only if image URL is provided) */}
            {post.coverImage && post.coverImage.trim() !== '' && (
              <div className="mt-8 rounded-panel overflow-hidden border border-border shadow-[0_4px_24px_rgba(27,29,30,0.06)] bg-[#f8fafc]">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-auto max-h-[480px] object-cover"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </header>

        {/* Article Body Content */}
        <article className="py-12 sm:py-16">
          <div className="max-w-[820px] mx-auto px-6">
            <div className="prose max-w-none text-[#2d3134] font-normal leading-[1.8] space-y-7 text-[17px] sm:text-[18px]">
              {post.content.split('\n\n').map((paragraph, index) => {
                const trimmed = paragraph.trim();

                // Heading 2
                if (trimmed.startsWith('## ')) {
                  return (
                    <h2
                      key={index}
                      className="font-sans font-medium text-2xl sm:text-3xl text-ink pt-8 pb-3 border-b border-border tracking-[-0.02em]"
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
                      className="font-sans font-semibold text-lg sm:text-xl text-ink pt-4 tracking-[-0.015em]"
                    >
                      <span className="text-[#FF933E] mr-1.5">•</span>
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
                      className="border-l-4 border-[#FF933E] bg-[#FFF8E8] py-4 px-6 rounded-r-card text-[18px] sm:text-[19px] font-serif italic text-ink my-8 shadow-xs"
                    >
                      {quoteLines}
                    </blockquote>
                  );
                }

                // Bullet or Numbered List
                if (trimmed.startsWith('- ') || trimmed.startsWith('1. ') || trimmed.startsWith('* ')) {
                  const items = trimmed.split('\n');
                  return (
                    <ul key={index} className="space-y-2.5 my-5 pl-6 list-disc text-[#2d3134] marker:text-[#FF933E]">
                      {items.map((it, idx) => (
                        <li key={idx} className="leading-relaxed">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: it
                                .replace(/^(\d+\.|\-|\*)\s*/, '')
                                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-ink font-semibold">$1</strong>')
                                .replace(/\*(.*?)\*/g, '<em class="italic text-[#B85507]">$1</em>'),
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  );
                }

                // Horizontal Rule
                if (trimmed === '---') {
                  return <hr key={index} className="my-10 border-border" />;
                }

                // Standard Paragraph
                return (
                  <p
                    key={index}
                    className="leading-[1.8] text-[#2d3134]"
                    dangerouslySetInnerHTML={{
                      __html: trimmed
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-ink font-semibold">$1</strong>')
                        .replace(/\*(.*?)\*/g, '<em class="italic text-[#B85507]">$1</em>'),
                    }}
                  />
                );
              })}
            </div>

            {/* Tags Strip */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-6 border-t border-border flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-muted uppercase mr-2">
                  Tagged in:
                </span>
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="bg-soft text-secondary text-xs font-mono py-1 px-3 rounded-pill border border-border"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}

            {/* Author Box Bio Card */}
            <div className="mt-12 bg-[#fafaf9] border border-border rounded-panel p-6 sm:p-8 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between shadow-xs">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#EBF3F8] text-[#2C5E83] border border-[#73A5CA]/25 font-bold flex items-center justify-center shrink-0 text-lg">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <div className="font-sans font-semibold text-base text-ink">{post.author.name}</div>
                  <div className="text-xs font-mono text-[#B85507] mb-1">{post.author.role}</div>
                  <div className="text-xs text-muted">
                    E-Cell Incubator Network · UIET MDU Rohtak
                  </div>
                </div>
              </div>

              <Button href="/contact" variant="blue" size="sm" arrow>
                Connect with Author
              </Button>
            </div>
          </div>
        </article>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-[#fafaf9] border-t border-border">
            <div className="max-w-[1272px] mx-auto px-6">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-border flex-wrap gap-4">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-[#B85507] font-semibold mb-1">
                    More Essays
                  </div>
                  <h2 className="font-sans font-medium text-2xl sm:text-3xl text-ink tracking-[-0.02em]">
                    Continue reading from the incubator
                  </h2>
                </div>
                <Button href="/blog" variant="white" size="sm" arrow>
                  View All Essays
                </Button>
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
