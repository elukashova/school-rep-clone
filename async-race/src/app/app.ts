import Header from '../view/static/header';
import GaragePage from '../view/page-garage';
import WinnersPage from '../view/page-winners';
import Footer from '../view/static/footer';
import BaseComponent from '../view/static/base-component';

export default class App {
  private header: Header | null = null;

  private main: BaseComponent | null = null;

  private garagePage: GaragePage = new GaragePage();

  private winnersPage: WinnersPage | null = null;

  private footer: Footer = new Footer();

  constructor(private readonly root: HTMLElement) {}

  public init(): void {
    this.root.classList.add('root');
    this.header = new Header(this.root, this.replaceMain);
    this.main = new BaseComponent('main', this.root, 'main');
    this.main.element.append(this.garagePage.element);
    this.root.append(this.footer.element);
  }

  public replaceMain = (e: Event): void => {
    e.preventDefault();
    if (this.main) {
      if (this.garagePage && this.garagePage.element.parentElement === this.main.element) {
        this.winnersPage = new WinnersPage();
        this.main.element.replaceChild(this.winnersPage.element, this.garagePage.element);
      } else if (this.winnersPage && this.winnersPage.element.parentElement === this.main.element) {
        this.main.element.replaceChild(this.garagePage.element, this.winnersPage.element);
      }
    }
  };
}
