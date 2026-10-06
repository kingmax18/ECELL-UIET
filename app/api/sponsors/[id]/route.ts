import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// PUT /api/sponsors/[id] - Update sponsor
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const sponsorId = parseInt(id, 10);
    if (isNaN(sponsorId)) {
      return NextResponse.json({ success: false, error: 'Invalid ID' }, { status: 400 });
    }

    const body = await request.json();
    const { name, url, tier, initials, color } = body;

    const updated = await prisma.sponsor.update({
      where: { id: sponsorId },
      data: {
        ...(name && { name: name.trim() }),
        ...(url !== undefined && { url }),
        ...(tier !== undefined && { tier }),
        ...(initials !== undefined && { initials }),
        ...(color !== undefined && { color }),
      },
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error('[API /sponsors/[id] PUT]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update sponsor' },
      { status: 500 }
    );
  }
}

// DELETE /api/sponsors/[id] - Delete sponsor
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const sponsorId = parseInt(id, 10);
    if (isNaN(sponsorId)) {
      return NextResponse.json({ success: false, error: 'Invalid ID' }, { status: 400 });
    }

    await prisma.sponsor.delete({
      where: { id: sponsorId },
    });

    return NextResponse.json({ success: true, message: 'Sponsor deleted successfully' });
  } catch (error) {
    console.error('[API /sponsors/[id] DELETE]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete sponsor' },
      { status: 500 }
    );
  }
}
