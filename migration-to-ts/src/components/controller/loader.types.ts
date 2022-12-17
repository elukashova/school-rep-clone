import { Endpoints } from './controller.types';

export interface ILoader {
    getResp: ({ endpoint, options = {} }: RespBundle, callback: () => void) => void;
}

export interface Options {
    [key: string]: string;
}

export interface RespBundle {
    endpoint: Endpoints;
    options: Options;
}

export enum Errors {
    Unauthorized = 401,
    NotFound = 404,
}

export type Callback<T> = (data: T) => void;
