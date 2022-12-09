import AppLoader from './appLoader';
import { Endpoints, Callback, SourceData, ArticleData, EventType } from './controller.types';

class AppController extends AppLoader {
    public getSources(callback: Callback<SourceData>): void {
        super.getResp(
            {
                endpoint: Endpoints.Sources,
            },
            callback
        );
    }

    public getNews(e: Event, callback: Callback<ArticleData>): void {
        let target: EventType<EventTarget> = e.target;
        const newsContainer: EventType<EventTarget> = e.currentTarget;

        while (target !== newsContainer) {
            if (target instanceof HTMLElement && target.classList.contains('source__item')) {
                const sourceId: string | null = target.getAttribute('data-source-id');
                if (
                    sourceId &&
                    newsContainer instanceof HTMLElement &&
                    newsContainer.getAttribute('data-source') !== sourceId
                ) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: Endpoints.Everything,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target && target instanceof HTMLElement ? target.parentElement : null;
        }
    }
}

export default AppController;
