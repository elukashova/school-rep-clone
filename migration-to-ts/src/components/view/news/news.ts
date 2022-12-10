/* eslint-disable max-lines-per-function */
import './news.css';
import { INews, ArticleData } from './news.types';
import { setProperty } from './news.function';

class News implements INews {
    public draw(data: ArticleData[]): void {
        const news: ArticleData[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: Element | null = document.querySelector('#newsItemTemp');

        if (newsItemTemp instanceof HTMLTemplateElement) {
            news.forEach((item: ArticleData, idx: number) => {
                const newsClone: Node = newsItemTemp.content.cloneNode(true);
                if (newsClone && newsClone instanceof DocumentFragment) {
                    if (idx % 2) {
                        const newsItem: Element | null = newsClone.querySelector('.news__item');
                        newsItem?.classList.add('alt');
                    }
                    const newsPhoto: Element | null = newsClone.querySelector('.news__meta-photo');
                    if (newsPhoto && newsPhoto instanceof HTMLElement) {
                        newsPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                    }

                    setProperty(newsClone, '.news__meta-author', 'textContent', item.author || item.source.name);
                    setProperty(
                        newsClone,
                        '.news__meta-date',
                        'textContent',
                        item.publishedAt.slice(0, 10).split('-').reverse().join('-')
                    );
                    setProperty(newsClone, '.news__description-title', 'textContent', item.title);
                    setProperty(newsClone, '.news__description-source', 'textContent', item.source.name);
                    setProperty(newsClone, '.news__description-content', 'textContent', item.description);

                    const readMore: Element | null = newsClone.querySelector('.news__read-more a');
                    if (readMore) {
                        readMore.setAttribute('href', item.url);
                    }
                }
                fragment.append(newsClone);
            });
        }

        const newsBlock: Element | null = document.querySelector('.news');
        if (newsBlock) {
            newsBlock.innerHTML = '';
            newsBlock.appendChild(fragment);
        }
    }
}

export default News;
