import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/applications - List recruitment applications with filtering
export async function GET(request: Request) {
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
        { name: { contains: query } },
        { email: { contains: query } },
        { enrollment: { contains: query } },
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

// POST /api/applications - Submit new student recruitment application
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, enrollment, branchYear, deptInterest, whyJoin, linkedin } = body;

    if (!name || !email || !phone || !branchYear || !deptInterest || !whyJoin) {
      return NextResponse.json(
        { success: false, error: 'Please provide all required fields' },
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
