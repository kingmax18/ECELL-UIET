import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';
import { blogs as defaultBlogs } from '@/data/blogs';
import { prisma } from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE.url || 'https://ecellmdu.online';

  const staticRoutes = [
    '',
    '/about',
    '/events',
    '/team',
    '/blog',
    '/contact',
    '/apply',
    '/faq',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  let blogSlugs: string[] = defaultBlogs.map((b) => b.slug);
  try {
    const dbBlogs = await prisma.blog.findMany({ select: { slug: true, updatedAt: true } });
    if (dbBlogs.length > 0) {
      const dbSlugs = dbBlogs.map((b) => b.slug);
      blogSlugs = Array.from(new Set([...blogSlugs, ...dbSlugs]));
    }
  } catch {
    // Fall back to defaultBlogs on database downtime
  }

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}

