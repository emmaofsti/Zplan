import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SITE_PASSWORD = process.env.SITE_PASSWORD || 'zplan2026';

export function middleware(request: NextRequest) {
  // Skip password check if no SITE_PASSWORD is set (empty string)
  if (!process.env.SITE_PASSWORD) {
    return NextResponse.next();
  }

  // Don't protect the password page itself, API routes, or static files
  if (
    request.nextUrl.pathname === '/password' ||
    request.nextUrl.pathname.startsWith('/api/') ||
    request.nextUrl.pathname.startsWith('/_next/') ||
    request.nextUrl.pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Check for auth cookie
  const authCookie = request.cookies.get('site-auth');
  if (authCookie?.value === SITE_PASSWORD) {
    return NextResponse.next();
  }

  // Redirect to password page
  const url = request.nextUrl.clone();
  url.pathname = '/password';
  url.searchParams.set('next', request.nextUrl.pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.svg|app-icon.svg|robots.txt|manifest.json).*)'],
};
