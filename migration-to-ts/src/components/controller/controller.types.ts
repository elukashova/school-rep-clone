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
  source: ArticleSource;
  title: string;
  url: string;
  urlToImage: string;
}

type SourceData = Pick<DataTypes, 'id' | 'name' | 'description' | 'url' | 'category' | 'language' | 'country'>;
type ArticleSource = Pick<DataTypes, 'id' | 'name'>;

interface DataTypes {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  id: string;
  name: string;
  title: string;
  url: string;
  urlToImage: string;
  category: string;
  language: string;
  country: string;
}

// interface SourceData {
//   id: string;
//   name: string;
//   description: string;
//   url: string;
//   category: string;
//   language: string;
//   country: string;
// }
