import { RootState } from './types';
import { appInitialState } from './app/initialState';
import { aislesInitialState } from './aisles/initialState';
import { devicesInitialState } from './devices/initialState';

export const initialState: RootState = {
  app: appInitialState,
  aisles: aislesInitialState,
  devices: devicesInitialState
};
