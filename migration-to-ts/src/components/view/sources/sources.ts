import './sources.css';
import { ISources } from './sources.types';
import { Source } from '../../app/app.types';

class Sources implements ISources {
    public draw(data: Source[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: Element | null = document.querySelector('#sourceItemTemp');

        if (sourceItemTemp && sourceItemTemp instanceof HTMLTemplateElement) {
            data.forEach((item: Source) => {
                const sourceClone: Node = sourceItemTemp.content.cloneNode(true);

                if (sourceClone && sourceClone instanceof DocumentFragment) {
                    const itemName: Element | null = sourceClone.querySelector('.source__item-name');
                    if (itemName) {
                        itemName.textContent = item.name;
                    }

                    const sourceItem: Element | null = sourceClone.querySelector('.source__item');
                    if (sourceItem) {
                        sourceItem.setAttribute('data-source-id', item.id);
                    }
                }
                fragment.append(sourceClone);
            });
        }

        const sources: Element | null = document.querySelector('.sources');
        if (sources) {
            sources.append(fragment);
        }
    }

    public undraw(data: Source[]): void {
        const sourcesAll: NodeListOf<Element> = document.querySelectorAll('.source__item');
        const sources: Element | null = document.querySelector('.sources');
        if (sources && sourcesAll) {
            for (let i: number = 0; i < sourcesAll.length; i++) {
                sources.removeChild(sourcesAll[i]);
            }
            this.draw(data);
        }
    }
}

export default Sources;
