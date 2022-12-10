/* eslint-disable prettier/prettier */
import News from './news/news';
import Sources from './sources/sources';

export interface IAppView {
  news: News;
  sources: Sources;
  drawNews: (data: ArticleInfo) => void;
  drawSources: (data: SourcesInfo) => void;
}

export interface ArticleData {
  readonly author: string;
  readonly content: string;
  readonly description: string;
  readonly publishedAt: string;
  readonly source: {
    id: string;
    name: string;
  }
  readonly title: string;
  readonly url: string;
  readonly urlToImage: string;
}

export interface SourcesData {
  readonly category: string;
  readonly country: string;
  readonly description: string;
  readonly id: string;
  readonly language: string;
  readonly name: string;
  readonly url: string;
}

export interface ArticleInfo {
  readonly status: string;
  readonly totalResults: number;
  readonly articles: ArticleData[];
}

export interface SourcesInfo {
  readonly status: string;
  readonly sources: SourcesData[];
}