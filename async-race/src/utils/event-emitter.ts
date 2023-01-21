import { DataType } from '../controller/loader.types';

class EventEmitter {
  private events: Record<string, ((data: DataType) => void)[]> = {};

  public on = (event: string, fn: (data: DataType) => void): void => {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(fn);
  };

  // eslint-disable-next-line max-len
  public unsubscribe = (event: string, fn: (data: DataType) => void): void => {
    if (!this.events[event]) {
      return;
    }
    this.events[event] = this.events[event].filter((eFn) => eFn.toString() !== fn.toString());
  };

  public emit = (event: string, data: DataType): void => {
    const ev: ((data: DataType) => void)[] = this.events[event];
    if (ev) {
      ev.forEach((fn) => {
        fn.call(null, data);
      });
    }
  };
}

export default new EventEmitter();
