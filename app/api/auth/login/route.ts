import { NextResponse } from 'next/server';

// POST /api/auth/login - Clean Admin Authentication
export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const cleanEmail = email?.trim().toLowerCase();

    // Official E-Cell administrative credentials
    const validPasswords = [
      process.env.ADMIN_PASSWORD,
      'LSSecelluiet@admin',
      'ecell@admin2026',
    ].filter(Boolean);

    const match = cleanEmail === 'ecelluietfs@gmail.com' && validPasswords.includes(password)
      ? {
          email: 'ecelluietfs@gmail.com',
          name: 'Lakshay',
          role: 'Super Admin',
        }
      : null;

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

    // Set secure HTTP-only session cookie (cleared when browser session ends)
    response.cookies.set({
      name: 'ecell_admin_token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
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
