import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

// GET /api/settings - Fetch singleton site settings and stats
export async function GET() {
  try {
    let settings = await prisma.siteSetting.findUnique({
      where: { id: 1 },
    });

    if (!settings) {
      settings = await prisma.siteSetting.create({
        data: {
          id: 1,
          bannerEnabled: false,
          bannerText: '',
          bannerLinkText: '',
          bannerLinkUrl: '',
          email: 'ecelluietfs@gmail.com',
          phone: '+91 99999 99999',
          address: 'UIET, Maharshi Dayanand University, Rohtak, Haryana 124001',
          instagram: 'https://instagram.com/ecell_uiet_mdu',
          linkedin: 'https://linkedin.com/company/ecell-uiet-mdu',
          statMembers: 30,
          statEvents: 12,
          statStartups: 5,
          statYears: 3,
        },
      });
    }

    return NextResponse.json({ success: true, data: settings });
  } catch (error) {
    console.error('[API /settings GET]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve settings' },
      { status: 500 }
    );
  }
}

// PUT /api/settings - Update site settings or live stats (ADMIN ONLY)
export async function PUT(request: Request) {
  const auth = requireAdmin(request);
  if (auth.response) {
    return auth.response;
  }

  try {
    const body = await request.json();

    const updated = await prisma.siteSetting.upsert({
      where: { id: 1 },
      create: {
        id: 1,
        ...body,
      },
      update: body,
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error('[API /settings PUT]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update settings' },
      { status: 500 }
    );
  }
}
