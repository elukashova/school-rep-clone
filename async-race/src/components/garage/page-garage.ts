import './page-garage.styles.css';
import BaseComponent from '../base-component';
import RaceTrack from './race-track/race-track';
import { PageStatus } from './page-garage.types';
import { CarType, CarsData, Settings } from './race-track/race-track.types';
import { DataParams } from '../../controller/loader.types';
import Loader from '../../controller/loader';
import eventEmitter from '../../utils/event-emitter';

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

  private currentTracks: RaceTrack[] = [];

  constructor() {
    super('section', undefined, 'section garage');
    this.render();
    this.subscribeToEvents();
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
      name: 'create',
      type: 'color',
    });
    this.updateBtn = GaragePage.createSettingsBtn({ parent: updateSettingWrapper, name: 'update', type: 'submit' });
    this.raceBtn = GaragePage.createSettingsBtn({ parent: btnsWrapper, name: 'race', type: 'submit' });
    this.resetBtn = GaragePage.createSettingsBtn({ parent: btnsWrapper, name: 'reset', type: 'reset' });
    this.generateBtn = GaragePage.createSettingsBtn({
      parent: btnsWrapper,
      name: 'generate snowmobiles',
      type: 'submit',
    });

    this.disableUpdateElements();

    this.createInputText.element.addEventListener('input', this.createTextInputCallback);
    this.createInputColor.element.addEventListener('input', this.createColorInputCallback);
    this.createBtn.element.addEventListener('click', this.createBtnCallback);
  }

  private updateGarageNumber(data: DataParams): void {
    if (this.carsLimitElement?.element) {
      this.carsLimitElement.element.textContent = `Garage (${data.id})`;
    }
  }

  private updateCurrentTrackArray(data: DataParams): void {
    for (let i: number = 0; i < this.currentTracks.length; i += 1) {
      if (Number(this.currentTracks[i].element.id) === data.id) {
        const idx: number = this.currentTracks.indexOf(this.currentTracks[i]);
        this.currentTracks.splice(idx, 1);
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
  }

  private insertCarNameForChange = (data: DataParams): void => {
    this.updateInputText.element.value = `${data.name}`;
  };

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
    this.currentPageElement = new BaseComponent(
      'span',
      this.raceFieldWrapper?.element,
      'garage__race_current-page',
      `Page #${this.currentPage}`,
    );
    this.raceField = new BaseComponent('div', this.raceFieldWrapper?.element, 'garage__race-field race');

    cars.forEach((car) => {
      this.createRaceTrack(car);
    });
  }

  private createRaceTrack(car: CarType): void {
    const track: RaceTrack = new RaceTrack(car);
    this.currentTracks.push(track);
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
