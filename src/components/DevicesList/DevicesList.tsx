import React, { FunctionComponent } from 'react';
import { IDevice } from 'types/devices';
import { DevicesListProps } from './DevicesList.types';
import { connector } from './DevicesList.connector';
import Styles from './DevicesList.module.scss';
import { DeviceTile } from '..';

const renderDevice = ({ deviceName, batteryLevel, aisle, latestImages }: IDevice) => (
  <DeviceTile
    key={deviceName}
    deviceName={deviceName}
    batteryLevel={batteryLevel}
    aisle={aisle}
    latestImages={latestImages}
  />
);

export const DevicesList: FunctionComponent<DevicesListProps> = ({ devices }) => (
  <ul className={Styles.devicesList}>{devices.map(renderDevice)}</ul>
);

export const DevicesListConnected = connector(DevicesList);
