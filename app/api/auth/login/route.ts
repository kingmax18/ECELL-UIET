import { NextResponse } from 'next/server';

// POST /api/auth/login - Clean Admin Authentication
export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const cleanEmail = email?.trim().toLowerCase();

    // Default E-Cell administrative credentials
    const ADMIN_CREDENTIALS = [
      {
        email: 'ecelluietfs@gmail.com',
        password: process.env.ADMIN_PASSWORD || 'ecell@admin2026',
        name: 'Lakshay',
        role: 'Super Admin',
      },
      {
        email: 'ananya@ecell.in',
        password: process.env.ADMIN_PASSWORD || 'ecell@admin2026',
        name: 'Ananya Sharma',
        role: 'President / Admin',
      },
      {
        email: 'admin@ecell.in',
        password: process.env.ADMIN_PASSWORD || 'ecell@admin2026',
        name: 'Admin',
        role: 'Admin',
      },
    ];

    const match = ADMIN_CREDENTIALS.find(
      (u) => u.email === cleanEmail && u.password === password
    );

    if (!match) {
      return NextResponse.json(
        { success: false, error: 'Invalid email or password.' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        email: match.email,
        name: match.name,
        role: match.role,
      },
    });
  } catch (error) {
    console.error('[API /auth/login POST]', error);
    return NextResponse.json(
      { success: false, error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
