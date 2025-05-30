import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'API berjalan dengan baik',
    timestamp: new Date().toISOString(),
    endpoints: {
      headlines: '/api/news/headlines',
      search: '/api/news',
    }
  });
} 