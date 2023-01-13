import BaseComponent from './static/base-component';

export default class WinnersPage extends BaseComponent {
  constructor() {
    super('section', undefined, 'section winners');
    this.render();
  }

  private render(): void {
    console.log('winners page');
  }
}
