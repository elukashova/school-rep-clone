/* eslint-disable prettier/prettier */
export interface ILoader {
  baseLink: string;
  options: Options;
  getResp: (
    { endpoint, options = {} }: RespBundle,
    callback: () => void
  ) => void;
}

export interface Options {
  [key: string]: string;
}

export interface RespBundle {
  endpoint: Endpoints;
  options: Options;
}

export enum Errors {
  Unauthorized = 401,
  NotFound = 404,
}

export type Callback<T> = (data: T) => void;

export interface RespData {
  status: string;
  totalResults: number;
  articles: ArticleData[];
}

//NOT FOR EXPORT
enum Endpoints {
  Sources = "sources",
  Everything = "everything",
}

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

