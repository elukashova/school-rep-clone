import BaseComponent from '../base-component';

export type Settings = {
  parent: BaseComponent<'div'>;
  name: string;
  type: string;
};

export type CarType = {
  name: string;
  color: string;
  id: number;
  state?: 'started' | 'stopped' | 'drive';
};

export type EngineState = Pick<CarType, 'id' | 'state'>;

export type CarsData = CarType[];
