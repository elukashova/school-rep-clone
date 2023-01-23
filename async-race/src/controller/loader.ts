/* eslint-disable max-len */
import { DataType, PageLimit, UrlObj } from './loader.types';

export default class Loader {
  private static server: string = 'http://127.0.0.1:3000/';

  private static errorHandler(res: Response): Response {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res;
  }

  private static async load(url: URL, method: string, params?: DataType): Promise<Response> {
    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: params ? JSON.stringify(params) : undefined,
    }).then((res: Response) => this.errorHandler(res));
  }

  public static async getAndPatchData<T>(method: string, view: string, params?: DataType): Promise<T> {
    const url: URL = Loader.createURL(view);

    if (params) {
      const paramsString: UrlObj = Loader.makeURLParams(params);
      url.search = new URLSearchParams(paramsString).toString();
    }

    return this.load(url, method).then((res: Response) => res.json());
  }

  public static async getPageData<T>(method: string, view: string, params?: DataType): Promise<PageLimit<T>> {
    const url: URL = Loader.createURL(view);

    if (params) {
      const paramsString: UrlObj = Loader.makeURLParams(params, true);
      url.search = new URLSearchParams(paramsString).toString();
    }

    return this.load(url, method).then((res: Response) =>
      // eslint-disable-next-line implicit-arrow-linebreak, prettier/prettier
      res.json().then((data: T[]) => this.elaborateResponse(res, data)));
  }

  private static elaborateResponse = async <T>(res: Response, data: T[]): Promise<PageLimit<T>> => {
    const totalCount: string | null = res.headers.get('X-Total-Count');
    const result: PageLimit<T> = {
      data,
      total: totalCount ? Number(totalCount) : 0,
    };

    return result;
  };

  public static async postAndPutData<T>(method: string, view: string, params?: DataType): Promise<T> {
    const url: URL = Loader.createURL(view);

    return this.load(url, method, params).then((res: Response) => res.json());
  }

  public static async deleteData<T>(view: string): Promise<T> {
    const url: URL = Loader.createURL(view);

    return this.load(url, 'DELETE').then((res: Response) => res.json());
  }

  private static createURL = (view: string): URL => {
    const url: URL = new URL(view, Loader.server);
    return url;
  };

<<<<<<< HEAD
  private static makeURLParams(data: DataType, isUnderscore?: boolean): UrlObj {
    const result: UrlObj = Object.keys(data).reduce(
      (newObj: UrlObj, key: string) => ({
        ...newObj,
        [isUnderscore ? `_${key}` : key]: data[key].toString(),
=======
  private static makeURLParams(data: DataType, underscore?: boolean): UrlObj {
    const result: UrlObj = Object.keys(data).reduce(
      (newObj: UrlObj, key: string) => ({
        ...newObj,
        [underscore ? `_${key}` : key]: data[key].toString(),
>>>>>>> 9ff38c6 (refactor: implement clean code rules)
      }),
      {},
    );

    return result;
  }
}
