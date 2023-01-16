import Header from '../components/header/header';
import GaragePage from '../components/garage/page-garage';
import WinnersPage from '../components/page-winners';
import Footer from '../components/footer/footer';
import BaseComponent from '../components/base-component';

export default class App {
  private header: Header | undefined;

  private main: BaseComponent<'main'> | undefined;

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

  public replaceMain = (): void => {
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
