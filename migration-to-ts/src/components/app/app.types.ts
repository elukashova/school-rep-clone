import AppController from '../controller/controller';
import { AppView } from '../view/appView';

export interface IApp {
    controller: AppController;
    view: AppView;
    start: () => void;
}

export interface ResponseArticles extends ApiResponse {
    totalResults: number;
    articles: Article[];
}

export interface ResponseSources extends ApiResponse {
    status: string;
    sources: Source[];
}

export type Callback<T> = (data?: T) => void;

//NOT FOR EXPORT
interface Article {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}

interface Source {
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
