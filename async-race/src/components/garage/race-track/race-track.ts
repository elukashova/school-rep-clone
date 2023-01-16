import './race-track.styles.css';
import BaseComponent from '../../base-component';
import { Settings, CarType } from './race-track.types';
import Engine from './engine';
import Loader from '../../../controller/loader';
import eventEmitter from '../../../utils/event-emitter';
import { DataParams } from '../../../controller/loader.types';

export default class RaceTrack extends BaseComponent<'div'> {
  private car: SVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  private id!: number;

  private trackLine: BaseComponent<'div'> = new BaseComponent('div', undefined, 'race__track-line');

  private selectBtn: BaseComponent<'button'> | null = null;

  private deleteBtn: BaseComponent<'button'> | null = null;

  private carNameElemenet: BaseComponent<'span'> | null = null;

  private startBtn: BaseComponent<'button'> | null = null;

  private stopBtn: BaseComponent<'button'> | null = null;

  private engine: Engine;

  private carData: CarType = {
    name: '',
    color: '',
  };

  constructor(data: CarType) {
    super('div', undefined, 'race__track');
    if (data.id) {
      this.id = data.id;
    }
    this.carData.name = data.name;
    this.carData.color = data.color;
    this.engine = new Engine(this.car, this.trackLine.element, this.id);
    this.render();
    this.subscribeToEvents();
  }

  // eslint-disable-next-line max-lines-per-function
  private render(): void {
    const topLinePart: BaseComponent<'div'> = new BaseComponent('div', this.element, 'race__track-top');
    const bottomLinePart: BaseComponent<'div'> = new BaseComponent('div', this.element, 'race__track-bottom');
    const btnsWrapper: BaseComponent<'div'> = new BaseComponent(
      'div',
      bottomLinePart.element,
      'race__track-bottom__btns',
    );
    const carSource = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    const finish: SVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const finishSource = document.createElementNS('http://www.w3.org/2000/svg', 'use');

    this.selectBtn = RaceTrack.createBtn({ parent: topLinePart, name: 'select', type: 'submit' });
    this.deleteBtn = RaceTrack.createBtn({ parent: topLinePart, name: 'delete', type: 'submit' });
    this.carNameElemenet = new BaseComponent('span', topLinePart.element, 'race__car-name', `${this.carData.name}`);
    this.startBtn = RaceTrack.createBtn({ parent: btnsWrapper, name: 'start', type: 'submit' });
    this.stopBtn = RaceTrack.createBtn({ parent: btnsWrapper, name: 'stop', type: 'submit' });

    carSource.setAttribute('href', 'assets/sprite.svg#snowmobile');
    finishSource.setAttribute('href', 'assets/sprite.svg#snowman');
    finish.classList.add('race__end');
    this.stopBtn.element.setAttribute('disabled', '');
    this.car.classList.add('race__car');

    bottomLinePart.element.append(this.trackLine.element);
    this.trackLine.element.append(this.car);
    this.car.append(carSource);
    finish.append(finishSource);
    this.trackLine.element.append(finish);

    this.updateColor(this.carData.color);
    this.startBtn.element.addEventListener('click', this.startBtnCallback);
    this.stopBtn.element.addEventListener('click', this.stopBtnCallback);
    this.deleteBtn.element.addEventListener('click', this.deleteBtnCallback);
    this.selectBtn.element.addEventListener('click', this.selectBtnCallback);
  }

  private startBtnCallback = async (): Promise<void> => {
    this.startBtn?.element.setAttribute('disabled', '');
    this.stopBtn?.element.removeAttribute('disabled');
    await this.engine.startDriving();
  };

  private stopBtnCallback = async (): Promise<void> => {
    this.stopBtn?.element.setAttribute('disabled', '');
    this.startBtn?.element.removeAttribute('disabled');
    await this.engine.stopDriving();
  };

  private deleteBtnCallback = async (): Promise<void> => {
    if (this.id) {
      await RaceTrack.deleteCar(this.id).then(() => eventEmitter.emit('deleteCar', { id: this.id }));
    }
  };

  private selectBtnCallback = (): void => {
    this.carData.id = this.id;
    eventEmitter.emit('selectCar', this.carData);
  };

  private subscribeToEvents(): void {
    eventEmitter.on('changeColor', (data: DataParams): void => {
      if (data.id === this.id) {
        this.updateColor(String(data.color));
      }
    });
  }

  private updateColor(color: string): void {
    this.car.setAttribute('fill', `${color}`);
  }

  private static createBtn(data: Settings): BaseComponent<'button'> {
    const button = new BaseComponent('button', data.parent.element, `race__${data.name}_btn`, `${data.name}`, {
      type: `${data.type}`,
    });
    return button;
  }

  // server-related functions
  private static deleteCar = (id: number): Promise<void> => Loader.deleteData(`garage/${id}`);
}
