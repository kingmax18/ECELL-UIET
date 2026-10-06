import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/blogs - List blogs with optional search and category filters
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    const where: Record<string, unknown> = {};

    if (category && category !== 'All') {
      where.category = category;
    }

    if (search) {
      where.OR = [
        { title: { contains: search } },
        { excerpt: { contains: search } },
        { authorName: { contains: search } },
        { tags: { contains: search } },
      ];
    }

    const blogs = await prisma.blog.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });

    const formatted = blogs.map((b) => ({
      ...b,
      author: {
        name: b.authorName,
        role: b.authorRole,
        avatar: b.authorAvatar,
      },
      tags: b.tags ? b.tags.split(',').map((t) => t.trim()) : [],
    }));

    return NextResponse.json({ success: true, data: formatted });
  } catch (error) {
    console.error('[API /blogs GET]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve blogs' },
      { status: 500 }
    );
  }
}

// POST /api/blogs - Create new article
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      slug,
      title,
      excerpt,
      content,
      author,
      category,
      publishedAt,
      readTime,
      coverImage,
      featured,
      tags,
    } = body;

    if (!slug || !title || !excerpt || !content || !coverImage) {
      return NextResponse.json(
        { success: false, error: 'Please provide all required article fields' },
        { status: 400 }
      );
    }

    const newBlog = await prisma.blog.create({
      data: {
        slug: slug.trim(),
        title: title.trim(),
        excerpt: excerpt.trim(),
        content: content.trim(),
        authorName: author?.name || 'UIET Team',
        authorRole: author?.role || 'President, UIET E-Cell',
        authorAvatar: author?.avatar || null,
        category: category || 'General',
        publishedAt: publishedAt || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        readTime: readTime || '5 min read',
        coverImage: coverImage.trim(),
        featured: Boolean(featured),
        tags: Array.isArray(tags) ? tags.join(', ') : tags || null,
      },
    });

    return NextResponse.json({ success: true, data: newBlog }, { status: 201 });
  } catch (error) {
    console.error('[API /blogs POST]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create article' },
      { status: 500 }
    );
  }
}
