import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/sponsors - Fetch all sponsors & partners
export async function GET() {
  try {
    const sponsors = await prisma.sponsor.findMany({
      orderBy: { id: 'asc' },
    });
    return NextResponse.json({ success: true, data: sponsors });
  } catch (error) {
    console.error('[API /sponsors GET]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve sponsors' },
      { status: 500 }
    );
  }
}

// POST /api/sponsors - Add a new sponsor
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, url, tier, initials, color } = body;

    if (!name) {
      return NextResponse.json(
        { success: false, error: 'Sponsor name is required' },
        { status: 400 }
      );
    }

    const sponsor = await prisma.sponsor.create({
      data: {
        name: name.trim(),
        url: url || '#',
        tier: tier || 'community',
        initials: initials || name.slice(0, 3).toUpperCase(),
        color: color || '#4928fd',
      },
    });

    return NextResponse.json({ success: true, data: sponsor }, { status: 201 });
  } catch (error) {
    console.error('[API /sponsors POST]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create sponsor' },
      { status: 500 }
    );
  }
}
