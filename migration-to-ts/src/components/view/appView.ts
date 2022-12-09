import News from './news/news';
import Sources from './sources/sources';
import { ArticleInfo, ArticleData, SourcesInfo, SourcesData } from './appView.types';

export class AppView {
    constructor(news: News, sources: Sources) {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ArticleInfo): void {
        const values: ArticleData[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourcesInfo): void {
        const values: SourcesData[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
