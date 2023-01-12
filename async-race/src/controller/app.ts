import Header from '../view/components/header';
import MainGarage from '../view/components/main-garage';
import MainWinners from '../view/components/main-winners';

export default class App {
  private readonly header: Header;

  private readonly garagePage: MainGarage = new MainGarage();

  private winnersPage: MainWinners | null = null;

  constructor(private readonly root: HTMLElement) {
    this.header = new Header(root, this.replaceMain);
    this.root.append(this.garagePage.element);
  }

  public init(): void {
    this.root.classList.add('root');
  }

  public replaceMain = (e: Event): void => {
    e.preventDefault();
    if (this.garagePage && this.garagePage.element.parentElement === this.root) {
      this.winnersPage = new MainWinners();
      this.root.replaceChild(this.winnersPage.element, this.garagePage.element);
    } else if (this.winnersPage && this.winnersPage.element.parentElement === this.root) {
      this.root.replaceChild(this.garagePage.element, this.winnersPage.element);
    }
  };
}
