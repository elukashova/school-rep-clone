/* eslint-disable prettier/prettier */
export interface ArticleData {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  }
  title: string;
  url: string;
  urlToImage: string;
}

export interface SourcesData {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}

export interface ArticleInfo {
  status: string;
  totalResults: number;
  articles: ArticleData[];
}

export interface SourcesInfo {
  status: string;
  sources: SourcesData[];
}