import { Options, Errors, RespBundle, Callback, RespData } from './loader.types';

class Loader {
    constructor(public baseLink: string, public options: Options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp(
        { endpoint, options = {} }: RespBundle,
        callback = (): void => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === Errors.Unauthorized || res.status === Errors.NotFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: Partial<Options>, endpoint: string): string {
        const urlOptions: Partial<Options> = { ...this.options, ...options };
        let url: string = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string): void => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load(method: string, endpoint: string, callback: Callback<RespData>, options: Partial<Options> = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json())
            .then((data: RespData) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
