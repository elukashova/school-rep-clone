import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IApp, ResponseArticles, ResponseSources } from './app.types';

class App implements IApp {
    private controller: AppController = new AppController();
    private view: AppView = new AppView();

    // eslint-disable-next-line max-lines-per-function
    public start(): void {
        const sources: Element | null = document.querySelector('.sources');
        if (sources) {
            sources.addEventListener('click', (e: Event) =>
                this.controller.getNews(e, (data: ResponseArticles | undefined) => {
                    if (data) {
                        this.view.drawNews(data);
                    }
                })
            );

            this.controller.getSources((data: ResponseSources | undefined) => {
                if (data) {
                    this.view.drawSources(data);
                    this.view.drawLetters(data);
                }
            });
        }

        const letters: Element | null = document.querySelector('.letters');
        if (letters) {
            letters.addEventListener('click', (e: Event) => {
                const target: EventTarget | null = e.target;
                if (target && target instanceof HTMLElement) {
                    const id: string = target.id;
                    this.controller.getSources((data: ResponseSources | undefined) => {
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
                this.controller.getSources((data: ResponseSources | undefined) => {
                    if (data) {
                        this.view.undrawSources(data);
                    }
                });
            });
        }
    }
}

export default App;
