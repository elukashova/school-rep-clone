import { FunctionParameters } from './news.types';

export function setProperty(parameters: FunctionParameters): void {
    const item: Element | null = parameters.root.querySelector(parameters.selector);
    if (item) {
        item['textContent'] = parameters.value;
    }
}
