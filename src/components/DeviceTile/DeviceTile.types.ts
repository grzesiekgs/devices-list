import { IDevice } from 'types/devices';

export interface DeviceTileProps extends Pick<IDevice, 'deviceName' | 'batteryLevel' | 'aisle' | 'latestImages'> {}
