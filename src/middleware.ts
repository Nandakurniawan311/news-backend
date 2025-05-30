import { NextRequest, NextResponse } from 'next/server';

export function middleware(_request: NextRequest) {
  const response = NextResponse.next({ request: _request });

  // Allow requests from any origin (you can restrict this to your Android app's domain)
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  response.headers.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  );

  return response;
}

export const config = {
  matcher: '/api/:path*',
}; 