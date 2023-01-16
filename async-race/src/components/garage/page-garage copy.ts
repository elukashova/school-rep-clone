import './page-garage.styles.css';
import BaseComponent from '../base-component';
import RaceTrack from './race-track/race-track';
import { PageStatus } from './page-garage.types';
import { CarType, CarsData, Settings } from './race-track/race-track.types';
import { DataParams } from '../../controller/loader.types';
import Loader from '../../controller/loader';
import { ObserverData, ObserverFn } from '../observable.types';

export default class GaragePage extends BaseComponent<'section'> {
  public observers: ObserverFn[] = [];

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

  private raceFieldWrapper: BaseComponent<'div'> | null = null;

  private raceField: BaseComponent<'div'> | null = null;

  private carsLimit: number = 4;

  private currentPageElement: BaseComponent<'span'> | null = null;

  private currentPage: number = 1;

  private newCarData: CarType = {
    name: '',
    color: '',
  };

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
      this.carsLimitElement = new BaseComponent(
        'span',
        this.element,
        'garage__race_cars-limit',
        `Garage (${cars.length})`,
      );
      this.renderSettingsBlock();
      this.raceFieldWrapper = new BaseComponent('div', this.element, 'garage__race-wrapper');
      this.renderRaceBlock(cars);
    });
  }

  // creating block with cars settings
  // eslint-disable-next-line max-lines-per-function
  private renderSettingsBlock(): void {
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
    const updateSettingWrapper: BaseComponent<'div'> = new BaseComponent(
      'div',
      carsSettingsWrapper.element,
      'settings__update-wrapper',
    );
    const btnsWrapper: BaseComponent<'div'> = new BaseComponent(
      'div',
      settingsWrapper.element,
      'settings__btns-wrapper',
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
    this.raceBtn = GaragePage.SettingsBtn({ parent: btnsWrapper, name: 'race', type: 'submit' });
    this.resetBtn = GaragePage.SettingsBtn({ parent: btnsWrapper, name: 'reset', type: 'reset' });
    this.generateBtn = GaragePage.SettingsBtn({
      parent: btnsWrapper,
      name: 'generate trains',
      type: 'submit',
    });

    this.createInputText.element.addEventListener('input', this.createTextInputCallback);
    this.createInputColor.element.addEventListener('input', this.createColorInputCallback);
    this.createBtn.element.addEventListener('click', this.createBtnCallback);
  }

  // callbacks for creating a new car
  private createTextInputCallback = (): void => {
    if (this.createInputText) {
      this.newCarData.name = this.createInputText.element.value;
    }
  };

  private createColorInputCallback = (): void => {
    if (this.createInputColor) {
      this.newCarData.color = this.createInputColor.element.value;
    }
  };

  private createBtnCallback = async (): Promise<void> => {
    const newCar: CarType = await GaragePage.createCar(this.newCarData);
    const track: RaceTrack = new RaceTrack(newCar);
    this.raceField?.element.append(track.element);
  };

  // server-related functions
  
  private static getCars = (params: DataParams): Promise<CarsData> => Loader.getAndPatch('GET', 'garage', params);

  private static createCar = (params: DataParams): Promise<CarType> => Loader.postData('garage', params);

  // functions to render similar elements
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
    this.currentPageElement = new BaseComponent(
      'span',
      this.raceFieldWrapper?.element,
      'garage__race_current-page',
      `Page #${this.currentPage}`,
    );
    this.raceField = new BaseComponent('div', this.raceFieldWrapper?.element, 'garage__race-field race');

    cars.forEach((car) => {
      const track: RaceTrack = new RaceTrack(car);
      this.raceField?.element.append(track.element);
    });
  }

  public subscribe(func: ObserverFn): void {
    this.observers.push(func);
  }

  public unsubscribe(func: ObserverFn): void {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  public notify(data: ObserverData): void {
    this.observers.forEach(async (observer) => observer(data));
  }

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
