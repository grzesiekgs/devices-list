import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { DeviceTileProps } from './DeviceTile.types';
import Styles from './deviceTile.module.scss';
import { IDeviceImage } from 'types/devices';
import { DeviceImage } from '../DeviceImage/DeviceImage';
import { BatteryLevel } from '../BatteryLevel/BatteryLevel';

const findLastImage = (images: IDeviceImage[]): IDeviceImage =>
  images.reduce<IDeviceImage>((lastImage, image) => {
    if (new Date(lastImage.detectedAt) < new Date(image.detectedAt)) {
      return image;
    }

    return lastImage;
    // NOTE Array.reduce doesn't require 2nd argument (first item from array becames initial value, and iteration starts from index 1)
    // but TS enforces to use it.
  }, images[0]);

export const DeviceTile: FunctionComponent<DeviceTileProps> = ({
  deviceName,
  aisle,
  batteryLevel,
  latestImages,
  onClick
}) => {
  const handleClick = useCallback(() => onClick(deviceName), [deviceName, onClick]);
  const lastImage = useMemo(() => findLastImage(latestImages), [latestImages]);

  return (
    <li className={Styles.deviceTile} onClick={handleClick}>
      <h4 className={Styles.deviceTile__name}>{deviceName}</h4>
      <span className={Styles.deviceTile__aisle}>
        Aisle: <b>{aisle}</b>
      </span>
      <BatteryLevel batteryLevel={batteryLevel} />
      <DeviceImage {...lastImage} className={Styles.deviceTile__image} />
    </li>
  );
};
