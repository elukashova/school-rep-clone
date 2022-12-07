import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '59573672e8be4a728354bedcc494a09b', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
