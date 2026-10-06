import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

// DELETE /api/gallery/[id] - Remove gallery item (ADMIN ONLY)
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = requireAdmin(request);
  if (auth.response) {
    return auth.response;
  }

  try {
    const { id } = await params;
    const itemId = parseInt(id, 10);
    if (isNaN(itemId)) {
      return NextResponse.json({ success: false, error: 'Invalid ID' }, { status: 400 });
    }

    await prisma.galleryItem.delete({
      where: { id: itemId },
    });

    return NextResponse.json({ success: true, message: 'Gallery item deleted' });
  } catch (error) {
    console.error('[API /gallery/[id] DELETE]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete gallery item' },
      { status: 500 }
    );
  }
}
