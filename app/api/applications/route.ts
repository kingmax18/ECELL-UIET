import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

// In-memory rate limiter for application submissions: Max 5 per 10 minutes per IP
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const timestamps = (rateLimitMap.get(ip) || []).filter((t) => now - t < windowMs);
  if (timestamps.length >= 5) {
    return true;
  }
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return false;
}

// GET /api/applications - List recruitment applications (ADMIN ONLY)
export async function GET(request: Request) {
  const auth = requireAdmin(request);
  if (auth.response) {
    return auth.response;
  }

  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const query = searchParams.get('query');

    const where: Record<string, unknown> = {};

    if (status && status !== 'All') {
      where.status = status;
    }

    if (query) {
      where.OR = [
        { name: { contains: query, mode: 'insensitive' } },
        { email: { contains: query, mode: 'insensitive' } },
        { enrollment: { contains: query, mode: 'insensitive' } },
      ];
    }

    const applications = await prisma.application.findMany({
      where,
      orderBy: { submittedAt: 'desc' },
    });

    return NextResponse.json({ success: true, data: applications });
  } catch (error) {
    console.error('[API /applications GET]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve applications' },
      { status: 500 }
    );
  }
}

// POST /api/applications - Submit new student recruitment application (Rate Limited)
export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'local';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many submissions. Please wait a few minutes before trying again.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, enrollment, branchYear, deptInterest, whyJoin, linkedin } = body;

    if (!name || !email || !phone || !branchYear || !deptInterest || !whyJoin) {
      return NextResponse.json(
        { success: false, error: 'Please provide all required fields' },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    const newApplication = await prisma.application.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        enrollment: enrollment ? enrollment.trim() : null,
        branchYear: branchYear.trim(),
        deptInterest: deptInterest.trim(),
        whyJoin: whyJoin.trim(),
        linkedin: linkedin ? linkedin.trim() : null,
        status: 'Pending',
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Application submitted successfully! Our team will contact you soon.',
        data: newApplication,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[API /applications POST]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit application. Please try again.' },
      { status: 500 }
    );
  }
}
