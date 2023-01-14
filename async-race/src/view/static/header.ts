import './header.styles.css';
import BaseComponent from './base-component';

export default class Header extends BaseComponent {
  private garageBtn: BaseComponent | null = null;

  private winnersBtn: BaseComponent | null = null;

  constructor(private root: HTMLElement, private callback: () => void) {
    super('header', root, 'header');
    this.render();
  }

  private render(): void {
    const container: BaseComponent = new BaseComponent('div', this.element, 'header__container');
    const logoLink: BaseComponent = new BaseComponent('a', container.element, 'header__logo logo');
    const logoImg: BaseComponent = new BaseComponent('img', undefined, 'logo__img', '', {
      src: '../../../assets/logo.png',
    });
    logoLink.element.append(logoImg.element);
    const nav: BaseComponent = new BaseComponent('nav', container.element, 'header__nav nav');
    this.garageBtn = new BaseComponent('button', nav.element, 'nav__garage-btn', 'garage');
    this.garageBtn.element.addEventListener('click', this.navBtnCallback);
    this.winnersBtn = new BaseComponent('button', nav.element, 'nav__winners-btn', 'winners');
    this.winnersBtn.element.addEventListener('click', this.navBtnCallback);
  }

  private navBtnCallback = (): void => {
    this.callback();
  };
}
