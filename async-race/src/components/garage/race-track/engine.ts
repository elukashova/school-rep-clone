import Loader from '../../../controller/loader';
// eslint-disable-next-line object-curly-newline
import { EngineResp, Errors, SuccessResp } from '../../../controller/loader.types';
// import { startDriveMode, turnEngineOnOff } from '../../../controller/services/garage-services';
import { EngineState, EngineStatus } from './race-track.types';

export default class Engine {
  // private observers: Observer[] = [];

  private car: Element;

  private parent: Element;

  public id: number;

  private animation: Animation | null = null;

  public status: EngineStatus = 'started';

  public drive: EngineResp;

  constructor(car: Element, carId: number, parent: Element) {
    this.car = car;
    this.id = carId;
    this.parent = parent;
  }

  public startDriving = async (): Promise<void> => {
    this.drive = await Engine.turnEngineOnOff({ id: this.id, status: this.status });
    const duration: number = this.drive.distance / this.drive.velocity;

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
        duration,
        fill: 'forwards',
      },
    );

    try {
      this.status = 'drive';
      await Engine.startDriveMode({ id: this.id, status: this.status });
    } catch (err) {
      if (err instanceof Error && err.message === Errors.Error500) {
        if (this.animation) {
          this.animation?.pause();
        }
      }
    }
  };

  public stopDriving = async (): Promise<void> => {
    if (this.animation) {
      this.animation.pause();
    }

    this.status = 'stopped';
    await Engine.turnEngineOnOff({ id: this.id, status: this.status });

    if (this.animation) {
      this.animation.currentTime = 0;
    }
  };

  // eslint-disable-next-line prettier/prettier
  private static turnEngineOnOff = (status: EngineState): Promise<EngineResp> => Loader.getAndPatch('PATCH', 'engine', status);

  // eslint-disable-next-line prettier/prettier
  private static startDriveMode = (status: EngineState): Promise<SuccessResp> => Loader.getAndPatch('PATCH', 'engine', status);
}
