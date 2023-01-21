import Header from '../components/header/header';
import GaragePage from '../components/garage/page-garage';
import WinnersPage from '../components/winners/page-winners';
import Footer from '../components/footer/footer';
import BaseComponent from '../components/base-component';

export default class App {
  private header: Header;

  private main: BaseComponent<'main'>;

  private garagePage: GaragePage = new GaragePage();

  private winnersPage: WinnersPage = new WinnersPage();

  private footer: Footer = new Footer();

  constructor(private readonly root: HTMLElement) {
    this.root.classList.add('root');
    this.header = new Header(this.root, this.replaceMain);
    this.main = new BaseComponent('main', this.root, 'main');
  }

  public init(): void {
    this.main.element.append(this.garagePage.element);
    this.root.append(this.footer.element);
  }

  public replaceMain = (): void => {
    if (this.main) {
      if (this.garagePage && this.garagePage.element.parentElement === this.main.element) {
        this.main.element.replaceChild(this.winnersPage.element, this.garagePage.element);
        this.header.activateGarageBtn();
        this.header.disableWinnersBtn();
      } else if (this.winnersPage && this.winnersPage.element.parentElement === this.main.element) {
        this.main.element.replaceChild(this.garagePage.element, this.winnersPage.element);
        this.header.disableGarageBtn();
        this.header.activateWinnersBtn();
      }
    }
  };
}
