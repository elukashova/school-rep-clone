import News from './news/news';
import Sources from './sources/sources';
import Letters from './letters/letters';
import { IAppView } from './appView.types';
import { ResponseArticles, Article, ResponseSources, Source } from '../app/app.types';

export class AppView implements IAppView {
    constructor(
        public news: News = new News(),
        public sources: Sources = new Sources(),
        public letters: Letters = new Letters()
    ) {}

    public drawNews(data: ResponseArticles): void {
        const values: Article[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: ResponseSources): void {
        const values: Source[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }

    public undrawSources(data: ResponseSources): void {
        const values: Source[] = data?.sources ? data?.sources : [];
        this.sources.undraw(values);
    }

    public selectSources(input: string, data: ResponseSources): void {
        const values: Source[] = data?.sources ? data?.sources : [];
        const filtered: Source[] = values.filter((obj: Source) => obj.name[0] === input);
        this.sources.undraw(filtered);
    }

    public drawLetters(data: ResponseSources): void {
        const values: Source[] = data?.sources ? data?.sources : [];
        this.letters.draw(values);
    }
}

export default AppView;
