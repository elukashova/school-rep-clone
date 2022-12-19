/* eslint-disable max-lines-per-function */
import './letters.css';
import { ILetters } from './letters.types';
import { Source } from '../../app/app.types';

class Letters implements ILetters {
    public draw(data: Source[]): void {
        const chars: string[] = data.map((source: Source) => source.name[0]);
        const uniqueChars: string[] = [...new Set(chars)];

        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceLettersTemp: Element | null = document.querySelector('#sourceLettersTemp');

        if (sourceLettersTemp && sourceLettersTemp instanceof HTMLTemplateElement) {
            uniqueChars.forEach((item: string) => {
                const sourceClone: Node = sourceLettersTemp.content.cloneNode(true);

                if (sourceClone && sourceClone instanceof DocumentFragment) {
                    const letterText: Element | null = sourceClone.querySelector('.source__letter-text');
                    if (letterText) {
                        letterText.textContent = item;
                        letterText.setAttribute('letter', item);
                    }

                    const sourceLetter: Element | null = sourceClone.querySelector('.source__letter');
                    if (sourceLetter) {
                        sourceLetter.setAttribute('id', item);
                    }
                }
                fragment.append(sourceClone);
            });
        }

        const root: Element | null = document.querySelector('.letters');
        if (root) {
            root.append(fragment);
        }
    }
}

export default Letters;
