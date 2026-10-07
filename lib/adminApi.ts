/**
 * Authenticated Fetch wrapper for Admin operations.
 * Automatically injects Bearer token from localStorage and includes credentials.
 */
export async function adminFetch(input: RequestInfo | URL, init: RequestInit = {}): Promise<Response> {
  const headers = new Headers(init.headers);

  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('ECELL_ADMIN_TOKEN');
    if (token && !headers.has('Authorization')) {
      headers.set('Authorization', `Bearer ${token}`);
    }
  }

  if (init.body && typeof init.body === 'string' && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  return fetch(input, {
    ...init,
    headers,
    credentials: 'include',
  });
}
