import { EngineResp, Errors } from '../../../controller/loader.types';
import eventEmitter from '../../../utils/event-emitter';
import Car from '../../car/car';
import { EngineData, EngineState } from './race-track.types';
import { turnEngineOnOff, startDriveMode } from '../../../controller/controller';

export default class Engine {
  public car: Car;

  private parent: Element;

  public carAnimation!: Animation;

  public EngineState: EngineState = {
    id: undefined,
    status: 'stopped',
  };

  public duration: number = 0;

  constructor(data: EngineData) {
    this.car = data.car;
    this.EngineState.id = data.id;
    this.parent = data.parent;
  }

  public startDriving = (): void => {
    this.setStatusToStarted();

    turnEngineOnOff(this.EngineState)
      .then((result: EngineResp) => this.startCarAnimation(result))
      .then(() => this.switchToDrivingMode());
  };

  public switchToDrivingMode = async (): Promise<void> => {
    try {
      this.EngineState.status = 'drive';
      await startDriveMode(this.EngineState);
    } catch (err) {
      if (err instanceof Error && err.message === Errors.Error500) {
        if (this.carAnimation) {
          this.carAnimation?.pause();
          eventEmitter.emit('broken', {});
        }
      }
    }
  };

  public stopDriving = async (): Promise<void> => {
    this.setStatusToStopped();
    eventEmitter.emit('stopDriving', this.EngineState);
    await turnEngineOnOff(this.EngineState);
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
    eventEmitter.emit('animationFinished', this.EngineState);
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
}
