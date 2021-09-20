import { IDevice } from 'types/devices';

export type DeviceTileOnClick = (deviceName: string) => void;

export interface DeviceTileProps extends Pick<IDevice, 'deviceName' | 'batteryLevel' | 'aisle' | 'latestImages'> {
  onClick: DeviceTileOnClick;
}
