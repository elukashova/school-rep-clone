import { EngineState } from '../components/garage/race-track/race-track.types';
import Loader from '../controller/loader';
import { DataParams, EngineResp } from '../controller/loader.types';

// eslint-disable-next-line prettier/prettier
export const startDriveMode = (status: EngineState): Promise<DataParams> => Loader.getAndPatch('PATCH', 'engine', status);

// eslint-disable-next-line prettier/prettier
export const turnEngineOnOff = (status: EngineState): Promise<EngineResp> => Loader.getAndPatch('PATCH', 'engine', status);
