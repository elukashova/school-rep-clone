import { ObservedSubject, Options, StringConverterType } from './loader.types';

export default class Loader {
  private static server: string = 'http://127.0.0.1:3000/';

  // constructor() {}

  private static load(url: URL, method: string, options?: Options): Promise<Response> {
    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: options ? JSON.stringify(options) : undefined,
    }).then((res: Response) => this.errorHandler(res));
  }

  private static errorHandler(res: Response): Response {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res;
  }

  public static getData<T>(view: string, options?: Options): Promise<T> {
    const url: URL = Loader.createURL(view);

    if (options) {
      url.search = new URLSearchParams(Loader.makeURLParams(options, true)).toString();
    }

    return this.load(url, 'GET').then((res: Response) => res.json());
  }

  private static createURL = (view: string): URL => {
    const url: URL = new URL(view, Loader.server);
    return url;
  };

  private static makeURLParams(opt: Options, isPrefix: boolean = false): Record<string, string> {
    return Object.keys(opt).reduce(
      (params: Record<string, string>, key: string) => ({
        ...params,
        [!isPrefix ? key : `_${key}`]: Loader.convertToString(opt[key]),
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

  public static update(subject: ObservedSubject): void {
    console.log(subject);
  }
}
