export interface NewsArticle {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}

export interface NewsResponse {
  totalArticles: number;
  articles: NewsArticle[];
}

export interface FavoriteArticle extends NewsArticle {
  id: string;
  notes?: string;
  savedAt: string;
}

export type NewsCategory = 
  | 'technology'
  | 'sports'
  | 'entertainment'
  | 'business'
  | 'health'
  | 'science'
  | 'general'; 