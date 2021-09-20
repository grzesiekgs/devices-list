import { Action } from 'redux';
import { IAislesState } from './aisles/types';
import { AppState } from './app/types';
import { IDevicesState } from './devices/types';

export interface RootState {
  readonly app: AppState;
  readonly devices: IDevicesState;
  readonly aisles: IAislesState;
}
// '__NEXT_REDUX_WRAPPER_HYDRATE__' is value of import { HYDRATE } from 'next-redux-wrapper'
export interface ReduxWrapperHydrateAction extends Action<'__NEXT_REDUX_WRAPPER_HYDRATE__'> {
  payload: Partial<RootState>;
}
