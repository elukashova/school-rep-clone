import { PropertiesToSet } from './news.types';

export function setProperty({ root, selector, value }: PropertiesToSet): void {
    const item: Element | null = root.querySelector(selector);
    if (item) {
        item['textContent'] = value;
    }
}
