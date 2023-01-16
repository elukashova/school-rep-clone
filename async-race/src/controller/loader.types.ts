export type DataParams = {
  [key: string]: string | number | boolean | number[];
};

export type UrlObj = {
  [key: string]: string;
};

export type EngineResp = {
  velocity: number;
  distance: number;
};

export enum Errors {
  Error400 = 'Bad Request',
  Error404 = 'Not Found',
  Error429 = 'Too Many Requests',
  Error500 = 'Internal Server Error',
}

export interface ObservedSubject {
  attachObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObserver(): Promise<void>;
}

export interface Observer {
  update(subject: ObservedSubject): Promise<void>;
}
