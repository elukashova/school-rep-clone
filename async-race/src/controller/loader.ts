import { DataParams, PageType, UrlObj } from './loader.types';

export default class Loader {
  private static server: string = 'http://127.0.0.1:3000/';

  // constructor() {}

  private static async load(url: URL, method: string, params?: DataParams): Promise<Response> {
    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: params ? JSON.stringify(params) : undefined,
    }).then((res: Response) => this.errorHandler(res));
  }

  // eslint-disable-next-line max-len
  public static async getAndPatchData<T>(method: string, view: string, params?: DataParams): Promise<T> {
    const url: URL = Loader.createURL(view);

    if (params) {
      const paramsString: UrlObj = Loader.makeURLParams(params);
      url.search = new URLSearchParams(paramsString).toString();
    }
    return this.load(url, method).then((res: Response) => res.json());
  }

  // eslint-disable-next-line max-len
  public static async getPageData<T>(method: string, view: string, params?: DataParams): Promise<PageType<T>> {
    const url: URL = Loader.createURL(view);

    if (params) {
      const paramsString: UrlObj = Loader.makeURLParams(params, true);
      url.search = new URLSearchParams(paramsString).toString();
    }

    return this.load(url, method).then((res: Response) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      res.json().then((data: T[]) => {
        const totalCount = res.headers.get('X-Total-Count');
        // console.log(res.headers);
        const result: PageType<T> = {
          data,
          total: totalCount ? Number(totalCount) : 0,
        };
        return result;
        // eslint-disable-next-line prettier/prettier
      }));
  }

  // eslint-disable-next-line max-len
  public static async postAndPutData<T>(method: string, view: string, params?: DataParams): Promise<T> {
    const url: URL = Loader.createURL(view);

    return this.load(url, method, params).then((res: Response) => res.json());
  }

  public static async deleteData<T>(view: string): Promise<T> {
    const url: URL = Loader.createURL(view);

    return this.load(url, 'DELETE').then((res: Response) => res.json());
  }

  // TODO: export utilities to a separate file?
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

  private static makeURLParams(par: DataParams, isUnderline?: boolean): UrlObj {
    const result: UrlObj = Object.keys(par).reduce(
      (params: UrlObj, key: string) => ({
        ...params,
        [isUnderline ? `_${key}` : key]: par[key].toString(),
      }),
      {},
    );
    return result;
  }
}
