import { createActions } from 'reduxsauce';
import { IDevicesActionsCreators, IDevicesActionsTypes } from './types';

export const { Types: DevicesActionsTypes, Creators: DevicesActions } = createActions<
  IDevicesActionsTypes,
  IDevicesActionsCreators
>(
  {
    fetchDevices: null,
    fetchDevicesSuccess: ['devices'],
    postDevice: null,
    postDeviceSuccess: ['device']
  },
  { prefix: 'DEVICES_' }
);
