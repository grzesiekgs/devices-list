import { createActions } from 'reduxsauce';
import { IDevicesActionsCreators, IDevicesActionsTypes } from './types';

export const { Types: DevicesActionsTypes, Creators: DevicesActions } = createActions<
  IDevicesActionsTypes,
  IDevicesActionsCreators
>(
  {
    fetchDevices: null,
    fetchDevicesSuccess: ['devices'],
    createDevice: ['device'],
    createDeviceSuccess: ['device']
  },
  { prefix: 'DEVICES_' }
);
