import { IDevicePost } from 'types/devices';
import { ICreateDeviceAction } from 'logic/devices/types';

export interface AddNewDeviceOwnProps {}

export interface AddNewDeviceStateProps {
  aisles: string[];
}

export interface AddNewDeviceDispatchProps {
  createDevice: (device: IDevicePost) => ICreateDeviceAction;
}

export interface AddNewDeviceProps extends AddNewDeviceOwnProps, AddNewDeviceStateProps, AddNewDeviceDispatchProps {}
