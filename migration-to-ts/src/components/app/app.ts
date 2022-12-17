import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IApp, ArticleInfo, SourcesInfo } from './app.types';

class App implements IApp {
    public controller: AppController;
    public view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    // eslint-disable-next-line max-lines-per-function
    public start(): void {
        const sources = document.querySelector('.sources');
        if (sources) {
            sources.addEventListener('click', (e: Event) =>
                this.controller.getNews(e, (data: ArticleInfo | undefined) => {
                    if (data) {
                        this.view.drawNews(data);
                    }
                })
            );
            this.controller.getSources((data: SourcesInfo | undefined) => {
                if (data) {
                    this.view.drawSources(data);
                    this.view.drawLetters(data);
                }
            });
        }

        const letters = document.querySelector('.letters');
        if (letters) {
            letters.addEventListener('click', (e: Event) => {
                const target: EventTarget | null = e.target;
                if (target && target instanceof HTMLElement) {
                    const id: string = target.id;
                    this.controller.getSources((data: SourcesInfo | undefined) => {
                        if (data) {
                            this.view.selectSources(id, data);
                        }
                    });
                }
            });
        }

        const allSources = document.querySelector('.btn__all-sources');
        if (allSources) {
            allSources.addEventListener('click', () => {
                this.controller.getSources((data: SourcesInfo | undefined) => {
                    if (data) {
                        this.view.undrawSources(data);
                    }
                });
            });
        }
    }
}

export default App;
