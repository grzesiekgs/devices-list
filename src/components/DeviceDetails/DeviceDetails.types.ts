import { IDevice } from 'types/devices';

export interface DeviceDetailsOwnProps extends Pick<IDevice, 'deviceName'> {}

export interface DeviceDetailsProps extends IDevice {}
