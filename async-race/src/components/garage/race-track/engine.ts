import Loader from '../../../controller/loader';
import { EngineResp, Errors, DataParams } from '../../../controller/loader.types';
import eventEmitter from '../../../utils/event-emitter';
import { EngineData, EngineState } from './race-track.types';

export default class Engine {
  private car: Element;

  private parent: Element;

  private animation: Animation | null = null;

  public drive: EngineResp | undefined;

  private EngineState: EngineState = {
    id: undefined,
    status: 'stopped',
  };

  constructor(data: EngineData) {
    this.car = data.car;
    this.EngineState.id = data.id;
    this.parent = data.parent;
  }

  public startDriving = async (): Promise<void> => {
    this.EngineState.status = 'started';
    await Engine.turnEngineOnOff(this.EngineState)
      .then((result) => {
        const duration: number = result.distance / result.velocity;

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
      })
      .then(() => this.switchToDrivingMode());
  };

  private switchToDrivingMode = async (): Promise<void> => {
    try {
      this.EngineState.status = 'drive';
      await Engine.startDriveMode(this.EngineState);
    } catch (err) {
      if (err instanceof Error && err.message === Errors.Error500) {
        if (this.animation) {
          this.animation?.pause();
          eventEmitter.emit('stopDriving', {});
        }
      }
    }
  };

  public stopDriving = async (): Promise<void> => {
    eventEmitter.emit('stopDriving', this.EngineState);
    this.EngineState.status = 'stopped';
    await Engine.turnEngineOnOff(this.EngineState);

    if (this.animation) {
      this.animation.cancel();
    }
  };

  // eslint-disable-next-line prettier/prettier
  private static turnEngineOnOff = (status: EngineState): Promise<EngineResp> => Loader.getAndPatch('PATCH', 'engine', status);

  // eslint-disable-next-line prettier/prettier
  private static startDriveMode = (status: EngineState): Promise<DataParams> => Loader.getAndPatch('PATCH', 'engine', status);
}
