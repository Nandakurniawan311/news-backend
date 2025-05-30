import { NextRequest, NextResponse } from 'next/server';
import { fetchTopHeadlines } from '@/utils/gnews';

export const runtime = 'edge';
export const revalidate = 300; // Cache for 5 minutes

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category') || undefined;
    const max = parseInt(searchParams.get('max') || '10');
    const lang = searchParams.get('lang') || 'en';
    const country = searchParams.get('country') || 'us';

    const headlines = await fetchTopHeadlines({
      category,
      max,
      lang,
      country,
    });

    return new NextResponse(JSON.stringify(headlines), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching headlines:', error);
    return new NextResponse(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Failed to fetch headlines' 
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
} 