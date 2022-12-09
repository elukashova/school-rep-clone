import './news.css';
import { ArticleData } from './news.types';

class News {
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
                    const newsAuthor: Element | null = newsClone.querySelector('.news__meta-author');
                    if (newsAuthor) {
                        newsAuthor.textContent = item.author || item.source.name;
                    }
                    const metaDate: Element | null = newsClone.querySelector('.news__meta-date');
                    if (metaDate) {
                        metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                    }

                    const descriptionTitle: Element | null = newsClone.querySelector('.news__description-title');
                    if (descriptionTitle) {
                        descriptionTitle.textContent = item.title;
                    }

                    const descriptionSource: Element | null = newsClone.querySelector('.news__description-source');
                    if (descriptionSource) {
                        descriptionSource.textContent = item.source.name;
                    }

                    const descriptionContent: Element | null = newsClone.querySelector('.news__description-content');
                    if (descriptionContent) {
                        descriptionContent.textContent = item.description;
                    }

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
