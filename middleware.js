import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'systrocode-admin-super-secure-jwt-secret-key-2025-production';

export function middleware(request) {
  // Security headers
  const res = NextResponse.next();
  res.headers.set('X-Frame-Options', 'SAMEORIGIN');
  res.headers.set('X-Content-Type-Options', 'nosniff');
  res.headers.set('Referrer-Policy', 'no-referrer-when-downgrade');
  res.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // Only apply middleware to admin routes
  if (request.nextUrl.pathname.startsWith('/admin') && request.nextUrl.pathname !== '/admin') {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  // Protect API admin routes
  if (request.nextUrl.pathname.startsWith('/api/admin/') && 
      request.nextUrl.pathname !== '/api/admin/auth') {
    
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized - No token provided' },
        { status: 401 }
      );
    }

    try {
      const token = authHeader.substring(7);
      jwt.verify(token, JWT_SECRET);
    return res;
    } catch (error) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized - Invalid token' },
        { status: 401 }
      );
    }
  }

  return res;
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/admin/:path*'
  ]
};
