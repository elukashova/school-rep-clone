/* eslint-disable prettier/prettier */
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
