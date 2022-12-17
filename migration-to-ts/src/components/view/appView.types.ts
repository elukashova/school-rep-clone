import News from './news/news';
import Sources from './sources/sources';
import { ResponseArticles, ResponseSources } from '../app/app.types';

export interface IAppView {
    news: News;
    sources: Sources;
    drawNews: (data: ResponseArticles) => void;
    drawSources: (data: ResponseSources) => void;
    undrawSources: (data: ResponseSources) => void;
    selectSources: (input: string, data: ResponseSources) => void;
    drawLetters: (data: ResponseSources) => void;
}
