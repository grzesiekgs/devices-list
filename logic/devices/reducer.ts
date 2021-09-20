import { ReduxWrapperHydrateAction } from 'logic/types';
import { HYDRATE } from 'next-redux-wrapper';
import { createReducer } from 'reduxsauce';
import { DevicesMap, IFetchDevicesSuccessAction } from './types';
import { devicesInitialState } from './initialState';
import { DevicesActionsTypes } from './actions';

export const devicesReducer = createReducer(devicesInitialState, {
  [HYDRATE]: (state, { type: _type, payload }: ReduxWrapperHydrateAction) => ({
    ...state,
    ...payload.devices
  }),
  [DevicesActionsTypes.FETCH_DEVICES_SUCCESS]: (_, action: IFetchDevicesSuccessAction) => {
    const devices = action.devices.reduce<DevicesMap>((devicesMap, device) => {
      devicesMap[device.deviceName] = device;

      return devicesMap;
    }, {});
    const devicesIds = Object.keys(devices);

    return {
      devices,
      devicesIds
    };
  },
  [DevicesActionsTypes.POST_DEVICE_SUCCESS]: (state /* action: IAddDeviceAction */) => state
});
