import './page-garage.styles.css';
import BaseComponent from '../base-component';
import RaceTrack from './race-track/race-track';
import { PageStatus } from './page-garage.types';
// eslint-disable-next-line object-curly-newline
import { CarType, CarsData, Settings } from './race-track/race-track.types';
import { DataParams } from '../../controller/loader.types';
import Loader from '../../controller/loader';
import eventEmitter from '../../utils/event-emitter';
import { turnEngineOnOff } from '../../utils/engine';

export default class GaragePage extends BaseComponent<'section'> {
  private createInputText: BaseComponent<'input'> | null = null;

  private createInputColor: BaseComponent<'input'> | null = null;

  private createBtn: BaseComponent<'button'> | null = null;

  private updateInputText!: BaseComponent<'input'>;

  private updateInputColor!: BaseComponent<'input'>;

  private updateBtn!: BaseComponent<'button'>;

  private raceBtn: BaseComponent<'button'> | null = null;

  private resetBtn: BaseComponent<'button'> | null = null;

  private generateBtn: BaseComponent<'button'> | null = null;

  private carsLimitElement: BaseComponent<'span'> | null = null;

  private raceFieldWrapper: BaseComponent<'div'> | null = null;

  private raceField: BaseComponent<'div'> | null = null;

  private currentPageElement: BaseComponent<'span'> | null = null;

  private leftArrowBtn: SVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  private rightArrowBtn: SVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  private carData: CarType = {
    name: '',
    color: '',
  };

  private id!: number;

  private currentPageStatus: PageStatus = {
    page: 1,
    limit: 7,
  };

  private carsLimit: number = 4;

  private currentPage: number = 1;

  private totalPages: number = 1;

  private tracksOnPage: RaceTrack[] = [];

  private finishCounter: number = 0;

  private winnerCounter: number = 0;

  private winnersRating: RaceTrack[] = [];

  constructor() {
    super('section', undefined, 'section garage');
    this.render();
    this.subscribeToEvents();
  }

  private render(): void {
    GaragePage.getCars(this.currentPageStatus).then((cars: CarsData) => {
      this.renderSettingsBlock();
      this.raceFieldWrapper = new BaseComponent('div', this.element, 'garage__race-wrapper');
      this.renderRaceBlock(cars);
    });
  }

  // creating block with cars settings
  // eslint-disable-next-line max-lines-per-function
  private renderSettingsBlock(): void {
    const settingsWrapper: BaseComponent<'div'> = new BaseComponent('div', this.element, 'garage__settings settings');
    const leftBlock: BaseComponent<'div'> = new BaseComponent('div', settingsWrapper.element, 'settings__left');
    const leftBlockTop: BaseComponent<'div'> = new BaseComponent('div', leftBlock.element, 'settings__left_top');
    const leftBlockBottom: BaseComponent<'div'> = new BaseComponent('div', leftBlock.element, 'settings__left_bottom');
    const centerBlock: BaseComponent<'div'> = new BaseComponent('div', settingsWrapper.element, 'settings__center');
    const rightBlock: BaseComponent<'div'> = new BaseComponent('div', settingsWrapper.element, 'settings__right');
    const createSettingWrapper: BaseComponent<'div'> = new BaseComponent(
      'div',
      centerBlock.element,
      'settings__create-wrapper',
    );
    const updateSettingWrapper: BaseComponent<'div'> = new BaseComponent(
      'div',
      centerBlock.element,
      'settings__update-wrapper',
    );

    this.carsLimitElement = new BaseComponent(
      'span',
      leftBlockTop.element,
      'settings__cars-limit',
      `Garage: ${this.carsLimit}`,
    );
    this.generateBtn = GaragePage.createSettingsBtn({
      parent: leftBlockBottom,
      name: 'generate',
      type: 'submit',
    });
    const arrowLeftSource = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    arrowLeftSource.setAttribute('href', 'assets/sprite.svg#left-arrow');
    leftBlockBottom.element.append(this.leftArrowBtn);
    this.leftArrowBtn.append(arrowLeftSource);
    this.currentPageElement = new BaseComponent(
      'span',
      leftBlockBottom.element,
      'garage__race_current-page',
      `${this.currentPage} / ${this.totalPages}`,
    );
    const arrowRightSource = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    arrowRightSource.setAttribute('href', 'assets/sprite.svg#right-arrow');
    leftBlockBottom.element.append(this.rightArrowBtn);
    this.rightArrowBtn.append(arrowRightSource);
    this.createInputText = GaragePage.createSettingsInput({
      parent: createSettingWrapper,
      name: 'create',
      type: 'text',
    });
    this.createInputColor = GaragePage.createSettingsInput({
      parent: createSettingWrapper,
      name: 'create',
      type: 'color',
    });
    this.createBtn = GaragePage.createSettingsBtn({ parent: createSettingWrapper, name: 'create', type: 'submit' });
    this.updateInputText = GaragePage.createSettingsInput({
      parent: updateSettingWrapper,
      name: 'create',
      type: 'text',
    });
    this.updateInputColor = GaragePage.createSettingsInput({
      parent: updateSettingWrapper,
      name: 'update',
      type: 'color',
    });
    this.updateBtn = GaragePage.createSettingsBtn({ parent: updateSettingWrapper, name: 'update', type: 'submit' });
    this.raceBtn = GaragePage.createSettingsBtn({ parent: rightBlock, name: 'race', type: 'submit' });
    this.resetBtn = GaragePage.createSettingsBtn({ parent: rightBlock, name: 'reset', type: 'reset' });

    this.createInputText.element.placeholder = 'Enter name here';
    this.generateBtn.element.textContent = 'ADD 100';
    this.leftArrowBtn.classList.add('settings__btn-left');
    this.rightArrowBtn.classList.add('settings__btn-right');

    this.createInputText.element.addEventListener('input', this.createTextInputCallback);
    this.createInputColor.element.addEventListener('input', this.createColorInputCallback);
    this.createBtn.element.addEventListener('click', this.createBtnCallback);
    this.raceBtn.element.addEventListener('click', this.raceBtnCallback);
    this.resetBtn.element.addEventListener('click', this.resetBtnCallback);
    this.disableResetBtn();
    this.disableUpdateElements();
  }

  private updateGarageNumber(data: DataParams): void {
    if (this.carsLimitElement?.element) {
      this.carsLimitElement.element.textContent = `Garage: ${data.id})`;
    }
  }

  private updateCurrentTrackArray(data: DataParams): void {
    for (let i: number = 0; i < this.tracksOnPage.length; i += 1) {
      if (Number(this.tracksOnPage[i].element.id) === data.id) {
        const idx: number = this.tracksOnPage.indexOf(this.tracksOnPage[i]);
        this.tracksOnPage.splice(idx, 1);
      }
    }
  }

  // callbacks for creating a new car
  private createTextInputCallback = (): void => {
    if (this.createInputText) {
      this.carData.name = this.createInputText.element.value;
    }
  };

  private createColorInputCallback = (): void => {
    if (this.createInputColor) {
      this.carData.color = this.createInputColor.element.value;
    }
  };

  private createBtnCallback = async (): Promise<void> => {
    const newCar: CarType = await GaragePage.createCar(this.carData);
    this.createRaceTrack(newCar);
  };

  // callbacks for updating the car
  private updateTextInputCallback = (): void => {
    if (!this.updateInputText.element.value) {
      this.disableUpdateElements();
    }
  };

  private updateColorInputCallback = (): void => {
    this.carData.color = this.updateInputColor.element.value;
  };

  private updateBtnCallback = async (): Promise<void> => {
    const data: DataParams = await this.updateCar(this.carData);
    eventEmitter.emit('changeColor', data);
    this.disableUpdateElements();
    this.setUpdateElementsToDefault();
  };

  // race methods
  private raceBtnCallback = async (): Promise<void> => {
    this.tracksOnPage.forEach((track) => track.engine.setStatusToStarted());
    // eslint-disable-next-line max-len
    const requests = this.tracksOnPage.map(async (track) => turnEngineOnOff(track.engine.EngineState));
    const results = await Promise.all(requests);
    for (let i: number = 0; i < results.length; i += 1) {
      this.tracksOnPage[i].engine.startAnimation(results[i]);
      this.tracksOnPage[i].engine.switchToDrivingMode();
    }
    eventEmitter.emit('startRace', {});
    this.disableCreateElements();
  };

  private announceWinner(data: DataParams): void {
    for (let i: number = 0; i < this.tracksOnPage.length; i += 1) {
      if (Number(this.tracksOnPage[i].element.id) === data.id) {
        // const { name } = this.tracksOnPage[i].carData;
        const time: string = GaragePage.calculateTime(this.tracksOnPage[i].engine.duration);
        this.tracksOnPage[i].showWinner(time);
      }
    }
  }

  private static calculateTime(num: number): string {
    const ms: number = 1000;
    const time: string = (num / ms).toFixed(2);
    return time;
  }

  // reset callback
  private resetBtnCallback = async (): Promise<void> => {
    this.tracksOnPage.forEach((track) => track.engine.setStatusToStopped());
    // eslint-disable-next-line max-len
    const requests = this.tracksOnPage.map(async (track) => turnEngineOnOff(track.engine.EngineState));
    await Promise.all(requests).then(() => {
      this.tracksOnPage.forEach((track) => track.engine.stopAnimation());
    });
    eventEmitter.emit('stopDriving', {});
    this.disableResetBtn();
  };

  // useful methods
  private subscribeToEvents(): void {
    eventEmitter.on('selectCar', (data: DataParams): void => {
      this.activateUpdateElements();
      this.insertCarNameForChange(data);
      this.carData.name = String(data.name);
      this.id = Number(data.id);
    });

    eventEmitter.on('deleteCar', (data: DataParams): void => {
      this.deleteRaceTracks(data);
    });

    eventEmitter.on('waitingToStart', (): void => {
      this.disableBtnsWhileDriving();
      this.disableCreateElements();
    });

    eventEmitter.on('stopDriving', (): void => {
      this.activateBtnsAfterDriving();
      this.activateCreateElements();
    });

    eventEmitter.on('broken', (): void => {
      this.finishCounter += 1;
      this.isRaceEnd();
    });

    eventEmitter.on('animationFinished', (data: DataParams): void => {
      this.finishCounter += 1;
      this.winnerCounter += 1;
      if (this.winnerCounter === 1) {
        this.announceWinner(data);
      }
      this.isRaceEnd();
    });
  }

  private isRaceEnd(): void {
    if (this.finishCounter === this.tracksOnPage.length) {
      this.activateCreateElements();
      this.activateBtnsAfterDriving();
      this.activateResetBtn();
    }
  }

  private insertCarNameForChange = (data: DataParams): void => {
    this.updateInputText.element.value = `${data.name}`;
  };

  private setUpdateElementsToDefault(): void {
    this.updateInputText.element.value = '';
    this.updateInputColor.element.value = '#000000';
  }

  private activateCreateElements(): void {
    this.createInputText?.element.removeAttribute('disabled');
    this.createInputColor?.element.removeAttribute('disabled');
    this.createBtn?.element.removeAttribute('disabled');
  }

  private disableCreateElements(): void {
    this.createInputText?.element.setAttribute('disabled', '');
    this.createInputColor?.element.setAttribute('disabled', '');
    this.createBtn?.element.setAttribute('disabled', '');
  }

  private activateUpdateElements(): void {
    this.updateInputText.element.removeAttribute('disabled');
    this.updateInputColor.element.removeAttribute('disabled');
    this.updateBtn.element.removeAttribute('disabled');

    this.updateInputText.element.addEventListener('input', this.updateTextInputCallback);
    this.updateInputColor.element.addEventListener('input', this.updateColorInputCallback);
    this.updateBtn.element.addEventListener('click', this.updateBtnCallback);
  }

  private disableUpdateElements(): void {
    this.updateInputText.element.setAttribute('disabled', '');
    this.updateInputColor.element.setAttribute('disabled', '');
    this.updateBtn.element.setAttribute('disabled', '');
  }

  private disableBtnsWhileDriving(): void {
    this.raceBtn?.element.setAttribute('disabled', '');
    this.generateBtn?.element.setAttribute('disabled', '');
  }

  private activateBtnsAfterDriving(): void {
    this.raceBtn?.element.removeAttribute('disabled');
    this.generateBtn?.element.removeAttribute('disabled');
  }

  private disableResetBtn(): void {
    this.resetBtn?.element.setAttribute('disabled', '');
  }

  private activateResetBtn(): void {
    this.resetBtn?.element.removeAttribute('disabled');
  }

  // server-related functions
  private static getCars = (params: DataParams): Promise<CarsData> => Loader.getAndPatch('GET', 'garage', params);

  private static createCar = (params: DataParams): Promise<CarType> => Loader.postAndPutData('POST', 'garage', params);

  // eslint-disable-next-line prettier/prettier
  private updateCar = (data: DataParams): Promise<DataParams> => Loader.postAndPutData('PUT', `garage/${this.id}`, data);

  // functions to render elements
  private static createSettingsInput(data: Settings): BaseComponent<'input'> {
    const txtInput = new BaseComponent('input', data.parent.element, `settings__${data.name}_input-${data.type}`, '', {
      type: `${data.type}`,
    });
    return txtInput;
  }

  private static createSettingsBtn(data: Settings): BaseComponent<'button'> {
    const button = new BaseComponent('button', data.parent.element, `settings__${data.name}_btn`, `${data.name}`, {
      type: `${data.type}`,
    });
    return button;
  }

  // creating block with race
  private renderRaceBlock(cars: CarType[]): void {
    this.raceField = new BaseComponent('div', this.raceFieldWrapper?.element, 'garage__race-field race');

    cars.forEach((car) => {
      this.createRaceTrack(car);
    });
  }

  private createRaceTrack(car: CarType): void {
    const track: RaceTrack = new RaceTrack(car);
    this.tracksOnPage.push(track);
    track.element.setAttribute('id', `${car.id}`);
    this.raceField?.element.append(track.element);
  }

  private deleteRaceTracks = (data: DataParams): void => {
    if (this.raceField) {
      for (let i: number = 0; i < this.raceField.element.children.length; i += 1) {
        if (Number(this.raceField.element.children[i].id) === data.id) {
          this.raceField.element.removeChild(this.raceField.element.children[i]);
        }
      }
      this.updateCurrentTrackArray({ id: data.id });
      const length: number = Number(this.raceField.element.children.length);
      this.updateGarageNumber({ num: length });
    }
  };
}
