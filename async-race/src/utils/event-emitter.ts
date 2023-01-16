import { DataParams } from '../controller/loader.types';

class EventEmitter {
  private events: Record<string, ((data: DataParams) => void)[]> = {};

  public on = (eventName: string, fn: (data: DataParams) => void): void => {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(fn);
  };

  public unsubscribe = (eventName: string, fn: (data: DataParams) => void): void => {
    if (!this.events[eventName]) {
      return;
    }
    this.events[eventName] = this.events[eventName].filter((eventFn) => fn !== eventFn);
  };

  public emit = (eventName: string, data: DataParams): void => {
    const event = this.events[eventName];
    if (event) {
      event.forEach((fn) => {
        fn.call(null, data);
      });
    }
  };
}

export default new EventEmitter();
