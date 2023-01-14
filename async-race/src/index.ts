import './styles.css';
import App from './app/app';

const app: App = new App(document.body);

window.onload = (): void => {
  app.init();
};
