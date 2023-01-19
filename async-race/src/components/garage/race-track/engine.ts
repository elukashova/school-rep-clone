import Loader from '../../../controller/loader';
import { EngineResp, Errors, DataParams } from '../../../controller/loader.types';
import eventEmitter from '../../../utils/event-emitter';
import { EngineData, EngineState } from './race-track.types';

export default class Engine {
  private car: Element;

  private parent: Element;

  public animation!: Animation;

  public drive: EngineResp | undefined;

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

  public startDriving = async (): Promise<void> => {
    this.setStatusToStarted();

    await Engine.turnEngineOnOff(this.EngineState)
      .then((result: EngineResp) => this.startAnimation(result))
      .then(() => this.switchToDrivingMode());
  };

  public switchToDrivingMode = async (): Promise<void> => {
    try {
      this.EngineState.status = 'drive';
      await Engine.startDriveMode(this.EngineState);
    } catch (err) {
      if (err instanceof Error && err.message === Errors.Error500) {
        if (this.animation) {
          this.animation?.pause();
          eventEmitter.emit('broken', {});
        }
      }
    }
  };

  public stopDriving = async (): Promise<void> => {
    eventEmitter.emit('stopDriving', this.EngineState);
    this.setStatusToStarted();
    await Engine.turnEngineOnOff(this.EngineState);
    this.stopAnimation();
  };

  public startAnimation(result: EngineResp): void {
    this.duration = result.distance / result.velocity;
    this.animation = this.car.animate(
      [
        {
          transform: 'translateX(0)',
        },
        {
          transform: `translateX(${this.parent.clientWidth - this.car.clientWidth}px)`,
        },
      ],
      {
        duration: this.duration,
        fill: 'forwards',
      },
    );
  }

  public stopAnimation(): void {
    if (this.animation) {
      this.animation.removeEventListener('finish', this.animationCallback);
      this.animation.cancel();
    }
  }

  public removeEventListener(): void {
    this.animation.removeEventListener('finish', this.animationCallback);
  }

  public addEventListener(): void {
    this.animation.addEventListener('finish', this.animationCallback);
  }

  public animationCallback = (): void => {
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

  // eslint-disable-next-line prettier/prettier
  public static turnEngineOnOff = (status: EngineState): Promise<EngineResp> => Loader.getAndPatchData('PATCH', 'engine', status);

  // eslint-disable-next-line prettier/prettier
  public static startDriveMode = (status: EngineState): Promise<DataParams> => Loader.getAndPatchData('PATCH', 'engine', status);
}
