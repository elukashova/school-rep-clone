import { Observer } from '../controller/loader.types';
import BaseComponent from './base-component';

export default class WinnersPage extends BaseComponent<'section'> {
  private observers: Observer[] = [];

  constructor() {
    super('section', undefined, 'section winners');
    WinnersPage.render();
  }

  private static render(): void {
    console.log('winners page');
  }

  public attachObserver(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      console.log('Subject: Observer has been attached already.');
    }
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      console.log('Subject: Nonexistent observer.');
    }

    this.observers.splice(observerIndex, 1);
    console.log('Subject: Detached an observer.');
  }

  public notifyObserver(): void {
    for (let i: number = 0; i < this.observers.length; i += 1) {
      this.observers[i].update(this);
    }
  }
}
