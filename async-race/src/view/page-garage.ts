import './page-garage.styles.css';
import BaseComponent from './static/base-component';
import RaceTrack from './race-track';
import { CarType } from './view.types';

export default class GaragePage extends BaseComponent {
  private createInputText: BaseComponent | null = null;

  private createInputColor: BaseComponent | null = null;

  private createBtn: BaseComponent | null = null;

  private updateInputText: BaseComponent | null = null;

  private updateInputColor: BaseComponent | null = null;

  private updateBtn: BaseComponent | null = null;

  private raceBtn: BaseComponent | null = null;

  private resetBtn: BaseComponent | null = null;

  private generateBtn: BaseComponent | null = null;

  private carsLimitElement: BaseComponent | null = null;

  private carsLimit: number = 4;

  private currentPageElement: BaseComponent | null = null;

  private currentPage: number = 1;

  constructor() {
    super('section', undefined, 'section garage');
    this.render();
  }

  private render(): void {
    this.renderSettingsBlock();
    this.renderRaceBlock();
  }

  // creating block with cars settings
  private renderSettingsBlock(): void {
    this.carsLimitElement = new BaseComponent(
      'span',
      this.element,
      'garage__race_cars-limit',
      `Garage (${this.carsLimit})`,
    );
    const settingsWrapper: BaseComponent = new BaseComponent('div', this.element, 'garage__settings settings');
    const carsSettingsWrapper: BaseComponent = new BaseComponent('div', settingsWrapper.element, 'settings__cars');
    const createSettingWrapper: BaseComponent = new BaseComponent(
      'div',
      carsSettingsWrapper.element,
      'settings__create-wrapper',
    );
    this.createInputText = this.createSettingsInput(createSettingWrapper, 'create', 'text');
    this.createInputColor = this.createSettingsInput(createSettingWrapper, 'create', 'color');
    this.createBtn = this.createSettingsBtn(createSettingWrapper, 'create', 'submit');

    const updateSettingWrapper: BaseComponent = new BaseComponent(
      'div',
      carsSettingsWrapper.element,
      'settings__update-wrapper',
    );
    this.updateInputText = this.createSettingsInput(updateSettingWrapper, 'create', 'text');
    this.updateInputColor = this.createSettingsInput(updateSettingWrapper, 'create', 'color');
    this.updateBtn = this.createSettingsBtn(updateSettingWrapper, 'update', 'submit');

    const btnsWrapper: BaseComponent = new BaseComponent('div', settingsWrapper.element, 'settings__btns-wrapper');
    this.raceBtn = this.createSettingsBtn(btnsWrapper, 'race', 'submit');
    this.resetBtn = this.createSettingsBtn(btnsWrapper, 'reset', 'reset');
    this.generateBtn = this.createSettingsBtn(btnsWrapper, 'generate trains', 'submit');
  }

  private createSettingsInput(parent: BaseComponent, setting: string, type: string): BaseComponent {
    const txtInput = new BaseComponent('input', parent.element, `settings__${setting}_input-${type}`, '', {
      type: `${type}`,
    });
    return txtInput;
  }

  private createSettingsBtn(parent: BaseComponent, setting: string, type: string): BaseComponent {
    const button = new BaseComponent('button', parent.element, `settings__${setting}_btn`, `${setting}`, {
      type: `${type}`,
    });
    return button;
  }

  // creating block with race
  private renderRaceBlock(): void {
    const raceFieldWrapper: BaseComponent = new BaseComponent('div', this.element, 'garage__race-wrapper');
    this.currentPageElement = new BaseComponent(
      'span',
      raceFieldWrapper.element,
      'garage__race_current-page',
      `Page #${this.currentPage}`,
    );
    const raceField: BaseComponent = new BaseComponent('div', this.element, 'garage__race-field race');
    const carDataTemp: CarType = {
      name: 'Tesla',
      color: '#65C8DE',
      id: 1,
    };
    const track: RaceTrack = new RaceTrack(carDataTemp);
    raceField.element.append(track.element);
  }
}
