import { IDeviceImage } from 'types/devices';

export type DeviceImageSize = 'small' | 'medium';

export interface DeviceImageProps extends IDeviceImage {
  size?: DeviceImageSize;
  className?: string;
}
