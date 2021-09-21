import { RootState } from './types';
import { aislesInitialState } from './aisles/initialState';
import { devicesInitialState } from './devices/initialState';

export const initialState: RootState = {
  aisles: aislesInitialState,
  devices: devicesInitialState
};
