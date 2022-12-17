export enum Endpoints {
    Sources = 'sources',
    Everything = 'everything',
}

export type Callback<T> = (data?: T) => void;
