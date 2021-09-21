import { ICreateDeviceAction } from 'logic/devices/types';
import { IDevicePost } from 'types/devices';

export interface AddNewDeviceButtonProps {
  createDevice: (device: IDevicePost) => ICreateDeviceAction;
}
