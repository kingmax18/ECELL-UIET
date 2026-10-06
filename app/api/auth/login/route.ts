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

    const { signToken } = await import('@/lib/auth');
    const token = signToken({
      email: match.email,
      name: match.name,
      role: match.role,
    });

    const response = NextResponse.json({
      success: true,
      token,
      user: {
        email: match.email,
        name: match.name,
        role: match.role,
      },
    });

    // Set secure HTTP-only cookie
    response.cookies.set({
      name: 'ecell_admin_token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error) {
    console.error('[API /auth/login POST]', error);
    return NextResponse.json(
      { success: false, error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
