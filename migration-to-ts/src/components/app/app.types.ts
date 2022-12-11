import AppController from '../controller/controller';
import { AppView } from '../view/appView';

export interface IApp {
    controller: AppController;
    view: AppView;
    start: () => void;
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

export type Callback<T> = (data?: T) => void;

//NOT FOR EXPORT
interface ArticleData {
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

interface SourcesData {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}
