export interface IApp {
    start: () => void;
}

export interface ResponseArticles extends ApiResponse {
    totalResults: number;
    articles: Article[];
}

export interface ResponseSources extends ApiResponse {
    sources: Source[];
}

export type Callback<T> = (data?: T) => void;

export interface Article {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: Pick<Source, 'id' | 'name'>;
    title: string;
    url: string;
    urlToImage: string;
}

export interface Source {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

interface ApiResponse {
    status: string;
}
