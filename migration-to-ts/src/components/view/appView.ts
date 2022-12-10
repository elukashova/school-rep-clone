import News from './news/news';
import Sources from './sources/sources';
import Letters from './letters/letters';
import { IAppView, ArticleInfo, ArticleData, SourcesInfo, SourcesData } from './appView.types';

export class AppView implements IAppView {
    public news: News;
    public sources: Sources;
    public letters: Letters;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
        this.letters = new Letters();
    }

    public drawNews(data: ArticleInfo): void {
        const values: ArticleData[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: SourcesInfo): void {
        const values: SourcesData[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }

    public undrawSources(data: SourcesInfo): void {
        const values: SourcesData[] = data?.sources ? data?.sources : [];
        this.sources.undraw(values);
    }

    public selectSources(input: string, data: SourcesInfo): void {
        const values: SourcesData[] = data?.sources ? data?.sources : [];
        const filtered: SourcesData[] = values.filter((obj: SourcesData) => obj.name[0] === input);
        this.sources.undraw(filtered);
    }

    public drawLetters(data: SourcesInfo): void {
        const values: SourcesData[] = data?.sources ? data?.sources : [];
        this.letters.draw(values);
    }
}

export default AppView;
