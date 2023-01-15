import './race-track.styles.css';
import BaseComponent from '../../base-component';
import { Settings, CarType } from './race-track.types';
import Engine from './engine';

export default class RaceTrack extends BaseComponent<'div'> {
  private car: SVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  private id: number;

  private name: string;

  private color: string;

  private trackLine: BaseComponent<'div'> = new BaseComponent('div', undefined, 'race__track-line');

  private selectBtn: BaseComponent<'button'> | null = null;

  private deleteBtn: BaseComponent<'button'> | null = null;

  private carNameElemenet: BaseComponent<'span'> | null = null;

  private startBtn: BaseComponent<'button'> | null = null;

  private stopBtn: BaseComponent<'button'> | null = null;

  private engine: Engine;

  constructor(data: CarType) {
    super('div', undefined, 'race__track');
    if (data.id) {
      this.id = data.id;
    }
    this.name = data.name;
    this.color = data.color;
    this.engine = new Engine(this.car, this.id, this.trackLine.element);
    this.render();
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
    this.carNameElemenet = new BaseComponent('span', topLinePart.element, 'race__car-name', `${this.name}`);
    this.startBtn = RaceTrack.createBtn({ parent: btnsWrapper, name: 'start', type: 'submit' });
    this.stopBtn = RaceTrack.createBtn({ parent: btnsWrapper, name: 'stop', type: 'submit' });

    this.stopBtn.element.setAttribute('disabled', '');
    this.car.classList.add('race__car');
    carSource.setAttribute('href', 'assets/sprite.svg#snowmobile');
    this.car.setAttribute('fill', `${this.color}`);
    finishSource.setAttribute('href', 'assets/sprite.svg#snowman');
    finish.classList.add('race__end');

    bottomLinePart.element.append(this.trackLine.element);
    this.trackLine.element.append(this.car);
    this.car.append(carSource);
    finish.append(finishSource);
    this.trackLine.element.append(finish);

    this.startBtn.element.addEventListener('click', this.startBtnCallback);
    this.stopBtn.element.addEventListener('click', this.stopBtnCallback);
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

  private static createBtn(data: Settings): BaseComponent<'button'> {
    const button = new BaseComponent('button', data.parent.element, `race__${data.name}_btn`, `${data.name}`, {
      type: `${data.type}`,
    });
    return button;
  }
}
