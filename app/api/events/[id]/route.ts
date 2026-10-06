import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// PUT /api/events/[id] - Update event
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const eventId = parseInt(id, 10);
    if (isNaN(eventId)) {
      return NextResponse.json({ success: false, error: 'Invalid ID' }, { status: 400 });
    }

    const {
      title,
      tagline,
      description,
      date,
      time,
      venue,
      mode,
      status,
      tags,
      registrationUrl,
      accentColor,
      category,
    } = body;

    const updated = await prisma.event.update({
      where: { id: eventId },
      data: {
        ...(title && { title: title.trim() }),
        ...(tagline !== undefined && { tagline }),
        ...(description !== undefined && { description }),
        ...(date && { date }),
        ...(time !== undefined && { time }),
        ...(venue !== undefined && { venue }),
        ...(mode !== undefined && { mode }),
        ...(status !== undefined && { status }),
        ...(tags !== undefined && { tags: Array.isArray(tags) ? tags.join(', ') : tags }),
        ...(registrationUrl !== undefined && { registrationUrl }),
        ...(accentColor !== undefined && { accentColor }),
        ...(category !== undefined && { category }),
      },
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error('[API /events/[id] PUT]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update event' },
      { status: 500 }
    );
  }
}

// DELETE /api/events/[id] - Delete event
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const eventId = parseInt(id, 10);

    await prisma.event.delete({
      where: { id: eventId },
    });

    return NextResponse.json({ success: true, message: 'Event deleted' });
  } catch (error) {
    console.error('[API /events/[id] DELETE]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete event' },
      { status: 500 }
    );
  }
}
