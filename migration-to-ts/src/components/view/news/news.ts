/* eslint-disable max-lines-per-function */
import './news.css';
import { INews } from './news.types';
import { setProperty } from './news.function';
import { Article } from '../../app/app.types';

class News implements INews {
    public draw(data: Article[]): void {
        const news: Article[] = data.length >= 10 ? data.filter((_item: Article, idx: number) => idx < 10) : data;
        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: Element | null = document.querySelector('#newsItemTemp');

        if (newsItemTemp instanceof HTMLTemplateElement) {
            news.forEach((item: Article, idx: number) => {
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

                    setProperty({
                        root: newsClone,
                        selector: '.news__meta-author',
                        value: item.author || item.source.name,
                    });
                    setProperty({
                        root: newsClone,
                        selector: '.news__meta-date',
                        value: item.publishedAt.slice(0, 10).split('-').reverse().join('-'),
                    });
                    setProperty({ root: newsClone, selector: '.news__description-title', value: item.title });
                    setProperty({ root: newsClone, selector: '.news__description-source', value: item.source.name });
                    setProperty({ root: newsClone, selector: '.news__description-content', value: item.description });

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
