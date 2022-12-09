import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.up.railway.app/', {
            apiKey: '59573672e8be4a728354bedcc494a09b', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
