import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/blogs/[slug] - Fetch single article
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const blog = await prisma.blog.findUnique({
      where: { slug },
    });

    if (!blog) {
      return NextResponse.json({ success: false, error: 'Article not found' }, { status: 404 });
    }

    const formatted = {
      ...blog,
      author: {
        name: blog.authorName,
        role: blog.authorRole,
        avatar: blog.authorAvatar,
      },
      tags: blog.tags ? blog.tags.split(',').map((t) => t.trim()) : [],
    };

    return NextResponse.json({ success: true, data: formatted });
  } catch (error) {
    console.error('[API /blogs/[slug] GET]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve article' },
      { status: 500 }
    );
  }
}

// PUT /api/blogs/[slug] - Update article
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await request.json();

    const {
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

    const updated = await prisma.blog.update({
      where: { slug },
      data: {
        ...(title && { title: title.trim() }),
        ...(excerpt && { excerpt: excerpt.trim() }),
        ...(content && { content: content.trim() }),
        ...(author?.name && { authorName: author.name }),
        ...(author?.role && { authorRole: author.role }),
        ...(author?.avatar !== undefined && { authorAvatar: author.avatar }),
        ...(category && { category }),
        ...(publishedAt && { publishedAt }),
        ...(readTime && { readTime }),
        ...(coverImage && { coverImage }),
        ...(featured !== undefined && { featured: Boolean(featured) }),
        ...(tags !== undefined && { tags: Array.isArray(tags) ? tags.join(', ') : tags }),
      },
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error('[API /blogs/[slug] PUT]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update article' },
      { status: 500 }
    );
  }
}

// DELETE /api/blogs/[slug] - Delete article
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    await prisma.blog.delete({
      where: { slug },
    });

    return NextResponse.json({ success: true, message: 'Article deleted' });
  } catch (error) {
    console.error('[API /blogs/[slug] DELETE]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete article' },
      { status: 500 }
    );
  }
}
