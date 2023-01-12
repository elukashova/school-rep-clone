import BaseComponent from './base-component';

export default class MainWinners extends BaseComponent {
  constructor() {
    super('main', undefined, 'main__winners winners');
    this.render();
  }

  private render(): void {
    console.log('winners page');
  }
}
