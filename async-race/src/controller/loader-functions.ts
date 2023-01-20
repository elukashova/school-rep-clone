import { CarType, EngineState } from '../components/garage/race-track/race-track.types';
import { WinnerType } from '../components/winners/page-winners.types';
import Loader from './loader';
import { DataType, EngineResp, PageType } from './loader.types';

// eslint-disable-next-line prettier/prettier
export const startDriveMode = (status: EngineState): Promise<DataType> => Loader.getAndPatchData('PATCH', 'engine', status);

// eslint-disable-next-line prettier/prettier
export const turnEngineOnOff = (status: EngineState): Promise<EngineResp> => Loader.getAndPatchData('PATCH', 'engine', status);

// eslint-disable-next-line prettier/prettier
export const getWinners = (params: DataType): Promise<PageType<WinnerType>> => Loader.getPageData('GET', 'winners', params);

// eslint-disable-next-line prettier/prettier
export const getWinBackup = (params: DataType): Promise<WinnerType[]> => Loader.getAndPatchData('GET', 'winners', params);

export const createWinner = (params: DataType): Promise<WinnerType> => Loader.postAndPutData('POST', 'winners', params);

// eslint-disable-next-line prettier/prettier
export const updateWinner = (params: DataType, id: number): Promise<WinnerType> => Loader.postAndPutData('PUT', `winners/${id}`, params);

export const getWinner = (id: number): Promise<WinnerType> => Loader.getAndPatchData('PUT', `winners/${id}`);

export const deleteWinner = (id: number): Promise<WinnerType> => Loader.deleteData(`winners/${id}`);

export const getCar = (id: number): Promise<CarType> => Loader.getAndPatchData('GET', `garage/${id}`);
