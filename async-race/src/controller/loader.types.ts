export type CarType = {
  name: string;
  color: string;
  id: number;
};

// export type JSONValue = string | number | boolean | number[];

// export type JSONObject = {
//   [key: string]: JSONValue;
// };

export type CarsData = CarType[];

export type Options = Partial<Record<string, string | number | boolean | number[]>>;

export type StringConverterType = string | number | boolean | number[] | undefined;

// export enum Errors {
//   BadRequest = 400,
//   Unauthorized = 401,
//   TooManyRequests = 429,
//   InternalServer = 500,
// }

export interface ObservedSubject {
  attachObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObserver(): void;
}

export interface Observer {
  update(subject: ObservedSubject, e?: Event): void;
}
