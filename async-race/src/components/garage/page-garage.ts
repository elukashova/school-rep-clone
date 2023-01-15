import './page-garage.styles.css';
import BaseComponent from '../base-component';
import RaceTrack from './race-track/race-track';
import { PageStatus } from './page-garage.types';
import { CarType, CarsData, Settings } from './race-track/race-track.types';
import { Observer, Options } from '../../controller/loader.types';
import Loader from '../../controller/loader';

export default class GaragePage extends BaseComponent<'section'> {
  private observers: Observer[] = [];

  private createInputText: BaseComponent<'input'> | null = null;

  private createInputColor: BaseComponent<'input'> | null = null;

  private createBtn: BaseComponent<'button'> | null = null;

  private updateInputText: BaseComponent<'input'> | null = null;

  private updateInputColor: BaseComponent<'input'> | null = null;

  private updateBtn: BaseComponent<'button'> | null = null;

  private raceBtn: BaseComponent<'button'> | null = null;

  private resetBtn: BaseComponent<'button'> | null = null;

  private generateBtn: BaseComponent<'button'> | null = null;

  private carsLimitElement: BaseComponent<'span'> | null = null;

  private carsLimit: number = 4;

  private currentPageElement: BaseComponent<'span'> | null = null;

  private currentPage: number = 1;

  private currentPageStatus: PageStatus = {
    page: 1,
    limit: 7,
  };

  constructor() {
    super('section', undefined, 'section garage');
    this.render();
  }

  private render(): void {
    GaragePage.getCars(this.currentPageStatus).then((cars: CarsData) => {
      this.renderSettingsBlock(cars.length);
      this.renderRaceBlock(cars);
    });
  }

  // creating block with cars settings
  // eslint-disable-next-line max-lines-per-function
  private renderSettingsBlock(total: number): void {
    this.carsLimitElement = new BaseComponent('span', this.element, 'garage__race_cars-limit', `Garage (${total})`);
    const settingsWrapper: BaseComponent<'div'> = new BaseComponent('div', this.element, 'garage__settings settings');
    const carsSettingsWrapper: BaseComponent<'div'> = new BaseComponent(
      'div',
      settingsWrapper.element,
      'settings__cars',
    );
    const createSettingWrapper: BaseComponent<'div'> = new BaseComponent(
      'div',
      carsSettingsWrapper.element,
      'settings__create-wrapper',
    );
    this.createInputText = GaragePage.SettingsInput({
      parent: createSettingWrapper,
      name: 'create',
      type: 'text',
    });
    this.createInputColor = GaragePage.SettingsInput({
      parent: createSettingWrapper,
      name: 'create',
      type: 'color',
    });
    this.createBtn = GaragePage.SettingsBtn({ parent: createSettingWrapper, name: 'create', type: 'submit' });

    const updateSettingWrapper: BaseComponent<'div'> = new BaseComponent(
      'div',
      carsSettingsWrapper.element,
      'settings__update-wrapper',
    );
    this.updateInputText = GaragePage.SettingsInput({
      parent: updateSettingWrapper,
      name: 'create',
      type: 'text',
    });
    this.updateInputColor = GaragePage.SettingsInput({
      parent: updateSettingWrapper,
      name: 'create',
      type: 'color',
    });
    this.updateBtn = GaragePage.SettingsBtn({ parent: updateSettingWrapper, name: 'update', type: 'submit' });

    const btnsWrapper: BaseComponent<'div'> = new BaseComponent(
      'div',
      settingsWrapper.element,
      'settings__btns-wrapper',
    );
    this.raceBtn = GaragePage.SettingsBtn({ parent: btnsWrapper, name: 'race', type: 'submit' });
    this.resetBtn = GaragePage.SettingsBtn({ parent: btnsWrapper, name: 'reset', type: 'reset' });
    this.generateBtn = GaragePage.SettingsBtn({
      parent: btnsWrapper,
      name: 'generate trains',
      type: 'submit',
    });
  }

  private static SettingsInput(data: Settings): BaseComponent<'input'> {
    const txtInput = new BaseComponent('input', data.parent.element, `settings__${data.name}_input-${data.type}`, '', {
      type: `${data.type}`,
    });
    return txtInput;
  }

  private static SettingsBtn(data: Settings): BaseComponent<'button'> {
    const button = new BaseComponent('button', data.parent.element, `settings__${data.name}_btn`, `${data.name}`, {
      type: `${data.type}`,
    });
    return button;
  }

  // creating block with race
  private renderRaceBlock(cars: CarType[]): void {
    const raceFieldWrapper: BaseComponent<'div'> = new BaseComponent('div', this.element, 'garage__race-wrapper');
    this.currentPageElement = new BaseComponent(
      'span',
      raceFieldWrapper.element,
      'garage__race_current-page',
      `Page #${this.currentPage}`,
    );

    cars.forEach((car) => {
      const raceField: BaseComponent<'div'> = new BaseComponent('div', this.element, 'garage__race-field race');
      const track: RaceTrack = new RaceTrack(car);
      raceField.element.append(track.element);
    });
  }

  private static getCars = (options: Options): Promise<CarsData> => Loader.getAndPatch('GET', 'garage', options);

  // public attachObserver(observer: Observer): void {
  //   const isExist = this.observers.includes(observer);
  //   if (isExist) {
  //     console.log('Subject: Observer has been attached already.');
  //   }
  //   this.observers.push(observer);
  // }

  // public removeObserver(observer: Observer): void {
  //   const observerIndex = this.observers.indexOf(observer);
  //   if (observerIndex === -1) {
  //     console.log('Subject: Nonexistent observer.');
  //   }

  //   this.observers.splice(observerIndex, 1);
  //   console.log('Subject: Detached an observer.');
  // }

  // public notifyObserver(): void {
  //   for (let i: number = 0; i < this.observers.length; i += 1) {
  //     this.observers[i].update(this);
  //   }
  // }
}
