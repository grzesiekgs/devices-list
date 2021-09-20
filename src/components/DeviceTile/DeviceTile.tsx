import React, { FunctionComponent, useCallback } from 'react';
import { DeviceTileProps } from './DeviceTile.types';
import Styles from './deviceTile.module.scss';

export const DeviceTile: FunctionComponent<DeviceTileProps> = ({ deviceName, onClick }) => {
  const handleClick = useCallback(() => onClick(deviceName), [deviceName, onClick]);

  return (
    <li className={Styles.deviceTile} onClick={handleClick}>
      <h4 className={Styles.deviceTile__name}>{deviceName}</h4>
    </li>
  );
};
