import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

// GET /api/events - Retrieve events
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    const where: Record<string, unknown> = {};
    if (status) {
      where.status = status;
    }

    const events = await prisma.event.findMany({
      where,
      orderBy: { date: 'desc' },
    });

    // Parse comma-separated tags back into arrays
    const formatted = events.map((ev) => ({
      ...ev,
      tags: ev.tags ? ev.tags.split(',').map((t) => t.trim()) : [],
    }));

    return NextResponse.json({ success: true, data: formatted });
  } catch (error) {
    console.error('[API /events GET]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve events' },
      { status: 500 }
    );
  }
}

// POST /api/events - Create new event (ADMIN ONLY)
export async function POST(request: Request) {
  const auth = requireAdmin(request);
  if (auth.response) {
    return auth.response;
  }

  try {
    const body = await request.json();

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

    if (!title || !date) {
      return NextResponse.json(
        { success: false, error: 'Title and date are required' },
        { status: 400 }
      );
    }

    const newEvent = await prisma.event.create({
      data: {
        title: title.trim(),
        tagline: tagline || null,
        description: description || null,
        date: date.trim(),
        time: time || null,
        venue: venue || null,
        mode: mode || 'Offline',
        status: status || 'upcoming',
        tags: Array.isArray(tags) ? tags.join(', ') : tags || null,
        registrationUrl: registrationUrl || null,
        accentColor: accentColor || '#0047FF',
        category: category || 'General',
      },
    });

    return NextResponse.json(
      { success: true, data: newEvent },
      { status: 201 }
    );
  } catch (error) {
    console.error('[API /events POST]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create event' },
      { status: 500 }
    );
  }
}
