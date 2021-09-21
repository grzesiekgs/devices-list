import { IDevice, IDevicePost } from 'types/devices';
import { Action } from 'redux';

export type DevicesMap = Record<string, IDevice>;

export interface IDevicesState {
  devicesIds: string[];
  devices: DevicesMap;
}

export interface IDevicesActionsTypes {
  FETCH_DEVICES: string;
  FETCH_DEVICES_SUCCESS: string;
  CREATE_DEVICE: string;
  CREATE_DEVICE_SUCCESS: string;
}

export type IFetchDevicesAction = Action<'FETCH_DEVICES'>;

export interface IFetchDevicesSuccessAction extends Action<'FETCH_DEVICES_SUCCESS'> {
  devices: IDevice[];
}

export interface ICreateDeviceAction extends Action<'CREATE_DEVICE'> {
  device: IDevicePost;
}

export interface ICreateDeviceSuccessAction extends Action<'CREATE_DEVICE_SUCCESS'> {
  device: IDevice;
}

export interface IDevicesActionsCreators {
  fetchDevices: () => IFetchDevicesAction;
  fetchDevicesSuccess: (devices: IDevice[]) => IFetchDevicesSuccessAction;
  createDevice: () => ICreateDeviceAction;
  createDeviceSuccess: (device: IDevice) => ICreateDeviceSuccessAction;
}
