/* eslint-disable prettier/prettier */
import { PageStatus } from '../components/garage/page-garage.types';
import { CarType, EngineState } from '../components/garage/race-track/race-track.types';
import { WinnerType } from '../components/winners/page-winners.types';
import Loader from './loader';
import { DataType, EngineResp, PageLimit } from './loader.types';

// car
export const deleteCar = (id: number): Promise<void> => Loader.deleteData(`garage/${id}`);

export const getCar = (id: number): Promise<CarType> => Loader.getAndPatchData('GET', `garage/${id}`);

export const getCars = (params: PageStatus): Promise<PageLimit<CarType>> => Loader.getPageData('GET', 'garage', params);

export const createCar = (params: CarType): Promise<CarType> => Loader.postAndPutData('POST', 'garage', params);

export const updateCar = (params: CarType, id: number): Promise<DataType> => Loader.postAndPutData('PUT', `garage/${id}`, params);

// driving
export const startDriveMode = (status: EngineState): Promise<DataType> => Loader.getAndPatchData('PATCH', 'engine', status);

export const turnEngineOnOff = (status: EngineState): Promise<EngineResp> => Loader.getAndPatchData('PATCH', 'engine', status);

// winners
export const getWinners = (params: DataType): Promise<PageLimit<WinnerType>> => Loader.getPageData('GET', 'winners', params);

export const createWinner = (params: DataType): Promise<WinnerType> => Loader.postAndPutData('POST', 'winners', params);

export const updateWinner = (params: DataType, id: number): Promise<WinnerType> => Loader.postAndPutData('PUT', `winners/${id}`, params);

export const getWinner = (id: number): Promise<WinnerType> => Loader.getAndPatchData('GET', `winners/${id}`);

export const deleteWinner = (id: number): Promise<WinnerType> => Loader.deleteData(`winners/${id}`);
