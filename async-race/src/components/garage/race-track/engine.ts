import Loader from '../../../controller/loader';
import { EngineResp, Errors, DataParams } from '../../../controller/loader.types';
import { EngineState, EngineStatus } from './race-track.types';

export default class Engine {
  private car: Element;

  private parent: Element;

  public id: number | undefined;

  private animation: Animation | null = null;

  public status: EngineStatus = 'started';

  public drive: EngineResp | undefined;

  constructor(car: Element, parent: Element, carId?: number) {
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
  private static startDriveMode = (status: EngineState): Promise<DataParams> => Loader.getAndPatch('PATCH', 'engine', status);
}
