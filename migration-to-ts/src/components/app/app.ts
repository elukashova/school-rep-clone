import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { ArticleInfo, SourcesInfo } from './app.types';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
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
                }
            });
        }
    }
}

export default App;
