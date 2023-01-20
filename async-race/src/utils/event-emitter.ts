import { DataType } from '../controller/loader.types';

class EventEmitter {
  private events: Record<string, ((data: DataType) => void)[]> = {};

  public on = (eventName: string, fn: (data: DataType) => void): void => {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(fn);
  };

  // eslint-disable-next-line max-len
  public unsubscribe = (eventName: string, fn: (data: DataType) => void): void => {
    if (!this.events[eventName]) {
      return;
    }
    this.events[eventName] = this.events[eventName].filter((eventFn) => fn !== eventFn);
  };

  public emit = (eventName: string, data: DataType): void => {
    const event = this.events[eventName];
    if (event) {
      event.forEach((fn) => {
        fn.call(null, data);
      });
    }
  };
}

export default new EventEmitter();
