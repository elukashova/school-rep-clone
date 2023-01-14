import Loader from '../controller/loader';
import { CarsData, Options } from '../controller/loader.types';

export const getCars = (options: Options): Promise<CarsData> => Loader.getData('garage', options);

export const getC = (): void => {
  console.log('hey');
};
