import React, { FunctionComponent } from 'react';
import { DeviceTileProps } from './DeviceTile.types';
import Styles from './DeviceTile.module.scss';

export const DeviceTile: FunctionComponent<DeviceTileProps> = ({ deviceName }) => (
  <li className={Styles.deviceTile}>
    <h6 className={Styles.deviceTile__name}>{deviceName}</h6>
  </li>
);
