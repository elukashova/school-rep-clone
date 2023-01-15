import { DataParams, StringConverterType } from './loader.types';

export default class Loader {
  private static server: string = 'http://127.0.0.1:3000/';

  // constructor() {}

  private static load(url: URL, method: string, params?: DataParams): Promise<Response> {
    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: params ? JSON.stringify(params) : undefined,
    }).then((res: Response) => this.errorHandler(res));
  }

  public static getAndPatch<T>(method: string, view: string, params?: DataParams): Promise<T> {
    const url: URL = Loader.createURL(view);

    if (params) {
      url.search = new URLSearchParams(Loader.makeURLParams(params)).toString();
    }

    return this.load(url, method).then((res: Response) => res.json());
  }

  public static postData<T>(view: string, params?: DataParams): Promise<T> {
    const url: URL = Loader.createURL(view);

    return this.load(url, 'POST', params).then((res: Response) => res.json());
  }

  // TODO: export utilities to a separate file
  private static errorHandler(res: Response): Response {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res;
  }

  private static createURL = (view: string): URL => {
    const url: URL = new URL(view, Loader.server);
    return url;
  };

  private static makeURLParams(par: DataParams, isPrefix: boolean = false): Record<string, string> {
    return Object.keys(par).reduce(
      (params: Record<string, string>, key: string) => ({
        ...params,
        [!isPrefix ? key : `_${key}`]: Loader.convertToString(par[key]),
      }),
      {},
    );
  }

  private static convertToString(value: StringConverterType): string {
    let result: string = '';
    if (value) {
      result = typeof value === 'string' ? value : value.toString();
    }
    return result;
  }
}
