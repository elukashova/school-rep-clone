import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.up.railway.app/', {
            apiKey: '6bf2a25dbb474b1f8ec53f5fc6549c9a', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
