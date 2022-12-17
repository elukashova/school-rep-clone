import { Article } from '../../app/app.types';

export interface INews {
    draw: (data: Article[]) => void;
}

export type FunctionParameters = {
    root: DocumentFragment;
    selector: string;
    value: string;
};
