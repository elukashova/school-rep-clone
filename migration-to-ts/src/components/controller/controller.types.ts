/* eslint-disable prettier/prettier */
export enum Endpoints {
  Sources = "sources",
  Everything = "everything",
}

export type Callback<T> = (data?: T) => void;

export interface SourceInfo {
  status: string;
  sources: SourceData[];
}

export interface ArticleInfo {
  status: string;
  totalResults: number;
  articles: ArticleData[];
}

// NOT FOR EXPORT
interface ArticleData {
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

interface SourceData {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}
