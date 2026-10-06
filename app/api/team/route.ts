import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

// GET /api/team - Fetch active team members and founders
export async function GET() {
  try {
    const [team, founders] = await Promise.all([
      prisma.teamMember.findMany({
        orderBy: [{ order: 'asc' }, { id: 'asc' }],
      }),
      prisma.founder.findMany({
        orderBy: { id: 'asc' },
      }),
    ]);

    return NextResponse.json({ success: true, data: { team, founders } });
  } catch (error) {
    console.error('[API /team GET]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve team' },
      { status: 500 }
    );
  }
}

// POST /api/team - Add new team member (ADMIN ONLY)
export async function POST(request: Request) {
  const auth = requireAdmin(request);
  if (auth.response) {
    return auth.response;
  }

  try {
    const body = await request.json();
    const { name, role, department, year, linkedin, email, photo, order } = body;

    if (!name || !role || !department) {
      return NextResponse.json(
        { success: false, error: 'Name, role, and department are required' },
        { status: 400 }
      );
    }

    const member = await prisma.teamMember.create({
      data: {
        name: name.trim(),
        role: role.trim(),
        department: department.trim(),
        year: year || null,
        linkedin: linkedin || null,
        email: email || null,
        photo: photo || null,
        order: typeof order === 'number' ? order : 0,
      },
    });

    return NextResponse.json({ success: true, data: member }, { status: 201 });
  } catch (error) {
    console.error('[API /team POST]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create team member' },
      { status: 500 }
    );
  }
}
