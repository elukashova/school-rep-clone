/* eslint-disable prettier/prettier */
export enum Endpoints {
  Sources = "sources",
  Everything = "everything",
}

export type Callback<T> = (data?: T) => void;

export interface SourceData {
  status: string;
  sources: Source[];
}

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

// NOT FOR EXPORT
interface Source {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}
