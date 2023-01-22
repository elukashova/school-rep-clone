import Loader from '../../../controller/loader';
import { EngineResp, Errors, DataType } from '../../../controller/loader.types';
import eventEmitter from '../../../utils/event-emitter';
import Car from '../../car/car';
import { EngineData, EngineState } from './race-track.types';

export default class Engine {
  public car: Car;

  private finishSVG: Element;

  private parent: Element;

  public carAnimation!: Animation;

  private finishSVGAnimation!: Animation;

  public drive: EngineResp | undefined;

  public EngineState: EngineState = {
    id: undefined,
    status: 'stopped',
  };

  public duration: number = 0;

  public isRace: boolean = false;

  constructor(data: EngineData, finishSVG: Element) {
    this.car = data.car;
    this.EngineState.id = data.id;
    this.parent = data.parent;
    this.finishSVG = finishSVG;
  }

  public startDriving = async (): Promise<void> => {
    this.setStatusToStarted();

    await Engine.turnEngineOnOff(this.EngineState)
      .then((result: EngineResp) => this.startCarAnimation(result))
      .then(() => this.switchToDrivingMode());
  };

  public switchToDrivingMode = async (): Promise<void> => {
    try {
      this.EngineState.status = 'drive';
      const isSuccess: DataType = await Engine.startDriveMode(this.EngineState);
      if (isSuccess && this.isRace === true) {
        eventEmitter.emit('isWinner', this.EngineState);
        this.startSnowmanAnimation();
      }
    } catch (err) {
      if (err instanceof Error && err.message === Errors.Error500) {
        if (this.carAnimation) {
          this.carAnimation?.pause();
          eventEmitter.emit('broken', {});
        }
      }
    }
    this.isRace = false;
  };

  public stopDriving = async (): Promise<void> => {
    this.setStatusToStopped();
    eventEmitter.emit('stopDriving', this.EngineState);
    await Engine.turnEngineOnOff(this.EngineState);
    this.stopCarAnimation();
    this.setStatusToStarted();
  };

  public startCarAnimation(result: EngineResp): void {
    this.duration = result.distance / result.velocity;
    this.carAnimation = this.car.svg.animate(
      [
        {
          transform: 'translateX(0)',
        },
        {
          transform: `translateX(${this.parent.clientWidth - this.car.svg.clientWidth}px)`,
        },
      ],
      {
        duration: this.duration,
        fill: 'forwards',
      },
    );
  }

  public startSnowmanAnimation(): void {
    this.finishSVGAnimation = this.finishSVG.animate(
      [
        {
          transform: 'rotate(-15deg)',
        },
        {
          transform: 'rotate(15deg)',
        },
      ],
      {
        duration: 500,
        direction: 'alternate',
        iterations: 4,
      },
    );
  }

  public stopCarAnimation(): void {
    if (this.carAnimation) {
      this.removeEventListener();
      this.carAnimation.cancel();
    }
  }

  public removeEventListener(): void {
    this.carAnimation.removeEventListener('finish', this.carAnimationCallback);
  }

  public addEventListener(): void {
    this.carAnimation.addEventListener('finish', this.carAnimationCallback);
  }

  public carAnimationCallback = (): void => {
    eventEmitter.emit('carAnimationFinished', this.EngineState);
  };

  public setStatusToStarted(): void {
    if (this.EngineState.status !== 'started') {
      this.EngineState.status = 'started';
    }
  }

  public setStatusToStopped(): void {
    if (this.EngineState.status !== 'stopped') {
      this.EngineState.status = 'stopped';
    }
  }

  // eslint-disable-next-line prettier/prettier
  public static turnEngineOnOff = (status: EngineState): Promise<EngineResp> => Loader.getAndPatchData('PATCH', 'engine', status);

  // eslint-disable-next-line prettier/prettier
  public static startDriveMode = (status: EngineState): Promise<DataType> => Loader.getAndPatchData('PATCH', 'engine', status);
}
