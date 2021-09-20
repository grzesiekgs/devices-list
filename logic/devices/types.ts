import { IDevice } from 'types/devices';
import { Action } from 'redux';

export type DevicesMap = Record<string, IDevice>;

export interface IDevicesState {
  devicesIds: string[];
  devices: DevicesMap;
}

export interface IDevicesActionsTypes {
  FETCH_DEVICES: string;
  FETCH_DEVICES_SUCCESS: string;
  POST_DEVICE: string;
  POST_DEVICE_SUCCESS: string;
}

export type IFetchDevicesAction = Action<'FETCH_DEVICES'>;

export interface IFetchDevicesSuccessAction extends Action<'FETCH_DEVICES_SUCCESS'> {
  devices: IDevice[];
}

export type IPostDeviceAction = Action<'POST_DEVICE'>;

export interface IPostDeviceSuccessAction extends Action<'POST_DEVICE_SUCCESS'> {
  device: IDevice;
}

export interface IDevicesActionsCreators {
  fetchDevices: () => IFetchDevicesAction;
  fetchDevicesSuccess: (devices: IDevice[]) => IFetchDevicesSuccessAction;
  postDevice: () => IPostDeviceAction;
  postDeviceSuccess: (device: IDevice) => IPostDeviceSuccessAction;
}
