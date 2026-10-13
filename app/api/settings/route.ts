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
    console.warn('[API /settings GET] Database cold-start or unavailable, serving fallback');
    return NextResponse.json({
      success: true,
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
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// PUT /api/settings - Update site settings or live stats (ADMIN ONLY)
export async function PUT(request: Request) {
  const auth = requireAdmin(request);
  if (auth.response) {
    return auth.response;
  }

  try {
    const body = await request.json();

    const {
      bannerEnabled,
      bannerText,
      bannerLinkText,
      bannerLinkUrl,
      email,
      phone,
      address,
      instagram,
      linkedin,
      twitter,
      youtube,
      statMembers,
      statEvents,
      statStartups,
      statYears,
      announcementBanner,
      siteInfo,
    } = body;

    const data: Record<string, unknown> = {};

    if (bannerEnabled !== undefined) data.bannerEnabled = Boolean(bannerEnabled);
    else if (announcementBanner?.enabled !== undefined) data.bannerEnabled = Boolean(announcementBanner.enabled);

    if (bannerText !== undefined) data.bannerText = bannerText;
    else if (announcementBanner?.text !== undefined) data.bannerText = announcementBanner.text;

    if (bannerLinkText !== undefined) data.bannerLinkText = bannerLinkText;
    else if (announcementBanner?.linkText !== undefined) data.bannerLinkText = announcementBanner.linkText;

    if (bannerLinkUrl !== undefined) data.bannerLinkUrl = bannerLinkUrl;
    else if (announcementBanner?.linkUrl !== undefined) data.bannerLinkUrl = announcementBanner.linkUrl;

    if (email !== undefined) data.email = email;
    else if (siteInfo?.email !== undefined) data.email = siteInfo.email;

    if (phone !== undefined) data.phone = phone;
    else if (siteInfo?.phone !== undefined) data.phone = siteInfo.phone;

    if (address !== undefined) data.address = address;
    else if (siteInfo?.address !== undefined) data.address = siteInfo.address;

    if (instagram !== undefined) data.instagram = instagram;
    else if (siteInfo?.instagram !== undefined) data.instagram = siteInfo.instagram;

    if (linkedin !== undefined) data.linkedin = linkedin;
    else if (siteInfo?.linkedin !== undefined) data.linkedin = siteInfo.linkedin;

    if (twitter !== undefined) data.twitter = twitter;
    else if (siteInfo?.twitter !== undefined) data.twitter = siteInfo.twitter;

    if (youtube !== undefined) data.youtube = youtube;
    else if (siteInfo?.youtube !== undefined) data.youtube = siteInfo.youtube;

    if (typeof statMembers === 'number') data.statMembers = statMembers;
    if (typeof statEvents === 'number') data.statEvents = statEvents;
    if (typeof statStartups === 'number') data.statStartups = statStartups;
    if (typeof statYears === 'number') data.statYears = statYears;

    const updated = await prisma.siteSetting.upsert({
      where: { id: 1 },
      create: {
        id: 1,
        ...data,
      },
      update: data,
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
