import './race-track.styles.css';
import BaseComponent from '../../base-component';
import { Settings, CarType, EngineData } from './race-track.types';
import Engine from './engine';
import Loader from '../../../controller/loader';
import eventEmitter from '../../../utils/event-emitter';
import { DataType } from '../../../controller/loader.types';
import Car from '../../car/car';
import { deleteWinner } from '../../../controller/loader-functions';

export default class RaceTrack extends BaseComponent<'div'> {
  public car: Car;

  private id!: number;

  private trackLine: BaseComponent<'div'> = new BaseComponent('div', undefined, 'race__track-line');

  private selectBtn: BaseComponent<'button'> | null = null;

  private deleteBtn: BaseComponent<'button'> | null = null;

  private carNameElement: BaseComponent<'span'> | null = null;

  public startBtn: BaseComponent<'button'> | null = null;

  private stopBtn: BaseComponent<'button'> | null = null;

  private modal: BaseComponent<'div'> | null = null;

  public engine: Engine;

  public carData: CarType = {
    name: '',
    color: '',
  };

  public EngineData: EngineData;

  constructor(data: CarType) {
    super('div', undefined, 'race__track');
    this.car = new Car();
    this.EngineData = {
      car: this.car,
      parent: this.trackLine.element,
      id: undefined,
    };

    if (data.id) {
      this.id = data.id;
      this.EngineData.id = data.id;
    }
    this.carData.name = data.name;
    if (this.carData.name === 'Mersedes') {
      this.carData.name = 'Mercedes';
    }
    this.carData.color = data.color;
    this.engine = new Engine(this.EngineData);
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
    const finish: SVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const finishSource: SVGUseElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');

    this.selectBtn = RaceTrack.createBtn({ parent: topLinePart, name: 'select', type: 'submit' });
    this.deleteBtn = RaceTrack.createBtn({ parent: topLinePart, name: 'delete', type: 'submit' });
    this.carNameElement = new BaseComponent('span', topLinePart.element, 'race__car-name', `${this.carData.name}`);
    this.startBtn = RaceTrack.createBtn({ parent: btnsWrapper, name: 'start', type: 'submit' });
    this.stopBtn = RaceTrack.createBtn({ parent: btnsWrapper, name: 'stop', type: 'submit' });

    finishSource.setAttribute('href', 'assets/sprite.svg#snowman');
    finish.classList.add('race__end');
    this.stopBtn.element.setAttribute('disabled', '');

    bottomLinePart.element.append(this.trackLine.element);
    this.car.appendSVG(this.trackLine.element);
    finish.append(finishSource);
    this.trackLine.element.append(finish);

    this.car.updateColor(this.carData.color);
    this.startBtn.element.addEventListener('click', this.startBtnCallback);
    this.stopBtn.element.addEventListener('click', this.stopBtnCallback);
    this.deleteBtn.element.addEventListener('click', this.deleteBtnCallback);
    this.selectBtn.element.addEventListener('click', this.selectBtnCallback);
  }

  private startBtnCallback = async (): Promise<void> => {
    eventEmitter.emit('waitingToStart', {});
    this.disableBtnsWhileDriving();
    this.activateStopBtn();
    await this.engine.startDriving();
  };

  private stopBtnCallback = async (): Promise<void> => {
    this.activateBtnsAfterDriving();
    this.disableStopBtn();
    await this.engine.stopDriving();
  };

  private deleteBtnCallback = async (): Promise<void> => {
    if (this.id) {
      await deleteWinner(this.id).catch(() => null);
      await RaceTrack.deleteCar(this.id).then(() => eventEmitter.emit('deleteCar', { id: this.id }));
    }
  };

  private selectBtnCallback = (): void => {
    this.carData.id = this.id;
    eventEmitter.emit('selectCar', this.carData);
  };

  public showWinner(time: string): void {
    this.modal = new BaseComponent('div', this.element, 'winner-modal');
    this.modal.element.textContent = `${this.carData.name} wins in ${time}s!`;
  }

  public hideModal(): void {
    if (this.modal?.element.parentElement === this.element) {
      this.element.removeChild(this.modal.element);
    }
  }

  private subscribeToEvents(): void {
    eventEmitter.on('updateCar', (data: DataType): void => {
      if (data.id === this.id) {
        this.car.updateColor(String(data.color));
        this.updateName(String(data.name));
      }
    });

    eventEmitter.on('startRace', (): void => {
      this.disableBtnsWhileDriving();
      this.disableStopBtn();
    });

    eventEmitter.on('stopRacing', (): void => {
      this.activateBtnsAfterDriving();
      this.disableStopBtn();
    });
  }

  private disableBtnsWhileDriving(): void {
    this.startBtn?.element.setAttribute('disabled', '');
    this.selectBtn?.element.setAttribute('disabled', '');
    this.deleteBtn?.element.setAttribute('disabled', '');
  }

  private activateBtnsAfterDriving(): void {
    this.startBtn?.element.removeAttribute('disabled');
    this.selectBtn?.element.removeAttribute('disabled');
    this.deleteBtn?.element.removeAttribute('disabled');
  }

  private updateName(name: string): void {
    if (this.carNameElement) {
      this.carNameElement.element.textContent = `${name}`;
    }
  }

  private activateStopBtn(): void {
    this.stopBtn?.element.removeAttribute('disabled');
  }

  private disableStopBtn(): void {
    this.stopBtn?.element.setAttribute('disabled', '');
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
