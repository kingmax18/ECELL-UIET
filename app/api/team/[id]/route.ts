import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

// PUT /api/team/[id] - Update team member (ADMIN ONLY)
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = requireAdmin(request);
  if (auth.response) {
    return auth.response;
  }

  try {
    const { id } = await params;
    const memberId = parseInt(id, 10);
    if (isNaN(memberId)) {
      return NextResponse.json({ success: false, error: 'Invalid ID' }, { status: 400 });
    }

    const body = await request.json();
    const { name, role, department, year, linkedin, email, photo, order } = body;

    const updated = await prisma.teamMember.update({
      where: { id: memberId },
      data: {
        ...(name && { name: name.trim() }),
        ...(role && { role: role.trim() }),
        ...(department && { department: department.trim() }),
        ...(year !== undefined && { year }),
        ...(linkedin !== undefined && { linkedin }),
        ...(email !== undefined && { email }),
        ...(photo !== undefined && { photo }),
        ...(order !== undefined && { order }),
      },
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error('[API /team/[id] PUT]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update team member' },
      { status: 500 }
    );
  }
}

// DELETE /api/team/[id] - Delete team member (ADMIN ONLY)
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
    const memberId = parseInt(id, 10);
    if (isNaN(memberId)) {
      return NextResponse.json({ success: false, error: 'Invalid ID' }, { status: 400 });
    }

    await prisma.teamMember.delete({
      where: { id: memberId },
    });

    return NextResponse.json({ success: true, message: 'Member deleted successfully' });
  } catch (error) {
    console.error('[API /team/[id] DELETE]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete team member' },
      { status: 500 }
    );
  }
}
