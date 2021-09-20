import React, { FunctionComponent } from 'react';
import { DeviceDetailsProps } from './DeviceDetails.types';
import { connector } from './DeviceDetails.connector';
import Styles from './deviceDetails.module.scss';

export const DeviceDetails: FunctionComponent<DeviceDetailsProps> = ({ deviceName }) => (
  <div className={Styles.deviceDetails}>details: {deviceName}</div>
);

export const DeviceDetailsConnected = connector(DeviceDetails);
