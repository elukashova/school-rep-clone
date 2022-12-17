import { Source } from '../../app/app.types';

export interface ISources {
    draw: (data: Source[]) => void;
    undraw: (data: Source[]) => void;
}
