import { NewsResponse } from '@/types/news';

const GNEWS_API_URL = 'https://gnews.io/api/v4';
const API_KEY = '04014659f4e61b26f79420ea7624c1a9';

export async function fetchNews(params: {
  query?: string;
  category?: string;
  max?: number;
  lang?: string;
  country?: string;
}): Promise<NewsResponse> {
  const { query, category, max = 10, lang = 'en', country = 'us' } = params;
  
  const searchParams = new URLSearchParams({
    apikey: API_KEY,
    max: max.toString(),
    lang,
    country,
  });

  if (query) {
    searchParams.append('q', query);
  }

  if (category) {
    searchParams.append('topic', category);
  }

  const url = `${GNEWS_API_URL}/search?${searchParams.toString()}`;
  console.log('Fetching news from:', url);

  const response = await fetch(url);
  
  if (!response.ok) {
    const errorText = await response.text();
    console.error('GNews API error:', {
      status: response.status,
      statusText: response.statusText,
      error: errorText
    });
    throw new Error(`Failed to fetch news: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export async function fetchTopHeadlines(params: {
  category?: string;
  max?: number;
  lang?: string;
  country?: string;
}): Promise<NewsResponse> {
  const { category, max = 10, lang = 'en', country = 'us' } = params;
  
  const searchParams = new URLSearchParams({
    apikey: API_KEY,
    max: max.toString(),
    lang,
    country,
  });

  if (category) {
    searchParams.append('topic', category);
  }

  const url = `${GNEWS_API_URL}/top-headlines?${searchParams.toString()}`;
  console.log('Fetching headlines from:', url);

  const response = await fetch(url);
  
  if (!response.ok) {
    const errorText = await response.text();
    console.error('GNews API error:', {
      status: response.status,
      statusText: response.statusText,
      error: errorText
    });
    throw new Error(`Failed to fetch headlines: ${response.status} ${response.statusText}`);
  }

  return response.json();
} 