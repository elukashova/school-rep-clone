import BaseComponent from '../../base-component';

export type Settings = {
  parent: BaseComponent<'div'>;
  name: string;
  type: string;
};

export type CarType = {
  name: string;
  color: string;
  id?: number;
  status?: EngineStatus;
};

export type EngineData = {
  car: Element;
  parent: Element;
  id?: number;
};

export type EngineStatus = 'started' | 'stopped' | 'drive';

export type EngineState = Pick<CarType, 'id' | 'status'>;

export type CarsData = CarType[];

export type CarStatus = 'delete' | 'edit' | '';
