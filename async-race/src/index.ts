import './styles.css';
import App from './controller/app';

const app: App = new App(document.body);

window.onload = (): void => {
  app.init();
};
