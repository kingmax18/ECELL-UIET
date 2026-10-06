import { createHmac, timingSafeEqual } from 'crypto';
import { NextResponse } from 'next/server';

const SECRET = process.env.ADMIN_JWT_SECRET || process.env.ADMIN_PASSWORD || 'ecell-uiet-mdu-secret-salt-2026';
const TOKEN_MAX_AGE_SECONDS = 7 * 24 * 60 * 60; // 7 days

export interface AdminPayload {
  email: string;
  name: string;
  role: string;
  exp: number;
}

// Signs a payload into a secure HMAC-SHA256 token
export function signToken(data: { email: string; name: string; role: string }): string {
  const payload: AdminPayload = {
    ...data,
    exp: Math.floor(Date.now() / 1000) + TOKEN_MAX_AGE_SECONDS,
  };

  const payloadB64 = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const hmac = createHmac('sha256', SECRET).update(payloadB64).digest('base64url');

  return `${payloadB64}.${hmac}`;
}

// Verifies the HMAC-SHA256 token and checks expiration
export function verifyToken(token: string): AdminPayload | null {
  if (!token || typeof token !== 'string') return null;

  const parts = token.split('.');
  if (parts.length !== 2) return null;

  const [payloadB64, signature] = parts;
  const expectedSig = createHmac('sha256', SECRET).update(payloadB64).digest('base64url');

  try {
    const sigBuf = Buffer.from(signature);
    const expectedBuf = Buffer.from(expectedSig);

    if (sigBuf.length !== expectedBuf.length || !timingSafeEqual(sigBuf, expectedBuf)) {
      return null;
    }

    const payloadJson = Buffer.from(payloadB64, 'base64url').toString('utf8');
    const payload: AdminPayload = JSON.parse(payloadJson);

    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      return null; // Expired
    }

    return payload;
  } catch {
    return null;
  }
}

// Checks Authorization header or ecell_admin_token cookie
export function getAdminFromRequest(request: Request): AdminPayload | null {
  // 1. Check Authorization: Bearer <token>
  const authHeader = request.headers.get('authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.slice(7).trim();
    const verified = verifyToken(token);
    if (verified) return verified;
  }

  // 2. Check Cookie: ecell_admin_token=<token>
  const cookieHeader = request.headers.get('cookie');
  if (cookieHeader) {
    const match = cookieHeader.match(/(?:^|;\s*)ecell_admin_token=([^;]+)/);
    if (match && match[1]) {
      const verified = verifyToken(match[1]);
      if (verified) return verified;
    }
  }

  return null;
}

export interface AdminAuthResult {
  authorized: boolean;
  user: AdminPayload | null;
  response: NextResponse | null;
}

// Guard function for route handlers
export function requireAdmin(request: Request): AdminAuthResult {
  const user = getAdminFromRequest(request);
  if (!user) {
    return {
      authorized: false,
      user: null,
      response: NextResponse.json(
        { success: false, error: 'Unauthorized: Admin authentication required.' },
        { status: 401 }
      ),
    };
  }
  return { authorized: true, user, response: null };
}
