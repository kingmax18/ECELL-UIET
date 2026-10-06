import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

// GET /api/gallery - Fetch all gallery items
export async function GET() {
  try {
    const items = await prisma.galleryItem.findMany({
      orderBy: { id: 'desc' },
    });
    return NextResponse.json({ success: true, data: items });
  } catch (error) {
    console.error('[API /gallery GET]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve gallery items' },
      { status: 500 }
    );
  }
}

// POST /api/gallery - Create gallery item (ADMIN ONLY)
export async function POST(request: Request) {
  const auth = requireAdmin(request);
  if (auth.response) {
    return auth.response;
  }

  try {
    const body = await request.json();
    const { title, category, image, description } = body;

    if (!title || !image) {
      return NextResponse.json(
        { success: false, error: 'Title and image are required' },
        { status: 400 }
      );
    }

    const item = await prisma.galleryItem.create({
      data: {
        title: title.trim(),
        category: category || 'Events',
        image: image.trim(),
        description: description || null,
      },
    });

    return NextResponse.json({ success: true, data: item }, { status: 201 });
  } catch (error) {
    console.error('[API /gallery POST]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create gallery item' },
      { status: 500 }
    );
  }
}
